import { useState } from "react";
import Square from "./Square";

const Board = () => {
  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
  const onSquareClick = (i) => {
    const nextSquares = [...squares];
   nextSquares[i] = "X";
   
    setSquares(nextSquares);
  };
  return (
    <>
      <div className="grid grid-cols-3 w-1/6 h-6/6 border border-gray-700 m-3 text-center p-5">
        {squares.map((item, index) => {
          return (
            <div key={index}>
              <Square value={item} onSquareClick={() => onSquareClick(index)} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Board;
