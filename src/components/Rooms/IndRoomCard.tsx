import { RoomType } from "../../types";
import { useState, useEffect } from "react";
import { dateContext } from "../../contexts/dateContext";
import IndRoomDescription from "./IndividualRoomPageComponents/IndRoomDescription";
import RoomSlider from "./IndividualRoomPageComponents/RoomSlider";
import DateAdjust from "./IndividualRoomPageComponents/DateAdjust";
import GuestAmount from "./IndividualRoomPageComponents/GuestAmount";
import PaymentOptions from "./IndividualRoomPageComponents/PaymentOptions";
import { isBefore } from "date-fns";

function IndividualRoomCard({ selectedRoomDetails }: { selectedRoomDetails: RoomType }) {
  const { description, pricePerNight, capacity, type } = selectedRoomDetails;

  const [guestAmount, setGuestAmount] = useState<number>(0);
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");

  useEffect(() => {
    console.log(checkInDate);
  }, []);

  const onBookButtonClick = () => {
    if (checkInDate === "" || checkOutDate === "") {
      alert("Dates are not set!");
      return;
    }

    if (guestAmount === 0) {
      alert("Guest amount is not set!");
      return;
    }

    if (isBefore(checkOutDate, checkInDate)) {
      alert("Check-out date is before check-in date!");
      return;
    }
  };

  return (
    <dateContext.Provider
      value={{
        reservationDates: { checkInDate: checkInDate, checkOutDate: checkOutDate },
        setReservationDate: { setCheckInDate: setCheckInDate, setCheckOutDate: setCheckOutDate },
      }}
    >
      <div className="mb-[5rem] mt-[12rem] min-h-[50rem] w-full rounded-[2rem] p-[2rem_2rem] shadow-individual-room-card lg:w-[50rem]">
        <div className="flex w-full items-center justify-center">
          <h1 className="font-primary-bold text-[1.7rem] uppercase tracking-wider">Room Overview</h1>
        </div>
        <RoomSlider />
        <IndRoomDescription type={type} description={description} capacity={capacity} pricePerNight={pricePerNight} />
        <DateAdjust />
        <GuestAmount setGuestAmount={setGuestAmount} guestAmount={guestAmount} capacity={capacity} />
        <PaymentOptions />
        <div className="flex items-center justify-center p-[4rem_0rem_2rem_]">
          <button
            onClick={onBookButtonClick}
            className="drop-shadow- h-[4rem] w-[15rem] rounded-[1rem] bg-primary font-primary-bold text-[1.3rem] uppercase tracking-wider text-black shadow-individual-room-card"
          >
            Book
          </button>
        </div>
      </div>
    </dateContext.Provider>
  );
}

export default IndividualRoomCard;
