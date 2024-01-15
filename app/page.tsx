"use client";
import { ButtonPrimary } from "@/components/button";
import { Notification, Participant } from "@/components/participants";
import QuizOptions from "@/components/quiz/QuizOptions";
import Image from "next/image";
import { FC } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";

const Home: FC = () => {
  const testData = [
    {
      number: "A",
      option: "Because Sadit Lifts 5 pound weights",
    },
    {
      number: "C",
      option: "Salman is out of the hospital",
    },
    {
      number: "D",
      option: "Neel Graduated College",
    },
    {
      number: "E",
      option: "All of the Above",
    },
  ];

  const testDataParticipant = [
    {
      imgUrl: "/images/participantsSalman.png",
      name: "@sal_man",
      status: "new steamer",
    },
    {
      imgUrl: "/images/participantsNeel.png",
      name: "@sal_man",
      status: "new steamer",
    },
    {
      imgUrl: "/images/participantsRakib.png",
      name: "@sal_man",
      status: "new steamer",
    },
    {
      imgUrl: "/images/participantsTawhid.png",
      name: "@sal_man",
      status: "new steamer",
    },
    {
      imgUrl: "/images/participantsShohan.png",
      name: "@sal_man",
      status: "new steamer",
    },
    {
      imgUrl: "/images/participantsAbdullah.png",
      name: "@sal_man",
      status: "new steamer",
    },
  ];

  const notificationData = [
    {
      imgUrl: "model.png",
      name: "Rehana",
      message: "hese can also be combined with the",
      time: "14:00",
      count: 1,
    },
    {
      imgUrl: "model.png",
      name: "Rehana",
      message: "hese can also be combined with the",
      time: "14:00",
      count: 1,
    },
    {
      imgUrl: "model.png",
      name: "Rehana",
      message: "hese can also be combined with the",
      time: "14:00",
      count: 1,
    },
    {
      imgUrl: "model.png",
      name: "Rehana",
      message: "hese can also be combined with the",
      time: "14:00",
      count: 1,
    },
    {
      imgUrl: "model.png",
      name: "Rehana",
      message: "hese can also be combined with the",
      time: "14:00",
      count: 1,
    },
    {
      imgUrl: "model.png",
      name: "Rehana",
      message: "hese can also be combined with the",
      time: "14:00",
      count: 1,
    },
  ];

  return (
    <div className="center-container mx-auto ">
      <div className="flex justify-center pb-8">
        <Image
          src="/images/dribbble.png"
          alt="dribbble"
          height={71}
          width={256}
          className="h-12 w-auto"
        />
      </div>
      <div className="lg:w-4/5 mx-auto bg-black p-10 rounded-2xl">
        <Image
          src="/images/stream.png"
          alt="stream"
          height={637}
          width={1190}
          className="w-full h-auto rounded-lg"
        />
      </div>
      <div className="lg:flex gap-4 p-8 rounded-xl border border-gray-200 mt-8 shadow-lg">
        <div className="bg-gray-100 rounded-2xl flex flex-1 p-6 lg:p-16 relative mb-4 lg:mb-0 items-center">
          <p>
            Why Is Swop Going To absolutely Obilterate the Competition Like Jon
            Snow did the North?
          </p>
          <span className="lg:absolute right-3 bottom-3">
            <FaRegCircleQuestion size={30} />
          </span>
        </div>
        <div className="grid grid-cols-2 gap-4 w-full flex-1">
          {testData.map((elem, index) => (
            <QuizOptions
              key={index}
              number={elem.number}
              option={elem.option}
            />
          ))}
        </div>
      </div>

      <div className="flex justify-center py-9">
        <ButtonPrimary onClick={() => console.log("first")}>
          SUBMIT
        </ButtonPrimary>
      </div>

      {/* <div className="grid grid-cols-10 gap-5 pb-10"> */}
      <div className="flex flex-col lg:flex-row gap-5 items-start">
        {/* <div className="col-start-1 col-end-3 border border-gray-200 rounded-xl p-7 shadow-md"> */}
        <div className="flex flex-col items-center w-full lg:flex-[0.5] border border-gray-200 rounded-xl px-4 py-3 shadow-md">
          <h3 className="heading-secondary text-left mb-4 lg:mb-2">
            Participants
          </h3>
          {testDataParticipant.map((el, index) => (
            <Participant
              key={index}
              imgUrl={el.imgUrl}
              name={el.name}
              status={el.status}
            />
          ))}
        </div>
        <div className="flex lg:flex-[2] flex-col gap-4 col-start-3 col-end-8  border border-gray-200 rounded-xl p-3 lg:py-6 lg:px-10 shadow-md w-full">
          {notificationData.map((elm, index) => (
            <Notification
              key={index}
              imgUrl={elm.imgUrl}
              name={elm.name}
              message={elm.message}
              time={elm.time}
              count={elm.count}
            />
          ))}
        </div>
        <div className="w-full lg:flex-1 col-start-8 col-end-11 shadow-md rounded-xl">
          <Image
            src="/images/support.png"
            alt="support"
            height={503}
            width={389}
            className="rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
