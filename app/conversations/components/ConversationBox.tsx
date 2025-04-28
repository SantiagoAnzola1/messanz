"use client";
import { useCallback, useMemo } from "react";
import { useRouter } from "next/navigation";
import clsx from "clsx";

import { useSession } from "next-auth/react";
import useOtherUser from "@/app/hooks/useOtherUser";
import Avatar from "@/app/components/Avatar";

import { FullConversationType } from "@/app/types";
import { format } from "date-fns";
import AvatarGroup from "@/app/components/AvatarGroup";

interface ConversationBoxProps {
  data: FullConversationType;
  selected?: boolean;
}

const ConversationBox = ({ data, selected }: ConversationBoxProps) => {
  const session = useSession();
  const otherUser = useOtherUser(data);

  const router = useRouter();

  const handleClick = useCallback(() => {
    router.push(`/conversations/${data.id}`);
  }, [data.id, router]);

  const lastMessage = useMemo(() => {
    const messsages = data.messages || [];
    return messsages[messsages.length - 1];
  }, [data.messages]);

  const userEmail = useMemo(() => {
    return session.data?.user?.email;
  }, [session.data?.user?.email]);

  const hasSeen = useMemo(() => {
    if (!lastMessage) {
      return false;
    }

    const seenArray = lastMessage.seenBy || [];

    if (!userEmail) {
      return false;
    }

    return seenArray.filter((user) => user.email === userEmail).length !== 0;
  }, [userEmail, lastMessage]);

  const lastMessageText = useMemo(() => {
    if (lastMessage?.image) {
      return "Sent an image 📷";
    }

    if (lastMessage?.body) {
      return lastMessage.body;
    }

    return "Start a conversation";
  }, [lastMessage]);

  return (
    <div
      className={clsx(
        "w-full relative flex items-center p-2 space-x-3 hover:bg-neutral-100 rounded-lg transition cursor-pointer",
        selected && "bg-slate-200 hover:bg-slate-200"
      )}
      onClick={handleClick}
    >
      {data.isGroup ? (
        <AvatarGroup users={data.users} />
      ) : (
        <Avatar user={otherUser} />
      )}

      <div className="min-w-0 flex-1">
        <div className="focus:outline-none">
          <div className="flex justify-between items-center gap-4">
            <p className="text-sm font-bold truncate text-gray-900">
              {data.name || otherUser.name}
            </p>
            {lastMessage?.createdAt && (
              <p
                className={clsx(
                  "text-[10px] text-nowrap",
                  hasSeen ? "text-gray-500" : "font-medium text-black"
                )}
              >
                {format(new Date(lastMessage.createdAt), "p")}
              </p>
            )}
          </div>
          <p
            className={clsx(
              "truncate text-xs ",
              hasSeen ? "text-gray-500" : "font-bold text-slate-900"
            )}
          >
            {lastMessageText}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ConversationBox;
