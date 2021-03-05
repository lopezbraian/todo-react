import React from "react";
import styled from "styled-components";

const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  color : ${(props) => props.modeDark ? "white" : "black"};
  background: ${(props) =>
    props.modeDark ? "var(--indigo-ligth)" : "#ffffff"};
  margin: 30px;
  margin-bottom: 0;

`;
const P = styled.p`
  color: ${(props) =>
    props.select
      ? "var(--primary-Bright-Blue)"
      : "var(--light-theme-Dark-Grayish-Blue)"};
`;

export const Filter = ({ modeDark }) => {
  return (
    <ContainerFilter modeDark={modeDark}>
      <P select={true}>All</P>
      <P select={false}>Active</P>
      <P select={false}>Completed</P>
    </ContainerFilter>
  );
};
