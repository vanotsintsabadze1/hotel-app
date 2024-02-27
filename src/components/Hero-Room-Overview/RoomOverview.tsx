import RoomContainers from "./RoomHighlight";

function RoomOverview() {
  return (
    <section className="flex  w-full flex-col lg:h-[90rem]">
      <div className="mt-[1rem] flex h-[5rem] w-full items-center justify-center md:mb-[1.5rem]">
        <h1 className="text-center text-[1rem] font-bold text-secondary md:text-[1.5rem]">
          All our room types are including complementary breakfast
        </h1>
      </div>
      <RoomContainers />
    </section>
  );
}

export default RoomOverview;
