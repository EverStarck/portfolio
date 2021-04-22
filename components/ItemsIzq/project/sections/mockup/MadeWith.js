import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import H2 from "../../../../H2";

const MadeWithFrame = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 50px;
  padding-top: 50px;
  .allLogoFrame {
    width: 90%;
    display: flex;
    justify-content: center;
    margin: 30px 50px;
    .logoFrame {
      &:not(:last-child) {
        margin-right: 60px;
      }
    }
  }
  @media only screen and (max-width: 665px) {
    margin-bottom: 30px;
    .allLogoFrame {
      margin-bottom: 0px;
      .logoFrame {
        &:not(:last-child) {
          margin-right: 20px;
        }
      }
    }
  }
`;

const MadeWith = ({ data }) => {
  const { t } = useTranslation("project");

  return (
    <MadeWithFrame>
      <H2 h2Text={t("madeWith")} h2FontSize="clamp(1.6rem, 5vw, 2.125rem)" />
      <div className="allLogoFrame">
        {data.madeWith.map((tecUsed) => {
          if (tecUsed === "nextjs") {
            return (
              <div className="logoFrame" key={tecUsed}>
                <Image
                  src="/assets/icons/nextjs.svg"
                  alt="Picture of nextjs logo"
                  width={121}
                  height={72}
                  title="NextJs"
                />
              </div>
            );
          }
          if (tecUsed === "emotion") {
            return (
              <div className="logoFrame" key={tecUsed}>
                <Image
                  src="/assets/icons/emotion.png"
                  alt="Picture of emotionJs logo"
                  width={70}
                  height={70}
                  title="EmotionJs"
                />
              </div>
            );
          }
          if (tecUsed === "figma") {
            return (
              <div className="logoFrame" key={tecUsed}>
                <Image
                  src="/assets/icons/figma.svg"
                  alt="Picture of Figma logo"
                  width={55}
                  height={70}
                  title="Figma"
                />
              </div>
            );
          }
          if (tecUsed === "python") {
            return (
              <div className="logoFrame" key={tecUsed}>
                <Image
                  src="/assets/icons/python.svg"
                  alt="Picture of Python logo"
                  width={74}
                  height={72}
                  title="Python"
                />
              </div>
            );
          }
          if (tecUsed === "flask") {
            return (
              <div className="logoFrame" key={tecUsed}>
                <Image
                  src="/assets/icons/flask.svg"
                  alt="Picture of Flask logo"
                  width={70}
                  height={70}
                  title="Flask"
                />
              </div>
            );
          }
        })}
      </div>
    </MadeWithFrame>
  );
};

export default MadeWith;
