const apiAddr = import.meta.env.VITE_API_ADDR;
import axios from "axios";

const getRooms = async () => {
  const response = await axios.get(`${apiAddr}/api/Room`, {
    withCredentials: true,
  });
  console.log(response.data);
  return response.data;
};

export { getRooms };
