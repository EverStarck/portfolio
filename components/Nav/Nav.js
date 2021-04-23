import { useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { useRouter } from "next/router";
import { gsap } from "gsap";
import styled from "@emotion/styled";

import { AnimationContext } from "../../context/AnimationContext";

import TextLink from "./TextLink";
import ButtonNav from "./ButtonNav";

const NavStyled = styled.nav`
  height: 100%;
  width: 30vw;
  transform: translate(500%);
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
  display: ${(props) => (props.isOnNav ? "flex" : "none")};
  /* display: flex; */
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transform: translate(19vw, 44vh);
  .mask {
    position: absolute;
    width: 400vh;
    height: 300vh;
    background: var(--yellow);
    border-radius: 50%;
    transform: scale(0);
    z-index: 2;
  }
`;

const Nav = ({ isOnNav }) => {
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);
  // Translate
  const { t } = useTranslation("common");
  const router = useRouter();

  let nav = useRef(null);
  let buttonMobile = useRef(null);
  let mask = useRef(null);
  let tl = gsap.timeline({ defaults: { duration: 0.7 } });

  const closeNav = () => {
    gsap.to(nav, { width: 0, height: 0, y: "97vh", opacity: 0, duration: 0.2 });
    gsap.to(buttonMobile, { opacity: 1, duration: 0.4 });
    gsap.to(mask, { transform: "scale(0)", duration: 0.38 });
  };

  const showNav = () => {
    alert("show");
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
    // if (window.innerWidth > 767) {
    //   gsap.to(nav, { xPercent: 0, duration: 0.7 });
    // } else {
    //   // Mobile
    //   gsap.to(nav, {
    //     xPercent: 0,
    //     y: "100vh",
    //     width: 0,
    //     height: 0,
    //     duration: 0,
    //     opacity: 0,
    //   });
    // }
    // Change click on project to false when go home
    setAnimationReady({
      ...animationReady,
      projectClick: false,
    });

    // Deskotp. Show the nav animation to left just in home
    if (window.innerWidth > 767 && isOnNav) {
      tl.to(nav, { x: 0, xPercent: 0 });
      setAnimationReady({
        ...animationReady,
        navFirstAnimation: true,
      });
    }
    console.log("window.innerHeight", window.innerHeight, window.innerWidth);
  }, []);

  useEffect(() => {
    // Animation when click on one project (Hide the nav)
    if (window.innerWidth > 767 && animationReady.projectClick) {
      tl.to(nav, { x: 0, xPercent: 100, duration: 0.4 });
    }
    // Hide nav when click the heart (but show when leave)
    if (animationReady.heartClick) {
      alert("2");
      tl.to(nav, { opacity: 0, duration: 0.4, delay: 0.3 });
    }
    // Move the nav to left when click the nav button
    if (animationReady.navButton && animationReady.navFirstAnimation) {
      tl.to(nav, { x: 0, xPercent: 0, duration: 0.4 });
    }
    // Move the nav to right when click the nav button
    else if (
      !animationReady.navButton &&
      animationReady.navFirstAnimation &&
      !isOnNav
    ) {
      // alert("4");
      tl.to(nav, { x: 0, xPercent: 100, duration: 0.4 });
    }
  }, [animationReady]);

  return (
    <>
      <NavStyled ref={(el) => (nav = el)} isOnNav={isOnNav}>
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

      <ButtonNav
        isOnNav={isOnNav}
        ref={(el) => (buttonMobile = el)}
        onClick={showNav}
      />

      {/* <MobileButtonNav
        ref={(el) => (buttonMobile = el)}
        onClick={showNav}
      ></MobileButtonNav> */}
      <Wrapper isOnNav={isOnNav}>
        <div className="mask" ref={(el) => (mask = el)}></div>
      </Wrapper>
    </>
  );
};

export default Nav;
