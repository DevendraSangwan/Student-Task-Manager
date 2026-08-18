import { createContext, useReducer } from "react";
import tasksData from "../data/db";
import taskReducer from "../reducers/taskReducer";

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, dispatch] = useReducer(taskReducer, tasksData);

  return (
    <TaskContext.Provider value={{ tasks, dispatch }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;