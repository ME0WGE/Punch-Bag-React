// import { useState } from "react";
import "./App.css";

import { useState } from "react";
import Buttons from "./components/buttons/Buttons";
import Images from "./components/images/Images";
import ProgressBar from "./components/progressBar/ProgressBar";

function App() {
  const [count, setCounter] = useState(100);

  function Decrement(e) {
    setCounter(count - 10);
    console.log(count);

    {
      count <= 0 &&
        e.target.addEventListener("click", () => {
          console.log("test");
          setCounter(count + 100);
        });
    }
  }

  return (
    <>
      <div className="title">
        <h1 className="h1-title">Punch Bag</h1>
      </div>
      <ProgressBar />
      <Images />
      <Buttons count={count} function={Decrement} />
    </>
  );
}

export default App;
