const crypto = require("crypto");

exports.generateToken = (bytes = 32) => crypto.randomBytes(bytes).toString("hex");

exports.hashToken = (token) =>
  crypto.createHash("sha256").update(token).digest("hex");
