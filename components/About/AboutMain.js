import { useTranslation } from "react-i18next";
import { useEffect, useRef } from "react";
import styled from "@emotion/styled";
import fadeIn from "../../utils/FadeIn";
import Info from "./Info";
import Skills from "./Skills";
import allSkills from "../../utils/allSkills.json";
import ContactButtons from "../Contact/ContactButtons";
import H2 from "../H2";

const AboutMainFrame = styled.main`
  min-width: 69vw;
  max-width: 69vw;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 50px 0;
  opacity: 0;
  .aboutMainContainer {
    padding: 0 50px;
  }
  @media only screen and (max-width: 767px) {
    max-width: 110vw;
    .aboutMainContainer {
      min-width: 90vw;
      max-width: 90vw;
      padding: 0;
    }
  }
`;

const AboutMain = () => {
  const { t } = useTranslation("about");
  let contentAbout = useRef(null);
  // Animation when enter to web
  useEffect(() => {
    fadeIn(contentAbout);
  }, []);

  return (
    <AboutMainFrame ref={(el) => (contentAbout = el)}>
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
        <H2 h2Text={t("contact")} h2Padding="30px 0 25px 0" />
        <ContactButtons aAnimation={false} />
      </div>
    </AboutMainFrame>
  );
};

export default AboutMain;
