import React from "react";
import styled from "styled-components";
import { useTasksContext } from "../TaskContext";
import { useThemeContext } from "../ThemeContext";
import { InfoTasks } from "./InfoTasks";
import { Task } from "./Task";

const TasksContainer = styled.div`
  
  border-radius: 5px;
  background: ${(props) =>
    props.modeDark ? "var(--indigo-ligth)" : "#ffffff"};
  margin: -25px 30px;
  max-width: 550px;
  @media screen and (min-width:600px) { 
    margin: -25px auto;
  }
`;
export const Tasks = ({ filter }) => {
  const modeDark = useThemeContext();
  const tasksContext = useTasksContext();

  let tasks = tasksContext.tasks;

  switch (filter) {
    case "nocomplete":
      tasks = tasks.filter((t) => !t.state);
      break;

    case "complete":
      tasks = tasks.filter((t) => t.state);
      break;

    default:
      break;
  }

  return (
    <TasksContainer modeDark={modeDark.mode()}>
      {tasks.map((d, index) => (
        <Task key={index} data={{ ...d, indexArray: index }}></Task>
      ))}
      <InfoTasks total={tasks.filter((t) => !t.state).length} />
    </TasksContainer>
  );
};
