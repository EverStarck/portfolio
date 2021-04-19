import styled from "@emotion/styled";

const ProjectInfoStyled = styled.div`
  color: var(--white);
  .projectName {
    h1 {
      font-size: 48px;
    }
  }
  .projectDescription {
    h2 {
      font-weight: 400;
    }
  }
`;

const ProjectInfo = () => {
  return (
    <ProjectInfoStyled>
      <div className="projectName">
        <h1>Weather App</h1>
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
