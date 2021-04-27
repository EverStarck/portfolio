import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";

const InfoFrame = styled.section`
  h1 {
    color: var(--yellow);
    font-size: clamp(2rem, 4vw, 3rem);
    margin: 0;
    text-align: center;
  }
  h2 {
    margin: 0;
    font-weight: 400;
    font-size: clamp(1rem, 4vw, 1.5rem);
    text-align: center;
  }
`;

const Info = () => {
  const { t } = useTranslation("about");
  return (
    <InfoFrame>
      <h1>Ever Alejandro</h1>
      <h2>{t("frontEndDev")}</h2>
      <p>
        {t("description1")}
        <br />
        {t("description2")}
      </p>
      img here
    </InfoFrame>
  );
};

export default Info;
