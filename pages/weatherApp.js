import { useContext } from "react";
import { DataContext } from "../context/DataContext";
import Hero from "../components/ItemsIzq/project/sections/Hero";
import Mockups from "../components/ItemsIzq/project/sections/Mockups";
import Development from "../components/ItemsIzq/project/sections/Development";
import Bocets from "../components/ItemsIzq/project/sections/Bocets";

const WeatherApp = () => {
  // Context
  const { data } = useContext(DataContext);
  return (
    <>
      {data.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <>
          <Hero data={data[1]} />
          <Mockups data={data[1]} />
          <Development />
          <Bocets />
        </>
      )}
    </>
  );
};

export default WeatherApp;
