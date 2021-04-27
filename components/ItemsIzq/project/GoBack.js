import { useRouter } from "next/router";
import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";
import Arrow from "../../Thanks/Arrow";
import { useContext, useEffect } from "react";
import { AnimationContext } from "../../../context/AnimationContext";

const GoBackFrame = styled.div`
  color: var(--black);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    .imgFrameArrow {
      transform: translateX(-20px);
    }
  }
  .imgFrameArrow {
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
  }
  h3 {
    margin-left: 20px;
    font-style: normal;
    font-weight: 300;
    font-size: clamp(1rem, 5vw, 1.5rem);
  }
`;

const GoBack = () => {
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);
  const { t } = useTranslation("project");
  const router = useRouter();

  const goBackClick = () => {
    setAnimationReady({
      ...animationReady,
      goBackButton: true,
    });
    router.push("/");
  };

  return (
    <GoBackFrame onClick={goBackClick}>
      <div className="imgFrameArrow">
        <Arrow arrowWidth="31" arrowHeight="21" />
      </div>
      <h3>{t("goBack")}</h3>
    </GoBackFrame>
  );
};

export default GoBack;
