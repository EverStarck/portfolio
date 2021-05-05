import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useEffect, useRef } from "react";
import { gsap } from "gsap";

import ContactFrame from "../components/Contact/ContactFrame";
import Nav from "../components/Nav/Nav";

const Contact = () => {
  let contentContact = useRef(null);
  // Animation when enter to web
  useEffect(() => {
    gsap.fromTo(
      contentContact,
      {
        duration: 0,
        opacity: "0",
      },
      {
        duration: 1,
        opacity: "1",
        ease: "power4.inOut",
      }
    );
  }, []);

  return (
    <>
      <div ref={(el) => (contentContact = el)}>
        <ContactFrame />
      </div>
      <Nav />
    </>
  );
};

export default Contact;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["common"])),
  },
});
