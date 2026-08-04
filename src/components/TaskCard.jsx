const TaskCard = ({ task, onComplete, onDelete }) => {
  return (
    <div style={{ border: '1px solid #ddd', borderRadius: '8px', padding: '16px' }}>
      <h3>{task.title}</h3>
      <p><strong>Category:</strong> {task.category}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Status:</strong> {task.status}</p>

      <div style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
        <button onClick={() => onComplete(task.id)} disabled={task.status === 'Completed'}>
          {task.status === 'Completed' ? 'Completed' : 'Complete'}
        </button>
        <button onClick={() => onDelete(task.id)}>Delete</button>
        <button onClick={() => onEdit(task.id)}>Edit</button>
      </div>
    </div>
  );
};

export default TaskCard;