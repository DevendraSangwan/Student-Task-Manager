import React from "react";

const TaskCard = ({ task, onComplete, onDelete }) => {
  console.log("TaskCard rendered:", task.title);

  return (
    <div
      className={`task-card ${
        task.status === "Completed" ? "completed" : ""
      }`}
    >
      <div className="task-card-header">
        <h3 className="task-title">{task.title}</h3>
        <span className={`task-status ${task.status.toLowerCase()}`}>{task.status}</span>
      </div>

      <div className="task-meta">
        <p><strong>Category:</strong> {task.category}</p>
        <p><strong>Priority:</strong> {task.priority}</p>
      </div>

      <div className="task-actions">
        <button
          className="task-button complete"
          onClick={() => onComplete(task.id)}
          disabled={task.status === "Completed"}
        >
          {task.status === "Completed" ? "Completed" : "Complete"}
        </button>

        <button
          className="task-button delete"
          onClick={() => onDelete(task.id)}
        >Delete</button>
      </div>
    </div>
  );
};

export default React.memo(TaskCard);