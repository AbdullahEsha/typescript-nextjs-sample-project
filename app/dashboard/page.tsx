import { ButtonPrimary } from "@/components/button";
import SearchBar from "@/components/dashboard/searchBar";
import { SubHeading } from "@/components/heading";
import { Participant } from "@/components/participants";
import PreviousStreamCart from "@/components/previousStreamCart/previousStreamCart";
import ProgressBar from "@/components/progress/ProgressBar";
import Progressbtn from "@/components/progress/Progressbtn";
import UpcomingStream from "@/components/stream/UpcomingStream";
import { museoModerno } from "@/fonts";
import Image from "next/image";

const Dashboard = () => {
  return (
    <div className="center-container flex flex-col gap-y-10 ">
      <div className="flex flex-col-reverse lg:flex-row gap-y-2 justify-between items-center">
        <ButtonPrimary>Create Stream</ButtonPrimary>
        <SearchBar />
      </div>
      <section className="lg:flex gap-6">
        <div className="border-2 border-[#474676] rounded-xl flex lg:flex-[5] justify-around items-center">
          <h1
            className={`${museoModerno.className} font-bold lg:text-[2.7rem] leading-[1.3]`}
          >
            <span className="text-[#FFA800]">STREAM</span> <br /> and interact{" "}
            <br /> with live <br /> quizzes and <br /> giveaways.
          </h1>
          <Image
            src="/images/swop-stream-dashboard.png"
            alt="salman-streamer"
            width={1920}
            height={2140}
            className="h-[10rem] lg:h-[25rem] w-[9rem] lg:w-[24rem] lg:scale-[1.2]"
          />
        </div>
        <div className="flex-[2] rounded-xl bg-white p-4">
          <SubHeading text="LeaderBoard" />
          <div className="flex flex-col gap-y-5 mt-5">
            <div className="flex items-center justify-between border-b pb-5">
              <div className="flex gap-6 items-center text-gray-600">
                <p>1. </p>
                <p>Tra</p>
              </div>
              <div className="flex gap-6 items-center">
                <ProgressBar
                  width="w-[45%]"
                  bgLight="bg-blue-200"
                  bgDark="bg-blue-600"
                />
                <Progressbtn
                  borderColor="border-blue-600"
                  bgColor="bg-blue-50"
                  textColor="text-blue-600"
                  number="45"
                />
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-5">
              <div className="flex gap-6 items-center text-gray-600">
                <p>2. </p>
                <p>Ne</p>
              </div>
              <div className="flex gap-6 items-center">
                <ProgressBar
                  width="w-[55%]"
                  bgLight="bg-green-200"
                  bgDark="bg-green-600"
                />
                <Progressbtn
                  borderColor="border-green-600"
                  bgColor="bg-green-50"
                  textColor="text-green-600"
                  number="55"
                />
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-5">
              <div className="flex gap-6 items-center text-gray-600">
                <p>3. </p>
                <p>Ne</p>
              </div>
              <div className="flex gap-6 items-center">
                <ProgressBar
                  width="w-[85%]"
                  bgLight="bg-orange-200"
                  bgDark="bg-orange-600"
                />
                <Progressbtn
                  borderColor="border-orange-600"
                  bgColor="bg-orange-50"
                  textColor="text-orange-600"
                  number="85"
                />
              </div>
            </div>
            <div className="flex items-center justify-between border-b pb-5">
              <div className="flex gap-6 items-center text-gray-600">
                <p>4. </p>
                <p>Pro</p>
              </div>
              <div className="flex gap-6 items-center">
                <ProgressBar
                  width="w-[75%]"
                  bgLight="bg-yellow-200"
                  bgDark="bg-yellow-600"
                />
                <Progressbtn
                  borderColor="border-yellow-600"
                  bgColor="bg-yellow-50"
                  textColor="text-yellow-600"
                  number="75"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="border-2 border-[#474676] p-4 rounded-xl">
        <UpcomingStream />
      </section>
      <section>
        <div className="lg:flex gap-6">
          <div className="border-2 border-[#474676] p-4 rounded-xl flex-[5]">
            <SubHeading text="Previous Streams" />
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
              <PreviousStreamCart />
              <PreviousStreamCart />
              <PreviousStreamCart />
              <PreviousStreamCart />
              <PreviousStreamCart />
              <PreviousStreamCart />
              <PreviousStreamCart />
              <PreviousStreamCart />
            </div>
          </div>
          <div className="flex-[1.5] border-2 border-[#474676] p-4 rounded-xl">
            <div></div>
            <div>
              <SubHeading text="Participants" />
              <div className="flex flex-col gap-y-3">
                <Participant
                  imgUrl="/salman.png"
                  name="@arjo_neel"
                  status="new steamer"
                />
                <Participant
                  imgUrl="/salman.png"
                  name="@arjo_neel"
                  status="new steamer"
                />
                <Participant
                  imgUrl="/salman.png"
                  name="@arjo_neel"
                  status="new steamer"
                />
                <Participant
                  imgUrl="/salman.png"
                  name="@arjo_neel"
                  status="new steamer"
                />
                <Participant
                  imgUrl="/salman.png"
                  name="@arjo_neel"
                  status="new steamer"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
