"use client";
import { IconType } from "react-icons";
interface AuthSocialButtonProps {
  icon: IconType;
  onClick: () => void;
}
const AuthSocialButton = ({ icon: Icon, onClick }: AuthSocialButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="inline-flex w-full justify-center items-center rounded-md bg-white px-4 py-2 text-gray-500 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-100 focus:outline-offset-0 transition-colors duration-200 ease-in-out"
    >
      <Icon />
    </button>
  );
};

export default AuthSocialButton;
