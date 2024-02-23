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
    <div className="flex h-[90rem] w-full flex-col items-center gap-[2rem] p-[0_2rem] pt-[1rem]">
      {rooms.map((room, index) => {
        return (
          <div
            key={index}
            className="flex h-[40rem] w-[30rem] flex-col border-t-[0.2rem] border-t-secondary pt-[3rem]"
          >
            <div className="h-[18rem] w-full border-none outline-none">
              <img
                src={room.imgUrl}
                alt={`room-overview-${index}`}
                className="h-full w-full rounded-2xl object-fill"
              />
            </div>
            <div className="flex h-[13rem] w-full flex-col items-center justify-center gap-[1rem] text-center text-secondary">
              <h1 className="font-secondary text-[1.8rem] font-bold">
                {room.header}
              </h1>
              <p className="w-[25rem] text-[1.1rem] font-[600]">
                {room.description}
              </p>
            </div>
            <div className="flex h-[5rem] w-full items-center justify-center">
              <button className="h-[4rem] w-[12rem] rounded-lg bg-primary text-[1.25rem] font-semibold uppercase tracking-wider text-white">
                Explore
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default RoomContainers;
