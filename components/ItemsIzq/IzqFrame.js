import styled from "@emotion/styled";
import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";

import ReactFullpage from "@fullpage/react-fullpage";

import ProjectFrame from "./project/ProjectFrame";
import { DataContext } from "../../context/DataContext";

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
  // Context
  const { data } = useContext(DataContext);
  console.log(data);
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
            {data.map((projectData) => (
              <div
                className="section"
                data-anchor={projectData.anchor}
                key={projectData.title}
              >
                <ProjectFrame projectData={projectData}/>
              </div>
            ))}
            <div className="section" data-anchor="slide5">
              <h1>Contacto</h1>
            </div>
          </ReactFullpage.Wrapper>
        )}
      />
    </IzqStyled>
  );
};

export default IzqFrame;
