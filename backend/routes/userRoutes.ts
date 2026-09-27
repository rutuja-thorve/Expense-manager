import express from "express";
import { db } from "../src/prisma/db";

const router = express.Router();

// POST /users
router.post("/", async (req, res) => {
  try {
    const { email, username, name, password } = req.body;

    const user = await db.orm.public.User.create({
      email,
      username,
      name,
      password
    });

    res.status(201).json({
      message: "User created successfully",
      user
    });
  } catch (error) {
    console.error("Error creating user:", error);

    res.status(500).json({
      message: "Something went wrong",
      error: error instanceof Error ? error.message : String(error)
    });
  }
});

// GET /users
router.get("/", async (req, res) => {
  try {
    const users = await db.orm.public.User
      .where({})
      .all();

    res.json(users);
  } catch (error) {
    console.error("Error fetching users:", error);

    res.status(500).json({
      message: "Something went wrong",
      error: error instanceof Error ? error.message : String(error)
    });
  }
});

export default router;