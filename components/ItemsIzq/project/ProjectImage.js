import Image from "next/image";
import { useContext } from "react";
import { AnimationContext } from "../../../context/AnimationContext";
import styled from "@emotion/styled";

const ProjectImageStyled = styled.div`
  position: relative;
  width: ${(props) => (props.isOnPage ? "100%" : "110%")};
  height: ${(props) => (props.isOnPage ? "70vh" : "auto")};
  cursor: ${(props) => (props.isOnPage ? "auto" : "pointer")};
  transform: translate3d(
    -${(props) => props.moveImg.x / window.innerWidth}%,
    -${(props) => props.moveImg.y / window.innerHeight}%,
    0
  );
  .image {
    border-radius: 16px;
  }
  @media only screen and (max-width: 767px) {
    ${(props) =>
      props.isOnPage
        ? null
        : `
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;`}
  }
  @media only screen and (max-width: 430px) {
    height: auto;
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const ProjectImage = ({ goToProject, projectData, isOnPage }) => {
  // Context
  const { animationReady } = useContext(AnimationContext);
  const { moveImg } = animationReady;
  return (
    <ProjectImageStyled
      onClick={goToProject}
      moveImg={moveImg}
      isOnPage={isOnPage}
    >
      {window.innerWidth < 430 ? (
        // Mobile
        <Image
          src={projectData.mobileImage}
          alt={`Screenshot of the project ${projectData.title}`}
          width={387}
          height={387}
          className="image"
          priority={true}
          quality={100}
        />
      ) : (
        // Desktop
        <>
          {/* Home */}
          {!isOnPage ? (
            <Image
              src={projectData.image}
              alt={`Screenshot of the project ${projectData.title}`}
              width={1281}
              height={665}
              className="image"
              priority={true}
              quality={100}
            />
          ) : (
            // Project
            <Image
              src={projectData.image}
              alt={`Screenshot of the project ${projectData.title}`}
              className="image"
              priority={true}
              quality={100}
              // width={1281}
              // height={665}
              layout="fill"
              objectFit="cover"
            />
          )}
        </>
      )}
    </ProjectImageStyled>
  );
};

export default ProjectImage;
