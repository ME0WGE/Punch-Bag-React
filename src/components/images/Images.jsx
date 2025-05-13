import "./images.css";

import img from "../../assets/bag.png";
import img2 from "../../assets/deadbag.png";

export default function Images(props) {
  // put bag images in variables
  const bag = <img src={img} alt="bag" />;
  const deadBag = <img src={img2} alt="destroyed bag" />;

  return (
    <>
      {/* Display bag if the progress bar != dead & deadBar if != alive */}
      <div className="bag">{props.status > 0 ? bag : deadBag}</div>
    </>
  );
}
