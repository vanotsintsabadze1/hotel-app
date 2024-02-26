type RoomOverviewType = {
  header: string;
  description: string;
  imgUrl: string;
};

const rooms: RoomOverviewType[] = [
  {
    header: "Luxury redefined",
    description:
      "Our rooms are designed to transport you into an environment made for leisure.Take your mind off the day-to-day of home life and find a private paradise for yourself.",
    imgUrl: "/room-images/room-overview-images/room-overview-1.webp",
  },
  {
    header: "Leave your worries in the sand",
    description:
      "We love life at the beach. Being close to the ocean with access to endless sandy beach ensures a relaxed state of mind. It seems like time stands still watching ocean.",
    imgUrl: "/room-images/room-overview-images/room-overview-2.webp",
  },
];

function RoomContainers() {
  return (
    <div className="flex h-[90rem] w-full flex-col items-center p-[0_2rem] pt-[1rem] lg:justify-evenly lg:gap-[4rem] lg:p-0">
      {rooms.map((room, index) => {
        return (
          <div
            key={index}
            className="flex h-[40rem] w-[30rem] flex-col border-t-[0.2rem] border-t-secondary pt-[3rem] lg:h-[30rem] 
            lg:w-[90rem] lg:flex-row-reverse lg:justify-center lg:gap-[2rem] lg:border-l-[0.2rem] 
            lg:border-l-secondary lg:border-t-transparent lg:p-[2rem] lg:pr-[3rem]"
          >
            <div className="h-[18rem] w-full border-none outline-none lg:h-[25rem] lg:w-[35rem]">
              <img
                src={room.imgUrl}
                alt={`room-overview-${index}`}
                className="h-full w-full rounded-2xl object-fill"
              />
            </div>
            <div className=" lg:flex lg:h-[full] lg:w-1/2 lg:flex-col lg:justify-center lg:gap-[2rem]">
              <div className="flex h-[13rem] w-full flex-col items-center justify-center gap-[1rem] text-center text-secondary">
                <h1 className="font-secondary text-[1.8rem] font-bold lg:text-[2.5rem]">
                  {room.header}
                </h1>
                <p className="w-[25rem] text-[1.1rem] font-[600] lg:w-[30rem] lg:text-[1.3rem]">
                  {room.description}
                </p>
              </div>
              <div className="flex h-[5rem] w-full items-center justify-center">
                <button className="ease h-[4rem] w-[12rem] rounded-lg bg-primary text-[1.25rem] font-semibold uppercase tracking-wider text-white duration-200 hover:scale-110">
                  Explore
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RoomContainers;
