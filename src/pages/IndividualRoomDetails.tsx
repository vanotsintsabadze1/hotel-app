import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getIndividualRoom } from "../scripts/fetching/getIndividualRoom";
import LoadingScreen from "../components/Loading-Screen/LoadingScreen";
import IndRoomCard from "../components/Rooms/IndRoomCard";

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
    <section className="mb-[5rem] mt-[13rem] flex w-full items-center justify-center p-[0_2.5rem]">
      {room.length !== 0 ? (
        room.map((room, index) => {
          return <IndRoomCard selectedRoomDetails={room} key={index} />;
        })
      ) : (
        <LoadingScreen />
      )}
    </section>
  );
}

export default IndividualRoomDetails;
