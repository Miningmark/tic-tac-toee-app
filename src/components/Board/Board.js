import BoardField from "../BoardField/BoardField";
import "./Boad.css";

export default function Board() {
  return (
    <div className="board">
      <BoardField></BoardField>
      <BoardField></BoardField>
      <BoardField></BoardField>
      <BoardField></BoardField>
      <BoardField></BoardField>
      <BoardField></BoardField>
      <BoardField></BoardField>
      <BoardField></BoardField>
      <BoardField></BoardField>
    </div>
  );
}
