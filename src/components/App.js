import React from "react";
import Game from "./Game";
import Letters from "./Letters";
import Score from "./Score";

function App() {
  const alphabetLetters = [
    {
      number: 1,
      letter: "A",
      class: "left",
    },
    {
      number: 2,
      letter: "B",
      class: "left",
    },
    {
      number: 3,
      letter: "C",
      class: "left",
    },
    {
      number: 4,
      letter: "D",
      class: "left",
    },
    {
      number: 5,
      letter: "E",
      class: "left",
    },
  ];

  return (
    <div className="container">
      <div className="content-left">
        <Game />
        <Letters />
      </div>
      <div className="content-right">
        <Score />
      </div>
    </div>
  );
}

export default App;
