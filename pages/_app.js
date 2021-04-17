import { appWithTranslation } from "next-i18next";
import AnimationProvider from "../context/AnimationContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AnimationProvider>
      <Component {...pageProps} />{" "}
    </AnimationProvider>
  );
}

export default appWithTranslation(MyApp);
