import { ButtonFill, ButtonOutline } from "@/components/button";
import Image from "next/image";
import { AiFillHeart } from "react-icons/ai";

const PreviousStreamCart = () => {
  return (
    <div className="bg-[#161334] rounded-xl">
      <div className="px-2 py-3 flex flex-col gap-y-5">
        <div className="relative">
          <Image
            src="/images/swop-stream.png"
            width={223}
            height={247}
            alt="swop-stream"
            className="w-full h-full"
          />
          <span className="bg-[#FFFFFF55] text-white absolute top-3 left-3 rounded-lg px-4 py-[2px] text-sm">
            2h:23m:10s
          </span>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div>
              <div className="relative">
                <Image
                  className="w-10 h-10 rounded-full"
                  src="/salman.png"
                  alt="salman"
                  height={49}
                  width={49}
                />
                <span className="bottom-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between">
                <div className="text-xs text-white">
                  <p>@salman_me</p>
                  <p>new streamer</p>
                </div>
              </div>
            </div>
          </div>
          <AiFillHeart color="white" size={20} className="mr-4" />
        </div>
        <div className="flex gap-2">
          <ButtonFill />
          <ButtonOutline />
        </div>
      </div>
    </div>
  );
};

export default PreviousStreamCart;
