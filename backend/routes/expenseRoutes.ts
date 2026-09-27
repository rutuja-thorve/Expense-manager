import express from "express";
import { db } from "../src/prisma/db";

const router = express.Router();

// POST /expenses
router.post("/", async (req, res) => {
  try {
    const {
      description,
      amount,
      category,
      userId
    } = req.body;

    const expense = await db.orm.public.Expense.create({
      description,
      amount,
      category,
      userId
    });

    res.status(201).json({
      message: "Expense created successfully",
      expense
    });

  } catch (error) {
    console.error("Error creating expense:", error);

    res.status(500).json({
      message: "Something went wrong",
      error: error instanceof Error ? error.message : String(error)
    });
  }
});

router.get("/", async (req, res) => {
  try {
    const expenses = await db.orm.public.Expense
      .where({})
      .all();

    res.json(expenses);

  } catch (error) {
    console.error("Error fetching expenses:", error);

    res.status(500).json({
      message: "Something went wrong",
      error: error instanceof Error ? error.message : String(error)
    });
  }
});
export default router;