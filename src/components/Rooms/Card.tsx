import Image from "next/image";
import { imageBase64 } from "@/interfaces/rooms";

interface Props {
  room: {
    id: string;
    type: string;
    description: string;
    capacity: number;
    pricePerNight: number;
    images: imageBase64[];
  };
}

function Card({ room: { id, type, description, capacity, pricePerNight, images } }: Props) {
  return (
    <div className="flex w-[40rem] flex-col items-center rounded-[1rem] pb-[1.5rem] shadow-soft xs:w-full">
      <section className="relative h-[24rem] w-full rounded-[1rem] shadow-soft xs:h-[18rem]">
        <Image src={`data:image/jpg;base64,${images[0].imageBase64}`} alt={`image-${id}`} fill />
      </section>
      <section className="flex w-full flex-col justify-center gap-[.7rem] p-[1.5rem] text-[1.4rem]">
        <h2>
          <b>Type</b>: {type}
        </h2>
        <p className="line-clamp-3">
          <b>Description</b>: {description}
        </p>
        <div className="flex w-full items-center divide-x-2 divide-black p-[.5rem_0]">
          <div className="relative h-[3rem] w-[3rem]">
            <Image src="/images/misc/person-icon.webp" fill alt="person-icon" />
          </div>
          <div className="flex h-full items-center justify-center pl-[.8rem] text-[1.5rem] font-bold">
            {capacity}
          </div>
        </div>
        <div className="flex w-full items-center divide-x-2 divide-black">
          <div className="relative h-[3rem] w-[3rem]">
            <Image src="/images/misc/money-icon.webp" fill alt="money-icon" />
          </div>
          <div className="ml-[1rem] flex h-full items-center justify-center pl-[.8rem] text-[1.5rem] font-bold">
            ${pricePerNight} - Single Night
          </div>
        </div>
      </section>
      <section className="flex w-full justify-center p-[2rem]">
        <button className="h-[4.5rem] w-[17rem] rounded-[.5rem] bg-primary shadow-soft">
          <p className="drop-shadow-text-xs text-[1.3rem] font-semibold text-white">Book Now</p>
        </button>
      </section>
    </div>
  );
}

export default Card;
