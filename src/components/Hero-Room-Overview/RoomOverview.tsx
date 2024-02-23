import RoomContainers from "./RoomContainers";

function RoomOverview() {
  return (
    <section className="flex h-[100rem] w-full flex-col">
      <div className="flex h-[7rem] w-full items-center justify-center">
        <h1 className="text-center text-[1rem] font-bold text-secondary">
          All our room types are including complementary breakfast
        </h1>
      </div>
      <RoomContainers />
    </section>
  );
}

export default RoomOverview;
