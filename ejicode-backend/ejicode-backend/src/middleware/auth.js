const { verifyAccessToken } = require("../utils/jwt");
const User    = require("../models/User");
const ApiError = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");

exports.protect = asyncHandler(async (req, res, next) => {
  let token;
  if (req.headers.authorization?.startsWith("Bearer "))
    token = req.headers.authorization.split(" ")[1];
  else if (req.cookies?.accessToken)
    token = req.cookies.accessToken;

  if (!token) throw new ApiError("Not authenticated. Please log in.", 401);

  const decoded = verifyAccessToken(token);
  const user = await User.findById(decoded.id).select("-password");
  if (!user || !user.isActive) throw new ApiError("User not found or deactivated.", 401);

  req.user = user;
  next();
});

exports.authorize = (...roles) => (req, res, next) => {
  if (!roles.includes(req.user.role))
    throw new ApiError("Access denied: insufficient permissions.", 403);
  next();
};
