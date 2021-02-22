import React from "react";

type ButtonProps = {
  clickHandler: () => void;
  label: string;
};

const Button: React.FC<ButtonProps> = ({
  clickHandler,
  label,
}): JSX.Element => (
  <button
    onClick={clickHandler}
    className="p-1 bg-white border-2 rounded-md mr-3 my-3"
  >
    {label}
  </button>
);

export default Button;
