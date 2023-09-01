'use client'
import { Card, CardHeader, CardBody, CardFooter, Avatar, Link } from "@nextui-org/react";
import { useState } from 'react'

export default function PostCard({
  userName,
  avatar_url,
  userFullName,
  content
}: {
  userName: string,
  avatar_url: string,
  userFullName: string,
  content: string
}) {
  const [isFollowed, setIsFollowed] = useState(false);

  return (
    <Card className="max-w-[340px]">
      <CardHeader className="justify-between">
        <div className="flex gap-x-2">
          <Link href={`/${userName}`}>
            <Avatar radius="full" size="md" src={avatar_url} />
          </Link>
          <div className="flex flex-col gap-1 items-start justify-center">
            <h4 className="text-small font-semibold leading-none text-default-600">{userFullName}</h4>
            <h5 className="text-small tracking-tight text-default-400">@{userName}</h5>
          </div>
        </div>
      </CardHeader>
      <CardBody className="px-3 py-0 text-small text-white">
        <p>
          {content}
        </p>
      </CardBody>
      <CardFooter className="gap-3">
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">4</p>
          <p className=" text-default-400 text-small">Following</p>
        </div>
        <div className="flex gap-1">
          <p className="font-semibold text-default-400 text-small">97.1K</p>
          <p className="text-default-400 text-small">Followers</p>
        </div>
      </CardFooter>
    </Card>
  );
}
