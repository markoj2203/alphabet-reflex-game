import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import alphabetLetters from "../alphabet";

export default function Letters() {
  const [lettersArray, setLettersArray] = useState(alphabetLetters);
  const num = useSelector((state) => state.setRandomNumber.randomNumber);
  const dispatch = useDispatch();

  //get random time from array of numbers and diff level
  const randomByTime = (arr) => {
    const numItems = [];
    arr.map((item) => {
      if (item.class === "left") {
        numItems.push(item.number);
      }
      return numItems;
    });
    let initN = numItems[Math.floor(Math.random() * numItems.length)];
    dispatch({
      type: "RANDOM_NUMBER",
      randomNumber: initN,
    });
  };

  const compareLetter = (event) => {
    //on enter check number and letter
    if (event.keyCode === 13) {
      lettersArray.map((item) => {
        if (
          item.number === num &&
          item.letter === event.currentTarget.value.toUpperCase()
        ) {
          item.class = "hit";
        }
        if (
          item.number === num &&
          item.letter !== event.currentTarget.value.toUpperCase()
        ) {
          item.class = "miss";
        }
        return lettersArray;
      });
      setLettersArray(lettersArray);
      let scoreM = lettersArray.filter((val) => val.class === "miss");
      let scoreH = lettersArray.filter((val) => val.class === "hit");
      let leftNumbers = lettersArray.filter((val) => val.class === "left");
      let scoreLeft = 26 - (scoreM.length + scoreH.length);

      randomByTime(leftNumbers);

      dispatch({
        type: "SCORE_TABLE",
        score: { hit: scoreH.length, miss: scoreM.length, left: scoreLeft },
      });

      dispatch({
        type: "LEFT_ALPHABET_NUMBER",
        alphabet: leftNumbers,
      });
      document.getElementById("letter").value = "";
    }
  };
  return (
    <>
      <div className="center-content">
        <input
          id="letter"
          type="text"
          className="formGroup"
          placeholder="Input Letter"
          onKeyUp={compareLetter}
        />
      </div>
      <div className="center-content">
        <div className="row">
          {lettersArray.map((item, i) => (
            <div
              key={i}
              className={`col ${item.class}`}
              style={{ padding: "1em" }}
            >
              {item.letter + `(${item.number})`}
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
