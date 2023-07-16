import { Task } from "./Task";

export function TodoList({ tasks, setTasks }) {
  // Check if 'tasks' is null or undefined, and if so, return an empty array
  const taskList = tasks || [];

  return (
    <ul className="todo-list">
      {taskList.map((task) => (
        <li className="task" key={task.id}>
          <Task
            id={task.id}
            tasks={taskList} // Pass the correct task list to Task component
            setTasks={setTasks}
            taskName={task.taskName}
            isCompleted={task.isCompleted}
          />
        </li>
      ))}
    </ul>
  );
}
