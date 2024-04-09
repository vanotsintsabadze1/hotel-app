import Container from "@/components/Rooms/Container";
import Introduction from "@/components/Rooms/Introduction";
import { room } from "@/interfaces/rooms";

const apiAddress = process.env.API_ADDRESS;

async function getRooms() {
  const response = await fetch(`${apiAddress}/api/Room`, {
    method: "GET",
    cache: "no-store",
  });
  return response.json();
}

async function Rooms() {
  const room: room[] = await getRooms();

  return (
    <>
      <Introduction />
      <Container rooms={room} />
    </>
  );
}

export default Rooms;
