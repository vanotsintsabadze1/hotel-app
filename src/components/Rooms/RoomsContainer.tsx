import { lazy } from "react";
import { useState, useEffect } from "react";
import { getRooms } from "../../scripts/fetching/getRooms.ts";
import { RoomType } from "../../types";
import LoadingScreen from "../loading-screen/LoadingScreen.tsx";
const RoomContainerCard = lazy(() => import("./RoomContainerCard.tsx"));

function RoomsContainer() {
  const [rooms, setRooms] = useState<RoomType[]>([]);

  const fetchRooms = async () => {
    const hotelRooms = await getRooms();
    setRooms((hotelRooms as RoomType[]) || []);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <section className="flex min-h-[30rem] w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-[6rem] p-[5rem_2rem] lg:w-[80rem] lg:flex-row lg:flex-wrap lg:gap-[10rem] xl:w-[120rem]">
        {rooms.length !== 0 ? (
          rooms.map((room, index) => {
            return <RoomContainerCard room={room} roomId={room.id} key={index} />;
          })
        ) : (
          <LoadingScreen />
        )}
      </div>
    </section>
  );
}

export default RoomsContainer;
