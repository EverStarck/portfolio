import { useContext, useEffect, useRef } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "react-i18next";
import Link from "next/link";
import { gsap } from "gsap";
import styled from "@emotion/styled";
import { AnimationContext } from "../context/AnimationContext";
import Arrow from "../components/Thanks/Arrow";

const ThanksPage = styled.main`
  background: var(--background);
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--white);
  .heartThanks {
    position: absolute;
    margin: 0;
    transform: translate(-17px, -68px);
    font-size: clamp(15rem, 50vw, 45rem);
  }
  .textThanks {
    align-self: flex-end;
    text-align: center;
    opacity: 0;
    h1 {
      font-size: clamp(2rem, 5vw, 4rem);
      margin: 0;
    }
    h2 {
      margin-top: 0;
      font-weight: 400;
      font-size: clamp(1rem, 3vw, 1.5rem);
    }
  }
  .goBackHeart {
    position: absolute;
    top: 20px;
    left: 50px;
    transition: 0.4s ease;
    filter: invert(49%) sepia(94%) saturate(1222%) hue-rotate(183deg)
      brightness(92%) contrast(86%);
    cursor: pointer;
    &:hover {
      transform: translateX(-10px);
    }
  }
  @media only screen and (max-width: 767px) {
    .heartThanks {
      transform: translate(0px, -40px);
    }
    align-items: flex-start;
    .textThanks {
      align-self: center;
    }
    .goBackHeart {
      top: 80%;
      left: 45%;
    }
  }
`;

const Thanks = () => {
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);
  const { t } = useTranslation("common");
  let heartText = useRef(null);

  useEffect(() => {
    gsap.to(heartText, {
      opacity: 1,
      duration: 0.4,
    });
    setAnimationReady({
      ...animationReady,
      heartClick: false,
      goBackButton: true,
    });
  }, []);

  return (
    <ThanksPage>
      <p className="heartThanks">💛</p>
      <div className="textThanks" ref={(el) => (heartText = el)}>
        <h1>{t("thanks")}</h1>
        <h2>
          {t("thanksText1")} <strong>401</strong> {t("thanksText2")}
        </h2>
        <Link href="/">
          <div className="goBackHeart">
            <Arrow arrowWidth="50" arrowHeight="30" />
          </div>
        </Link>
      </div>
    </ThanksPage>
  );
};

export default Thanks;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
