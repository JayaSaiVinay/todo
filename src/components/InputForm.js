import { useState } from "react";
import { useTasks } from "../contexts/TaskContext";

export function InputForm() {
  const { setTasks } = useTasks();
  const [taskName, setTaskName] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (taskName === "") return;
    const task = { taskName, isCompleted: false, id: Date.now() };
    setTasks((tasks) => [...tasks, task]);
    setTaskName("");
  }

  return (
    <form className="input-form" onSubmit={(e) => handleSubmit(e)}>
      <input
        type="text"
        placeholder="Add Your Task"
        value={taskName}
        className="input"
        onChange={(e) => setTaskName(e.target.value)}
      />
      <button className="btn">➕</button>
    </form>
  );
}
