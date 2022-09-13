import React, { useContext, useState, useEffect } from "react";
import Navbar from "../components/Navbar/NavBar";
import Rainbow from "../components/CustomCursor/Rainbow";
import useCursor from "../hooks/useCursor";
import Home from "../pages/Home";
import Main from "../pages/Main";
import Artist from "../pages/Artist/Artist";
import Appointment from "../pages/Appointment";
import Kosmovisiones from "../pages/Kosmovisiones";
import Isia from "../pages/Isia";
import ArtistSmall from "../pages/ArtistSmall/ArtistSmall";
import KosmovisionesSmall from "../pages/KosmovisionesSmall";
import IsiaSmall from "../pages/IsiaSmall";
import { AppContext } from "../context/Context";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const MainRoutes = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const { DotCursor } = useCursor();
  const { isPortal } = useContext(AppContext);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  return (
    <BrowserRouter>
      {DotCursor(isPortal)}

      <Navbar />
      <Rainbow />
      {windowWidth >= 951 ? (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/artist" element={<Artist />} />
          <Route exact path="/appointment" element={<Appointment />} />
          <Route exact path="/nft-kosmosvisiones" element={<Kosmovisiones />} />
          <Route exact path="/nft-isia" element={<Isia />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/main" element={<Main />} />
          <Route exact path="/artist" element={<ArtistSmall />} />
          <Route exact path="/appointment" element={<Appointment />} />
          <Route
            exact
            path="/nft-kosmosvisiones"
            element={<KosmovisionesSmall />}
          />
          <Route exact path="/nft-isia" element={<IsiaSmall />} />
        </Routes>
      )}
    </BrowserRouter>
  );
};

export default MainRoutes;
