import styled from "@emotion/styled";
import Info from "./Info";
import Skills from "./Skills";
import allSkills from "../../utils/allSkills.json";

const AboutMainFrame = styled.main`
  min-width: 69vw;
  max-width: 69vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  @media only screen and (max-width: 767px) {
    min-width: 110vw;
    max-width: 110vw;
    .aboutMainContainer {
      min-width: 90vw;
      max-width: 90vw;
    }
  }
`;

const AboutMain = () => {
  return (
    <AboutMainFrame>
      <div className="aboutMainContainer">
        <Info />
        {/* {allSkills.map((skills) => (
        <Skills key={skills[0][0].text} skills={skills} />
      ))} */}
        <Skills skills={allSkills[0]} h2Text="Skills" skillsHeight="250px" />
        <Skills
          skills={allSkills[1]}
          h2Text="Soft Skills"
          skillsHeight="200px"
        />
        <Skills
          skills={allSkills[2]}
          h2Text="Other Interest"
          skillsHeight="150px"
        />
      </div>
    </AboutMainFrame>
  );
};

export default AboutMain;
