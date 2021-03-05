import React from "react";
import background from "../images/bg-mobile-light.jpg";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import {InputCreate} from './InputCreate'
import styled from "styled-components";
import { useThemeContext } from "../ThemeContext";



export const HeaderContainer = styled.header`
  height: 210px;
  width: 100%;
  background-image: ${(props) => `url(${props.background})`};
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 30px;
  display:flex;
  flex-direction:column;
  justify-content:space-around;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: white;
  display: flex;
  justify-content: space-between;
  h1 {
    margin: 0;
    font-weight: 400;
  }
  button {
    outline: 1px solid transparent;
    border: 1px solid transparent;
    background: transparent;
  }
`;

export const Header = () => {
  const theme = useThemeContext();
  const modeDark = theme.mode()

  const changeTheme = () => {
    theme.changeMode(!modeDark)
  }
  return (
    <HeaderContainer background={background}>
      <Content>
        <h1>TODO</h1>
        <button onClick={changeTheme}>
          <img src={ modeDark ? (sun) : (moon) } alt="button-night"/>
        </button>
      </Content>
      <InputCreate/>
    </HeaderContainer>
  );
};
