export function Task({ taskName, tasks, setTasks, id, isCompleted }) {
  function handleToggle(id) {
    setTasks((tasks) =>
      tasks.map((task) =>
        id === task.id ? { ...task, isCompleted: !isCompleted } : { ...task }
      )
    );
  }
  function handleTrash(id) {
    setTasks((tasks) => tasks.filter((task) => id !== task.id));
  }
  return (
    <>
      <input
        onChange={() => handleToggle(id)}
        type="checkbox"
        checked={isCompleted}
      />
      <span style={isCompleted ? { textDecoration: "line-through" } : {}}>
        {taskName}
      </span>
      <span
        style={{
          fontSize: "1.5rem",
          color: "red",
          fontWeight: "bolder",
          cursor: "pointer",
        }}
        onClick={() => handleTrash(id)}
      >
        {" "}
        &#x2715;
      </span>
    </>
  );
}
