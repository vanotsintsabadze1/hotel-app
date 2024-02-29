import RoomsPageIntroduction from "../components/Rooms/RoomsPageIntroduction";
import RoomsContainer from "../components/Rooms/RoomsContainer";

function Rooms() {
  return (
    <section className=" w-full">
      <RoomsPageIntroduction />
      <RoomsContainer />
    </section>
  );
}

export default Rooms;
