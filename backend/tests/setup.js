import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import { generateToken } from "../lib/jwt.lib";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/User.js";
let mongo;

beforeAll(async () => {
  mongo = await MongoMemoryServer.create();
  const uri = mongo.getUri();

  await mongoose.connect(uri, {
    dbName: "jest"
  });
 
   

// Provide a helper to create an admin user and return a signed token.
// Tests can call `await global.createAdmin()` when they need a fresh admin.
global.createAdmin = async () => {
  const hashed = await bcrypt.hash("Admin123!", 10);
  const admin = await User.create({
    first_name: "Admin",
    second_name: "Tester",
    phone_number: "0712345678",
    email: `admin${Date.now()}@test.com`,
    password: hashed,
    role: "admin"
  });

  const token = jwt.sign({ id: admin._id, role: admin.role }, process.env.JWT_SECRET || "testsecret", { expiresIn: "12h" });
  return token;
};
});

afterEach(async () => {
  const db = mongoose.connection.db;
  if (!db) return;

  const collections = await db.collections();

  for (let collection of collections) {
    await collection.deleteMany({});
  }
});

afterAll(async () => {
  await mongoose.connection.close();
  await mongo.stop();
});
