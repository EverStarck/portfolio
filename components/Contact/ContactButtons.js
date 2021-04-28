import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Button from "../Button";

const ContactButtonsFrame = styled.div`
  display: flex;
  align-items: center;
  /* flex-direction: column; */
  small {
    padding: 0 20px;
    text-align: center;
    /* display: block; */
  }
  .otherButtonsContact {
    a {
      &:not(:last-of-type) {
        margin-right: 18px;
      }
    }
  }
  @media only screen and (max-width: 428px) {
    flex-direction: column;
    small {
      padding: 10px 20px;
      display: block;
    }
  }
`;

const ContactButtons = () => {
  const { t } = useTranslation("common");

  return (
    <ContactButtonsFrame>
      <Button
        aHref="mailto:mail@mail.com"
        aPadding="10px 50px"
        aText={t("sayHello")}
        aColor="var(--blue)"
        aBgColor="var(--white)"
      />
      <div className="otherButtonsContact">
        <small>or</small>
        <Button
          aHref="https://twitter.com/EverStarck"
          aText="Twitter"
          aBgColor="var(--background)"
          aBorderR="0%"
          aPadding="0"
          aWidth="28px"
          aBgImg="url(/assets/icons/twitter.svg) no-repeat center center"
        />
        <Button
          aHref="https://github.com/EverStarck"
          aText="Github"
          aBgColor="var(--background)"
          aBorderR="50%"
          aPadding="0"
          aWidth="28px"
          aBgImg="url(/assets/icons/github.svg)"
        />
        <Button
          aHref="https://www.linkedin.com/in/everstarck/"
          aText="Linkedin"
          aBgColor="var(--background)"
          aBorderR="0%"
          aPadding="0"
          aWidth="28px"
          aBgImg="url(/assets/icons/linkedin.svg) no-repeat center center"
        />
      </div>
    </ContactButtonsFrame>
  );
};

export default ContactButtons;
