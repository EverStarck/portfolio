import { useContext, useRef } from "react";
import { AnimationContext } from "../../context/AnimationContext";
import styled from "@emotion/styled";

const ButtonNavStyled = styled.div`
  width: 102px;
  height: 100px;
  background-color: var(--yellow);
  cursor: pointer;
  border-radius: 8px 0px 0px 8px;
  position: fixed;
  /* top: 70px; */
  bottom: 80%;
  right: 0;
  z-index: 6;
  @media only screen and (max-width: 767px) {
    width: 60px;
    height: 60px;
    background-color: var(--yellow);
    position: fixed;
    /* top: calc(100% - 70px); */
    bottom: 10px;
    right: 10px;
    border-radius: 50%;
  }
`;

const ButtonNav = ({ isOnNav }) => {
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);
  let buttonNav = useRef(null);

  const buttonNavClick = () => {
    if (!isOnNav) {
      setAnimationReady({
        ...animationReady,
        navButton: !animationReady.navButton,
      });
    }
  };

  return (
    <ButtonNavStyled
      ref={(el) => (buttonNav = el)}
      onClick={buttonNavClick}
      isOnNav={isOnNav}
    ></ButtonNavStyled>
  );
};

export default ButtonNav;
