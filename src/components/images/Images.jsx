import "./images.css";

export default function Images(props) {
  // put bag images in variables
  const bag = <img src="../src/assets/bag.png" alt="bag" />;
  const deadBag = <img src="../src/assets/deadbag.png" alt="destroyed bag" />;

  return (
    <>
      {/* Display bag if the progress bar != dead & deadBar if != alive */}
      <div className="bag">{props.status > 0 ? bag : deadBag}</div>
    </>
  );
}
