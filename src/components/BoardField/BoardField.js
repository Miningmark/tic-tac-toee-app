import "./BoardField.css";

export default function BoardField({ id, game, onSetGame }) {
  const value = game[0][0];
  console.log("faFfaFaffgG");
  return (
    <div className={`field ${value}`} onClick={() => onSetGame(id)}>
      Ad
    </div>
  );
}
