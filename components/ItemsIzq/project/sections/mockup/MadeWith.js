import styled from "@emotion/styled";

const MadeWithFrame = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding-top: 50px;
  h1 {
    color: var(--blue);
    margin: 0;
    font-weight: bold;
    font-size: clamp(1.6rem, 5vw, 2.125rem);
  }
`;

const MadeWith = ({ data }) => {
  console.log(data);
  return (
    <MadeWithFrame>
      <h1>Made With</h1>
      {data.madeWith.map(madeWith =>(
          <h1>{madeWith}</h1>
      ))}
    </MadeWithFrame>
  );
};

export default MadeWith;
