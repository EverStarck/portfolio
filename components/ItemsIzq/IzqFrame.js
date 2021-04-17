import { useTranslation } from "next-i18next";
import styled from "@emotion/styled";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import ReactFullpage from "@fullpage/react-fullpage";

import ChangeLanguage from "../ChangeLanguage";
import ProjectFrame from "./project/ProjectFrame";

const IzqStyled = styled.main`
  background-color: antiquewhite;
  opacity: 0;
  width: 90vw;
  height: 100%;
  min-height: 200vh;
`;

const IzqFrame = () => {
  const { t } = useTranslation("common");
  // GSAP
  let izq = useRef(null);
  // Animation when enter to web
  useEffect(() => {
    // let tl = gsap.timeline({ defaults: { duration: 0.7 } });
    gsap.to(izq, { opacity: 1, duration: 0.7 });
  });
  return (
    <IzqStyled ref={(el) => (izq = el)}>
      <h1>{t("h1")}</h1>
      <ChangeLanguage />

      <ReactFullpage
        navigation
        navigationPosition = 'left'
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
