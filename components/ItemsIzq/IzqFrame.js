import styled from "@emotion/styled";
import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";

// import ReactFullpage from "@fullpage/react-fullpage";

// import ProjectFrame from "./project/ProjectFrame";
// import { DataContext } from "../../context/DataContext";
import ContactFrame from "../Contact/ContactFrame";

const IzqStyled = styled.main`
  background-color: var(--background);
  width: 70vw;
  height: 100%;
  opacity: 0;
  @media only screen and (max-width: 767px) {
    width: 100vw;
  }
`;

const IzqFrame = () => {
  // Context
  // const { data } = useContext(DataContext);
  let izq = useRef(null);

  // Animation when enter to web
  useEffect(() => {
    gsap.to(izq, { opacity: 1, duration: 1.5 });
  }, []);

  return (
    <IzqStyled ref={(el) => (izq = el)}>
      <div className="section" data-anchor="contact">
        <ContactFrame />
      </div>
    </IzqStyled>
  );
};

export default IzqFrame;
