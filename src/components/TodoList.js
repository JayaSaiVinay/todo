import { Task } from "./Task";

export function TodoList({ tasks, setTasks }) {
  return (
    <ul className="todo-list">
      {tasks.map((task) => (
        <li className="task">
          <Task
            id={task.id}
            tasks={tasks}
            setTasks={setTasks}
            taskName={task.taskName}
            key={Date.now()}
            isCompleted={task.isCompleted} />
        </li>
      ))}
    </ul>
  );
}
