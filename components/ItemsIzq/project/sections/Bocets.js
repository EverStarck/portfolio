import styled from "@emotion/styled";

const BocetsFrame = styled.section`
  min-height: 100vh;
  scroll-snap-align: start;
  @media only screen and (max-width: 767px) {
    min-width: 90vw;
    max-width: 90vw;
    scroll-snap-align: unset;
  }
`;

const Bocets = () => {
  return <BocetsFrame>Bocets</BocetsFrame>;
};

export default Bocets;
