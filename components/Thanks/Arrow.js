import Image from "next/image";

const Arrow = ({ arrowWidth, arrowHeight }) => {
  return (
    <Image
      src="/assets/icons/arrow.svg"
      alt="Back arrow"
      width={arrowWidth}
      height={arrowHeight}
    />
  );
};

export default Arrow;
