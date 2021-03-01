import React from "react";

export default function Score() {
  return (
    <div className="center-content">
      <div className="score-content">
        <p>SCORE</p>
        <p className="hit">HIT : {5}</p>
        <p className="miss">MISS : {4}</p>
        <p className="left">LEFT : {15}</p>
      </div>
    </div>
  );
}
