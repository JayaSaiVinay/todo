export function Article({ tasks }) {
  // Check if 'tasks' is null or undefined, and if so, return an empty array
  const taskList = tasks || [];

  const completedTasks = taskList.filter((task) => task.isCompleted).length;
  const totalTasks = taskList.length;
  const percent = Math.round((completedTasks / totalTasks) * 100);

  return (
    <article>
      {totalTasks === 0 ? (
        <h2>Start adding your tasks to track progress ✌️</h2>
      ) : percent === 100 ? (
        <h2>You have finished all your tasks!!👏!</h2>
      ) : (
        <h2>
          You have done {completedTasks}({percent}%) of your {totalTasks} tasks
        </h2>
      )}
    </article>
  );
}
