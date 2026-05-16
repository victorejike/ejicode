const multer = require("multer");
const ApiError = require("../utils/ApiError");

const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  const allowed = ["image/jpeg","image/png","image/webp","image/gif","application/pdf"];
  allowed.includes(file.mimetype)
    ? cb(null, true)
    : cb(new ApiError("File type not allowed.", 400), false);
};

const upload = multer({
  storage,
  limits: { fileSize: 5 * 1024 * 1024 }, // 5 MB
  fileFilter,
});

module.exports = upload;
