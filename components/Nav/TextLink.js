import Link from "next/link";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const NavTexts = styled.a`
  cursor: pointer;
  :target {
    color: red;
  }
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
  const router = useRouter();
  return (
    <Link href={goTo}>
      <NavTexts fontSize={fontSize}>
        <span className="NavLinkSpan">{textLink}</span>

        {changeLanguage && (
          <Link href="/" locale={router.locale === "en" ? "es" : "en"}>
            <span className="NavLinkSpan">EN/ES</span>
          </Link>
        )}
      </NavTexts>
    </Link>
  );
};

export default TextLink;
