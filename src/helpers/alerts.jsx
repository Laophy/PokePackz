import react from "react";

function Alerts({ alertMessage }) {
  return (
    <div className="Alerts" style={{ margin: 25 }}>
      <h1>{alertMessage}</h1>
    </div>
  );
}

export default Alerts;
