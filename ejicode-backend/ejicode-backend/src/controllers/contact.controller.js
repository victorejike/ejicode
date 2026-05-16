const Contact     = require("../models/Contact");
const ApiResponse = require("../utils/ApiResponse");
const ApiError    = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");
const sendEmail   = require("../utils/sendEmail");
const paginate    = require("../utils/paginate");
const logger      = require("../utils/logger");

const trySendEmail = async (mail) => {
  try {
    await sendEmail(mail);
  } catch (error) {
    // The booking/contact record should still be stored if local SMTP is not configured.
    logger.warn(`Email notification skipped: ${error.message}`);
  }
};

// POST /contact
exports.submitContact = asyncHandler(async (req, res) => {
  const contact = await Contact.create(req.body);
  const details = [
    contact.company && `<p><b>Company:</b> ${contact.company}</p>`,
    contact.projectType && `<p><b>Project type:</b> ${contact.projectType}</p>`,
    contact.budget && `<p><b>Budget:</b> ${contact.budget}</p>`,
    contact.timeline && `<p><b>Timeline:</b> ${contact.timeline}</p>`,
    contact.appointmentDate && `<p><b>Appointment:</b> ${contact.appointmentDate.toDateString()} ${contact.appointmentTime || ""}</p>`,
  ].filter(Boolean).join("");

  // Notify admin
  await trySendEmail({
    to: process.env.SMTP_USER,
    subject: `${contact.source === "booking" ? "New booking" : "New contact"} from ${contact.name}`,
    html: `<p><b>${contact.name}</b> (${contact.email}) sent:</p>${details}<p>${contact.message}</p>`,
  });
  // Auto-reply
  await trySendEmail({
    to: contact.email,
    subject: "We received your message — ejicode",
    html: `<p>Hello ${contact.name},</p><p>Thank you for reaching out to ejicode. We will get back to you within 24 hours.</p><p>The ejicode Team</p>`,
  });
  ApiResponse.created(res, contact, contact.source === "booking"
    ? "Booking received. We will be in touch shortly."
    : "Message received. We will be in touch shortly.");
});

// GET /contact  (admin)
exports.getContacts = asyncHandler(async (req, res) => {
  const { page, limit, skip } = paginate(req.query);
  const [contacts, total] = await Promise.all([
    Contact.find().sort("-createdAt").skip(skip).limit(limit),
    Contact.countDocuments(),
  ]);
  ApiResponse.paginated(res, contacts, { total, page, limit, pages: Math.ceil(total / limit) });
});

// PATCH /contact/:id/status  (admin)
exports.updateStatus = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndUpdate(req.params.id,
    { status: req.body.status }, { new: true });
  if (!contact) throw new ApiError("Contact not found.", 404);
  ApiResponse.success(res, contact, "Status updated.");
});
