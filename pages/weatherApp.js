import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

import Hero from "../components/ItemsIzq/project/sections/Hero";
import Mockups from "../components/ItemsIzq/project/sections/Mockups";
import Development from "../components/ItemsIzq/project/sections/Development";
import Bocets from "../components/ItemsIzq/project/sections/Bocets";
import styled from "@emotion/styled";
import ButtonNav from "../components/Nav/ButtonNav";

const ProjectFramePage = styled.main`
  .projectWidth {
    min-width: 80vw;
    max-width: 80vw;
    margin: 0 auto;
    border: 1px solid red;
    @media only screen and (max-width: 767px) {
      min-width: 90vw;
      max-width: 90vw;
    }
  }
`;

const WeatherApp = () => {
  // Context
  const { data } = useContext(DataContext);
  return (
    <>
      {data.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <>
        <ButtonNav/>
        <ProjectFramePage>
          <div className="projectWidth">
            <Hero data={data[1]} />
          </div>
          <Mockups data={data[1]} />
          <div className="projectWidth">
            <Development data={data[1]} />
            <Bocets />
          </div>
        </ProjectFramePage>
        </>
      )}
    </>
  );
};

export default WeatherApp;

export const getStaticProps = async ({ locale }) => ({
  props: {
    ...(await serverSideTranslations(locale, ["project"])),
  },
});
