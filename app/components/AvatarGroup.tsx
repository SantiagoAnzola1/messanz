"use client";
import { User } from "@prisma/client";
import Image from "next/image";
interface AvatarGroupProps {
  users: User[];
}

const AvatarGroup = ({ users = [] }: AvatarGroupProps) => {
  const slidersUsers = users.slice(0, 3);
  const positionMap = {
    0: "top-0 left-[12px]",
    1: "bottom-0",
    2: "bottom-0 right-0",
  };

  return (
    <div className="relative size-10">
      {slidersUsers.map((user, index) => (
        <div
          key={user.id}
          className={`absolute inline-block rounded-full overflow-hidden size-5 ${
            positionMap[index as keyof typeof positionMap]
          }`}
        >
          <Image
            alt="Avatar"
            fill
            src={user?.image || "/images/user-placeholder.webp"}
          />
        </div>
      ))}
    </div>
  );
};

export default AvatarGroup;
