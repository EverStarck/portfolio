import styled from "@emotion/styled";
import Info from "./Info";
import Skills from "./Skills";
import allSkills from "../../utils/allSkills.json";
import { useTranslation } from "react-i18next";

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
  const { t } = useTranslation("about");
  return (
    <AboutMainFrame>
      <div className="aboutMainContainer">
        <Info />

        <Skills
          skills={allSkills[0]}
          h2Text={t("Skills")}
          skillsHeight="250px"
        />
        <Skills
          skills={allSkills[1]}
          h2Text={t("SoftSkills")}
          skillsHeight="200px"
        />
        <Skills
          skills={allSkills[2]}
          h2Text={t("OtherInterest")}
          skillsHeight="150px"
          h2FontSize="clamp(1.5rem, 4vw, 2.25rem)"
          skillFontSize="clamp(.8rem, 2vw, 1.125rem)"
        />
      </div>
    </AboutMainFrame>
  );
};

export default AboutMain;
