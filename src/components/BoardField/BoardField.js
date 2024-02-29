import "./BoardField.css";

export default function BoardField({ id, game, onSetGame }) {
  const icon = () => {
    switch (id) {
      case 0:
        return game[0][0];
      case 1:
        return game[0][1];
      case 2:
        return game[0][2];
      case 3:
        return game[1][0];
      case 4:
        return game[1][1];
      case 5:
        return game[1][2];
      case 6:
        return game[2][0];
      case 7:
        return game[2][1];
      case 8:
        return game[2][2];
      default:
        return "";
    }
  };

  return (
    <div
      className={`field ${icon !== "" ? icon : ""}`}
      onClick={() => onSetGame(id)}
    >
      A
    </div>
  );
}
