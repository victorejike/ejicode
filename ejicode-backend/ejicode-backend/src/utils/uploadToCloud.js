const cloudinary = require("../config/cloudinary");

const uploadToCloud = (fileBuffer, folder = "ejicode") =>
  new Promise((resolve, reject) => {
    const stream = cloudinary.uploader.upload_stream(
      { folder, resource_type: "auto" },
      (err, result) => (err ? reject(err) : resolve(result))
    );
    stream.end(fileBuffer);
  });

module.exports = uploadToCloud;
