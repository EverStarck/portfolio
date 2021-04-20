import React, { useState } from "react";

export const AnimationContext = React.createContext();

const AnimationProvider = ({ children }) => {
  const [animationReady, setAnimationReady] = useState({
    firstTime: false,
    homeExit: false, //if is false dont allow go to route
    projectClick: false, // De momento es la unica que tiene funcionalidad bien. Al hacer un click a un proyecto puedo hacer animaciones en otro componente
    heartClick: false, // Make click in the home
    heartClickLeave: false, // Leave in back arrow (Avoid projects and nav with opacity 1)
  });
  return (
    <AnimationContext.Provider value={{ animationReady, setAnimationReady }}>
      {children}
    </AnimationContext.Provider>
  );
};

export default AnimationProvider;
