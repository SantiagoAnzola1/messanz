"use client";

import { FieldErrors, FieldValues, UseFormRegister } from "react-hook-form";

interface MessageInputProps {
  id: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
  type?: string;
  required?: boolean;
  placeholder?: string;
}
const MessageInput = ({
  id,
  type,
  register,
  errors,
  required,
  placeholder,
}: MessageInputProps) => {
  return (
    <div className="relative w-full">
      <input
        id={id}
        type={type}
        autoComplete={id}
        {...register(id, { required: required })}
        placeholder={placeholder}
        className="text-black font-light py-2 px-4 bg-neutral-200/50 w-full rounded-full focus:outline-none outline-0 ring-0 border-0 disabled:opacity-70 disabled:cursor-not-allowed"
      />
    </div>
  );
};

export default MessageInput;
