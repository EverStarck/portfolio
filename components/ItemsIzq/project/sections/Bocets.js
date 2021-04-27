import Image from "next/image";
import styled from "@emotion/styled";
import BocetImage from "./bocets/BocetImage";

const BocetsFrame = styled.section`
  background-color: var(--white);
  min-height: 100vh;
  display: grid;
  place-content: center;
  scroll-snap-align: start;
  .containerWidth {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 100px 0;
    .performanceImg {
      height: 100%;
    }
  }
  @media only screen and (max-width: 1072px) {
    .containerWidth {
      padding: 30px 0;
      min-width: 80vw;
      max-width: 80vw;
    }
  }
  @media only screen and (max-width: 767px) {
    scroll-snap-align: unset;
  }
`;

const Bocets = ({ data }) => {
  return (
    <BocetsFrame>
      <div className="containerWidth">
        <div className="performanceImg">
          <Image
            src={data.lastImgPerformance}
            alt="Picture of the author"
            width={858}
            height={175}
          />
        </div>
        <BocetImage data={data} />
      </div>
    </BocetsFrame>
  );
};

export default Bocets;
