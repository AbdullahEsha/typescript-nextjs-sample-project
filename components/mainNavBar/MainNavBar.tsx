"use client";
import Image from "next/image";
import Link from "next/link";
import { Links } from "./Links";
import { VscChromeClose } from "react-icons/vsc";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import { useMemo, useState } from "react";
import useWindowDimensions from "@/customHook/useWindowDimensions";

export const MainNavBar = () => {
  const [active, setActive] = useState(true);
  const { width } = useWindowDimensions();

  useMemo(() => {
    if (width) {
      width > 1024 ? setActive(false) : setActive(true);
    }
  }, [width]);

  return (
    <div className="center-container-nav sticky z-50 bg-white top-0 shadow-[0px_0px_10px_#00000078] rounded-b-xl lg:px14 md:px-6 px-5 md:py-4 py-2">
      <div className="hidden lg:flex justify-between border-b-[1px] pb-2 ">
        <p className="text-slate-400 text-sm">
          Welcome to the Interactive Layer
        </p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm font-medium">
            DApp Exlporer
          </Link>
          <Link href="#" className="text-sm font-medium">
            Whitepaper
          </Link>
        </div>
      </div>
      <div className="flex-wrap flex lg:flex-nowrap justify-between items-center pt-2">
        <Link href="/">
          <Image
            src="/swop.png"
            alt="swop"
            height={21}
            width={88}
            className="h-[100%] w-[88px]"
          />
        </Link>
        {active && (
          <p className="text-gray-500 hidden sm:block">
            Welcome to the Interactive Layer
          </p>
        )}

        <div className="lg:hidden">
          {active ? (
            <button
              onClick={() => setActive(false)}
              className="focus:outline-none"
            >
              <HiOutlineMenuAlt1 size={25} />
            </button>
          ) : (
            <button
              onClick={() => setActive(true)}
              className="focus:outline-none"
            >
              <VscChromeClose size={25} />
            </button>
          )}
        </div>
        <div className={`w-full lg:w-auto ${active && "hidden"}`}>
          <ul className="flex flex-col lg:flex-row items-center gap-1 lg:items-start lg:gap-5 font-medium text-lg my-2">
            <Links />
          </ul>
        </div>
        <div
          className={`flex gap-3 justify-center w-full lg:w-auto mt-2 mb-2 lg:mt-0 ${
            active && "hidden"
          }`}
        >
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
          <button
            type="submit"
            className="bg-black rounded-3xl px-8 py-0 text-white border border-black transition duration-700 hover:text-black hover:bg-white hover:border "
          >
            Connect
          </button>
        </div>
      </div>
    </div>
  );
};
