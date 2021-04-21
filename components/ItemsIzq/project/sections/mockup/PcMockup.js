import Image from "next/image";
import styled from "@emotion/styled";

const PcFrame = styled.section`
  position: relative;
  right: 25px;
  &:nth-of-type(even) {
    pointer-events: none;
  }
  .pcGlass {
    pointer-events: none;
    position: absolute;
    z-index: 3;
  }
  .imgBackground {
    position: absolute;
    z-index: 2;
    width: 99%;
    top: 2px;
    left: 3px;
  }
  @media only screen and (max-width: 767px) {
    right: 0px;
  }
  @media only screen and (max-width: 400px) {
    .imgBackground {
      top: 1px;
      left: 1px;
    }
  }
`;

const PcMockup = ({data}) => {
  return (
    <PcFrame>
      <div className="pcGlass">
        <Image
          src="/assets/pcGlass.webp"
          alt="Picture of computer screen reflection"
          width={865}
          height={495}
        />
      </div>
      <div className="imgBackground">
        <Image
          src={data.developmentImg[1]}
          alt={`Picture of ${data.title} website`}
          width={865}
          height={495}
        />
      </div>
      <div className="pcMockup">
        <Image
          src="/assets/PC.webp"
          alt="Picture of computer mockup"
          width={872}
          height={652}
        />
      </div>
    </PcFrame>
  );
};

export default PcMockup;
