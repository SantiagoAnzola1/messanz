"use client";

import { useRouter } from "next/navigation";
import { useCallback, useState } from "react";

import axios from "axios";
import { toast } from "sonner";
import { DialogTitle } from "@headlessui/react";
import { FiAlertTriangle } from "react-icons/fi";

import useConversation from "@/app/hooks/useConversation";
import Modal from "@/app/components/Modal";
import Button from "@/app/components/Button";

interface ConfirmModalProps {
  isOpen?: boolean;
  onClose: () => void;
}
const ConfirmModal = ({ isOpen, onClose }: ConfirmModalProps) => {
  const router = useRouter();
  const { conversationId } = useConversation();
  const [isLoading, setIsLoading] = useState(false);

  const onDelete = useCallback(() => {
    setIsLoading(true);

    axios
      .delete(`/api/conversations/${conversationId}`)
      .then(() => {
        onClose();
        router.push("/conversations");
        router.refresh();
      })
      .catch(() => toast.error("Something went wrong!"))
      .finally(() => {
        setIsLoading(false);
      });
  }, [conversationId, onClose, router]);

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="sm:flex sm:items-start">
        <div className="mx-auto flex size-12 flex-shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
          <FiAlertTriangle className="size-6 text-red-700" />
        </div>
        <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
          <DialogTitle
            as="h3"
            className="text-lg font-semibold leading-6 text-gray-900"
          >
            Delete conversation
          </DialogTitle>
          <div className="mt-2">
            <p className="text-gray-600">
              Are you sure you want to delete this conversation? This action
              cannot be undone.
            </p>
          </div>
        </div>
      </div>
      <div className="mt-5 sm:mt-4 flex flex-row-reverse gap-2 ">
        <Button disabled={isLoading} danger onClick={onDelete}>
          Delete
        </Button>
        <Button disabled={isLoading} secondary onClick={onClose}>
          Cancel
        </Button>
      </div>
    </Modal>
  );
};

export default ConfirmModal;
