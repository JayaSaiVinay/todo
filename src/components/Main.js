import { Options } from "./Options";
import { TodoList } from "./TodoList";
import { InputForm } from "./InputForm";

export function Main({ tasks, setTasks }) {
  function handleClearList() {
    if (tasks.length === 0) return;
    const confirm = window.confirm(
      "Are you sure, you want to clear the list? "
    );
    if (confirm) {
      setTasks([]);
    }
  }
  return (
    <main>
      <InputForm setTasks={setTasks} tasks={tasks} />
      <TodoList tasks={tasks} setTasks={setTasks} />
      <Options
        tasks={tasks}
        setTasks={setTasks}
        handleClearList={handleClearList} />
    </main>
  );
}
