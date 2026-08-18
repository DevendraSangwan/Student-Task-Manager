const TaskCard = ({ task, onComplete, onDelete }) => {
  return (
    <div
      className={`task-card ${task.status === 'Completed' ? 'task-card-completed' : ''}`}
    >
      <h3 className="task-card-title">{task.title}</h3>
      <p className="task-meta">
        <strong>Category:</strong> {task.category}
      </p>
      <p className="task-meta">
        <strong>Priority:</strong>{' '}
        <span className={`priority-tag priority-${task.priority.toLowerCase()}`}>
          {task.priority}
        </span>
      </p>
      <p className="task-meta">
        <strong>Status:</strong>{' '}
        <span className={`status-badge status-${task.status.toLowerCase()}`}>
          {task.status}
        </span>
      </p>

      <div className="task-actions">
        <button
          className="primary-btn small-btn"
          onClick={() => onComplete(task.id)}
          disabled={task.status === 'Completed'}
        >
          {task.status === 'Completed' ? 'Completed' : 'Complete'}
        </button>
        <button className="danger-btn small-btn" onClick={() => onDelete(task.id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TaskCard;