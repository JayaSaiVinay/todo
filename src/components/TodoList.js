import { useTasks } from "../contexts/TaskContext";
import { Task } from "./Task";

export function TodoList() {
  const { tasks, setTasks } = useTasks();
  const taskList = tasks || [];

  return (
    <ul className="todo-list">
      {taskList.map((task) => (
        <li className="task" key={task.id}>
          <Task
            id={task.id}
            setTasks={setTasks}
            taskName={task.taskName}
            isCompleted={task.isCompleted}
          />
        </li>
      ))}
    </ul>
  );
}
