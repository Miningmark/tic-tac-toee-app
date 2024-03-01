import BoardField from "../BoardField/BoardField";
import "./Board.css";

export default function Board({ game, onSetGamePlayer }) {
  return (
    <div className={"board"}>
      <BoardField
        id={"0"}
        game={game}
        onSetGamePlayer={onSetGamePlayer}
      ></BoardField>
      <BoardField
        id={"1"}
        game={game}
        onSetGamePlayer={onSetGamePlayer}
      ></BoardField>
      <BoardField
        id={"2"}
        game={game}
        onSetGamePlayer={onSetGamePlayer}
      ></BoardField>
      <BoardField
        id={"3"}
        game={game}
        onSetGamePlayer={onSetGamePlayer}
      ></BoardField>
      <BoardField
        id={"4"}
        game={game}
        onSetGamePlayer={onSetGamePlayer}
      ></BoardField>
      <BoardField
        id={"5"}
        game={game}
        onSetGamePlayer={onSetGamePlayer}
      ></BoardField>
      <BoardField
        id={"6"}
        game={game}
        onSetGamePlayer={onSetGamePlayer}
      ></BoardField>
      <BoardField
        id={"7"}
        game={game}
        onSetGamePlayer={onSetGamePlayer}
      ></BoardField>
      <BoardField
        id={"8"}
        game={game}
        onSetGamePlayer={onSetGamePlayer}
      ></BoardField>
    </div>
  );
}
