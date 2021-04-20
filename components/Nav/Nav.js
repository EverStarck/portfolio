import { useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import styled from "@emotion/styled";

import { AnimationContext } from "../../context/AnimationContext";

import TextLink from "./TextLink";

const NavStyled = styled.nav`
  height: 100%;
  /* width: 465px; */
  width: 30vw;
  /* width: 0px; */
  transform: translateX(900px);
  position: fixed;
  z-index: 2;
  top: 0;
  right: 0;
  overflow-x: hidden;
  padding: 50px;
  background-color: rgba(25, 25, 25, 0.35);
  border-left: 1px solid var(--white);
  .itemsNav {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-end;
    row-gap: 20px;
  }
  .closeMenuMobil {
    display: none;
  }
  /* Change the padding. Avoid text overlap with nav */
  @media only screen and (max-width: 1005px) {
    padding: 50px 20px;
  }

  /* Mobil */
  @media only screen and (max-width: 767px) {
    width: 100vw;
    padding: 50px;
    background-color: transparent;
    border-top: 1px solid var(--white);
    border-left: none;
    .closeMenuMobil {
      display: inline-block;
      position: absolute;
      right: 50px;
      background: transparent;
      border: none;
      color: var(--white);
      font-weight: 500;
      font-size: 26px;
      cursor: pointer;
    }
  }
`;

const MobileButtonNav = styled.div`
  width: 60px;
  height: 60px;
  background-color: var(--yellow);
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
  @media only screen and (min-width: 767px) {
    display: none;
  }
`;

const Wrapper = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transform: translate(19vw, 44vh);
  .mask {
    position: absolute;
    width: 300vh;
    height: 300vh;
    background: var(--yellow);
    border-radius: 50%;
    transform: scale(0);
    z-index: 2;
  }
`;

const Nav = () => {
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);
  // Translate
  const { t } = useTranslation("common");
  let nav = useRef(null);
  let buttonMobile = useRef(null);
  let mask = useRef(null);

  const closeNav = () => {
    gsap.to(nav, { width: 0, height: 0, y: "97vh", opacity: 0, duration: 0.2 });
    gsap.to(buttonMobile, { opacity: 1, duration: 0.4 });
    gsap.to(mask, { transform: "scale(0)", duration: 0.38 });
  };

  const showNav = () => {
    gsap.to(nav, {
      width: "100vw",
      height: "100%",
      y: 0,
      opacity: 1,
      duration: 0.7,
    });
    gsap.to(buttonMobile, { opacity: 0, duration: 0.4 });
    gsap.to(mask, { transform: "scale(1)", duration: 0.7 });
  };

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
    if (window.innerWidth > 767) {
      gsap.to(nav, { x: 0, duration: 0.7 });
    } else {
      gsap.to(nav, {
        x: 0,
        y: "100vh",
        width: 0,
        height: 0,
        duration: 0,
        opacity: 0,
      });
    }
    console.log("window.innerHeight", window.innerHeight, window.innerWidth);
  });

  useEffect(() => {
    // Animation when click on one project (Hide the nav)
    if (window.innerWidth > 767 && animationReady.projectClick) {
      gsap.to(nav, { x: 900, duration: 1 });
    }

    // Hide nave when click the heart
    if (animationReady.heartClick) {
      gsap.to(nav, { opacity: 0, duration: 0.4, delay: 0.3 });
    }
  }, [animationReady]);

  return (
    <>
      <NavStyled ref={(el) => (nav = el)}>
        <button className="closeMenuMobil" onClick={closeNav}>
          Close
        </button>
        <div className="itemsNav">
          <TextLink fontSize="18px" changeLanguage />
          <TextLink textLink={t("home")} goTo="/" />
          <TextLink textLink={t("about")} goTo="/about" />
          <TextLink textLink={t("contact")} goTo="/contact" />
        </div>
      </NavStyled>

      <MobileButtonNav
        ref={(el) => (buttonMobile = el)}
        onClick={showNav}
      ></MobileButtonNav>
      <Wrapper>
        <div className="mask" ref={(el) => (mask = el)}></div>
      </Wrapper>
    </>
  );
};

export default Nav;
