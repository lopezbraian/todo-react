import React from "react";
import backgroundMobileLight from "../images/bg-mobile-light.jpg";
import backgroundDesktopLight from "../images/bg-desktop-light.jpg";
import backgroundMobileDark from "../images/bg-mobile-dark.jpg";
import backgroundDesktopDark from "../images/bg-desktop-dark.jpg";
import moon from "../images/icon-moon.svg";
import sun from "../images/icon-sun.svg";
import { InputCreate } from "./InputCreate";
import styled from "styled-components";
import { useThemeContext } from "../ThemeContext";

export const HeaderContainer = styled.header`
  height: 210px;
  width: 100%;
  background-image: ${(props) =>
    props.modeDark
      ? `url(${backgroundMobileDark})`
      : `url(${backgroundMobileLight})`};
  background-repeat: no-repeat;
  background-size: cover;
  padding: 40px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  @media screen and (min-width: 600px) {
    background-image: ${(props) =>
      props.modeDark
        ? `url(${backgroundDesktopDark})`
        : `url(${backgroundDesktopLight})`};
  }
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: white;
  display: flex;
  max-width: 550px;
  justify-content: space-between;
  margin: auto;
  h1 {
    margin: 0;
    font-weight: 400;
  }
  button {
    outline: 1px solid transparent;
    border: 1px solid transparent;
    background: transparent;
    cursor:pointer;
  }
`;

export const Header = () => {
  const theme = useThemeContext();
  const modeDark = theme.mode();

  const changeTheme = () => {
    theme.changeMode(!modeDark);
  };
  return (
    <HeaderContainer modeDark={modeDark}>
      <Content>
        <h1>TODO</h1>
        <button onClick={changeTheme}>
          <img src={modeDark ? sun : moon} alt="button-night" />
        </button>
      </Content>
      <InputCreate />
    </HeaderContainer>
  );
};
