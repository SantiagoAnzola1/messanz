"use client";

import { useSession } from "next-auth/react";
import clsx from "clsx";
import { format } from "date-fns";

import { Message } from "@prisma/client";
import { FullMessageType } from "@/app/types";
import Avatar from "@/app/components/Avatar";
import Image from "next/image";
import { useState } from "react";
import ImageModal from "./ImageModal";

interface MessageBoxProps {
  isLast: boolean;
  data: FullMessageType;
}

const MessageBox = ({ isLast, data }: MessageBoxProps) => {
  const session = useSession();

  const [imageModalOpen, setImageModalOpen] = useState(false);

  const isOwn = session.data?.user?.email === data?.sender?.email;
  const seenList = (data.seenBy || [])
    .filter((user) => user.email !== data.sender.email)
    .map((user) => user.name)
    .join(", ");

  const container = clsx("flex gap-3 p-4", isOwn && "justify-end");

  const avatar = clsx(isOwn && "order-2");
  const body = clsx("flex flex-col gap-1", isOwn && "items-end");
  const message = clsx(
    "text-sm w-fit overflow-hidden",
    isOwn ? "bg-slate-900 text-white" : "bg-gray-200/50",
    data.image ? "rounded-md p-0" : "rounded-full py-2 px-3"
  );

  return (
    <div className={container}>
      <div className={avatar}>
        <Avatar user={data.sender} />
      </div>
      <div className={body}>
        <div className="flex items-center justify-between gap-2">
          <p className="text-xs text-gray-500">{data.sender.name}</p>
          <p className="text-[10px] text-gray-400">
            {format(new Date(data.createdAt), "p")}
          </p>
        </div>
        <div className={message}>
          <ImageModal
            src={data.image}
            isOpen={imageModalOpen}
            onClose={() => setImageModalOpen(false)}
          />
          {data.image ? (
            <Image
              onClick={() => setImageModalOpen(true)}
              src={data.image}
              alt="Message image"
              height={280}
              width={280}
              className="object-cover  cursor-pointer hover:scale-105 transition translate"
            />
          ) : (
            <p>{data.body}</p>
          )}
        </div>
        {isLast && isOwn && seenList.length > 0 && (
          <div className="text-xs font-light text-gray-500">{`Seen by ${seenList}`}</div>
        )}
      </div>
    </div>
  );
};

export default MessageBox;
