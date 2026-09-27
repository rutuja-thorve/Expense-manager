import express from "express";
import cors from "cors";
import "dotenv/config";

import userRoutes from "./routes/userRoutes";
import expenseRoutes from "./routes/expenseRoutes";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "Expense Manager Backend is running!"
  });
});

app.use("/users", userRoutes);
app.use("/expenses", expenseRoutes);

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});