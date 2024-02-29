import "./App.css";
import { useState } from "react";
import Board from "./components/Board/Board";

function App() {
  const [game, setGame] = useState([
    ["", "", ""],
    ["", "", ""],
    ["", "", ""],
  ]);
  const [darkMode, setDarkMode] = useState(true);

  function handleSetGame(id) {
    console.log(id);
    //setGame();
  }
  return (
    <div id="app" className="app">
      <h1 className="text-center my-3">Welcome to the board!</h1>
      <Board game={game} onSetGame={handleSetGame}></Board>
    </div>
  );
}

export default App;
