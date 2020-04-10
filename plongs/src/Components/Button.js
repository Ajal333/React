import React from "react";

const Button = (props) => {
  const handleClick = () => props.onClickFunction(props.incValue);

  return (
    <div>
      <button onClick={handleClick}>+{props.incValue}</button>
    </div>
  );
};

export default Button;
