const apiAddr = import.meta.env.VITE_API_ADDR;
import axios from "axios";
import { RoomType } from "../../types";

const getRooms = async (): Promise<RoomType[]> => {
  const response = await axios.get(`${apiAddr}/api/Room`, {
    withCredentials: true,
  });
  return response.data;
};

export { getRooms };
