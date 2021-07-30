import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import AboutMain from "../components/About/AboutMain";
import Nav from "../components/Nav/Nav.js";
import HeadLayout from "../components/HeadLayout";

const About = () => {
  return (
    <HeadLayout title="About me! || EverStarck">
      <AboutMain />
      <Nav />
    </HeadLayout>
  );
};

export default About;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["about", "common"])),
  },
});
