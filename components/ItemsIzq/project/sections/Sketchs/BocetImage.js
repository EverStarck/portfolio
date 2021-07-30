import Image from "next/image";
import styled from "@emotion/styled";

const SketchImageFrame = styled.div`
  min-width: 80vw;
  max-width: 80vw;
  width: 100%;
  column-gap: 50px;
  margin-top: 50px;
  height: 100%;
  display: flex;
  justify-content: ${(props) =>
    props.data.bocetsImg.length === 1 ? "center" : "space-between"};
  .bocetImgContainer {
    position: relative;
    width: 662px;
    height: 839px;
  }
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    margin-top: 30px;
    row-gap: 30px;
    .bocetImgContainer {
      width: 100%;
      height: 380px;
    }
  }
`;

const SketchImage = ({ data }) => {
  return (
    <SketchImageFrame data={data}>
      {data.bocetsImg.map((sketch) => (
        <div className="bocetImgContainer">
          <Image
            key={sketch}
            src={sketch}
            alt={`photo of ${data.title} project sketches`}
            layout="fill"
            objectFit="contain"
          />
        </div>
      ))}
    </SketchImageFrame>
  );
};

export default SketchImage;
