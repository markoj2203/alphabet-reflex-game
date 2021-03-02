import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import alphabetLetters from "../alphabet";
import { timestampByDifficulty } from "../function";

export default function Game() {
  const [isChecked, setIsChecked] = useState("easy");
  const [randomNum, setRandomNum] = useState(0);
  const alphabetLeft = useSelector((state) => state.leftNumbers.alphabet);
  const num = useSelector((state) => state.setRandomNumber.number);
  const numCh = num === undefined ? randomNum : num;
  const alphabet = alphabetLeft === undefined ? alphabetLetters : alphabetLeft;

  const dispatch = useDispatch();

  const switchDifficulty = (event) => {
    setIsChecked(event.currentTarget.id);
    setRandomNum(0);
  };
  //start game will randomly generates number from aray in time interval
  const startGame = (diff) => {
    dispatch({ type: "LEVEL_CHANGES", level: diff });
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

    randomByTime(diff, numItems, numCh);
  };
  //get random time from array of numbers and diff level
  const randomByTime = (isChecked, arr, num) => {
    let time = timestampByDifficulty(isChecked);
    setInterval(function () {
      let numR = 0;
      if (num === 0) {
        numR = arr[Math.floor(Math.random() * arr.length)];
      } else {
        numR = num;
      }
      setRandomNum(numR);
      dispatch({
        type: "RANDOM_NUMBER",
        randomNumber: numR,
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
        <h1>{numCh === 0 ? "" : numCh}</h1>
      </div>
    </>
  );
}
