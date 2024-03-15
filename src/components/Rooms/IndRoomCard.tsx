import { RoomType } from "../../types";
import { useState, useEffect } from "react";
import { DateContext } from "../../contexts/dateContext";
import { isBefore } from "date-fns";
import { DateTime } from "luxon";
import ErrorModal from "../DatePicking/ErrorModal";
import IndRoomDescription from "./IndividualRoomPageComponents/IndRoomDescription";
import RoomSlider from "./IndividualRoomPageComponents/RoomSlider";
import DateAdjust from "./IndividualRoomPageComponents/DateAdjust";
import GuestAmount from "./IndividualRoomPageComponents/GuestAmount";
import PaymentOptions from "./IndividualRoomPageComponents/PaymentOptions";
import { setReservation } from "../../scripts/reservation/setReservation";

function IndividualRoomCard({ selectedRoomDetails }: { selectedRoomDetails: RoomType }) {
  const { description, pricePerNight, capacity, type } = selectedRoomDetails;

  const [guestAmount, setGuestAmount] = useState<number>(0);
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");
  const [shouldErrorBeVisible, setShouldErrorBeVisible] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    console.log(checkInDate);
  }, []);

  const onBookButtonClick = () => {
    if (checkInDate === "" || checkOutDate === "") {
      setErrorMessage("Check-in or check-out date is not set!");
      setShouldErrorBeVisible(true);

      setTimeout(() => {
        setShouldErrorBeVisible(false);
      }, 2500);
      return;
    }

    if (isBefore(checkOutDate, checkInDate)) {
      setErrorMessage("Check-out date cannot be before check-in date!");
      setShouldErrorBeVisible(true);

      setTimeout(() => {
        setShouldErrorBeVisible(false);
      }, 2500);
      return;
    }

    if (guestAmount === 0) {
      setErrorMessage("Guest amount is not set!");
      setShouldErrorBeVisible(true);

      setTimeout(() => {
        setShouldErrorBeVisible(false);
      }, 2500);
      return;
    }

    const reservationData = {
      roomId: "id1",
      checkInDateUtc: DateTime.fromISO(checkInDate, { zone: "local" }).toUTC().toISO(),
      checkOutDateUtc: DateTime.fromISO(checkOutDate, { zone: "local" }).toUTC().toISO(),
      numberOfGuests: guestAmount,
    };

    console.log(reservationData);

    setReservation(reservationData);
  };

  return (
    <DateContext.Provider
      value={{
        reservationDates: { checkInDate: checkInDate, checkOutDate: checkOutDate },
        setReservationDate: { setCheckInDate: setCheckInDate, setCheckOutDate: setCheckOutDate },
      }}
    >
      <div className="relative mb-[5rem] mt-[12rem] flex min-h-[50rem] w-full flex-col rounded-[2rem] p-[2rem_2rem] shadow-individual-room-card lg:w-auto">
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
        {shouldErrorBeVisible && <ErrorModal errorMessage={errorMessage} />}
      </div>
    </DateContext.Provider>
  );
}

export default IndividualRoomCard;
