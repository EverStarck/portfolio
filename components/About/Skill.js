import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslation } from "react-i18next";

const SkillFrame = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 14px;
  .skillIcon {
    margin: 0;
    font-size: 24px;
    cursor: default;
  }
  .skillText {
    margin: 0 0 0 10px;
    word-wrap: break-word;
    word-break: break-all;
    font-size: clamp(0.9rem, 3vw, 1.25rem);
  }
`;

const Skill = ({ skill }) => {
  const { t } = useTranslation("about");
  return (
    <SkillFrame>
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
