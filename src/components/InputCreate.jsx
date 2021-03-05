import React from "react";
import styled from "styled-components";
import { Status } from "./Status";

const InputContainer = styled.div`
  width: 100%;
  position: relative;
  input {
    height: 50px;
    padding-left: 60px;
    font-family : inherit;
    width: 100%;
    border-radius: 5px;
    border: 1px solid transparent;
    outline :transparent;
    font-size : 1rem;
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
  return (
    <InputContainer>
      <div className="content-status">
        <Status></Status>
      </div>
      <input type="text" name="" id="" placeholder="Create a new todo" />
    </InputContainer>
  );
};
