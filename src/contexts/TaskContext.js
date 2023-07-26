import { createContext, useContext } from "react";
import { useState, useEffect } from "react";
const TaskContext = createContext();
function TaskProvider({ children }) {
  const [tasks, setTasks] = useState(function () {
    const storedData = localStorage.getItem("task");
    if (storedData === null) {
      return [];
    } else {
      return JSON.parse(storedData);
    }
  });

  useEffect(
    function () {
      localStorage.setItem("task", JSON.stringify(tasks));
    },
    [tasks]
  );

  const handleClearList = () => {
    if (tasks.length === 0) return;
    const confirmClear = window.confirm(
      "Are you sure you want to clear the list?"
    );
    if (confirmClear) {
      setTasks([]);
    }
  };

  return (
    <TaskContext.Provider value={{ tasks, setTasks, handleClearList }}>
      {children}
    </TaskContext.Provider>
  );
}

function useTasks() {
  const tasks = useContext(TaskContext);
  if (tasks === undefined) throw new Error("Not used properly");
  return tasks;
}

export { TaskProvider, useTasks };
