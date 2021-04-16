import styled from "@emotion/styled";
import Link from "next/link";

const StyledProject = styled.section`
  background-color: #ccc;
  height: 70vh;
  width: 80%;
  margin-bottom: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  .imgTest {
    background-color: aliceblue;
    width: 500px;
    height: 200px;
    cursor: pointer;
  }
`;

const ProjectFrame = () => {
  return (
    <StyledProject>
      <Link href="/projectName">
        <div className="imgTest"></div>
      </Link>
    </StyledProject>
  );
};

export default ProjectFrame;
