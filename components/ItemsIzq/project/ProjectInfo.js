import styled from "@emotion/styled";
import Button from "../../Button";

const ProjectInfoStyled = styled.div`
  color: var(--white);
  display: flex;

  .projectName {
    width: 100%;
    h1 {
      font-size: 48px;
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
    }
  }
`;

const ProjectInfo = ({ goToProject }) => {
  return (
    <ProjectInfoStyled>
      <div className="projectName">
        <h1 onClick={goToProject}>Weather App</h1>
        {/* <Button buttonText="Visit Site" />
        <Button buttonText="Github" /> */}
      </div>
      <div className="projectDescription">
        <h2>
          🔎 Get the latest weather information for today and the next 5 days
          and also enjoy beautiful images of it!
        </h2>
      </div>
    </ProjectInfoStyled>
  );
};

export default ProjectInfo;
