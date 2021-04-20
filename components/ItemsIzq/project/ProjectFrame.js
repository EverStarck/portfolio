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
  /* width: 70vw; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-left: 80px;
  .projectCointaner {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
  }
`;

const ProjectFrame = ({projectData}) => {
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
      router.push(`/${projectData.anchor}`);
    }, 1000);
  };

  return (
    <StyledProject ref={(el) => (project = el)}>
      <div className="projectCointaner">
        <ProjectImage goToProject={goToProject} projectData={projectData}/>
        <ProjectInfo goToProject={goToProject} projectData={projectData}/>
      </div>
    </StyledProject>
  );
};

export default ProjectFrame;
