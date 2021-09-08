import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import ContactFrame from "../components/Contact/ContactFrame";
import HeadLayout from "../components/HeadLayout";
import Nav from "../components/Nav/Nav";

const Contact = () => {
  return (
    <HeadLayout title="Contact me! || EverStarck">
      <ContactFrame />
      <Nav />
    </HeadLayout>
  );
};

export default Contact;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
