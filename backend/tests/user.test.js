import request from "supertest";
import app from "../server.js";
import "./setup.js"; // MongoMemoryServer setup
import jwt from "jsonwebtoken";

describe("User Routes", () => {
  let token;

  beforeEach(() => {
    // Create a fresh admin and token before each test so protected routes work
    return global.createAdmin().then((t) => {
      token = t;
    });
  });

  it("should register a user", async () => {
    const res = await request(app)
      .post("/auth/register")
      .send({
        email: "victor@test.com",
        first_name: "Victor",
        second_name: "Paul",
        phone_number: "0712345678",
        password: "Admin123!",
        confirmPassword: "Admin123!",
        subscription: "free",
      });

    expect(res.statusCode).toBe(201);
    // registration returns a user object under `user`
    expect(res.body.user.first_name).toBe("Victor");
  });

  it("should get all users", async () => {
    // Use seeded admin token to access protected admin route
    const res = await request(app)
      .get("/api/admin/users")
      .set("Cookie", `token=${token}`);

    expect(res.statusCode).toBe(200);
    expect(res.body.length).toBeGreaterThanOrEqual(1);
  });
});
