import { useContext, useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";
import styled from "@emotion/styled";

import pharses from "../../public/locales/es/phrases.json";
import { AnimationContext } from "../../context/AnimationContext";

const ThanksFrame = styled.div`
  color: var(--white);
  position: absolute;
  top: 0;
  left: 80px;
  button {
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    font-size: 1rem;
    z-index: 4;
  }
  p {
    margin-left: 10px;
    display: inline-block;
  }
  @media only screen and (max-width: 767px) {
    top: 56px;
    left: 20px;
    p {
      margin-left: 0px;
    }
  }
`;

const ThanksButton = () => {
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);
  const [keyPharses, setKeyPharses] = useState("01");

  const router = useRouter();
  const { t } = useTranslation("phrases");
  let heart = useRef(null);
  let heartText = useRef(null);

  const goToThanks = () => {
    setAnimationReady({
      ...animationReady,
      heartClick: true,
      heartClickLeave: false,
    });
    // Animation
    gsap.to(heartText, { opacity: 0, duration: 0.3 });
    gsap.to(heart, {
      width: "100vw",
      fontSize: "clamp(15rem, 50vw, 45rem)",
      xPercent: -55,
      left: "50%",
      delay: 0.4,
      duration: 0.7,
    });

    setTimeout(() => {
      router.push("/thanks");
    }, 1300);
  };

  // Select random item from JSON pharses and change every 2 seconds
  const keys = Object.keys(pharses);
  useEffect(() => {
    setKeyPharses(keys[Math.floor(Math.random() * keys.length)]);
    const interval = setInterval(() => {
      const randIndex = Math.floor(Math.random() * keys.length);
      let randKey = keys[randIndex];
      setKeyPharses(randKey);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <ThanksFrame>
      <button ref={(el) => (heart = el)} onClick={goToThanks}>
        💛
      </button>
      <p ref={(el) => (heartText = el)}>{t(keyPharses)}</p>
    </ThanksFrame>
  );
};

export default ThanksButton;
