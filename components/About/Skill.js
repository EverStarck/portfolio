import styled from "@emotion/styled";
import Image from "next/image";

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
  }
`;

const Skill = ({ skill, skillText }) => {
  return (
    <SkillFrame>
      {skill.image.includes("/") ? (
        <Image
          src={skill.image}
          alt="Picture of the author"
          width={skill.width}
          height={skill.height}
        />
      ) : (
        <p className="skillIcon">{skill.image}</p>
      )}
      <p className="skillText">{skillText}</p>
    </SkillFrame>
  );
};

export default Skill;
