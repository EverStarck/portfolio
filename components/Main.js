import styled from "@emotion/styled";
import DataProvider, { DataContext } from "../context/DataContext";

import IzqFrame from "./ItemsIzq/IzqFrame";
import Nav from "./Nav/Nav";

const AllFrame = styled.div`
  display: flex;
  max-width: 100vw;
  background-color: var(--background);
`;

const Main = () => {
  return (
    <AllFrame>
      {/* <DataProvider> */}
      <IzqFrame />
      {/* </DataProvider> */}
      <Nav />
    </AllFrame>
  );
};

export default Main;
