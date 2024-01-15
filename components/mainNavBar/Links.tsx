"use client";

import Link from "next/link";

import React from "react";
import { usePathname, useSearchParams } from "next/navigation";

let linksO: {
  title: string;
  link: string;
}[];

linksO = [
  { title: "Dashboard", link: "/dashboard" },
  { title: "Profile", link: "/profile" },
  { title: "Create", link: "/create-stream" },
  { title: "Streams", link: "/streams" },
];

export const Links = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = React.useState(false);
  // const toggleDrawer = () => {
  //   setIsOpen((prevState) => !prevState);
  //   if (!isOpen) document.documentElement.style.overflow = "hidden";
  //   else document.documentElement.style.overflow = "auto";
  // };
  return (
    <>
      {linksO.map((el: { title: string; link: string }, i: number) => (
        <li
          className={` ${
            pathname === el.link
              ? "border-b-[2px] border-gray-800 transition duration-700"
              : ""
          }`}
          key={i}
          // onClick={toggleDrawer}
        >
          <Link href={`${el.link}`}>{el.title}</Link>
        </li>
      ))}
    </>
  );
};
