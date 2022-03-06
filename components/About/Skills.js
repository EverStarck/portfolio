import styled from "@emotion/styled";
import H2 from "../H2";
import Skill from "./Skill";

const SkillsFrame = styled.section`
  height: ${(props) => props.skillsHeight};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;

  @media only screen and (max-width: 330px) {
    height: auto;
  }
`;

const OtherFrame = styled.section`
  hr {
    border: 1px solid var(--white);
    border-radius: 5px;
    margin-bottom: 50px;
  }
  .otherSkillsFrame {
    height: 100px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    position: relative;
  }
  @media only screen and (max-width: 330px) {
    .otherSkillsFrame {
      height: auto;
    }
  }
`;
const Skills = ({
  skills,
  h2Text,
  skillsHeight,
  h2FontSize,
  skillFontSize,
}) => {
  const OtherSkill = () => {
    return skills[1].map((skill) => <Skill key={skill.text} skill={skill} />);
  };
  return (
    <>
      <H2 h2Text={h2Text} h2Padding="30px 0 25px 0" h2FontSize={h2FontSize} />
      <SkillsFrame skillsHeight={skillsHeight}>
        {skills[0].map((skill) => (
          <Skill key={skill.text} skill={skill} skillFontSize={skillFontSize} />
        ))}
      </SkillsFrame>

      {Object.keys(skills).length === 2 && (
        <OtherFrame>
          <hr />
          <div className="otherSkillsFrame">
            <OtherSkill />
          </div>
        </OtherFrame>
      )}
    </>
  );
};

export default Skills;
