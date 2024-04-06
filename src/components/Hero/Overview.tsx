import Image from "next/image";

interface rooms {
  imagePath: string;
  title: string;
  description: string;
}

const rooms: rooms[] = [
  {
    imagePath: "/images/room-images/room-overview-images/room-overview-1.webp",
    title: "Luxury Redefined",
    description:
      "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.",
  },
  {
    imagePath: "/images/room-images/room-overview-images/room-overview-2.webp",
    title: "Leave your worries in the sand",
    description:
      "We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching the ocean.",
  },
];

function Overview() {
  return (
    <section className="w-full p-[4rem_2rem_5rem_2rem]">
      <div className="flex w-full justify-center">
        <h2 className="text-center text-[1.4rem] font-bold leading-[2.5rem] text-secondary lg:text-[1.6rem]">
          All our room types are including complementary breakfast
        </h2>
      </div>
      <div className="flex w-full flex-col items-center gap-[2rem] lg:mt-[2rem] lg:flex-row lg:justify-center lg:gap-x-[20rem]">
        {rooms.map((room, idx) => {
          return (
            <div
              className="z-[2] mt-[2rem] w-[38rem] p-[3rem_1rem] xs:w-[32rem] md:w-[40rem] lg:w-[40rem] xl:w-[50rem]"
              key={idx}
            >
              <div className="relative h-[20rem] w-full md:h-[25rem] lg:h-[30rem]">
                <Image
                  src={room.imagePath}
                  className="rounded-[1rem] object-cover shadow-soft"
                  alt={`room-overview-${idx}`}
                  fill
                />
              </div>
              <div className="flex flex-col items-center text-center">
                <h3 className="mt-[2rem] text-[1.8rem] font-bold text-secondary">{room.title}</h3>
                <p className="mt-[1rem] w-[30rem] text-[1.2rem] font-medium text-secondary">
                  {room.description}
                </p>
              </div>
              <div className="mt-[2rem] flex w-full justify-center">
                <button className="mt-[2rem] h-[4.5rem] w-[15rem] rounded-[.5rem] bg-primary text-[1.4rem] font-bold text-secondary">
                  Explore
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Overview;
