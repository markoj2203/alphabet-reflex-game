import React, { useState } from "react";
import alphabetLetters from "../alphabet";

export default function Game() {
  const [isChecked, setIsChecked] = useState("easy");
  const [randomNum, setRandomNum] = useState(0);

  const switchDifficulty = (event) => {
    setIsChecked(event.currentTarget.id);
    setRandomNum(0);
  };

  const startGame = (diff) => {
    const numItems = [];
    alphabetLetters.map((item) => {
      if (item.class === "left") {
        numItems.push(item.number);
      }
      return numItems;
    });
    if (diff === "easy") {
      setInterval(function () {
        setRandomNum(numItems[Math.floor(Math.random() * numItems.length)]);
      }, 5000);
    } else if (diff === "medium") {
      setInterval(function () {
        setRandomNum(numItems[Math.floor(Math.random() * numItems.length)]);
      }, 3500);
    } else {
      setInterval(function () {
        setRandomNum(numItems[Math.floor(Math.random() * numItems.length)]);
      }, 2000);
    }
  };
  return (
    <>
      <div className="center-content">
        <div className="form-check">
          <input
            className="form-check-input"
            type="radio"
            name="flexRadioDefault"
            id="easy"
            checked={isChecked === "easy"}
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
        <h1>{randomNum === 0 ? "" : randomNum}</h1>
      </div>
    </>
  );
}
