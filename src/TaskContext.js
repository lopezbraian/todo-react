import React, { createContext, useContext, useState } from "react";

const TaskContext = createContext();

export const TaskProvider = (props) => {
  const taskLocalStorage = localStorage.getItem("tasks");
  let t;
  if (taskLocalStorage) {
    t = JSON.parse(taskLocalStorage);
  } else {
    t = [];
  }
  const [tasks, setTasks] = useState(t);

  const addTask = (task) => {
    let newtasks = [...tasks];
    newtasks.push(task);
    updateTasks(newtasks);
  };

  const updateTasks = (newtasks) => {
    setTasks(newtasks);
    localStorage.setItem("tasks", JSON.stringify(newtasks));
  };
  const deleteTasks = (indexArray) => {
    let newtasks = [...tasks];
    newtasks = newtasks.filter((_, index) => index !== indexArray);
    updateTasks(newtasks);
  };
  const changeStateTask = (indexArray) => {
    let newtasks = [...tasks];
    newtasks[indexArray].state = !newtasks[indexArray].state;
    updateTasks(newtasks);
  };
  
  const clearComplete = () => {
    let newtasks = [...tasks];
    newtasks = newtasks.filter((t) => !t.state)
    updateTasks(newtasks);
  }

  return (
    <TaskContext.Provider
      value={{ tasks, addTask, deleteTasks, changeStateTask , clearComplete }}
      {...props}
    />
  );
};

export const useTasksContext = () => {
  const value = useContext(TaskContext);
  return value;
};
