import { useContext, useEffect, useRef } from "react";
import { DataContext } from "../context/DataContext";
import { AnimationContext } from "../context/AnimationContext";

import { gsap } from "gsap";
import styled from "@emotion/styled";
import fadeIn from "../utils/FadeIn";
import Hero from "./ItemsIzq/project/sections/Hero";
import Mockups from "./ItemsIzq/project/sections/Mockups";
import Development from "./ItemsIzq/project/sections/Development";
import Sketchs from "./ItemsIzq/project/sections/Sketchs";
import Nav from "./Nav/Nav";

const ProjectFramePage = styled.main`
  opacity: 0;
  .projectWidth {
    min-width: 80vw;
    max-width: 80vw;
    margin: 0 auto;
    @media only screen and (max-width: 767px) {
      min-width: 90vw;
      max-width: 90vw;
    }
  }
`;

const ProjectLayout = ({ projectData }) => {
  // Context
  const { data } = useContext(DataContext);
  const { animationReady, setAnimationReady } = useContext(AnimationContext);
  let projectScreen = useRef(null);
  let tl = gsap.timeline({ defaults: { duration: 0.4, ease: "power4.inOut" } });

  // Set navFirstAnimation to true. This mean the firs nav animation (when enter to left) is done.
  useEffect(() => {
    setAnimationReady({
      ...animationReady,
      projectClick: false,
      navFirstAnimation: true,
      goBackButton: false,
    });
  }, []);

  useEffect(() => {
    if (data.length === 0) return;
    fadeIn(projectScreen);
  }, [data]);

  useEffect(() => {
    // Move the projects to left when click the nav button
    if (data.length > 0 && window.innerWidth > 767) {
      // Move project to left when click the nav button
      if (animationReady.navButton) {
        tl.to(projectScreen, { xPercent: -30.2 });
      }
      // Move project to right when click the nav button
      if (!animationReady.navButton) {
        tl.to(projectScreen, { xPercent: 0 });
      }
      // Move projects to right when click some link in nav
      if (animationReady.navClickLink) {
        tl.to(projectScreen, { xPercent: -15 });
      }
    }
  }, [animationReady]);

  return (
    <>
      {data.length > 0 && (
        <>
          <Nav isOnProject buttonNavWorks />
          <ProjectFramePage ref={(el) => (projectScreen = el)}>
            <div className="projectWidth">
              <Hero data={projectData} />
            </div>
            <Mockups data={projectData} />
            <div className="projectWidth">
              <Development data={projectData} />
            </div>
            <Sketchs data={projectData} />
          </ProjectFramePage>
        </>
      )}
    </>
  );
};

export default ProjectLayout;
