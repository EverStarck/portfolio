import Link from "next/link";
import { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { AnimationContext } from "../../../context/AnimationContext";
import ProjectImage from "./ProjectImage";
import ProjectInfo from "./ProjectInfo";

const StyledProject = styled.section`
  border: 1px solid red;
  height: 100vh;
  width: 90vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const ProjectFrame = () => {
  const router = useRouter();
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);

  // GSAP
  let project = useRef(null);

  const goToProject = () => {
    setAnimationReady({
      ...animationReady,
      projectClick: true,
    });

    // Animation when click on one project
    gsap.to(project, { opacity: 0, duration: 1, delay: 0.5 });

    setTimeout(() => {
      router.push("/projectName");
    }, 1000);
  };

  return (
    <StyledProject ref={(el) => (project = el)}>
      <ProjectImage goToProject={goToProject} />
      <ProjectInfo />
    </StyledProject>
  );
};

export default ProjectFrame;
