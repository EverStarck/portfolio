import Link from "next/link";
import { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";
import styled from "@emotion/styled";

import { AnimationContext } from "../../../context/AnimationContext";

const StyledProject = styled.section`
  background-color: #ccc;
  height: 70vh;
  width: 80%;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  .imgTest {
    background-color: aliceblue;
    width: 500px;
    height: 200px;
    cursor: pointer;
  }
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
      <div className="imgTest" onClick={goToProject}></div>
    </StyledProject>
  );
};

export default ProjectFrame;
