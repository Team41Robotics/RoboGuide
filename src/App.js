import React from "react";
import { Switch, Route } from "react-router-dom";
import "./css/App.css";

import NavBar from "./components/NavBar";
import NotFound from "./pages/NotFound";
import Home from "./pages/Home";
import JavaGuide from "./pages/JavaGuide";
import FRCGuide from "./pages/FRCGuide";
import HardwareGuide from "./pages/HardwareGuide";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Page">
        <Switch>
          <Route exact path="/" component={Home} />

          <Route exact path="/java" component={JavaGuide} />
          <Route exact path="/frc" component={FRCGuide} />
          <Route exact path="/hardware" component={HardwareGuide} />

          <Route component={NotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
