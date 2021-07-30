import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const SkillFrame = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  .skillIcon {
    margin: 0;
    font-size: clamp(1.1rem, 5vw, 1.5rem);
    cursor: default;
  }
  .skillText {
    margin: 0 0 0 10px;
    word-wrap: break-word;
    word-break: break-all;
    font-size: ${props => props.skillFontSize};
  }
`;

const Skill = ({ skill, skillFontSize = "clamp(0.9rem, 3vw, 1.25rem)" }) => {
  const { t } = useTranslation("about");
  return (
    <SkillFrame skillFontSize={skillFontSize}>
      {skill.image.includes("/") ? (
        <Image
          src={skill.image}
          alt={`${skill.text} technology logo`}
          width={skill.width}
          height={skill.height}
        />
      ) : (
        <p className="skillIcon">{skill.image}</p>
      )}
      <p className="skillText">{t(skill.text)}</p>
    </SkillFrame>
  );
};

export default Skill;
