const TaskCard = ({ task, onComplete, onDelete }) => {
  return (
    <div className={`task-card ${task.status === 'Completed' ? 'completed' : ''}`}>
      <div className="task-card-content">
        <h3>{task.title}</h3>
        <p><strong>Category:</strong> {task.category}</p>
        <p><strong>Priority:</strong> {task.priority}</p>
        <p><strong>Status:</strong> <span className="task-status">{task.status}</span></p>
      </div>

      <div className="task-actions">
        <button onClick={() => onComplete(task.id)} disabled={task.status === 'Completed'}>
          {task.status === 'Completed' ? 'Completed' : 'Complete'}
        </button>
        <button className="delete-btn" onClick={() => onDelete(task.id)}>Delete</button>
      </div>
    </div>
  );
};

export default TaskCard;