import styled from "@emotion/styled";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import H1 from "../H1";

const InfoFrame = styled.section`
  h2 {
    margin: 0;
    font-weight: 400;
    font-size: clamp(1rem, 4vw, 1.5rem);
    text-align: center;
  }
  p {
    font-size: clamp(0.9rem, 3vw, 1.25rem);
  }
  .infoImgFrame {
    display: flex;
    justify-content: center;
    margin: 50px 0;
    .borderRadiusImg {
      border-radius: 16px;
    }
  }
`;

const Info = () => {
  const { t } = useTranslation("about");
  return (
    <InfoFrame>
      <H1 h1Text="Ever Alejandro" />
      <h2>{t("frontEndDev")}</h2>
      <p>
        {t("description1")}
        <br />
        {t("description2")}
      </p>

      <div className="infoImgFrame">
        <Image
          src="/assets/me.webp"
          alt="Picture of the author (Ever Alejandro)"
          width={656}
          height={745}
          layout="intrinsic"
          objectFit="cover"
          className="borderRadiusImg"
          objectPosition="top"
        />
      </div>
    </InfoFrame>
  );
};

export default Info;
