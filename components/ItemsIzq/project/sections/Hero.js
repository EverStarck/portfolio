import styled from "@emotion/styled";
import { useContext } from "react";
import { DataContext } from "../../../../context/DataContext";
import ProjectImage from "../ProjectImage";
import ProjectInfo from "../ProjectInfo";

const HeroFrame = styled.main`
  max-width: 100vw;
  height: 100vh;
  border: 1px solid red;
`;

const Hero = () => {
  // Context
  const { data } = useContext(DataContext);
  console.log(data[0]);
  return (
    <HeroFrame>
      <ProjectImage projectData={data[0]} />
      <ProjectInfo projectData={data[0]} />
    </HeroFrame>
  );
};

export default Hero;
