'use client'
import { SafeUser } from "@/app/types";
import React, {useEffect}from "react";
import {Card, CardBody, Image, Button, Progress} from "@nextui-org/react";
interface UserProfileCardProps {
    currentUser?: SafeUser | null;
}
const UserProfileCard: React.FC<UserProfileCardProps> = ({
    currentUser,
}) => {
   return (
    <div className="flex flex-col items-center justify-center pt-2.5">
    <Card
      isBlurred
      className="border-none bg-background/60 dark:bg-default-100/50 w-[800px] h-[300px]"
      shadow="sm"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-6 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover"
              height={200}
              shadow="md"
              src={currentUser?.image}
              width="100%"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-large text-foreground/90">{currentUser?.name}</h3>
                <p className="text-medium text-foreground/80">Placeholder for followers</p>
                {currentUser?.Bio
                    ? <p className="text-small text-foreground/80">{currentUser?.Bio}</p>
                    : <p className="text-small text-foreground/80">No bio yet</p>
                }
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
    </div>
   )
}
export default UserProfileCard;