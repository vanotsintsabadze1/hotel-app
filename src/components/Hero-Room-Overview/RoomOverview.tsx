import RoomContainers from "./RoomContainers";

function RoomOverview() {
  return (
    <section className="w-full h-[100rem] flex flex-col">
      <div className="w-full h-[7rem] flex justify-center items-center">
        <h1 className="text-secondary font-bold text-[1rem] text-center">
          All our room types are including complementary breakfast
        </h1>
      </div>
      <RoomContainers />
    </section>
  );
}

export default RoomOverview;
