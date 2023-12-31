'use client'
import React, { useEffect, useState } from 'react'
import { SafeUser } from "@/app/types";
import { Textarea, Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link } from "@nextui-org/react";
interface UseronboardingProps {
  currentUser?: SafeUser | null;
}
const Useronboarding: React.FC<UseronboardingProps> = ({
  currentUser,
}) => {
  useEffect(() => {
    const url = window.location.href;
    if (url == "http://localhost:3000") {
      setShouldShow(true);
    }else{
      setShouldShow(false);
    }
  }, [])
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [shouldShow, setShouldShow] = useState(true);
  const [newUsername, setNewUsername] = useState("");
  const [newBio, setnewBio] = useState("");
  return (
    <Modal
      isOpen={shouldShow}
      onOpenChange={onOpenChange}
      placement="top-center"
    >
      <ModalContent>
        {() => (
          <>
            <ModalHeader className="flex flex-col gap-1">Welcome to Aurora</ModalHeader>
            <ModalBody>
              <p className="text-sm text-default-500">
                Your current username is {currentUser?.name}. If you would like to change it, please enter your new username below.
              </p>
              <Input
                autoFocus
                label="Username"
                placeholder="Enter your new username"
                variant="bordered"
                onChange={(e) => { setNewUsername(e.target.value) }}
              />
              <Textarea
              className="w-full flex flex-col gap-2 max-w-[400px]"
                isInvalid={true}
                variant="bordered"
                label="Profile bio"
                labelPlacement="outside"
                placeholder="Enter your bio here"
                defaultValue=""
                onChange={(e) => { setnewBio(e.target.value) }}
               
              />
            </ModalBody>
            <ModalFooter>
              <Button color="primary" >
                Finish onboarding
              </Button>
            </ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  )
}
export default Useronboarding;