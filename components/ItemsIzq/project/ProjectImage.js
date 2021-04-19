import Image from "next/image";
import styled from "@emotion/styled";

const ProjectImageStyled = styled.div`
  position: relative;
  /* width: 998.19px; */
  /* height: 584.5px; */
  background-color: red;
  width: 110%;
  height: auto;
  cursor: pointer;
  .image {
    border-radius: 16px;
  }
`;

const ProjectImage = ({ goToProject }) => {
  return (
    <ProjectImageStyled onClick={goToProject}>
      <Image
        src="/projects/weatherAppCover.png"
        alt="Project screenshot"
        // layout="fill"
        // object-fit="cover"
        width={1281}
        height={665}
        className="image"
      />
    </ProjectImageStyled>
  );
};

export default ProjectImage;
