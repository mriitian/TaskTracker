import React, { useState, useEffect } from "react";
import Task from "../elements/TaskCard";

const TaskList = ({ Tasks, sortBy }) => {
  const [tasks, setTasks] = useState([]);

  // Update tasks whenever the Tasks prop changes
  console.log("sortBy:", sortBy);
  useEffect(() => {
    // Apply filtering
    let filteredTasks = Tasks;

    // Apply sorting based on sortBy prop
    const sortedTasks = filteredTasks.sort((a, b) =>
      compareTasks(a, b, sortBy)
    );
    setTasks([...sortedTasks]); // Spread operator to create a new array
    console.log(sortedTasks);
  }, [Tasks, sortBy]);

  // Function to compare task objects based on the provided sortBy option
  const compareTasks = (a, b, sortBy) => {
    if (sortBy === "priority") {
      return a.priority.localeCompare(b.priority);
    } else if (sortBy === "startDate") {
      return new Date(a.startDate) - new Date(b.startDate);
    } else if (sortBy === "endDate") {
      return new Date(a.endDate) - new Date(b.endDate);
    } else {
      return a.title.localeCompare(b.title);
    }
  };

  const handleStatusChange = (taskId, status, priority) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status, priority } : task
      )
    );
  };

  const handlePriorityChange = (taskId, newPriority) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, priority: newPriority } : task
      )
    );
  };

  return (
    <div className="task-box">
      <div
        className="task-list"
        style={{
          display: "flex",
          overflow: "overlay",
          gap: "20px",
          padding: "10px",
        }}
      >
        <div className="status-column">
          <h2 style={{ backgroundColor: "gray", color: "white" }}>Pending</h2>
          {tasks
            .filter((task) => task.status === "Pending")
            .map((task, index) => (
              <Task
                key={index}
                task={task}
                onStatusChange={handleStatusChange}
                onPriorityChange={handlePriorityChange}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
        </div>
        <div className="status-column">
          <h2 style={{ backgroundColor: "orange", color: "white" }}>
            In Progress
          </h2>
          {tasks
            .filter((task) => task.status === "In Progress")
            .map((task, index) => (
              <Task
                key={index}
                task={task}
                onStatusChange={handleStatusChange}
                onPriorityChange={handlePriorityChange}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
        </div>
        <div className="status-column">
          <h2 style={{ backgroundColor: "green", color: "white" }}>
            Completed
          </h2>
          {tasks
            .filter((task) => task.status === "Completed")
            .map((task, index) => (
              <Task
                key={index}
                task={task}
                onStatusChange={handleStatusChange}
                onPriorityChange={handlePriorityChange}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
        </div>
        <div className="status-column">
          <h2 style={{ backgroundColor: "blue", color: "white" }}>Deferred</h2>
          {tasks
            .filter((task) => task.status === "Deferred")
            .map((task, index) => (
              <Task
                key={index}
                task={task}
                onStatusChange={handleStatusChange}
                onPriorityChange={handlePriorityChange}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
        </div>
        <div className="status-column">
          <h2 style={{ backgroundColor: "red", color: "white" }}>Deployed</h2>
          {tasks
            .filter((task) => task.status === "Deployed")
            .map((task, index) => (
              <Task
                key={index}
                task={task}
                onStatusChange={handleStatusChange}
                onPriorityChange={handlePriorityChange}
                tasks={tasks}
                setTasks={setTasks}
              />
            ))}
        </div>
        {/* Add more status columns as needed */}
      </div>
    </div>
  );
};

export default TaskList;
