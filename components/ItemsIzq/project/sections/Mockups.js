import styled from "@emotion/styled";
import MadeWith from "./mockup/MadeWith";
import MobilMockup from "./mockup/MobilMockup";
import PcMockup from "./mockup/PcMockup";

const MockupsFrame = styled.main`
  max-width: 100vw;
  height: 100%;
  background-color: var(--white);
  min-height: 100vh;
  .madeWith {
    /* position: absolute;
    top: 20px; */
  }
  .mockupContainer {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media only screen and (max-width: 767px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    .mockupContainer {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 90vw;
    }
  }
`;
const Mockups = ({data}) => {
  return (
    <MockupsFrame>
      <div className="madeWith">
        <MadeWith data={data}/>
      </div>
      <div className="mockupContainer">
        <MobilMockup data={data}/>
        <PcMockup data={data}/>
      </div>
    </MockupsFrame>
  );
};

export default Mockups;
