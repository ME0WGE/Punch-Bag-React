import { useState } from "react";
import "./images.css";

export default function Images() {
  // put bag images in variables
  const bag = <img src="../src/assets/bag.png" alt="bag" />;
  const deadBag = <img src="../src/assets/deadbag.png" alt="destroyed bag" />;
  // initiate state responsible for verifying if the progressBar is alive or not
  const [alive, isAlive] = useState(true);

  return (
    <>
      {/* Display bag if the progress bar != dead & deadBar if != alive */}
      <div className="bag">{alive == true ? bag : deadBag}</div>
    </>
  );
}
