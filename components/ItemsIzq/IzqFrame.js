import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import ReactFullpage from "@fullpage/react-fullpage";

import ProjectFrame from "./project/ProjectFrame";

const IzqStyled = styled.main`
  background-color: var(--background);
  opacity: 0;
  width: 70vw;
  height: 100%;
  min-height: 200vh;
  @media only screen and (max-width: 767px) {
    width: 100vw;
  }
`;

const IzqFrame = () => {
  // GSAP
  let izq = useRef(null);
  // Animation when enter to web
  useEffect(() => {
    // let tl = gsap.timeline({ defaults: { duration: 0.7 } });
    gsap.to(izq, { opacity: 1, duration: 0.7 });
  });
  return (
    <IzqStyled ref={(el) => (izq = el)}>
      <ReactFullpage
        navigation
        navigationPosition="left"
        render={() => (
          <ReactFullpage.Wrapper>
            <div className="section" data-anchor="slide1">
              <ProjectFrame />
            </div>
            <div className="section" data-anchor="slide2">
              <ProjectFrame />
            </div>
            <div className="section" data-anchor="slide3">
              <ProjectFrame />
            </div>
            <div className="section" data-anchor="slide4">
              <ProjectFrame />
            </div>
            <div className="section" data-anchor="slide5">
              <ProjectFrame />
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </IzqStyled>
  );
};

export default IzqFrame;
