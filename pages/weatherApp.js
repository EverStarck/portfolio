import { useContext, useEffect, useRef } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DataContext } from "../context/DataContext";
import { AnimationContext } from "../context/AnimationContext";

import { gsap } from "gsap";
import styled from "@emotion/styled";

import Hero from "../components/ItemsIzq/project/sections/Hero";
import Mockups from "../components/ItemsIzq/project/sections/Mockups";
import Development from "../components/ItemsIzq/project/sections/Development";
import Bocets from "../components/ItemsIzq/project/sections/Bocets";
import Nav from "../components/Nav/Nav";

const ProjectFramePage = styled.main`
  .projectWidth {
    min-width: 80vw;
    max-width: 80vw;
    margin: 0 auto;
    border: 1px solid red;
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
  let tl = gsap.timeline({ defaults: { duration: 0.4 } });

  // Set navFirstAnimation to true. This mean the firs nav animation (when enter to left) is done.
  useEffect(() => {
    setAnimationReady({
      ...animationReady,
      projectClick: false,
      navFirstAnimation: true,
    });
  }, []);

  // Move the projects to left when click the nav button
  useEffect(() => {
    if (data.length > 0 && window.innerWidth > 767) {
      if (animationReady.navButton) {
        tl.to(projectScreen, { xPercent: -30.2 });
      } else {
        tl.to(projectScreen, { xPercent: 0 });
      }
    }
  }, [animationReady]);

  return (
    <>
      {data.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Nav isOnNav={false} />
          <ProjectFramePage ref={(el) => (projectScreen = el)}>
            <div className="projectWidth">
              <Hero data={data[1]}/>
            </div>
            <Mockups data={data[1]} />
            <div className="projectWidth">
              <Development data={data[1]} />
              <Bocets />
            </div>
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
