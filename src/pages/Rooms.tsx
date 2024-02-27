import RoomsPageIntroduction from "../components/Rooms/RoomsPageIntroduction";
import { useEffect, useState } from "react";
import { getRooms } from "../scripts/fetching/getRooms";
import RoomsContainer from "../components/Rooms/RoomsContainer";

function Rooms() {
  const [rooms, setRooms] = useState([]);

  const fetchRooms = async () => {
    const hotelRooms = await getRooms();
    setRooms(hotelRooms);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <section className=" w-full">
      <RoomsPageIntroduction />
      <RoomsContainer roomList={rooms} />
    </section>
  );
}

export default Rooms;
