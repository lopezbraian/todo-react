import React from "react";
import styled from "styled-components";

const Rounded = styled.div`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  border: 0.5px solid var(--ice-blue);
  background: ${props => props.showCheck ? ('linear-gradient(#57ddff, #bd6bf5)') : ('transparent')} ;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Status = ({ state }) => {
  let showCheck;
  if (!state) {
    showCheck = false;
  } else {
    showCheck = true;
  }
  return (
    <Rounded showCheck = {showCheck}>
      {showCheck && (
        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9">
          <path
            fill="none"
            stroke="#FFF"
            strokeWidth="2"
            d="M1 4.304L3.696 7l6-6"
          />
        </svg>
      )}
    </Rounded>
  );
};
