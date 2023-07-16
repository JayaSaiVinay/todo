import { Options } from "./Options";
import { TodoList } from "./TodoList";
import { InputForm } from "./InputForm";

export function Main({ tasks, setTasks }){
  const handleClearList = () => {
    if (tasks.length === 0) return;
    const confirmClear = window.confirm("Are you sure you want to clear the list?");
    if (confirmClear) {
      setTasks([]);
    }
  };

  return (
    <main>
      <InputForm setTasks={setTasks} tasks={tasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
      <Options tasks={tasks} setTasks={setTasks} handleClearList={handleClearList} />
    </main>
  );
};

