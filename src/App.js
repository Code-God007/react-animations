import React from "react";
import UncontrolledLottie from "./components/UncontrolledLottie";
import ControlledLottie from "./components/ControlledLottie";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Animations</p>
      </header>
      <div className="lotties">
        <UncontrolledLottie></UncontrolledLottie>
        <ControlledLottie></ControlledLottie>
      </div>
    </div>
  );
}

export default App;
