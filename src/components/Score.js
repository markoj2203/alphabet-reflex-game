import React from "react";

export default function Score() {
  return (
    <div className="center-content">
      <div className="score-content">
        <p>SCORE</p>
        <p className="hit">HIT : {0}</p>
        <p className="miss">MISS : {0}</p>
        <p className="left">LEFT : {26}</p>
      </div>
    </div>
  );
}
