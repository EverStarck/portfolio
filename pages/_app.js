import { appWithTranslation } from "next-i18next";
import AnimationProvider from "../context/AnimationContext";
// import { Analytics } from "@vercel/analytics/dist/react";
import DataProvider from "../context/DataContext";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <AnimationProvider>
      <DataProvider>
        <Component {...pageProps} />
        {/* <Analytics /> */}
      </DataProvider>
    </AnimationProvider>
  );
}

export default appWithTranslation(MyApp);
