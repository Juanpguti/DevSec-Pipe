const request = require("supertest");
const app = require("../src/index.js");

describe("Demo API", () => {
  it("/health should return ok", async () => {
    const res = await request(app).get("/health");
    expect(res.statusCode).toBe(200);
    expect(res.body.status).toBe("ok");
  });

  it("/api/v1/hello should greet", async () => {
    const res = await request(app).get("/api/v1/hello");
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty("message");
  });
});
