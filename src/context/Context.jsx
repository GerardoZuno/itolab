import React, { useState } from "react";

export const AppContext = React.createContext();

const ItoContext = ({ children }) => {
  const [isNavBarFixed, setIsNavBarFixed] = useState(true);
  const [isTalk, setIsTalk] = useState(false);
  const [isStudio, setIsStudio] = useState(false);
  const [isGallery, setIsGallery] = useState(false);
  const [isDesign, setIsDesign] = useState(false);
  const [isAbout, setIsAbout] = useState(false);
  const [isPortal, setIsPortal] = useState(false);

  const toggleNavBarPosition = (value) => {
    setIsNavBarFixed(value);
  };

  const togglePortal = (value) => {
    setIsPortal(value);
  };

  return (
    <AppContext.Provider
      value={{
        isNavBarFixed,
        toggleNavBarPosition,
        setIsTalk,
        isTalk,
        isStudio,
        setIsStudio,
        isGallery,
        setIsGallery,
        setIsDesign,
        isDesign,
        isAbout,
        setIsAbout,
        togglePortal,
        isPortal,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ItoContext;
