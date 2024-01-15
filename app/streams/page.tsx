import { Participant } from "@/components/participants";
import { SubHeading } from "@/components/heading";
import PreviousStreamCart from "@/components/previousStreamCart/previousStreamCart";
import UpcomingStream from "@/components/stream/UpcomingStream";

export default async function Stream() {
  return (
    <div className="center-container mx-auto flex flex-col gap-y-10 ">
      {/* coming up section  */}
      <section>
        <UpcomingStream />
      </section>
      {/* previous stream section  */}
      <section>
        <SubHeading text="Previous Stream" />
        <div className="lg:flex gap-8">
          <div className="flex-[5]">
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
          <div className="flex-[1] mt-10 lg:mt-0">
            <SubHeading text="Participants" />
            <div className="flex flex-col gap-4">
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
      </section>
    </div>
  );
}
