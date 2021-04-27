import styled from "@emotion/styled";
import H2 from "../H2";
import Skill from "./Skill";

const SkillsFrame = styled.section`
  height: ${(props) => props.skillsHeight};
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 100%;
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
`;
const Skills = ({ skills, h2Text, skillsHeight }) => {
  const OtherSkill = () => {
    return skills[1].map((skill) => <Skill skill={skill} />);
  };
  return (
    <>
      <H2 h2Text={h2Text} h2Padding="30px 0 25px 0" />
      <SkillsFrame skillsHeight={skillsHeight}>
        {skills[0].map((skill) => (
          <Skill key={skill.text} skill={skill} />
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
