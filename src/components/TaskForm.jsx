const TaskForm = ({ formData, handleChange, handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Enter task title"
      />

      <select name="category" value={formData.category} onChange={handleChange}>
        <option value="Study">Study</option>
        <option value="Coding">Coding</option>
        <option value="Personal">Personal</option>
        <option value="Health">Health</option>
      </select>

      <select name="priority" value={formData.priority} onChange={handleChange}>
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>

      <button type="submit">Add Task</button>
    </form>
  );
};

export default TaskForm;