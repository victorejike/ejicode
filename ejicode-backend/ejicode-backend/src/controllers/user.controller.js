const User        = require("../models/User");
const ApiResponse = require("../utils/ApiResponse");
const ApiError    = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");
const paginate    = require("../utils/paginate");
const upload      = require("../middleware/upload");
const uploadToCloud = require("../utils/uploadToCloud");

// GET /users  (admin)
exports.getAllUsers = asyncHandler(async (req, res) => {
  const { page, limit, skip } = paginate(req.query);
  const [users, total] = await Promise.all([
    User.find().sort("-createdAt").skip(skip).limit(limit),
    User.countDocuments(),
  ]);
  ApiResponse.paginated(res, users, { total, page, limit, pages: Math.ceil(total / limit) });
});

// GET /users/:id  (admin)
exports.getUserById = asyncHandler(async (req, res) => {
  const user = await User.findById(req.params.id);
  if (!user) throw new ApiError("User not found.", 404);
  ApiResponse.success(res, user);
});

// PATCH /users/me
exports.updateMe = asyncHandler(async (req, res) => {
  const allowed = ["name", "avatar"];
  const updates = Object.fromEntries(
    Object.entries(req.body).filter(([k]) => allowed.includes(k))
  );
  const user = await User.findByIdAndUpdate(req.user.id, updates, { new: true, runValidators: true });
  ApiResponse.success(res, user, "Profile updated.");
});

// POST /users/me/avatar
exports.uploadAvatar = asyncHandler(async (req, res) => {
  if (!req.file) throw new ApiError("No file uploaded.", 400);
  const result = await uploadToCloud(req.file.buffer, "ejicode/avatars");
  const user = await User.findByIdAndUpdate(req.user.id, { avatar: result.secure_url }, { new: true });
  ApiResponse.success(res, { avatar: user.avatar }, "Avatar updated.");
});

// DELETE /users/:id  (admin)
exports.deleteUser = asyncHandler(async (req, res) => {
  const user = await User.findByIdAndUpdate(req.params.id, { isActive: false }, { new: true });
  if (!user) throw new ApiError("User not found.", 404);
  ApiResponse.success(res, {}, "User deactivated.");
});
