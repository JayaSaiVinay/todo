export function Article({ tasks }) {
  const completedTasks = tasks.filter((task) => task.isCompleted).length;
  const totalTasks = tasks.length;
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
