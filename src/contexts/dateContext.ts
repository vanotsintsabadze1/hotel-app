import { createContext } from "react";
import { ReservationDates, DateContextType } from "../types";

const DateContext = createContext<DateContextType>({
  reservationDates: {} as ReservationDates,
  setReservationDate: {
    setCheckInDate: (_data: string) => {},
    setCheckOutDate: (_data: string) => {},
  },
});

export { DateContext };
