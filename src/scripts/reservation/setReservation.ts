import axios from "axios";
const apiAddr = import.meta.env.VITE_API_ADDR;
import { ReservationData } from "../../types";

const setReservation = async (reservationData: ReservationData): Promise<void> => {
  console.log(reservationData);
  const response = await axios.post(`${apiAddr}/api/Reservation`, reservationData, { withCredentials: true });
  window.open(response.data.approveLink, "_blank");
};

export { setReservation };
