'use client'
import React, {useEffect, useState} from 'react'
import { SafeUser } from "@/app/types";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Checkbox, Input, Link} from "@nextui-org/react";
interface UseronboardingProps {
    currentUser?: SafeUser | null;
}
const Useronboarding: React.FC<UseronboardingProps> = ({
    currentUser,
}) => {
    // const url = window.location.href;
    // useEffect(() => {
    //     if(currentUser?.FirstTimeLoggin == true && url == "http://localhost:3000/"){
    //         document.getElementById('User-onboarding').showModal()
    //     }
    // }, [])
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [shouldShow, setShouldShow] = useState(true);
    return (
      <Modal 
        isOpen={shouldShow}
        onOpenChange={onOpenChange}
        placement="top-center"
      >
        <ModalContent>
          {() => (
            <>
              <ModalHeader className="flex flex-col gap-1">Log in</ModalHeader>
              <ModalBody>
                <Input
                  autoFocus
                  // endContent={
                  //   // <MailIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  label="Email"
                  placeholder="Enter your email"
                  variant="bordered"
                />
                <Input
                  // endContent={
                  //   // <LockIcon className="text-2xl text-default-400 pointer-events-none flex-shrink-0" />
                  // }
                  label="Password"
                  placeholder="Enter your password"
                  type="password"
                  variant="bordered"
                />
                <div className="flex py-2 px-1 justify-between">
                  <Checkbox
                    classNames={{
                      label: "text-small",
                    }}
                  >
                    Remember me
                  </Checkbox>
                  <Link color="primary" href="#" size="sm">
                    Forgot password?
                  </Link>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onClick={() => setShouldShow(false)}>
                  Close
                </Button>
                <Button color="primary" >
                  Sign in
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    )
}
export default Useronboarding;