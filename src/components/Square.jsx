import { useState } from "react";
("react");
const Square = ({ value }) => {
  const [buttonValue, setButtonValue] = useState("");
  const handleClick = (value) => {
    setButtonValue(value);
   
  };
  console.log({ buttonValue });
  return (
    <button
      onClick={() => handleClick(value)}
      className="bg-white border border-gray-800 w-12 h-12 m-3"
    >
      {buttonValue}
    </button>
  );
};

export default Square;
