import React from "react";

interface RoundedButtonProps {
  onClick?: React.MouseEventHandler;
  className?: String;
}

const RoundedButton: React.FC<RoundedButtonProps> = ({
  children,
  onClick,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`flex mx-auto p-3 transition-transform ease-out bg-gray-200 dark:bg-[#34373F] rounded-md active:transform active:scale-75 ${className}`}
    >
      {children}
    </button>
  );
};

export default RoundedButton;
