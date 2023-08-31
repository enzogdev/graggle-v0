import React from "react";

interface ButtonToolProps {
  onClick: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
  icon: React.ReactNode;
}

export default function ButtonTool({ onClick, icon }: ButtonToolProps) {
  return (
    <button
      className="w-14 h-14 bg-white dark:bg-gray-500 hover:bg-gray-100 rounded-lg drop-shadow-lg flex justify-center items-center dark:hover:bg-gray-400 transition-all"
      onClick={onClick}
    >
      {icon}
    </button>
  );
}
