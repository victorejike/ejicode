const crypto      = require("crypto");
const User        = require("../models/User");
const ApiError    = require("../utils/ApiError");
const ApiResponse = require("../utils/ApiResponse");
const asyncHandler = require("../utils/asyncHandler");
const { signAccessToken, signRefreshToken, verifyRefreshToken } = require("../utils/jwt");
const sendEmail   = require("../utils/sendEmail");
const { generateToken, hashToken } = require("../utils/crypto");

const COOKIE_OPTS = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "strict",
  maxAge: 7 * 24 * 60 * 60 * 1000,
};

// POST /register
exports.register = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;
  if (await User.findOne({ email })) throw new ApiError("Email already registered.", 409);

  const verifyToken = generateToken();
  const user = await User.create({
    name, email, password,
    emailVerificationToken:   hashToken(verifyToken),
    emailVerificationExpires: Date.now() + 24 * 60 * 60 * 1000,
  });

  const verifyUrl = `${process.env.CLIENT_URL}/verify-email?token=${verifyToken}`;
  await sendEmail({
    to: email,
    subject: "Verify your ejicode account",
    html: `<p>Hello ${name},</p><p><a href="${verifyUrl}">Verify your email</a></p>`,
  });

  const accessToken  = signAccessToken({ id: user._id, role: user.role });
  const refreshToken = signRefreshToken({ id: user._id });
  user.refreshToken  = refreshToken;
  await user.save({ validateBeforeSave: false });

  res.cookie("refreshToken", refreshToken, COOKIE_OPTS);
  ApiResponse.created(res, { accessToken, user: { id: user._id, name, email, role: user.role } },
    "Registration successful. Check your email to verify your account.");
});

// POST /login
exports.login = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email }).select("+password +refreshToken");
  if (!user || !(await user.matchPassword(password)))
    throw new ApiError("Invalid email or password.", 401);
  if (!user.isActive) throw new ApiError("Account deactivated. Contact support.", 403);

  const accessToken  = signAccessToken({ id: user._id, role: user.role });
  const refreshToken = signRefreshToken({ id: user._id });
  user.refreshToken  = refreshToken;
  await user.save({ validateBeforeSave: false });

  res.cookie("refreshToken", refreshToken, COOKIE_OPTS);
  ApiResponse.success(res, { accessToken, user: { id: user._id, name: user.name, email, role: user.role } },
    "Login successful.");
});

// POST /refresh-token
exports.refreshToken = asyncHandler(async (req, res) => {
  const token = req.cookies?.refreshToken || req.body?.refreshToken;
  if (!token) throw new ApiError("Refresh token missing.", 401);

  const decoded = verifyRefreshToken(token);
  const user = await User.findById(decoded.id).select("+refreshToken");
  if (!user || user.refreshToken !== token)
    throw new ApiError("Invalid refresh token.", 401);

  const accessToken     = signAccessToken({ id: user._id, role: user.role });
  const newRefreshToken = signRefreshToken({ id: user._id });
  user.refreshToken = newRefreshToken;
  await user.save({ validateBeforeSave: false });

  res.cookie("refreshToken", newRefreshToken, COOKIE_OPTS);
  ApiResponse.success(res, { accessToken }, "Token refreshed.");
});

// POST /logout
exports.logout = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id).select("+refreshToken");
  if (user) { user.refreshToken = undefined; await user.save({ validateBeforeSave: false }); }
  res.clearCookie("refreshToken");
  ApiResponse.success(res, {}, "Logged out.");
});

// GET /verify-email/:token
exports.verifyEmail = asyncHandler(async (req, res) => {
  const hashed = hashToken(req.params.token);
  const user = await User.findOne({
    emailVerificationToken: hashed,
    emailVerificationExpires: { $gt: Date.now() },
  });
  if (!user) throw new ApiError("Invalid or expired verification token.", 400);
  user.isEmailVerified          = true;
  user.emailVerificationToken   = undefined;
  user.emailVerificationExpires = undefined;
  await user.save({ validateBeforeSave: false });
  ApiResponse.success(res, {}, "Email verified successfully.");
});

// POST /forgot-password
exports.forgotPassword = asyncHandler(async (req, res) => {
  const user = await User.findOne({ email: req.body.email });
  if (!user) throw new ApiError("No account found with that email.", 404);

  const resetToken = generateToken();
  user.passwordResetToken   = hashToken(resetToken);
  user.passwordResetExpires = Date.now() + 60 * 60 * 1000; // 1 hour
  await user.save({ validateBeforeSave: false });

  const resetUrl = `${process.env.CLIENT_URL}/reset-password?token=${resetToken}`;
  await sendEmail({
    to: user.email,
    subject: "Reset your ejicode password",
    html: `<p>Reset your password: <a href="${resetUrl}">${resetUrl}</a></p><p>Expires in 1 hour.</p>`,
  });
  ApiResponse.success(res, {}, "Password reset link sent to your email.");
});

// PATCH /reset-password/:token
exports.resetPassword = asyncHandler(async (req, res) => {
  const hashed = hashToken(req.params.token);
  const user = await User.findOne({
    passwordResetToken: hashed,
    passwordResetExpires: { $gt: Date.now() },
  });
  if (!user) throw new ApiError("Invalid or expired reset token.", 400);
  user.password             = req.body.password;
  user.passwordResetToken   = undefined;
  user.passwordResetExpires = undefined;
  await user.save();
  ApiResponse.success(res, {}, "Password reset successfully. Please log in.");
});

// GET /me
exports.getMe = asyncHandler(async (req, res) =>
  ApiResponse.success(res, req.user, "Current user fetched.")
);
