import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getIndividualRoom } from "../scripts/fetching/getIndividualRoom";
import LoadingScreen from "../components/loading-screen/LoadingScreen";
import IndividualRoomCard from "../components/Rooms/IndRoomCard";

function IndividualRoomDetails() {
  const urlParams = useParams();
  const roomType: string = urlParams.roomType ?? "";
  const [room, setRoom] = useState<[]>([]);

  const getSelectedRoom = async (): Promise<void> => {
    const room = await getIndividualRoom(roomType);
    setRoom(room);
  };

  useEffect(() => {
    getSelectedRoom();
  }, []);

  return (
    <section className="flex w-full items-center justify-center p-[0_2rem]">
      {room.length !== 0 ? (
        room.map((room, index) => {
          return <IndividualRoomCard selectedRoomDetails={room} key={index} />;
        })
      ) : (
        <LoadingScreen />
      )}
    </section>
  );
}

export default IndividualRoomDetails;
