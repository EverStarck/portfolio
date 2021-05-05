import { useContext, useEffect, useRef } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DataContext } from "../context/DataContext";
import { AnimationContext } from "../context/AnimationContext";

import { gsap } from "gsap";
import styled from "@emotion/styled";

import Hero from "../components/ItemsIzq/project/sections/Hero";
import Mockups from "../components/ItemsIzq/project/sections/Mockups";
import Development from "../components/ItemsIzq/project/sections/Development";
import Sketchs from "../components/ItemsIzq/project/sections/Sketchs";
import Nav from "../components/Nav/Nav";

const ProjectFramePage = styled.main`
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

const WeatherApp = () => {
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
      navClickLink: false,
      goBackButton: false,
    });
  }, []);

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
    // if (data.length > 0 && window.innerWidth < 767) {
    //   if (animationReady.navClickLink) {
    //     tl.to(projectScreen, { opacity: 0 });
    //   }
    // }
  }, [animationReady]);

  return (
    <>
      {data.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Nav isOnProject buttonNavWorks/>
          <ProjectFramePage ref={(el) => (projectScreen = el)}>
            <div className="projectWidth">
              <Hero data={data[1]} />
            </div>
            <Mockups data={data[1]} />
            <div className="projectWidth">
              <Development data={data[1]} />
            </div>
            <Sketchs data={data[1]} />
          </ProjectFramePage>
        </>
      )}
    </>
  );
};

export default WeatherApp;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["project"])),
  },
});
