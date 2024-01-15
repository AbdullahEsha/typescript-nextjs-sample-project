import ComingUpCart from "../comingUpCart/comingUpCart";
import { SubHeading } from "../heading";
import streamDatas from "./StreamData";

const UpcomingStream = () => {
  return (
    <>
      <SubHeading text="Coming Up" />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
        {streamDatas.map((data, index) => (
          <ComingUpCart
            key={index}
            fromColor={data.fromColor}
            toColor={data.toColor}
            mainImgSrc={data.mainImgSrc}
            streamName={data.streamName}
            text={data.text}
            streamerName={data.streamerName}
            streamerTitle={data.streamerTitle}
            image={data.image}
          />
        ))}
      </div>
    </>
  );
};

export default UpcomingStream;
