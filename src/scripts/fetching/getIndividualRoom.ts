import axios from "axios";
import { RoomType } from "../../types";
const apiAddr = import.meta.env.VITE_API_ADDR;

const getIndividualRoom = async (roomId: string) => {
  const response = await axios.get(`${apiAddr}/api/Room`);
  const data = await response.data;
  const selectedRoom = data.filter((room: RoomType) => room.id === roomId);
  return selectedRoom;
};

export { getIndividualRoom };
