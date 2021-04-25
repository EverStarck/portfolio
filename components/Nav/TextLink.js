import Link from "next/link";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AnimationContext } from "../../context/AnimationContext";

const NavTexts = styled.a`
  cursor: pointer;
  .NavLinkSpan {
    color: var(--white);
    font-size: ${(props) => props.fontSize};
    font-weight: 600;
    transition: 0.4s ease;
    &:hover {
      color: var(--blue);
    }
  }
`;

const TextLink = ({
  textLink,
  fontSize = "clamp(3rem, 5vw, 4rem)",
  changeLanguage = false,
  goTo = "/",
}) => {
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);
  const router = useRouter();

  const clickNavLink = () => {
    console.log(router);
    // alert(goTo);

    setAnimationReady({
      ...animationReady,
      navClickLink: true,
      navButton: false,
    });

    setTimeout(() => {
      router.push(goTo);
    }, 2000);
  };

  return (
    // <Link href={goTo}>
    <NavTexts fontSize={fontSize}>
      <span className="NavLinkSpan" onClick={clickNavLink}>
        {textLink}
      </span>

      {changeLanguage && (
        <Link href="/" locale={router.locale === "en" ? "es" : "en"}>
          <span className="NavLinkSpan">EN/ES</span>
        </Link>
      )}
    </NavTexts>
    // </Link>
  );
};

export default TextLink;
