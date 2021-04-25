import React, { useState } from "react";

export const AnimationContext = React.createContext();

const AnimationProvider = ({ children }) => {
  const [animationReady, setAnimationReady] = useState({
    firstTime: false,
    homeExit: false, //if is false dont allow go to route
    projectClick: false, // De momento es la unica que tiene funcionalidad bien. Al hacer un click a un proyecto puedo hacer animaciones en otro componente
    heartClick: false, // Make click in the home
    navFirstAnimation: false, //The first nav animation (when enter to left) is alredy done
    navButton: false, // Show the nav when you clicked (works in project screen)
    navClickLink: false, //When click any link like Home, About or anyother change to true. Avoid repen to left when left from project
    moveImg: {
      x: 0,
      y: 0,
    },
  });
  return (
    <AnimationContext.Provider value={{ animationReady, setAnimationReady }}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
