// import { useState } from "react";
import "./App.css";

import { useState } from "react";
import Buttons from "./components/buttons/Buttons";
import Images from "./components/images/Images";
import ProgressBar from "./components/progressBar/ProgressBar";

function App() {
  const [count, setCounter] = useState(100);
  function handleClick() {
    const newCount = Math.max(count - 10, 0);
    setCounter(newCount);
    console.log(newCount);

    let progressContent =
      document.getElementsByClassName("progress-content")[0];
    progressContent.style.width = `${newCount}%`;
  }

  return (
    <>
      <div className="title">
        <h1 className="h1-title">Punch Bag</h1>
      </div>
      <ProgressBar />
      <Images status={count} />
      <Buttons count={count} function={handleClick} set={setCounter} />
    </>
  );
}

export default App;
