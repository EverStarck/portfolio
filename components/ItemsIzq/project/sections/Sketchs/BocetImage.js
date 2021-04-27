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
  /* border: 1px solid red; */
  @media only screen and (max-width: 767px) {
    flex-direction: column;
    margin-top: 30px;
    row-gap: 30px;
  }
`;

const SketchImage = ({ data }) => {
  return (
    <SketchImageFrame data={data}>
      {data.bocetsImg.map((sketch) => (
        <Image
          key={sketch}
          src={sketch}
          alt={`photo of ${data.title} project sketches`}
          width={662}
          height={839}
        />
      ))}
    </SketchImageFrame>
  );
};

export default SketchImage;
