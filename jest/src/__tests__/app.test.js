const request = require("supertest");
const app = require("../app");

describe("GET /", () => {
  it("should return 200 and Hello World ", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty("message", "Hello World");
  });
});

describe("POST /api/auth/register", () => {
  it("should return a user and return 201 with user data", async () => {
    const res = await request(app).post("/api/auth/register").send({
      username: "testuser",
      email: "testuser@email.com",
      password: "password123",
    });

    expect(res.statusCode).toBe(201);
    expect(res.body).toHaveProperty("message", "User registered sucessfully");
    expect(res.body).toHaveProperty("user");
    expect(res.body.user).toHaveProperty("username", "testuser");
    expect(res.body.user).toHaveProperty("email", "testuser@email.com");
  });
});
