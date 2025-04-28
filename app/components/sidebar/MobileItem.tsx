"use client";
import clsx from "clsx";
import Link from "next/link";
import { toast } from "sonner";

interface MobileItemProps {
  label: string;
  icon: any;
  href: string;
  active?: boolean;
  onClick?: () => void;
  toastMessage?: string;
}
const MobileItem = ({
  label,
  icon: Icon,
  href,
  active,
  onClick,
  toastMessage,
}: MobileItemProps) => {
  const handleClick = () => {
    if (onClick) {
      toast.success(toastMessage);
      return onClick();
    }
  };
  return (
    <Link
      onClick={handleClick}
      href={href}
      className={clsx(
        "group flex gap-x-3 text-sm leading-6 font-semibold w-full justify-center p-4 text-gray-700 hover:text-black hover:bg-gray-100",
        active && "bg-gray-100 text-black"
      )}
    >
      <Icon className="size-6" />
    </Link>
  );
};

export default MobileItem;
