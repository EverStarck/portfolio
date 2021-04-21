import Hero from "../components/ItemsIzq/project/sections/Hero";
import Mockups from "../components/ItemsIzq/project/sections/Mockups";
import Development from "../components/ItemsIzq/project/sections/Development";
import Bocets from "../components/ItemsIzq/project/sections/Bocets";
import DataProvider from "../context/DataContext";

const GoogleClone = () => {
  return (
    <DataProvider>
      {/* <Hero /> */}
      <Mockups />
      {/* <Development />
      <Bocets /> */}
    </DataProvider>
  );
};

export default GoogleClone;
