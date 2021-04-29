import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import styled from "@emotion/styled";
import ContactButtons from "../components/Contact/ContactButtons";
import Nav from "../components/Nav/Nav";
import H1 from "../components/H1";
import { useTranslation } from "react-i18next";

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
        margin: 50px 0px 70px 40px;
      }
    }
  }
`;

const Contact = () => {
  const { t } = useTranslation("common");

  return (
    <ContactStyled>
      <section className="aboutMainContainer">
        <H1 h1Text={t("letsBuild")} />
        <p>{t("contactText")}</p>

        <ContactButtons aAnimation={false} buttonsFlex={true} />

        <Nav />
      </section>
    </ContactStyled>
  );
};

export default Contact;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
