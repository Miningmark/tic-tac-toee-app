import "./BoardField.css";

export default function BoardField({ id, game, onSetGamePlayer }) {
  return (
    <div
      className={`field ${game[id]}`}
      onClick={() => onSetGamePlayer(id)}
    ></div>
  );
}
