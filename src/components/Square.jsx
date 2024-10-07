const Square = ({ value, onSquareClick }) => {
  return (
    <button
      onClick={()=> onSquareClick(0)}
      className="bg-white border border-gray-800 w-12 h-12 m-3"
    >
      {value}
    </button>
  );
};

export default Square;
