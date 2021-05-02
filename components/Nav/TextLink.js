import Link from "next/link";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useContext } from "react";
import { AnimationContext } from "../../context/AnimationContext";
import { route } from "next/dist/next-server/server/router";

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
  closeNav,
  textLink,
  fontSize = "clamp(3rem, 5vw, 4rem)",
  changeLanguage = false,
  goTo = "/",
}) => {
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);
  const router = useRouter();

  console.log(router);

  const clickNavLink = () => {
    setAnimationReady({
      ...animationReady,
      navClickLink: true,
    });

    if (window.innerWidth < 767) {
      closeNav();
      setTimeout(() => {
        router.push(goTo);
      }, 450);
    } else {
      router.push(goTo);
    }
  };

  return (
    <NavTexts fontSize={fontSize}>
      {!changeLanguage && (
        <span className="NavLinkSpan" onClick={clickNavLink}>
          {textLink}
        </span>
      )}

      {changeLanguage && (
        <Link
          href={router.pathname}
          locale={router.locale === "en" ? "es" : "en"}
        >
          <span className="NavLinkSpan">EN/ES</span>
        </Link>
      )}
    </NavTexts>
  );
};

export default TextLink;
