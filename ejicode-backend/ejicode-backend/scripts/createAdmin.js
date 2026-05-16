require("dotenv").config();
const mongoose = require("mongoose");
const User = require("../src/models/User");

const { ADMIN_NAME = "Admin", ADMIN_EMAIL, ADMIN_PASSWORD, MONGO_URI } = process.env;

async function main() {
  if (!MONGO_URI) throw new Error("MONGO_URI is required.");
  if (!ADMIN_EMAIL) throw new Error("ADMIN_EMAIL is required.");
  if (!ADMIN_PASSWORD || ADMIN_PASSWORD.length < 8) {
    throw new Error("ADMIN_PASSWORD must be at least 8 characters.");
  }

  await mongoose.connect(MONGO_URI);

  const existing = await User.findOne({ email: ADMIN_EMAIL });
  if (existing) {
    existing.name = ADMIN_NAME;
    existing.role = "admin";
    existing.password = ADMIN_PASSWORD;
    existing.isActive = true;
    await existing.save();
    console.log(`Updated admin user: ${ADMIN_EMAIL}`);
  } else {
    await User.create({
      name: ADMIN_NAME,
      email: ADMIN_EMAIL,
      password: ADMIN_PASSWORD,
      role: "admin",
      isEmailVerified: true,
    });
    console.log(`Created admin user: ${ADMIN_EMAIL}`);
  }

  await mongoose.connection.close();
}

main().catch(async (error) => {
  console.error(error.message);
  await mongoose.connection.close().catch(() => {});
  process.exit(1);
});
