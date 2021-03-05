import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../ThemeContext";
import { InfoTasks } from "./InfoTasks";
import { Task } from "./Task";

const tasksData = [
  {
    content: "contenido uno ",
    state: false,
  },
  {
    content: "contenido dos ",
    state: false,
  },
  {
    content: "contenido tres ",
    state: false,
  },
  {
    content: "contenido cuatro ",
    state: true,
  },
  {
    content: "contenido cinco ",
    state: false,
  },
  {
    content: "contenido seis ",
    state: false,
  },
  {
    content: "contenido siete ",
    state: true,
  },
];

const TasksContainer = styled.div`
  margin: 0 30px;
  margin-top: -25px;
  border-radius: 5px;
  background: ${(props) =>
    props.modeDark ? "var(--indigo-ligth)" : "#ffffff"};
`;
export const Tasks = () => {
  const modeDark = useThemeContext();
  return (
    <TasksContainer modeDark = {modeDark.mode()}>
      {tasksData.map((d, index) => (
        <Task key={index} data={d}></Task>
      ))}
      <InfoTasks total = {tasksData.filter((t) => !t.state).length}/>
    </TasksContainer>
  );
};
