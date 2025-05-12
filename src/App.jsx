// import { useState } from "react";
import "./App.css";
import Buttons from "./components/buttons/Buttons";
import Images from "./components/images/Images";
import ProgressBar from "./components/progressBar/ProgressBar";

function App() {
  return (
    <>
      <div className="title">
        <h1 className="h1-title">Punch Bag</h1>
      </div>
      <ProgressBar />
      <Images />
      <Buttons />
    </>
  );
}

export default App;
