import { useContext, useEffect, useRef } from "react";
import styled from "@emotion/styled";
import { gsap } from "gsap";
import { AnimationContext } from "../../context/AnimationContext";

const NavStyled = styled.nav`
  height: 100%;
  width: 465px;
  /* width: 0px; */
  transform: translateX(900px);
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  overflow-x: hidden;
  padding: 50px;
  background-color: rgba(204, 204, 204, 0.23);
  border-left: 1px solid;
`;

const Nav = () => {
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);

  let nav = useRef(null);
  // Animation when enter to web
  useEffect(() => {
    // if (!animationReady.firstTime) {
    //   // gsap.to(nav, { width: 465, duration: 0.7 });
    //   gsap.to(nav, { x: 0, duration: 0.7 });

    //   setAnimationReady({
    //     ...animationReady,
    //     firstTime: true,
    //   });
    // }
    gsap.to(nav, { x: 0, duration: 0.7 });
  });

  // Animation when click on one project
  useEffect(() => {
    if (animationReady.projectClick) {
      gsap.to(nav, { x: 900, duration: 1 });
    }
  }, [animationReady]);

  return <NavStyled ref={(el) => (nav = el)}></NavStyled>;
};

export default Nav;
