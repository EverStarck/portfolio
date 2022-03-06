import Head from "next/head";

export default function Layout({
  children,
  title = "🌟 Welcome to my portfolio || EverStarck",
  description = "👀 Looking for a developer? Look at my portfolio, where you can see more about me, my projects and contact me!",
  keywords = "developer, fullstack, portfolio, seo, dev, coding, starck",
  ogUrl = "https://www.everstarck.dev",
  ogTitle = "EverStarck Web Developer ⚛",
  ogImg = "https://everstarck.dev/MetaTagImage.png",
  metaIconFolder = "portfolio",
}) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
        />
        <meta name="robots" content="index,follow" />
        <meta name="googlebot" content="index,follow" />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywords} />
        <meta name="author" content="Made by EverStarck" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@EverStarck" />
        <meta name="twitter:creator" content="@EverStarck" />
        <meta property="og:url" content={ogUrl} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={ogTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={ogImg} />
        <link rel="canonical" href="https://twitter.com/EverStarck" />
        <link rel="icon" href={`/metaIcons/${metaIconFolder}/favicon.ico`} />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`/metaIcons/${metaIconFolder}/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href={`/metaIcons/${metaIconFolder}/favicon-32x32.png`}
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href={`/metaIcons/${metaIconFolder}/favicon-16x16.png`}
        />
        <link
          rel="manifest"
          href={`/metaIcons/${metaIconFolder}/site.webmanifest`}
        />
        <meta
          name="google-site-verification"
          content="ZJbTYzN7mCOFKfUVozRPtd02757Q7IFuxa8xU-66s48"
        />
      </Head>
      {children}
    </>
  );
}
