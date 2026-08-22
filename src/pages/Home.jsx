
const Home = ({ tasks = [] }) => {
  const totalTasks = tasks.length;

  return (
    <div className="content-card home-page">
      <p className="eyebrow">Student planner</p>
      <h1 className="page-title">Welcome to Smart Daily Task Manager</h1>
      <p className="page-subtext">
        This app helps you organize your daily study, coding, health, and personal tasks.
      </p>
      <h3 className="date-text">Today Date: {new Date().toLocaleDateString()}</h3>
      <h4 className="task-summary">
        {totalTasks === 0 ? 'No Tasks Available' : `You have ${totalTasks} tasks for today.`}
      </h4>
    </div>
  );
};

export default Home;