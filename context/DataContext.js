import React, { useState, useEffect } from "react";
import projects from "../utils/projects.json";

export const DataContext = React.createContext();

const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

  function mountData() {
    setData(projects);
  }

  useEffect(() => {
    mountData();
  }, []);

  return (
    <DataContext.Provider value={{ data, setData }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;
