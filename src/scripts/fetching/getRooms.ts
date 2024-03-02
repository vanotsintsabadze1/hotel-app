const apiAddr = import.meta.env.VITE_API_ADDR;
import axios from "axios";
import { RoomType } from "../../types";

const getRooms = async (): Promise<RoomType[] | undefined> => {
  try {
    const response = await axios.get(`${apiAddr}/api/Room`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error) {
    console.error(error);
    return undefined;
  }
};

export { getRooms };
