const mongoose = require("mongoose");

const ContactSchema = new mongoose.Schema({
  name:        { type: String, required: true, trim: true },
  email:       { type: String, required: true, trim: true, lowercase: true },
  company:     { type: String, trim: true },
  subject:     String,
  message:     { type: String, required: true },
  projectType: { type: String, trim: true },
  budget:      { type: String, trim: true },
  timeline:    { type: String, trim: true },
  appointmentDate: Date,
  appointmentTime: { type: String, trim: true },
  source:      { type: String, enum: ["contact", "booking"], default: "contact" },
  status:      { type: String, enum: ["new","read","replied"], default: "new" },
}, { timestamps: true });

module.exports = mongoose.model("Contact", ContactSchema);
