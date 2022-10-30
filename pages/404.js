import Image from "next/image";
import styled from "@emotion/styled";
import Link from "next/link";

import HeadLayout from "../components/HeadLayout";

export default function Custom404() {
  const Frame404 = styled.div`
    background-color: var(--yellow);
    color: var(--blue);
    min-width: 100vw;
    max-width: 100vw;
    min-height: 100vh;
    max-height: 100vh;
    position: static;
    overflow-y: auto;
    .imgFrame404 {
      width: 25%;
      position: absolute;
      bottom: 0px;
      left: 0;
      left: 50%;
      transform: translateX(-50%);
      pointer-events: none;
    }
    main {
      margin-top: 50px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      h1 {
        margin: 0;
        font-size: clamp(2rem, 5vw, 4rem);
      }
      h2 {
        margin: 0;
        color: var(--black);
        font-weight: normal;
        font-size: clamp(1rem, 2vw, 1.3rem);
        text-align: center;
        padding: 0 20px;
      }
      section {
        margin-top: 50px;
        a {
          font-size: clamp(1.1rem, 2vw, 1.5rem);
          font-weight: 500;
          border: 2px solid var(--blue);
          background-color: var(--blue);
          color: var(--yellow);
          padding: 15px 25px;
          border-radius: 4px;
          transition: all 0.3s ease-in-out;
          &:hover {
            background-color: var(--yellow);
            color: var(--blue);
          }
        }
      }
    }
    @media (max-width: 1000px) {
      .imgFrame404 {
        width: 50%;
      }
    }
    @media (max-width: 500px) {
      .imgFrame404 {
        width: 85%;
      }
    }
  `;

  return (
    <HeadLayout
      title="404 || EverStarck"
      description="Looks like you got lost! Go home on everstarck.dev!"
      keywords="404, error"
      ogUrl="https://www.weather.everstarck.dev"
      ogTitle="404 page"
      ogImg="https://weather.everstarck.dev/MetaTagImage.png"
    >
      <Frame404>
        <div className="imgFrame404">
          <Image
            src="/assets/404.webp"
            alt="Picture of the author"
            layout="responsive"
            width={500}
            height={500}
          />
        </div>
        <main>
          <h1>Whooooops!</h1>
          <h2>
            I'm dead? No! I just can't find the page you're looking for 😥
          </h2>
          <section>
            <Link href="/">
              <a>Go to Home!</a>
            </Link>
          </section>
        </main>
      </Frame404>
    </HeadLayout>
  );
}
