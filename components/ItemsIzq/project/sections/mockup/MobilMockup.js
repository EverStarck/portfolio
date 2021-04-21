import Image from "next/image";
import styled from "@emotion/styled";

const MobilFrame = styled.section`
  position: relative;
  right: -25px;
  top: 30px;
  z-index: 5;
  filter: drop-shadow(0 0 0.75rem rgba(000, 000, 000, 0.35));
  .mobilContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    &:nth-of-type(odd) {
      pointer-events: none;
    }
    .mobilGlass {
      position: absolute;
      z-index: 3;
      width: 95%;
      height: 90%;
    }
    .imgBackgroundMobil {
      position: absolute;
      z-index: 2;
      width: 95%;
      height: 90%;
    }
  }
  @media only screen and (max-width: 767px) {
    right: 0px;
    top: 50px;
  }
  @media only screen and (max-width: 400px) {
    top: 0px;
  }
`;

const MobilMockup = ({ data }) => {
  return (
    <MobilFrame>
      <div className="mobilContainer">
        <div className="mobilGlass">
          <Image
            src="/assets/mobilGlass.webp"
            alt="Picture of mobile glass refection"
            width={171}
            height={383}
          />
        </div>
        <div className="imgBackgroundMobil">
          <Image
            src={data.developmentImg[0]}
            alt={`Picture of ${data.title} website`}
            width={235}
            height={483}
          />
        </div>
        <div className="mobilMockup">
          <Image
            src="/assets/mobil.webp"
            alt="Picture of mobile mockup"
            width={250}
            height={535}
          />
        </div>
      </div>
    </MobilFrame>
  );
};

export default MobilMockup;
