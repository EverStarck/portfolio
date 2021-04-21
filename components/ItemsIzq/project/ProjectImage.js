import Image from "next/image";
import styled from "@emotion/styled";

const ProjectImageStyled = styled.div`
  position: relative;
  background-color: red;
  width: 110%;
  height: auto;
  cursor: pointer;
  .image {
    border-radius: 16px;
  }
  @media only screen and (max-width: 767px) {
    width: 100%;
    display: flex;
    justify-content: center;
  }
`;

const ProjectImage = ({ goToProject, projectData }) => {
  return (
    <ProjectImageStyled onClick={goToProject}>
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
        <Image
          src={projectData.image}
          alt={`Screenshot of the project ${projectData.title}`}
          width={1281}
          height={665}
          className="image"
          priority={true}
          quality={100}
        />
      )}
    </ProjectImageStyled>
  );
};

export default ProjectImage;
