import { Header } from "./components/Header";
import { Tasks } from "./components/Tasks";
import { Filter } from "./components/Filter";
import { useThemeContext } from "./ThemeContext";
import styled from "styled-components";

const ContainerApp = styled.div`
  height:100%;
  padding-bottom:40px;
  background: ${(props) =>
    props.modeDark ? "var(--indigo)" : "#FAFAFA"};
`;

function App() {
  const modeDark = useThemeContext();
  return (
    <ContainerApp modeDark={modeDark.mode()}>
      <Header></Header>
      <Tasks></Tasks>
      <Filter modeDark = {modeDark.mode()}></Filter>
    </ContainerApp>
  );
}

export default App;
