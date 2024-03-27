import RoomContainers from "./RoomHighlight";

function RoomOverview() {
  return (
    <section className="mb-[5rem] flex w-full flex-col">
      <div className="mt-[1rem] flex h-[5rem] w-full items-center justify-center md:mb-[1.5rem] lg:mt-[4rem]">
        <h1 className="text-center text-[1.2rem] font-bold text-secondary md:text-[1.5rem] lg:text-[1.7rem]">All our room types are including complementary breakfast</h1>
      </div>
      <RoomContainers />
    </section>
  );
}

export default RoomOverview;
