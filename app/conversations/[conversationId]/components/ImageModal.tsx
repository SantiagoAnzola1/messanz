"use client";

import Modal from "@/app/components/Modal";
import Image from "next/image";

interface ImageModalProps {
  src?: string | null;
  isOpen: boolean;
  onClose: () => void;
}
const ImageModal = ({ src, isOpen, onClose }: ImageModalProps) => {
  if (!src) {
    return null;
  }
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="size-80">
        <Image alt="image" className="object-contain" fill src={src} />
      </div>
    </Modal>
  );
};

export default ImageModal;
