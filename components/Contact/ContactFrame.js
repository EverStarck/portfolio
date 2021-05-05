import { useTranslation } from "react-i18next";
import styled from "@emotion/styled";

import H1 from "../H1";
import ContactButtons from "./ContactButtons";

const ContactStyled = styled.main`
  min-width: 70vw;
  max-width: 70vw;
  height: 100vh;
  padding: 50px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid red;
  .aboutMainContainer {
    p {
      width: 50%;
      margin: 70px 0px 80px 50px;
    }
  }
  @media only screen and (max-width: 767px) {
    min-width: 100vw;
    max-width: 100vw;
    .aboutMainContainer {
      min-width: 90vw;
      max-width: 90vw;
      p {
        width: 100%;
        margin: 50px 0px 70px 0px;
      }
    }
  }
`;

const ContactFrame = () => {
  const { t } = useTranslation("common");
  return (
    <ContactStyled>
      <section className="aboutMainContainer">
        <H1 h1Text={t("letsBuild")} />
        <p>{t("contactText")}</p>

        <ContactButtons aAnimation={false} buttonsFlex={true} />
      </section>
    </ContactStyled>
  );
};

export default ContactFrame;
