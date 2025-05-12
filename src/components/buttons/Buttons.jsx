import "./buttons.css";

export default function Buttons(prop) {
  const punch = "Punch";
  const restart = "Restart";

  const end = () => {
    const resett = ()=>{
      document.getElementsByClassName("progress-content")[0].style.width = `100%`;
      prop.set(100)
    }
    if (prop.count > 0) {
      return (
        <button className="btn" onClick={prop.function}>
          {punch}
        </button>
      );
    } else {
      return (
        
        <button
          className="btn"
          onClick={resett}
        >
          {restart}
        </button>
      );
    }
  };
  return (
    <>
      {end()}
      {/* <button className="btn" onClick={prop.function}>
        {prop.count > 0 ? punch : restart}
      </button> */}
    </>
  );
}
