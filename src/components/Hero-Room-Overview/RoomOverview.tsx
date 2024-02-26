import RoomContainers from "./RoomContainers";

function RoomOverview() {
  return (
    <section className="flex h-[100rem] w-full flex-col">
      <div className="flex h-[7rem] w-full items-center justify-center md:mb-[1.5rem] md:mt-[1.5rem]">
        <h1 className="text-center text-[1rem] font-bold text-secondary md:text-[1.5rem]">
          All our room types are including complementary breakfast
        </h1>
      </div>
      <RoomContainers />
    </section>
  );
}

export default RoomOverview;
