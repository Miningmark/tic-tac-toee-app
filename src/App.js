import "./App.css";
import { useState } from "react";
import Board from "./components/Board/Board";
import darkModeIcon from "./assets/icons/nightlight_black.svg";
import lightModeIcon from "./assets/icons/light_mode_white.svg";

const initialBoard = Array(9).fill("");

function calculateWinner() {
  return null;
}

function App() {
  const [game, setGame] = useState(initialBoard);
  const [xIsNext, setXIsNext] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  function handleSetGame(id) {
    setGame(game.map((element, index) => (index === id ? "x" : element)));
  }

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  return (
    <div
      id="app"
      className="app"
      style={{
        backgroundColor: darkMode ? "#121212" : "#ffffff",
        color: darkMode ? "#ffffff" : "#000000",
      }}
    >
      <h1>Tic-Tac-Toe</h1>
      <div className="darkmode-switch" onClick={handleDarkMode}>
        <img
          className="darkmode-icon"
          src={darkMode ? lightModeIcon : darkModeIcon}
          alt={darkMode ? "Light mode" : "Dark mode"}
        />
      </div>
      <Board game={game} onSetGame={handleSetGame}></Board>
    </div>
  );
}

export default App;
