import React, { useState } from 'react';
import TaskCard from '../components/TaskCard';
import TaskForm from '../components/TaskForm';

const Tasks = ({ tasks = [], addTask, completeTask, deleteTask }) => {
  const [formData, setFormData] = useState({
    title: '',
    category: 'Study',
    priority: 'High',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title.trim()) return;
    addTask({
      title: formData.title.trim(),
      category: formData.category,
      priority: formData.priority,
    });
    setFormData({ title: '', category: 'Study', priority: 'High' });
  };

  return (
    <div>
      <h1>Tasks</h1>
      <TaskForm
        formData={formData}
        handleChange={handleChange}
        handleSubmit={handleSubmit}
      />

      {tasks.length === 0 ? (
        <p>No Tasks Available</p>
      ) : (
        <div style={{ display: 'grid', gap: '12px' }}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              onComplete={completeTask}
              onDelete={deleteTask}
            //   onEdit={onEdit}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Tasks;