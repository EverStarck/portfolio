import styled from "@emotion/styled";
import ProjectImage from "../ProjectImage";
import ProjectInfo from "../ProjectInfo";

const HeroFrame = styled.section`
  max-width: 100vw;
  height: 100vh;
  border: 1px solid red;
  scroll-snap-align: start;
`;

const Hero = ({ data }) => {
  return (
    <HeroFrame>
      <ProjectImage projectData={data} />
      <ProjectInfo projectData={data} />
    </HeroFrame>
  );
};

export default Hero;
