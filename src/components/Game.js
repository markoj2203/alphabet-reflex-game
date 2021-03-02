import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import alphabetLetters from "../alphabet";

export default function Game() {
  const [isChecked, setIsChecked] = useState("easy");
  const [randomNum, setRandomNum] = useState(0);
  const alphabetLeft = useSelector((state) => state.leftNumbers.alphabet);
  const alphabet = alphabetLeft === undefined ? alphabetLetters : alphabetLeft;

  const dispatch = useDispatch();

  const switchDifficulty = (event) => {
    setIsChecked(event.currentTarget.id);
    setRandomNum(0);
  };

  const startGame = (diff) => {
    const numItems = [];
    alphabet.map((item) => {
      if (item.class === "left") {
        numItems.push(item.number);
      }
      return numItems;
    });

    let initN = numItems[Math.floor(Math.random() * numItems.length)];
    setRandomNum(initN);
    dispatch({
      type: "RANDOM_NUMBER",
      randomNumber: initN,
    });

    randomByTime(diff, numItems);
  };

  const randomByTime = (isChecked, arr) => {
    let time = 3000;
    if (isChecked === "easy") {
      time = 5000;
    } else if (isChecked === "medium") {
      time = 3500;
    } else {
      time = 2000;
    }
    setInterval(function () {
      let num = arr[Math.floor(Math.random() * arr.length)];
      setRandomNum(num);
      dispatch({
        type: "RANDOM_NUMBER",
        randomNumber: num,
      });
    }, time);
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
