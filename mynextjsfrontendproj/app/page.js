"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function addTask() {
    if (newTask.trim() === "") return;
    setTasks([...tasks, newTask]);
    setNewTask("");
  }

  return (
    <main style={{ maxWidth: 500, margin: "40px auto", fontFamily: "sans-serif" }}>
      <h1>Hello, {name || "Dear"}! 👋</h1>

      {/* Input example */}
      <input
        type="text"
        placeholder="Type your name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        style={{ padding: 8, width: "100%" }}
      />

      {/* Counter example */}
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>+1</button>{" "}
      <button onClick={() => setCount(count - 1)}>-1</button>{" "}
      <button onClick={() => setCount(0)}>Reset</button>

      {/* To-do list example */}
      <h2>My Tasks</h2>
      <input
        type="text"
        placeholder="New task"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        style={{ padding: 8 }}
      />{" "}
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </main>
  );
}