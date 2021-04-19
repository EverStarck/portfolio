import styled from "@emotion/styled";

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
      <IzqFrame />
      <Nav />
    </AllFrame>
  );
};

export default Main;
