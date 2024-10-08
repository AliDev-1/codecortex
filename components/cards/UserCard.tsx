import { getTopInteractedTags } from '@/lib/actions/tag.actions';
import RenderTag from "../shared/RenderTag";
import {Badge} from '../ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

interface Props {
  user: {
    _id: string;
    clerkId: string;
    picture: string;
    name: string;
    username: string;
  };
}


const UserCard = async ({ user }: Props) => {
    
    const interactedTags = await getTopInteractedTags({ userId: user._id });


  return (
    <Link
      href={`/profile/${user.clerkId}`}
      className="shadow-light100_darknone max-xs:min-w-full xs:w-[260px] w-full"
    >
      <article className="background-light900_dark200 light-border flex w-full flex-col items-center justify-center rounded-2xl border p-8">
        <Image
          src={user.picture}
          alt="user profile picture"
          width={260}
          height={260}
          className="rounded-full"
        />

        <div className="mt-4 text-center">
          <h3 className="h3-bold text-dark200_light900 line-clamp-1">
            {user.name}
          </h3>
          <p className="body-regular text-dark500_light500 mt-2">
            @{user.username}
          </p>
        </div>

        <div className="mt-5">
          {interactedTags.length > 0 ? (
            <div className="flex items-center gap-2">
              {interactedTags.map((tag) => (
                <RenderTag key={tag._id} _id={tag._id} name={tag.name} totalQuestions={0} showCount={false} />
              ))}
            </div>
          ) : (
            <Badge>No tags yet</Badge>
          )}
        </div>
      </article>
    </Link>
  );
}

export default UserCard