import React from 'react';

const Home = ({ tasks = [] }) => {
  const totalTasks = tasks.length;

  return (
    <div className="home-page">
      <h1 className="page-title">Welcome to Smart Daily Task Manager</h1>
      <p className="page-subtitle">
        This app helps you organize your daily study, coding, health, and personal tasks.
      </p>
      <h3 className="date-label">Today Date: {new Date().toLocaleDateString()}</h3>
      <h4 className="task-count">
        {totalTasks === 0 ? 'No Tasks Available' : `You have ${totalTasks} tasks for today.`}
      </h4>
    </div>
  );
};

export default Home;