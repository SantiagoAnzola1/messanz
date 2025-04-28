"use client";

import clsx from "clsx";
import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface InputProps {
  label: string;
  id: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors;
  disabled?: boolean;
}
const Input = ({
  label,
  id,
  type,
  required,
  placeholder,
  register,
  errors,
  disabled,
}: InputProps) => {
  return (
    <div>
      <label
        className="block text-sm font-medium text-gray-700 leading-6"
        htmlFor={id}
      >
        {label}
        <input
          type={type ? type : "text"}
          required={required}
          placeholder={placeholder}
          autoComplete={id}
          {...register(id, { required })}
          className={clsx(
            "input-styled-form text-gray-900",
            errors?.type && "focus:ring-rose-500",
            disabled && "opacity-70 cursor-default"
          )}
        />
      </label>
    </div>
  );
};

export default Input;
