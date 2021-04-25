import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import Button from "../../Button";

const ProjectInfoStyled = styled.div`
  color: var(--white);
  display: flex;
  .projectName {
    width: 100%;
    h1 {
      font-size: clamp(2rem, 3vw, 3rem);
      cursor: ${(props) => (props.isOnPage ? "auto" : "pointer")};
    }
    .buttonsFrame {
      display: flex;
      margin-left: 20px;
      a {
        &:first-of-type {
          margin-right: 13px;
        }
      }
    }
  }
  .projectDescription {
    height: 100%;
    display: flex;
    align-items: flex-end;
    margin-top: 20px;
    padding-right: 50px;
    h2 {
      padding-top: 50px;
      font-weight: 400;
      font-size: clamp(1.15rem, 3vw, 1.5rem);
    }
  }

  @media only screen and (max-width: 767px) {
    .projectName {
      padding-right: 0px;
    }
  }
  @media only screen and (max-width: 925px) {
    flex-direction: column;
    position: relative;
    .projectName {
      h1 {
        margin-bottom: 0;
        text-align: ${(props) => (props.isOnPage ? "center" : "auto")};
      }
      .buttonsFrame {
        margin: 0;
        width: 100%;
        display: flex;
        justify-content: center;
        position: absolute;
        bottom: 0;
      }
    }
    .projectDescription {
      padding: 0;
      margin-bottom: ${(props) => (props.isOnPage ? "70px" : "0px")};
      position: relative;
      top: -10px;
      h2 {
        padding: 0;
        text-align: ${(props) => (props.isOnPage ? "center" : "auto")};
      }
    }
  }
`;

const ProjectInfo = ({ goToProject, projectData, isOnPage }) => {
  const { t } = useTranslation("project");
  return (
    <ProjectInfoStyled isOnPage={isOnPage}>
      <div className="projectName">
        <h1 onClick={goToProject}>{projectData.title}</h1>
        {isOnPage && (
          <div className="buttonsFrame">
            <Button
              aHref={projectData.url}
              aText="Visit Site"
              aColor="var(--black)"
            />
            <Button
              aHref={projectData.github}
              aText="Github"
              aBgColor="var(--background)"
              aBorderR="50%"
              aPadding="0"
              aWidth="38px"
              aBgImg="url(/assets/icons/github.svg)"
            />
          </div>
        )}
      </div>
      <div className="projectDescription">
        <h2>{t(projectData.description)}</h2>
      </div>
    </ProjectInfoStyled>
  );
};

export default ProjectInfo;
