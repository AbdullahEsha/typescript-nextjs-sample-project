import { TParticipant } from "@/types/types";
import Image from "next/image";
import { FC } from "react";

export const Participant: FC<TParticipant> = ({ imgUrl, name, status }) => {
  return (
    <div className="flex gap-5 items-center py-2">
      <div className="relative">
        <div>
          <Image
            src={imgUrl}
            alt="salman"
            height={49}
            width={49}
            className="rounded-full"
          />
        </div>
        <span className="bottom-0 left-10 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
      </div>
      <div className="text-sm">
        <h3 className="mb-1 heading-tertiary">{name}</h3>
        <p className="text-xs heading-five">{status}</p>
      </div>
    </div>
  );
};
