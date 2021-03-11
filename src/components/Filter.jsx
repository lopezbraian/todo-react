import React from "react";
import styled from "styled-components";

const ContainerFilter = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  color: ${(props) => (props.modeDark ? "white" : "black")};
  background: ${(props) =>
    props.modeDark ? "var(--indigo-ligth)" : "#ffffff"};
  margin: 50px 30px;
  max-width: 550px;
  @media screen and (min-width: 600px) {
    margin: 50px auto;
  }
`;
const P = styled.p`
  cursor: pointer;
  color: ${(props) =>
    props.select
      ? "var(--primary-Bright-Blue)"
      : "var(--light-theme-Dark-Grayish-Blue)"};
`;

export const Filter = ({ modeDark, setFilter, filter }) => {
  const handleFilter = (param) => {
    setFilter(param);
  };
  return (
    <ContainerFilter modeDark={modeDark}>
      <P onClick={() => handleFilter("all")} select={filter === "all"}>
        All
      </P>
      <P
        onClick={() => handleFilter("nocomplete")}
        select={filter === "nocomplete"}
      >
        Active
      </P>
      <P
        onClick={() => handleFilter("complete")}
        select={filter === "complete"}
      >
        Completed
      </P>
    </ContainerFilter>
  );
};
