import { Options } from "./Options";
import { TodoList } from "./TodoList";
import { InputForm } from "./InputForm";
import { TaskProvider } from "../contexts/TaskContext";

export function Main() {
  return (
    <main>
      <TaskProvider>
        <InputForm />
        <TodoList />
        <Options />
      </TaskProvider>
    </main>
  );
}
