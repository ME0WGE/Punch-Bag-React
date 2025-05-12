import ProgressBar from "../progressBar/ProgressBar";
import "./buttons.css";

export default function Buttons(prop) {
  const punch = "Punch";
  const restart = "Restart";

  return (
    <>
      <button className="btn" onClick={prop.function}>
        {prop.count >= 0 ? punch : restart}
      </button>
    </>
  );
}
