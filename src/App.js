import "./App.css";
import { useState } from "react";
import Board from "./components/Board/Board";
import darkModeIcon from "./assets/icons/nightlight_black.svg";
import lightModeIcon from "./assets/icons/light_mode_white.svg";

const initialBoard = Array(9).fill("");

// Spieler
const humanPlayer = "x";
const aiPlayer = "o";

function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }

  return null;
}

function App() {
  const [game, setGame] = useState(initialBoard);
  const [darkMode, setDarkMode] = useState(false);
  const [winner, setWinner] = useState(null);
  const [player, setPlayer] = useState(true);

  function handleSetGamePlayer(id) {
    setGame((prevGame) => {
      const tempGame = prevGame.map((entry, index) =>
        index === Number(id) ? humanPlayer : entry
      );
      setWinner(calculateWinner(tempGame));
      console.log(winner);
      return tempGame;
    });
    setPlayer(false);
  }

  function aiTurn() {
    setGame((prevGame) => {
      const aiPos = getBestMove(prevGame, aiPlayer);
      const tempGame = prevGame.map((entry, index) =>
        index === aiPos ? aiPlayer : entry
      );
      setWinner(calculateWinner(tempGame));
      console.log(winner);
      return tempGame;
    });
    setPlayer(true);
  }

  function handleDarkMode() {
    setDarkMode(!darkMode);
  }

  console.log(game);
  if (!player) {
    aiTurn();
  }

  function clearGame() {
    setGame(Array(9).fill(""));
    setWinner(null);
    setPlayer(true);
  }

  return (
    <div
      id="app"
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
      <div className="gameBoard">
        <Board
          className2={`${winner != null ? "hide" : ""}`}
          game={game}
          onSetGamePlayer={handleSetGamePlayer}
        ></Board>
        <div
          className={`endScreen ${winner === null ? "hide" : ""}`}
          onClick={() => clearGame()}
        >
          <p>{winner === humanPlayer ? "You are Win !" : "You are Lose!"}</p>
        </div>
      </div>
    </div>
  );
}

export default App;

// Minimax-Algorithmus für die KI
function getBestMove(board, player) {
  // Kopiere das aktuelle Spielfeld, um es zu verändern und verschiedene Züge auszuprobieren
  const newBoard = [...board];

  // Bestmöglicher Zug
  let bestMove = null;
  let bestScore = -Infinity;

  // Durchgehe alle leeren Zellen
  for (let i = 0; i < newBoard.length; i++) {
    if (newBoard[i] === "") {
      // Setze den aktuellen Zug für den Spieler
      newBoard[i] = player;

      // Berechne den Score für den aktuellen Zug
      const score = minimax(newBoard, 0, false);

      // Setze das Spielfeld zurück
      newBoard[i] = "";

      // Aktualisiere den besten Zug, wenn der Score besser ist
      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }

  // Rückgabe des besten Zugs (Index der leeren Zelle)
  return bestMove;
}

// Hilfsfunktion für den Minimax-Algorithmus (rekursiv)
function minimax(board, depth, isMaximizing) {
  // Bewertung des Spielfelds
  const scores = {
    X: -1,
    O: 1,
    tie: 0,
  };

  // Überprüfen auf Gewinner
  if (checkWinner(board, humanPlayer)) {
    return scores.X - depth;
  } else if (checkWinner(board, aiPlayer)) {
    return scores.O - depth;
  } else if (isBoardFull(board)) {
    return scores.tie;
  }

  // Maximierender Spieler ('O' in diesem Fall)
  if (isMaximizing) {
    let maxScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = aiPlayer;
        const score = minimax(board, depth + 1, false);
        board[i] = "";
        maxScore = Math.max(maxScore, score);
      }
    }
    return maxScore;
  }

  // Minimierender Spieler ('X' in diesem Fall)
  else {
    let minScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (board[i] === "") {
        board[i] = humanPlayer;
        const score = minimax(board, depth + 1, true);
        board[i] = "";
        minScore = Math.min(minScore, score);
      }
    }
    return minScore;
  }
}
function checkWinner(board, player) {
  // Überprüfen nach Reihen
  for (let i = 0; i < 3; i++) {
    if (
      board[i * 3] === player &&
      board[i * 3 + 1] === player &&
      board[i * 3 + 2] === player
    ) {
      return true;
    }
  }

  // Überprüfen nach Spalten
  for (let i = 0; i < 3; i++) {
    if (
      board[i] === player &&
      board[i + 3] === player &&
      board[i + 6] === player
    ) {
      return true;
    }
  }

  // Überprüfen nach Diagonalen
  if (
    (board[0] === player && board[4] === player && board[8] === player) ||
    (board[2] === player && board[4] === player && board[6] === player)
  ) {
    return true;
  }

  return false;
}

// Überprüfen auf ein vollständiges Spielfeld
function isBoardFull(board) {
  return board.every((cell) => cell !== "");
}
