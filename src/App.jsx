import React , {useState} from 'react'
import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { Filter } from "./components/Filter";
import { useThemeContext } from "./ThemeContext";
import styled from "styled-components";

const ContainerApp = styled.div`
  height:100vh;
  padding-bottom:40px;
  background: ${(props) =>
    props.modeDark ? "var(--indigo)" : "#FAFAFA"};
`;

function App() {
  const modeDark = useThemeContext();
  const [filter , setFilter ] = useState('all')
  return (
    <ContainerApp modeDark={modeDark.mode()}>
      <Header></Header>
      <Tasks filter = {filter}></Tasks>
      <Filter filter = {filter} setFilter= {setFilter} modeDark = {modeDark.mode()}></Filter>
    </ContainerApp>
  );
}

export default App;
