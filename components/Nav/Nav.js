import { useRouter } from "next/router";
import { useContext, useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import styled from "@emotion/styled";

import { AnimationContext } from "../../context/AnimationContext";

import TextLink from "./TextLink";
import ButtonNav from "./ButtonNav";

const NavStyled = styled.nav`
  height: 100%;
  width: 30vw;
  transform: ${(props) => (props.isOnHome ? "translate(100%)" : "")};
  transform: ${(props) => (props.isOnProject ? "translate(100%)" : "")};
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
    transform: translate(100%);
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
  bottom: 40px;
  right: 40px;
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

const Nav = ({
  isOnHome = false,
  isOnProject = false,
  buttonNavWorks = false,
}) => {
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);
  // Translate
  const { t } = useTranslation("common");
  let nav = useRef(null);
  let mask = useRef(null);
  const navTimelineFirst = useRef();
  const navTimelineProject = useRef();
  const navProjectButton = useRef();
  const mobileNav = useRef();
  let tl = gsap.timeline({
    defaults: { duration: 0.7, ease: "power4.inOut" },
  });

  const closeNav = () => {
    mobileNav.current.reverse();
  };

  const showNav = () => {
    mobileNav.current.play();
  };

  // Animations
  useEffect(() => {
    // Mobile Nav animation
    mobileNav.current = gsap.timeline({ paused: true });
    if (window.innerWidth < 767) {
      mobileNav.current.to(mask, { transform: "scale(1)", duration: 0.5 });
      mobileNav.current.to(nav, { x: 0, xPercent: 0 }, "-=.6");
    }

    // Desktop Anmations
    navTimelineFirst.current = gsap.timeline({ paused: false });
    navTimelineProject.current = gsap.timeline({ paused: true });
    navProjectButton.current = gsap.timeline({ paused: true });

    if (window.innerWidth > 767) {
      // Show Nav only in Home
      // Make the animation only the first time you enter to web
      if (isOnHome && !animationReady.navFirstAnimation) {
        navTimelineFirst.current.to(nav, {
          duration: 0.7,
          x: "0%",
          ease: "power4.inOut",
        });
        setAnimationReady({
          ...animationReady,
          navFirstAnimation: true,
        });
      }
      // If the first animation is alredy done and you go home, the nav will be stay in his position and without animation
      if (isOnHome && animationReady.navFirstAnimation) {
        navTimelineFirst.current.to(nav, {
          duration: 0.0,
          x: "0%",
        });
      }

      // Project
      // Hide nav animation when click some project
      navTimelineProject.current.to(nav, {
        duration: 0.7,
        x: "100%",
        ease: "power4.inOut",
      });

      // Animation whit button
      navProjectButton.current.to(nav, {
        duration: 0.4,
        x: "0%",
        ease: "power4.inOut",
      });
    }
  }, []);

  useEffect(() => {
    // Hide nav animation when click some project
    if (animationReady.projectClick) {
      navTimelineProject.current.play();
    }

    // Show and hide nav when make click in it. Project page
    if (animationReady.navButton) {
      navProjectButton.current.play();
    } else {
      navProjectButton.current.reverse();
    }

    // Hide nav when click the heart (but show when leave)
    if (animationReady.heartClick) {
      tl.to(nav, { opacity: 0, duration: 0.4, delay: 0.3 });
    }
  }, [animationReady]);

  const router = useRouter();
  console.log(router);

  return (
    <>
      <NavStyled
        ref={(el) => (nav = el)}
        isOnHome={isOnHome}
        isOnProject={isOnProject}
      >
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

      <ButtonNav buttonNavWorks={buttonNavWorks} showNav={showNav} />

      <Wrapper>
        <div className="mask" ref={(el) => (mask = el)}></div>
      </Wrapper>
    </>
  );
};

export default Nav;
