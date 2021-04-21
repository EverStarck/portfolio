import Hero from "../components/ItemsIzq/project/sections/Hero";
import Mockups from "../components/ItemsIzq/project/sections/Mockups";
import Development from "../components/ItemsIzq/project/sections/Development";
import Bocets from "../components/ItemsIzq/project/sections/Bocets";
import { DataContext } from "../context/DataContext";
import { useContext } from "react";

const GoogleClone = () => {
  // Context
  const { data } = useContext(DataContext);
  return (
    <>
      {data.length === 0 ? (
        <h1>Loading</h1>
      ) : (
        <>
          {/* <Hero /> */}
          <Mockups data={data[0]} />
          <Development />
          <Bocets />
        </>
      )}
    </>
  );
};

export default GoogleClone;
