import styled from "@emotion/styled";
import { useContext } from "react";
import { AnimationContext } from "../../../../context/AnimationContext";
import ProjectImage from "../ProjectImage";
import ProjectInfo from "../ProjectInfo";

const HeroFrame = styled.section`
  max-width: 100vw;
  height: 100vh;
  border: 1px solid red;
  scroll-snap-align: start;
  @media only screen and (max-width: 767px) {
    scroll-snap-align: unset;
  }
`;

const Hero = ({ data }) => {
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);
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
  return (
    <HeroFrame onMouseMove={onMouseMove}>
      <ProjectImage projectData={data} />
      <ProjectInfo projectData={data} />
    </HeroFrame>
  );
};

export default Hero;
