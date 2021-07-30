import styled from "@emotion/styled";
import { useContext, useEffect, useRef } from "react";
import { AnimationContext } from "../../../../context/AnimationContext";
import { gsap } from "gsap";
import ProjectImage from "../ProjectImage";
import ProjectInfo from "../ProjectInfo";

const HeroFrame = styled.section`
  max-width: 100vw;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  scroll-snap-align: start;
  @media only screen and (max-width: 767px) {
    opacity: 0;
    scroll-snap-align: unset;
  }
`;

const Hero = ({ data }) => {
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);
  let heroRef = useRef(null);

  // Change the x and y position to move image
  function onMouseMove(e) {
    setAnimationReady({
      ...animationReady,
      moveImg: {
        x: e.clientX,
        y: e.clientY,
      },
    });
  }

  useEffect(() => {
    // Animation when enter to page
    if (window.innerWidth < 767) {
      gsap.to(heroRef, { opacity: 1, duration: 1.5 });
    }
  }, []);

  return (
    <HeroFrame onMouseMove={onMouseMove} ref={(el) => (heroRef = el)}>
      <ProjectImage projectData={data} isOnPage={true} />
      <ProjectInfo projectData={data} isOnPage={true} />
    </HeroFrame>
  );
};

export default Hero;
