import React, { useState } from "react";
import styled from "styled-components";
import { useTasksContext } from "../TaskContext";
import { Status } from "./Status";

const InputContainer = styled.form`
  width: 100%;
  position: relative;
  max-width:550px;
  margin:auto;
  input {
    height: 50px;
    padding-left: 60px;
    font-family: inherit;
    width: 100%;
    border-radius: 5px;
    border: 1px solid transparent;
    outline: transparent;
    font-size: 1rem;
  }
  .content-status {
    position: absolute;
    display: flex;
    align-items: center;
    top: 0;
    left: 15px;
    bottom: 0;
  }
`;
export const InputCreate = () => {
  const tasksContext = useTasksContext();
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (value !== "") {
      let newtask = {
        content: value,
        state: false,
      };
      tasksContext.addTask(newtask);
      setValue('')
    }
  };
  const handleChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <InputContainer onSubmit={handleSubmit}>
      <div className="content-status">
        <Status></Status>
      </div>
      <input
        type="text"
        onChange={handleChange}
        value={value}
        placeholder="Create a new todo"
      />
    </InputContainer>
  );
};
