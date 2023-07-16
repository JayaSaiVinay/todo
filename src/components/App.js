import { useState, useEffect } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { Article } from "./Article";
import { Main } from "./Main";

export default function App() {
  const [tasks, setTasks] = useState(function () {
    const storedData = localStorage.getItem("task");
    if (storedData === "null") {
      return [];
    } else {
      return JSON.parse(storedData);
    }
  });
  // const [tasks, setTasks] = useState([]);
  useEffect(
    function () {
      localStorage.setItem("task", JSON.stringify(tasks));
    },
    [tasks]
  );
  return (
    <div className="container">
      <Header />
      <Main tasks={tasks} setTasks={setTasks} />
      <Article tasks={tasks} />
      <Footer />
    </div>
  );
}
