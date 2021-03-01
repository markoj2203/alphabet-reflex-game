import React from "react";
import { useSelector } from "react-redux";

export default function Score() {
  const score = useSelector((state) => state.scoreTable.score);

  return (
    <div className="center-content">
      <div className="score-content">
        <p>SCORE</p>
        <p className="hit">HIT : {score === undefined ? 0 : score.hit}</p>
        <p className="miss">MISS : {score === undefined ? 0 : score.miss}</p>
        <p className="left">LEFT : {score === undefined ? 26 : score.left}</p>
      </div>
    </div>
  );
}
