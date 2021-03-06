import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import styled from "@emotion/styled";

const ButtonStyled = styled.a`
  display: inline-block;
  cursor: pointer;
  color: ${(props) => props.aColor};
  background: ${(props) => props.aBgImg};
  background-size: cover;
  background-color: ${(props) => props.aBgColor};
  border-radius: ${(props) => props.aBorderR};
  text-align: center;
  font-family: Poppins;
  font-weight: 500;
  font-size: 17px;
  padding: ${(props) => props.aPadding};
  width: ${(props) => props.aWidth};
  height: ${(props) => props.aWidth};
  align-self: ${(props) => props.alignSelf};
  transition: 0.2s ease-in-out;
  transform: ${(props) => (props.aAnimation ? "translateY(100px)" : "")};
  &:hover {
    transform: translateY(-5px);
  }
`;

const Button = ({
  aHref,
  aText,
  aBorderR = "24px",
  aColor = "transparent",
  aBgImg,
  aBgColor = "var(--yellow)",
  aPadding = "6px 50px",
  aWidth,
  aAnimation = true,
  alignSelf,
}) => {
  let buttonRef = useRef(null);
  useEffect(() => {
    if (aAnimation) {
      gsap.to(buttonRef, { y: 0, duration: 0.5 });
    }
  }, []);
  return (
    <ButtonStyled
      aBorderR={aBorderR}
      aColor={aColor}
      aBgColor={aBgColor}
      aPadding={aPadding}
      aWidth={aWidth}
      aBgImg={aBgImg}
      aAnimation={aAnimation}
      alignSelf={alignSelf}
      href={aHref}
      rel="noopener noreferrer"
      target="_blank"
      ref={(el) => (buttonRef = el)}
    >
      {aText}
    </ButtonStyled>
  );
};

export default Button;
