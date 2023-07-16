import { useState } from "react";

export function Options({ handleClearList, setTasks, tasks }) {
  const [sortBy, setSortBy] = useState("byorder");

  const handleSortByChange = (e) => {
    const selectedValue = e.target.value;

    if (selectedValue === "byorder") {
      setTasks(tasks);
    } else if (selectedValue === "bya2z") {
      setTasks(tasks.slice().sort((a, b) => a.taskName.localeCompare(b.taskName)));
    } else if (selectedValue === "bystatus") {
      setTasks(tasks.slice().sort((a, b) => Number(a.isCompleted) - Number(b.isCompleted)));
    }

    setSortBy(selectedValue);
  };

  return (
    <div className="options">
      <select
        className="selection"
        value={sortBy}
        onChange={handleSortByChange}
      >
        <option value="byorder" className="option">
          Sort by input order
        </option>
        <option value="bya2z" className="option">
          Sort by A-Z
        </option>
        <option value="bystatus" className="option">
          Sort by status
        </option>
      </select>
      <button onClick={handleClearList} className="clearbtn">
        Clear List
      </button>
    </div>
  );
}
