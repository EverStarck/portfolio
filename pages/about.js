import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AboutMain from "../components/About/AboutMain";
import Nav from "../components/Nav/Nav.js";

const About = () => {
  return (
    <>
      <AboutMain />
      <Nav isOnNav={false} />
    </>
  );
};

export default About;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["about"])),
  },
});
