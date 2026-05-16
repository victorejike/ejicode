const mongoose = require("mongoose");

const ProjectSchema = new mongoose.Schema({
  title:       { type: String, required: true, trim: true },
  description: { type: String, required: true },
  client:      { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  status:      { type: String, enum: ["discovery","design","development","testing","deployed","maintenance"], default: "discovery" },
  techStack:   [String],
  repoUrl:     String,
  liveUrl:     String,
  coverImage:  String,
  isPublished: { type: Boolean, default: false },
  tags:        [String],
}, { timestamps: true });

module.exports = mongoose.model("Project", ProjectSchema);
