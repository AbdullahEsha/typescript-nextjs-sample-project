import { TNotification } from "@/types/types";
import Image from "next/image";
import { FC } from "react";

export const Notification: FC<TNotification> = ({
  imgUrl,
  name,
  message,
  time,
  count,
}) => {
  return (
    <div className="flex justify-between items-center border p-2 rounded-3xl shadow-sm">
      <div>
        <Image
          src={`/images/${imgUrl}`}
          alt="model"
          height={62}
          width={62}
          className="rounded-full"
        />
      </div>
      <div className="flex flex-col justify-center w-[-webkit-fill-available] pl-5">
        <h3 className="heading-tertiary">{name}</h3>
        <p>{message}</p>
      </div>
      <div className="flex flex-col justify-center text-center items-center">
        <p className="text-sm text-gray-400">{time}</p>
        <span className="text-[12px] rounded-full bg-slate-400 h-[1.2rem] w-[1.2rem]">
          {count}
        </span>
      </div>
    </div>
  );
};
