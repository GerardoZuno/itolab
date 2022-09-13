import React from "react";
import smoothscroll from "smoothscroll-polyfill";
import Context from "./context/Context";
import MainRoutes from "./routes/MainRoutes";

import "./App.css";

smoothscroll.polyfill();
window.__forceSmoothScrollPolyfill__ = true;

const App = () => {
  return (
    <Context>
      <MainRoutes />
    </Context>
  );
};

export default App;
