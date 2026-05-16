const request  = require("supertest");
const mongoose = require("mongoose");
const app      = require("../src/app");

const TEST_USER = {
  name: "Test User",
  email: `test_${Date.now()}@ejicode.com`,
  password: "Password123!",
};

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI || "mongodb://localhost:27017/ejicode_test");
});

afterAll(async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
});

describe("Auth API", () => {
  let accessToken;

  it("POST /api/v1/auth/register — registers a user", async () => {
    const res = await request(app).post("/api/v1/auth/register").send(TEST_USER);
    expect(res.statusCode).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.accessToken).toBeDefined();
  });

  it("POST /api/v1/auth/login — logs in", async () => {
    const res = await request(app).post("/api/v1/auth/login")
      .send({ email: TEST_USER.email, password: TEST_USER.password });
    expect(res.statusCode).toBe(200);
    accessToken = res.body.data.accessToken;
  });

  it("GET /api/v1/auth/me — returns current user", async () => {
    const res = await request(app).get("/api/v1/auth/me")
      .set("Authorization", `Bearer ${accessToken}`);
    expect(res.statusCode).toBe(200);
    expect(res.body.data.email).toBe(TEST_USER.email);
  });

  it("POST /api/v1/auth/logout — logs out", async () => {
    const res = await request(app).post("/api/v1/auth/logout")
      .set("Authorization", `Bearer ${accessToken}`);
    expect(res.statusCode).toBe(200);
  });
});
