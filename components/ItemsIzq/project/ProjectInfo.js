import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Button from "../../Button";

const ProjectInfoStyled = styled.div`
  color: var(--white);
  display: flex;
  .projectName {
    width: 100%;
    h1 {
      font-size: clamp(2rem, 3vw, 3rem);
      cursor: pointer;
    }
  }
  .projectDescription {
    height: 100%;
    display: flex;
    align-items: flex-end;
    margin-top: 20px;
    padding-right: 50px;
    h2 {
      margin: 0;
      padding-top: 50px;
      font-weight: 400;
      font-size: clamp(1.15rem, 3vw, 1.5rem);
    }
  }
  @media only screen and (max-width: 767px) {
    .projectDescription {
      padding-right: 0px;
    }
  }
  @media only screen and (max-width: 430px) {
    flex-direction: column;
    .projectDescription {
      margin-top: 0px;
      h2 {
        padding: 0;
      }
    }
  }
`;

const ProjectInfo = ({ goToProject, projectData }) => {
  const { t } = useTranslation("project");
  return (
    <ProjectInfoStyled>
      <div className="projectName">
        <h1 onClick={goToProject}>{projectData.title}</h1>
        {/* <Button buttonText="Visit Site" />
        <Button buttonText="Github" /> */}
      </div>
      <div className="projectDescription">
        <h2>{t(projectData.description)}</h2>
      </div>
    </ProjectInfoStyled>
  );
};

export default ProjectInfo;
