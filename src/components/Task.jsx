import React from "react";
import styled from "styled-components";
import { useThemeContext } from "../ThemeContext";
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
    text-decoration: ${(props) => (props.state ? "line-through" : "none")} ;
    color : ${(props) => props.modeDark ? "white" : "black"};
    color : ${(props) => props.state && "var(--ice-blue)"};
  }    
`;

const ContainerButtonClose = styled.div`
  width: 25%;
  text-align: center;
`;
const ContainerStatus = styled.div`
  width: 25%;
  padding-left: 15px;
`;
export const Task = ({ data }) => {
  const modeDark = useThemeContext();
  return (
    <TaskContainer>
      <ContainerStatus>
        <Status state={data.state}></Status>
      </ContainerStatus>

      <ContainerText state={data.state} modeDark={modeDark.mode()}>
        <p>{data.content}</p>
      </ContainerText>

      <ContainerButtonClose>
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
