import CardContainer from "@/components/Rooms/CardContainer";
import Introduction from "@/components/Rooms/Introduction";
import { room } from "@/interfaces/rooms";

async function getRooms(): Promise<room[]> {
  const apiAddress = process.env.API_ADDRESS;
  const response = await fetch(`${apiAddress}/api/Room`, {
    method: "GET",
    credentials: "include",
  });
  return response.json();
}

async function Rooms() {
  const rooms = await getRooms();

  return (
    <>
      <Introduction />
      <CardContainer />
    </>
  );
}

export default Rooms;
