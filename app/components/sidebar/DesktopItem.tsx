"use client";

import clsx from "clsx";
import Link from "next/link";
import { toast } from "sonner";

interface DesktopItemProps {
  label: string;
  icon: any;
  href: string;
  active?: boolean;
  onClick?: () => void;
  toastMessage?: string;
}
const DesktopItem = ({
  href,
  label,
  icon: Icon,
  active,
  onClick,
  toastMessage,
}: DesktopItemProps) => {
  const handleClick = () => {
    if (onClick) {
      toast.success(toastMessage);
      return onClick();
    }
  };

  return (
    <li>
      <Link
        href={href}
        onClick={handleClick}
        className={clsx(
          "group flex gap-x-3 rounded-md p-3 text-sm leading-6 font-semibold text-gray-700 hover:text-black hover:bg-gray-100",
          active && "bg-gray-100 text-black"
        )}
      >
        <Icon className="size-6 shrink-0" />
        <span className="sr-only">{label}</span>
      </Link>
    </li>
  );
};

export default DesktopItem;
