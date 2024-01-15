"use client";
import Image from "next/image";
import React from "react";

const page = () => {
  const handelevent = (event: any) => {
    console.log("test", event.target.files);
  };
  return (
    <div className="center-container ">
      <div className="flex flex-col lg:flex-row">
        <div className="flex flex-col flex-[2] gap-3 w-full">
          <div className="grid gap-1">
            <label className="heading-tertiary">First Name</label>
            <input
              type="text"
              placeholder="Enter first name"
              className="border border-gray-400 rounded-md px-2 py-1 focus:outline-none"
            />
          </div>
          <div className="grid gap-1">
            <label className="heading-tertiary">Last Name</label>
            <input
              type="text"
              placeholder="Enter last name"
              className="border border-gray-400 rounded-md px-2 py-1 focus:outline-none"
            />
          </div>
          <div className="grid gap-1">
            <label className="heading-tertiary">Swop Profile</label>
            <input
              type="text"
              placeholder="Enter swop profile"
              className="border border-gray-400 rounded-md px-2 py-1 focus:outline-none"
            />
          </div>
          <div className="grid gap-1">
            <label className="heading-tertiary">Website</label>
            <input
              type="text"
              placeholder="Enter website url"
              className="border border-gray-400 rounded-md px-2 py-1 focus:outline-none"
            />
          </div>
          <div className="lg:hidden flex-1 flex">
            <input
              type="file"
              className="img_uploader shadow-md border"
              multiple
              onChange={handelevent}
            />
          </div>
          <div className="grid gap-1 mt-2">
            <label className="heading-tertiary">Upload Poster</label>
            <div>
              <Image
                src="/images/support.png"
                alt="support"
                height={503}
                width={389}
                className="h-[280px] w-[250px] rounded-xl"
              />
            </div>
          </div>
        </div>
        <div className="hidden lg:flex flex-1 justify-center">
          <input
            type="file"
            className="img_uploader shadow-md border"
            multiple
            onChange={handelevent}
          />
        </div>
      </div>
    </div>
  );
};

export default page;
