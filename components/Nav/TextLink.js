import Link from "next/link";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { AnimationContext } from "../../context/AnimationContext";

const NavTexts = styled.p`
  margin: 0;
  cursor: pointer;
  .NavLinkSpan {
    /* color: var(--white); */
    color: ${(props) =>
      props.linkIsPathname ? "var(--blue)" : "var(--white)"};
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
  external = false,
}) => {
  const [linkIsPathname, setLinkIsPathname] = useState(false);
  // Context
  const { animationReady, setAnimationReady } = useContext(AnimationContext);
  const router = useRouter();

  // console.log(router);

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

  // Set color to blue
  useEffect(() => {
    if (!changeLanguage) {
      if (
        (!external && goTo === router.pathname) ||
        `/${goTo}` === router.pathname
      ) {
        setLinkIsPathname(true);
      }
    }
  }, []);

  return (
    <NavTexts fontSize={fontSize} linkIsPathname={linkIsPathname}>
      {changeLanguage ? (
        <Link
          href={router.pathname}
          locale={router.locale === "en" ? "es" : "en"}
        >
          <span className="NavLinkSpan">EN/ES</span>
        </Link>
      ) : (
        <span className="NavLinkSpan" onClick={clickNavLink}>
          {textLink}
        </span>
      )}

      {external && (
        <a
          href={goTo}
          target="_blank"
          rel="noopener noreferrer"
          className="NavLinkSpan"
        >
          Blog
        </a>
      )}
    </NavTexts>
  );
};

export default TextLink;
