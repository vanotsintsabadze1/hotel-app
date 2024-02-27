type RoomOverviewType = {
  header: string;
  description: string;
  imgUrl: string;
};

const rooms: RoomOverviewType[] = [
  {
    header: "Luxury redefined",
    description:
      "Our rooms are designed to transport you into an environment made for leisure. Take your mind off the day-to-day of home life and find a private paradise for yourself.",
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
    <div className="mb-[10rem] flex w-full flex-col items-center justify-evenly gap-[3rem] p-[0_2rem] lg:mb-0 lg:h-[70rem] lg:flex-row lg:justify-evenly lg:p-0">
      {rooms.map((room, index) => {
        return (
          <div
            key={index}
            className="flex h-[40rem] w-[30rem] flex-col justify-center   
            gap-[1rem] lg:h-[70rem] lg:w-[55rem] lg:items-center"
          >
            <div className="lg h-[18rem] w-full border-none outline-none lg:flex lg:h-[35rem] lg:w-full lg:items-center lg:justify-center">
              <img
                src={room.imgUrl}
                alt={`room-overview-${index}`}
                className="h-full w-full rounded-[1rem] border-[0.2rem] border-[rgba(0,_0,_0,_0.2)] object-fill shadow-2xl lg:h-[30rem] lg:w-[45rem] lg:rounded-[0.5rem] xl:h-[35rem] xl:w-[50rem]"
                loading="lazy"
              />
            </div>
            <div className="flex flex-col gap-[2rem] lg:flex lg:h-[full] lg:flex-col lg:justify-center">
              <div className="flex w-full flex-col items-center justify-center gap-[1rem] text-center text-secondary">
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
