import { createContext,useCallback,useContext,useMemo,useReducer } from "react";

import taskData from "../data/db";
import taskReducer from "../reducers/taskReducer";
const TaskContext=createContext();

export const TaskProvider=({childern})=>{
    const[tasks,dispatch]=useReducer(taskReducer,taskData);

      const addTask = useCallback((task) => {
    dispatch({
      type: "ADD_TASK",
      payload: task,
    });
  }, []);

     const deleteTask = useCallback((taskId) => {
    dispatch({
      type: "DELETE_TASK",
      payload: taskId,
    });
  }, []);

  const toggleTask = useCallback((taskId) => {
    dispatch({
      type: "TOGGLE_TASK",
      payload: taskId,
    });
  }, []);


  const contextValue = useMemo(
    () => ({
      tasks,
      addTask,
      deleteTask,
      toggleTask,
    }),
    [tasks, addTask, deleteTask, toggleTask]
  );

  return (
    <TaskContext.Provider value={contextValue}>
      {children}
    </TaskContext.Provider>
  );
};

export const useTasks = () => {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useTasks must be used inside TaskProvider");
  }

  return context;
};

