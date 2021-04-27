import { useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { power4, gsap } from "gsap";
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
    z-index: 10;
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

const Wrapper = styled.div`
  display: flex;
  position: fixed;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transform: translate(90vw, 45vh);
  z-index: 9;
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

const Nav = ({ isOnNav }) => {
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);
  // Translate
  const { t } = useTranslation("common");
  let nav = useRef(null);
  let mask = useRef(null);
  let tl = gsap.timeline({ defaults: { duration: 0.7, ease: "power4.inOut" } });

  const closeNav = () => {
    tl.to(nav, { xPercent: 500 });
    tl.to(mask, { transform: "scale(0)" }, "-=.8");
  };

  const showNav = () => {
    tl.to(mask, { transform: "scale(1)" });
    tl.to(nav, { x: 0, xPercent: 0, duration: 0.5 }, "-=.6");
  };

  // Animation when enter to web
  useEffect(() => {
    // Change click on project to false when go home
    setAnimationReady({
      ...animationReady,
      projectClick: false,
    });

    // Deskotp. Show the nav animation to left just in home and when enter to web the first time
    if (
      window.innerWidth > 767 &&
      isOnNav &&
      !animationReady.navFirstAnimation
    ) {
      tl.to(nav, { x: 0, xPercent: 0 });
      setAnimationReady({
        ...animationReady,
        navFirstAnimation: true,
      });
    }
    // Deskotp. Don't show animation when leave project page. The nav will be on his site.
    if (window.innerWidth > 767 && isOnNav && animationReady.navClickLink) {
      tl.to(nav, { x: 0, xPercent: 0, duration: 0 });
    }

    // Show nav when leave project with back button
    if (window.innerWidth > 767 && isOnNav && animationReady.goBackButton) {
      tl.to(nav, { x: 0, xPercent: 0 });
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
      tl.to(nav, { opacity: 0, duration: 0.4, delay: 0.3 });
    }
    // Project Nav Anmations just in desktop
    if (window.innerWidth > 767 && !isOnNav) {
      // Move nav to left when click the nav button
      if (animationReady.navButton && !animationReady.navClickLink) {
        tl.to(nav, { x: 0, xPercent: 0, duration: 0.4 });
      }
      // Move nav to right when click the nav button
      if (!animationReady.navClickLink && !animationReady.navButton) {
        tl.to(nav, { x: 0, xPercent: 100, duration: 0.4 });
      }
    }
  }, [animationReady]);

  return (
    <>
      <NavStyled ref={(el) => (nav = el)} isOnNav={isOnNav}>
        <button className="closeMenuMobil" onClick={closeNav}>
          {t("Close")}
        </button>
        <div className="itemsNav">
          <TextLink fontSize="18px" changeLanguage />
          <TextLink textLink={t("Home")} closeNav={closeNav} />
          <TextLink textLink={t("About")} goTo="about" closeNav={closeNav} />
          <TextLink
            textLink={t("Contact")}
            goTo="contact"
            closeNav={closeNav}
          />
        </div>
      </NavStyled>

      <ButtonNav isOnNav={isOnNav} showNav={showNav} />

      <Wrapper>
        <div className="mask" ref={(el) => (mask = el)}></div>
      </Wrapper>
    </>
  );
};

export default Nav;
