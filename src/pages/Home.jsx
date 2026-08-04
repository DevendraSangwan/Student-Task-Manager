import React from 'react';

const Home = ({ tasks = [] }) => {
  const totalTasks = tasks.length;

  return (
    <div>
      <h1>Welcome to Smart Daily Task Manager</h1>
      <p>This app helps you organize your daily study, coding, health, and personal tasks.</p>
      <h3>Today Date: {new Date().toLocaleDateString()}</h3>
      <h4>
        {totalTasks === 0 ? 'No Tasks Available' : `You have ${totalTasks} tasks for today.`}
      </h4>
    </div>
  );
};

export default Home;