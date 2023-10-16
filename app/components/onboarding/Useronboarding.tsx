'use client'
import React, { useEffect, useState } from 'react'
import { SafeUser } from "@/app/types";
import { Card, Spacer, Button, CardHeader, CardBody, CardFooter, Divider, Link, Image, Textarea, Input } from "@nextui-org/react";
interface UseronboardingProps {
  currentUser?: SafeUser | null;
}
const Useronboarding: React.FC<UseronboardingProps> = ({
  currentUser,
}) => {
  const [newUsername, setNewUsername] = useState<string>("");
  const [newBio, setnewBio] = useState<string>("");
  const [defaultUsername, setDefaultUsername] = useState<string>("");
  useEffect(() => {
    //@ts-ignore
    setDefaultUsername(currentUser.name);
  }, []);
  return (
    <div className='h-full pt-64 overflow-hidden flex items-center justify-center'>
      <Card className="max-w-[400px]">
        <CardHeader className="flex gap-3">
          <Image
            alt="nextui logo"
            height={40}
            radius="sm"
            src="https://avatars.githubusercontent.com/u/86160567?s=200&v=4"
            width={40}
          />
          <div className="flex flex-col">
            <p className="text-md">On boarding</p>
            <p className="text-small text-default-500"></p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <p className="text-sm text-default-500">
            We noticed that you logged in using a 3rd party. If you would like to change your username, 
            you can do so here and add a bio too.  <br />NOTE: You can change your username in your profile settings too.
          </p>
          <br />
          <Input
            label="Username"
            placeholder="Enter your new username"
            variant="bordered"
            defaultValue={defaultUsername}
            onFocus={(e) => { setDefaultUsername("") }}
            onChange={(e) => { setNewUsername(e.target.value) }}
          />
          <br />
          <Textarea
            className="w-full flex flex-col  max-w-[400px]"
            variant="bordered"
            label="Profile bio"
            placeholder="Enter your bio here"
            defaultValue=""
            onChange={(e) => { setnewBio(e.target.value) }}

          />
        </CardBody>
        <Divider />
        <CardFooter>
          <Button color="primary" >
            Finish onboarding
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}
export default Useronboarding;