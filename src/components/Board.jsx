import Square from "./Square";

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const Board = () => {
  return (
    <>
      <div className="grid grid-cols-3 w-1/6 h-6/6 border border-gray-700 m-3 text-center p-5">
        {numArr.map((item) => {
          return (
            <div key={item}>
              <Square value={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Board;
