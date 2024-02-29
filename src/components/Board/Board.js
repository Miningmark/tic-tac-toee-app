import BoardField from "../BoardField/BoardField";
import "./Boad.css";

export default function Board({ game, onSetGame }) {
  return (
    <div className={"board"}>
      <BoardField id={"0"} game={game} onSetGame={onSetGame}></BoardField>
      <BoardField id={"1"} game={game} onSetGame={onSetGame}></BoardField>
      <BoardField id={"2"} game={game} onSetGame={onSetGame}></BoardField>
      <BoardField id={"3"} game={game} onSetGame={onSetGame}></BoardField>
      <BoardField id={"4"} game={game} onSetGame={onSetGame}></BoardField>
      <BoardField id={"5"} game={game} onSetGame={onSetGame}></BoardField>
      <BoardField id={"6"} game={game} onSetGame={onSetGame}></BoardField>
      <BoardField id={"7"} game={game} onSetGame={onSetGame}></BoardField>
      <BoardField id={"8"} game={game} onSetGame={onSetGame}></BoardField>
    </div>
  );
}
