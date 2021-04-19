import Image from "next/image";
import styled from "@emotion/styled";

const ProjectImageStyled = styled.div`
  position: relative;
  width: 998.19px;
  height: 584.5px;
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
        layout="fill"
        object-fit="cover"
        className="image"
      />
    </ProjectImageStyled>
  );
};

export default ProjectImage;
