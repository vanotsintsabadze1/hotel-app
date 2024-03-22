import axios from "axios";
const apiAddr = import.meta.env.VITE_API_ADDR;

const getReservationByIdentifier = async (identifier: string) => {
  const response = await axios.get(`${apiAddr}/api/Reservation/${parseInt(identifier)}`, { withCredentials: true });
  return response.data;
};

export { getReservationByIdentifier };
