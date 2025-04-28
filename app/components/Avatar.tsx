"use client";
import { User } from "@prisma/client";
import Image from "next/image";
import useActiveList from "@/app/hooks/useActiveList";

interface AvatarProps {
  user?: User;
}
const Avatar = ({ user }: AvatarProps) => {
  const { members } = useActiveList();

  const isActive = members.indexOf(user?.email!) !== -1;
  return (
    <div className="relative flex items-center justify-center">
      <div className="relative inline-block rounded-full overflow-hidden size-7 md:size-10">
        <Image
          alt="avatar"
          src={user?.image || "/images/user-placeholder.webp"}
          fill
        />
      </div>
      {isActive && (
        <span className="absolute block rounded-full bg-green-600 ring-2 ring-white top-0 right-0 size-2 md:size-3" />
      )}
    </div>
  );
};

export default Avatar;
