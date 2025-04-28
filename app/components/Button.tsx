"use client";

import clsx from "clsx";

interface ButtonProps {
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  secondary?: boolean;
  danger?: boolean;
}
const Button = ({
  type,
  fullWidth,
  children,
  onClick,
  disabled,
  secondary,
  danger,
}: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={disabled}
      className={clsx(
        "flex justify-center rounded-md px-3 py-2 text-sm font-semibold shadow-sm  focus-visible:outline-2 focus-visible:outline-offset-2 transition-all duration-200 ease-in-out",
        disabled && "opacity-70 cursor-default",
        fullWidth && "w-full",
        secondary &&
          "text-gray-900 bg-white hover:bg-gray-300 focus-visible:outline-gray-900",
        danger &&
          "bg-rose-500 hover:bg-rose-600 focus-visible:outline-rose-500",
        secondary ? "text-gray-900" : "text-white",
        !secondary &&
          !danger &&
          "bg-zinc-800 hover:contrast-150 focus-visible:outline-sky-800"
      )}
    >
      {children}
    </button>
  );
};

export default Button;
