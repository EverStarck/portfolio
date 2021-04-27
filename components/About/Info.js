import styled from "@emotion/styled";

const InfoFrame = styled.section`
  /* display: flex;
flex-direction: column;
justify-content: center;
align-items: center; */
  h1 {
    color: var(--yellow);
    font-size: clamp(2rem, 4vw, 3rem);
    margin: 0;
    text-align: center;
  }
  h2 {
    margin: 0;
    font-weight: 400;
    font-size: clamp(1rem, 4vw, 1.5rem);
    text-align: center;
  }
`;

const Info = () => {
  return (
    <InfoFrame>
      <h1> Ever Alejandro </h1>
      <h2>Front end developer</h2>
      <p>
        I am a 19-year-old software engineering student. I was always passionate
        about technology and learning. <br /> I like to do minimalist and
        stylish things
      </p>
      img here
    </InfoFrame>
  );
};

export default Info;
