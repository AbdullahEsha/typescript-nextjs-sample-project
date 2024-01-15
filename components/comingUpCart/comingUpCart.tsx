import { TComingUpCart } from "@/types/types";
import Image from "next/image";

const ComingUpCart = ({
  fromColor,
  toColor,
  mainImgSrc,
  streamName,
  streamerTitle,
  text,
  streamerName,
  image,
}: TComingUpCart) => {
  return (
    <div
      className={`bg-gradient-to-b ${fromColor} ${toColor} rounded-2xl flex flex-col lg:flex-row gap-5 py-3 px-3 items-center`}
    >
      <Image
        src={mainImgSrc}
        width={223}
        height={247}
        alt="swop-stream"
        className="w-full"
      />
      <div className="text-white flex flex-col gap-y-4">
        <p>{streamName}</p>
        <p className="text-xs">{text}</p>
        <div className="flex gap-2 items-center">
          <Image
            className="w-10 h-10 rounded-full"
            src={image}
            alt="salman-streamer"
            height={49}
            width={49}
          />
          <div className="text-xs">
            <p>{streamerName}</p>
            <p>{streamerTitle}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComingUpCart;
