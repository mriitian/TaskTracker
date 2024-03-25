import React, { useState } from "react";
import TaskList from "./TaskList";
import Filter from "../elements/Filter";
import Sort from "../elements/Sort"; // Import the Sort component
import tasksData from "../tasksData";
import AddNew from "../elements/AddNew";

export default function TaskManager() {
  const [tasks, setTasks] = useState(tasksData);
  const [sortBy, setSortBy] = useState(""); // State for sorting option

  const handleFilter = (filters) => {
    const filteredData = tasksData.filter((task) => {
      const assigneeMatch =
        filters.assignee === "" || task.assignee === filters.assignee;
      const priorityMatch =
        filters.priority === "All" || task.priority === filters.priority;
      const startDateMatch =
        !filters.startDate ||
        new Date(task.startDate) >= new Date(filters.startDate);
      const endDateMatch =
        !filters.endDate || new Date(task.endDate) <= new Date(filters.endDate);
      // Return true only if all filter conditions match
      return assigneeMatch && priorityMatch && startDateMatch && endDateMatch;
    });
    setTasks(filteredData);
  };

  const handleSort = (sortOption) => {
    setSortBy(sortOption);
    console.log(sortOption);
  };

  return (
    <div className="task-manager">
      <div className="filter-add">
        <Filter onFilter={handleFilter} />
        <AddNew tasksData={tasks} setTasks={setTasks} />
      </div>
      <Sort onSelectSort={handleSort} />{" "}
      <TaskList Tasks={tasks} sortBy={sortBy} /> {/* Pass the sortBy prop */}
    </div>
  );
}
