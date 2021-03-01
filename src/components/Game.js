import React, { useState } from "react";

export default function Game() {
  const [isChecked, setIsChecked] = useState("");

  const switchDifficulty = (event) => {
    setIsChecked(event.currentTarget.id);
  };

  const startGame = (diff) => {};
  return (
    <>
      <div className="center-content">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="easy"
            checked={isChecked === "easy" || isChecked === ""}
            onChange={switchDifficulty}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault1">
            Easy
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="medium"
            checked={isChecked === "medium"}
            onChange={switchDifficulty}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault2">
            Medium
          </label>
        </div>
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="hard"
            checked={isChecked === "hard"}
            onChange={switchDifficulty}
          />
          <label className="form-check-label" htmlFor="flexRadioDefault3">
            Hard
          </label>
        </div>
      </div>
      <div className="center-content">
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={() => startGame(isChecked)}
        >
          Start
        </button>
      </div>
      <div className="center-content">
        <h1>{17}</h1>
      </div>
    </>
  );
}
