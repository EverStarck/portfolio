import { useContext } from "react";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { DataContext } from "../context/DataContext";

import HeadLayout from "../components/HeadLayout";
import ProjectLayout from "../components/ProjectLayout";

const WeatherApp = () => {
  // Context
  const { data } = useContext(DataContext);

  return (
    <HeadLayout
      title="Weather App Project || EverStarck"
      description="Check out my weather app project, where I made an app that shows you the latest weather information for today and the next 5 days, and you too can enjoy beautiful pictures!"
      keywords="Weather info, openweathermaps, Weather next days, pixabay, everstarck, starck, portfolio"
      ogUrl="https://www.weather.everstarck.dev"
      ogTitle="👀 See my Weather App project"
      ogImg="https://weather.everstarck.dev/MetaTagImage.png"
      metaIconFolder="weather"
    >
      <ProjectLayout projectData={data[1]} />
    </HeadLayout>
  );
};

export default WeatherApp;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["project"])),
  },
});
