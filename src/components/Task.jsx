import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../ThemeContext";
import { useTasksContext } from "../TaskContext";

import { Status } from "./Status";

const TaskContainer = styled.div`
  border-bottom: 0.5px solid #cccbcb;
  position: relative;
  display: flex;
  align-items: center;
  height: 60px;
`;
const ContainerText = styled.div`
  width: 70%;
  p {
    text-decoration: ${(props) => (props.state ? "line-through" : "none")};
    color: ${(props) => (props.modeDark ? "white" : "black")};
    color: ${(props) => props.state && "var(--ice-blue)"};
  }
`;

const ContainerButtonClose = styled.div`
  width: 25%;
  text-align: center;
  cursor:pointer;
`;
const ContainerStatus = styled.div`
  width: 25%;
  padding-left: 15px;
`;
export const Task = ({ data }) => {
  const { indexArray, state, content } = data;
  const modeDark = useThemeContext();

  const tasksContext = useTasksContext();

  const handleDelete = (indexArray) => {
    tasksContext.deleteTasks(indexArray);
  };

  const handleStateTask = (indexArray) => {
    tasksContext.changeStateTask(indexArray);
  };
  return (
    <TaskContainer>
      <ContainerStatus onClick={() => handleStateTask(indexArray)}>
        <Status state={state}></Status>
      </ContainerStatus>

      <ContainerText state={state} modeDark={modeDark.mode()}>
        <p>{content}</p>
      </ContainerText>

      <ContainerButtonClose onClick={() => handleDelete(indexArray)}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
          <path
            fill="#494C6B"
            fillRule="evenodd"
            d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"
          />
        </svg>
      </ContainerButtonClose>
    </TaskContainer>
  );
};
