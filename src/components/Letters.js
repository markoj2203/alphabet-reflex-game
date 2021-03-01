import React, { useState } from "react";
import alphabetLetters from "../alphabet";

export default function Letters() {
  const [lettersArray, setLettersArray] = useState(alphabetLetters);
  const [letter, setLetter] = useState("");

  const compareLetter = (event) => {
    //on enter check number and letter
    if (event.keyCode === 13) {
      setLetter(event.currentTarget.value);
    }
  };

  return (
    <>
      <div className="center-content">
        <input
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
