import { useEffect, useRef, useContext } from "react";
import { gsap } from "gsap";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import { AnimationContext } from "../../../context/AnimationContext";
import ProjectImage from "./ProjectImage";
import ProjectInfo from "./ProjectInfo";
import ThanksButton from "../../Thanks/ThanksButton";

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
  @media only screen and (max-width: 767px) {
    padding: 20px;
  }
`;

const ProjectFrame = ({ projectData, isOnPage }) => {
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);
  const router = useRouter();
  // GSAP
  let project = useRef(null);
  let tl = gsap.timeline({ defaults: { duration: 0.7 } });

  const goToProject = () => {
    setAnimationReady({
      ...animationReady,
      projectClick: true,
      navButton: false,
    });

    // Animation when click on one project
    if (window.innerWidth > 767) {
      tl.to(project, { width: "110vw", delay: 0.5 });
    } else {
      tl.to(project, { opacity: 0, duration: 0.5 });
    }

    // Wait end the animation to redirect at project link
    if (window.innerWidth > 767) {
      setTimeout(() => {
        router.push(`/${projectData.anchor}`);
      }, 1000);
    } else {
      setTimeout(() => {
        router.push(`/${projectData.anchor}`);
      }, 500);
    }
  };

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

  // Hide the all the projects when click the heart
  useEffect(() => {
    if (animationReady.heartClick) {
      gsap.to(project, { opacity: 0, duration: 0.4, delay: 0.3 });
    }
  }, [animationReady]);

  // Check if leave the heart with the browser button
  useEffect(() => {
    if (animationReady.heartClick && router.pathname === "/") {
      gsap.to(project, { opacity: 1, duration: 0.4, delay: 0.3 });
      setAnimationReady({
        ...animationReady,
        heartClick: false,
      });
    }
  }, []);
  return (
    <>
      {projectData.thxButton && <ThanksButton />}
      <StyledProject ref={(el) => (project = el)} onMouseMove={onMouseMove}>
        <div className="projectCointaner">
          <ProjectImage
            goToProject={goToProject}
            projectData={projectData}
            move={animationReady.moveImg}
            isOnPage={false}
          />
          <ProjectInfo
            goToProject={goToProject}
            projectData={projectData}
            isOnPage={false}
          />
        </div>
      </StyledProject>
    </>
  );
};

export default ProjectFrame;
