import Image from "next/image";
import styled from "@emotion/styled";

const BocetImageFrame = styled.div`
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

const BocetImage = ({ data }) => {
  return (
    <BocetImageFrame data={data}>
      {data.bocetsImg.map((bocet) => (
        <Image
          src={bocet}
          alt="Picture of the author"
          width={662}
          height={839}
        />
      ))}
    </BocetImageFrame>
  );
};

export default BocetImage;
