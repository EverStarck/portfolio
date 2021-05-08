import styled from "@emotion/styled";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import H2 from "../../../H2";

const DevelopmentFrame = styled.section`
  min-height: 100vh;
  scroll-snap-align: start;
  .devTextFrame {
    width: 50%;
    p {
      font-size: clamp(1rem, 3vw, 1.125rem);
    }
  }
  .devImage {
    margin-top: 100px;
    position: relative;
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
  }
  @media only screen and (max-width: 767px) {
    min-width: 90vw;
    max-width: 90vw;
    min-height: 70vh;
    scroll-snap-align: unset;
    .devTextFrame {
      width: 100%;
      p {
        &:not(:last-child) {
          margin-top: 30px;
        }
      }
    }
    .devImage {
      margin-top: 50px;
      padding-bottom: 25px;

    }
  }
`;

const Development = ({ data }) => {
  const { t } = useTranslation("project");

  return (
    <DevelopmentFrame>
      <H2
        h2Text="Development"
        h2Color="var(--yellow)"
        h2FontSize="clamp(2rem, 4vw,4rem)"
        h2TextAlign="right"
        h2Padding="30px 0 0 0"
      />
      <div className="devTextFrame">
        {data.developmentText.map((p) => (
          <p key={p}>{t(p)}</p>
        ))}
      </div>
      <div className="devImage">
        <Image
          src={data.developmentImg}
          alt={`Screenshot of figma ${data.title} project design`}
          width={1000}
          height={500}
        />
      </div>
    </DevelopmentFrame>
  );
};

export default Development;
