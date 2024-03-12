import { createContext } from "react";
import { ReservationDates, DateContextType } from "../types";

const dateContext = createContext<DateContextType>({
  reservationDates: {} as ReservationDates,
  setReservationDate: {
    setCheckInDate: (_data: string) => {},
    setCheckOutDate: (_data: string) => {},
  },
});

export { dateContext };
