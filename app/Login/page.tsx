'use client'
import React, { useState, useEffect } from 'react'
import { DiGithubBadge } from 'react-icons/di'
import { signIn } from "next-auth/react";
import { Card, Spacer, Button, CardHeader, CardBody, CardFooter, Divider, Link, Image } from "@nextui-org/react";
const Login: React.FC = () => {
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
            <p className="text-md">Login</p>
            <p className="text-small text-default-500">Login to access your account and to post</p>
          </div>
        </CardHeader>
        <Divider />
        <CardBody>
          <div className='flex'>
            <Button isIconOnly color="danger" onClick={() => signIn('github')} aria-label="Like">
              <DiGithubBadge size={24} />
            </Button>
            {/* <Spacer x={4} />
            <Button isIconOnly color="danger" aria-label="Like">
              <DiGithubBadge size={24} />
            </Button> */}
          </div>
        </CardBody>
        <Divider />
        <CardFooter>

        </CardFooter>
      </Card>
    </div>
  )
}
export default Login