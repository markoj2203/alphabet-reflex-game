import React from "react";
import Game from "./Game";
import Letters from "./Letters";
import Score from "./Score";

function App() {
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
