import { useContext, useEffect, useRef } from "react";
import { AnimationContext } from "../../context/AnimationContext";
import { gsap } from "gsap";
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
  z-index: 7;
  opacity: 0;
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

const ButtonNav = ({ isOnNav, showNav }) => {
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);
  let buttonNav = useRef(null);

  // Animation when enter to web
  useEffect(() => {
    if (!animationReady.projectClick) {
      gsap.to(buttonNav, { opacity: 1, duration: 1.5 });
    } else {
      gsap.to(buttonNav, { opacity: 1, duration: 0 });
    }
  }, []);

  useEffect(() => {
    // Animation when click heart
    if (animationReady.heartClick) {
      gsap.to(buttonNav, { opacity: 0, duration: 0.4, delay: 0.3 });
    }
  }, [animationReady]);

  const buttonNavClick = () => {
    if (!isOnNav) {
      setAnimationReady({
        ...animationReady,
        navButton: !animationReady.navButton,
      });
    }
    // Make nav menu appear just in mobil
    if (window.innerWidth < 767) {
      showNav();
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