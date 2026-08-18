import { useMemo } from "react";

const TaskStats = ({ tasks }) => {
  const statistics = useMemo(() => {
    const total = tasks.length;

    const completed = tasks.filter(
      (task) => task.status === "Completed"
    ).length;

    const pending = tasks.filter(
      (task) => task.status === "Pending"
    ).length;

    return {
      total,
      completed,
      pending,
    };
  }, [tasks]);

  return (
    <div className="task-stats">
      <div className="stat-card">
        <span>Total</span>
        <strong>{statistics.total}</strong>
      </div>

      <div className="stat-card">
        <span>Completed</span>
        <strong>{statistics.completed}</strong>
      </div>

      <div className="stat-card">
        <span>Pending</span>
        <strong>{statistics.pending}</strong>
      </div>
    </div>
  );
};

export default TaskStats;