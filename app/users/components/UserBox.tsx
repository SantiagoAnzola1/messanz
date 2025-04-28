"use client";

import { User } from "@prisma/client";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";
import Avatar from "@/app/components/Avatar";
import LoadingModal from "@/app/components/LoadingModal";

interface UserBoxProps {
  user: User;
}
const UserBox = ({ user }: UserBoxProps) => {
  const router = useRouter();
  const [isloading, setIsLoading] = useState(false);
  const handleClick = useCallback(() => {
    setIsLoading(true);
    axios
      .post("/api/conversations", { userId: user.id })
      .then((user) => {
        router.push(`/conversations/${user.data.id}`);
      })
      .finally(() => setIsLoading(false));
  }, [user, router]);
  return (
    <>
      {isloading && <LoadingModal />}
      <button onClick={handleClick}>
        <div className="w-full relative flex  items-center space-x-3 bg-white p-3 hover:bg-neutral-100 rounded-lg transition cursor pointer">
          <Avatar user={user} />
          <div className="min-w-0 flex-1">
            <div className="focus:outline-none ">
              <div className="flex justify-between items-center mb-1 ">
                <p className="text-sm font-medium text-gray-900">{user.name}</p>
              </div>
            </div>
          </div>
        </div>
      </button>
    </>
  );
};

export default UserBox;
