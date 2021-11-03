import { MouseEventHandler, FC, useState } from "react";

interface ButtonProps {
  onClick?: MouseEventHandler;
  className?: String;
}

const Button: FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button
      onClick={onClick}
      className={`transition-colors ease-in-out active:bg-gray-200 dark:active:bg-opacity-10  rounded-full p-2 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
