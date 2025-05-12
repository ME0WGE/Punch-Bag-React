import "./progressBar.css";

export default function ProgressBar() {

  return (
    <>
      <h3 className="h3-progressbar">Progress Bar:</h3>
      <div className="progressbar-container">
        <div className="progress-body">
          <div className="progress-content"></div>
        </div>
      </div>
    </>
  );
}
