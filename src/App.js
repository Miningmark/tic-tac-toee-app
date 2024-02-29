import "./App.css";
import { Fragment, useState } from "react";
import Board from "./components/Board/Board";

function App() {
  const [game, setGame] = useState([
    [, ,],
    [, ,],
    [, ,],
  ]);

  function handleSetGame() {
    //setGame();
  }
  return (
    <div id="app" className="app">
      <h1 className="text-center my-3">Welcome to the board!</h1>
      <Board></Board>
    </div>
  );
}

export default App;
