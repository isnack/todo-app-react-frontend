import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/font-awesome/css/font-awesome.min.css";
import "./teamplate/custom.css";
import "./App.css";

import Menu from "./teamplate/menu";
import Routes from "./routes";

function App() {
  return (
    <div className="Container">
      <Menu />
      <Routes />
    </div>
  );
}

export default App;
