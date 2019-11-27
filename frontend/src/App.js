import React from "react";
import "./App.css";

import logo from "./assets/logo.png";

import Routes from "./routes";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <div className="container">
        <img className="image" src={logo} alt="iCode" />
        <div className="content">
          <Routes />
        </div>
      </div>
    </>
  );
}

export default App;
