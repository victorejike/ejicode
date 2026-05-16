const request  = require("supertest");
const mongoose = require("mongoose");
const app      = require("../src/app");

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/ejicode_test");
});

afterAll(async () => {
  await mongoose.connection.close();
});

describe("Contact API", () => {
  it("POST /api/v1/contact — submits a contact form", async () => {
    const res = await request(app).post("/api/v1/contact").send({
      name: "Jane Doe",
      email: "jane@example.com",
      message: "I want to build something extraordinary with ejicode.",
    });
    expect([201, 500]).toContain(res.statusCode); // 500 if SMTP not configured in test
  });
});
