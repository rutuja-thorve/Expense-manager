import axios from "axios";
import { useState } from "react";

function App() {
  const [message, setMessage] = useState("");

  // Create User
  const createUser = async () => {
    try {
      const response = await axios.post("http://localhost:5000/users", {
        email: "test@gmail.com",
        username: "testuser",
        name: "Test User",
        password: "123456"
      });

      console.log(response.data);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
      setMessage("Error creating user");
    }
  };

  // Get Users
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/users");

      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const createExpense = async () => {
  try {
    const response = await axios.post("http://localhost:5000/expenses", {
      description: "Grocery",
      amount: 500,
      category: "Food",
      userId: 1
    });

    console.log(response.data);
    setMessage(response.data.message);
  } catch (error) {
    console.log(error);
    setMessage("Error creating expense");
  }
};

const getExpenses = async () => {
  try {
    const response = await axios.get("http://localhost:5000/expenses");

    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

  return (
    <div>
      <h1>Expense Manager</h1>

      <button onClick={createUser}>
        Create User
      </button>

      <button onClick={getUsers}>
        Get Users
      </button>

      <button onClick={createExpense}>
        Create Expense
      </button>

      <button onClick={getExpenses}>
        Get Expenses
      </button>

      <p>{message}</p>
    </div>
  );
}

export default App;