const transporter = require("../config/email");
const logger      = require("./logger");

const sendEmail = async ({ to, subject, html, text }) => {
  if (process.env.NODE_ENV === "test" || !process.env.SMTP_HOST || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    logger.warn(`Email skipped because SMTP is not configured: ${subject}`);
    return null;
  }

  const info = await transporter.sendMail({
    from: process.env.EMAIL_FROM,
    to, subject, html, text,
  });
  logger.info(`Email sent to ${to} — messageId: ${info.messageId}`);
  return info;
};

module.exports = sendEmail;
