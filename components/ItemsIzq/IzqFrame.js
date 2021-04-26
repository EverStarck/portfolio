import styled from "@emotion/styled";
import { useContext, useEffect, useRef } from "react";
import { gsap } from "gsap";

import ReactFullpage from "@fullpage/react-fullpage";

import ProjectFrame from "./project/ProjectFrame";
import { DataContext } from "../../context/DataContext";

const IzqStyled = styled.main`
  background-color: var(--background);
  width: 70vw;
  height: 100%;
  min-height: 200vh;
  opacity: 0;
  @media only screen and (max-width: 767px) {
    width: 100vw;
  }
`;

const IzqFrame = () => {
  // Context
  const { data } = useContext(DataContext);
  let izq = useRef(null);

  // Animation when enter to web
  useEffect(() => {
    gsap.to(izq, { opacity: 1, duration: 1.5 });
  }, []);

  return (
    <IzqStyled ref={(el) => (izq = el)}>
      <ReactFullpage
        render={() => (
          <ReactFullpage.Wrapper>
            {data.map((projectData) => (
              <div
                className="section"
                data-anchor={projectData.anchor}
                key={projectData.title}
              >
                <ProjectFrame projectData={projectData} />
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
