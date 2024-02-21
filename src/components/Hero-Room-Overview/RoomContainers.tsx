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
    <div className="w-full h-[90rem] flex flex-col items-center p-[0_2rem] gap-[2rem] pt-[1rem]">
      {rooms.map((room, index) => {
        return (
          <div key={index} className="w-[30rem] h-[40rem] flex flex-col border-t-secondary border-t-[0.2rem] pt-[3rem]">
            <div className="w-full h-[18rem] border-none outline-none">
              <img src={room.imgUrl} alt={`room-overview-${index}`} className="w-full h-full object-fill rounded-2xl" />
            </div>
            <div className="w-full h-[13rem] flex flex-col justify-center items-center text-secondary gap-[1rem] text-center">
              <h1 className="font-bold font-secondary text-[1.8rem]">{room.header}</h1>
              <p className="w-[25rem] font-[600] text-[1.1rem]">{room.description}</p>
            </div>
            <div className="w-full h-[5rem] flex justify-center items-center">
              <button className="w-[12rem] h-[4rem] bg-primary rounded-lg text-white font-semibold text-[1.25rem] tracking-wider uppercase">
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
