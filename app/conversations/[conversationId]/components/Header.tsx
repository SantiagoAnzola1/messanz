"use client";

import { useMemo, useState } from "react";
import Link from "next/link";

import { HiChevronLeft, HiEllipsisHorizontal } from "react-icons/hi2";

import { Conversation, User } from "@prisma/client";
import Avatar from "@/app/components/Avatar";
import useOtherUser from "@/app/hooks/useOtherUser";
import ProfileDrawer from "./ProfileDrawer";
import AvatarGroup from "@/app/components/AvatarGroup";
import useActiveList from "@/app/hooks/useActiveList";

interface HeaderProps {
  conversation: Conversation & { users: User[] };
}
const Header = ({ conversation }: HeaderProps) => {
  const otherUser = useOtherUser(conversation);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { members } = useActiveList();
  const isActive = members.indexOf(otherUser?.email!) !== -1;

  const statusText = useMemo(() => {
    if (conversation.isGroup) {
      return `${conversation.users.length} members`;
    }
    return isActive ? "Active" : "Offline";
  }, [conversation, isActive]);

  return (
    <>
      <ProfileDrawer
        data={conversation}
        isOpen={drawerOpen}
        onClose={() => setDrawerOpen(false)}
      />
      <div className="bg-white w-full border-b border-gray-100 sm:px-4 py-3 lg:px-6 flex justify-between items-center shadow-sm">
        <div className="flex gap-3 items-center">
          <Link
            className="lg:hidden block text-slate-900 transition cursor-pointer"
            href="/conversation"
          >
            <HiChevronLeft size={28} />
          </Link>
          {conversation.isGroup ? (
            <AvatarGroup users={conversation.users} />
          ) : (
            <Avatar user={otherUser} />
          )}

          <div className="flex flex-col">
            <div>{conversation.name || otherUser.name}</div>
            <div className="text-sm font-light text-neutral-500">
              {statusText}
            </div>
          </div>
        </div>

        <HiEllipsisHorizontal
          size={28}
          onClick={() => setDrawerOpen(true)}
          className="text-slate-900 cursor-pointer hover:text-slate-950 transition"
        />
      </div>
    </>
  );
};

export default Header;
