"use client";
import {
  Modal,
  ModalContent,
  ModalBody,
  useDisclosure,
  Image,
} from "@nextui-org/react";
import { ReactNode } from "react";

export default function CreateUser({
  children,
  icon,
  photo,
}: {
  children: ReactNode;
  icon: ReactNode;
  photo: string | undefined;
}) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Image
        src={photo}
        onClick={onOpen}
        className="object-cover"
        classNames={{ img: "size-60" }}
        isZoomed
      />
      <Modal
        className="bg-orange-400"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
      >
        <ModalContent className="w-full">
          {() => (
            <>
              <ModalBody>{children}</ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
