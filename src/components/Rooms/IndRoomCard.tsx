import { RoomType } from "../../types";
import { useState } from "react";
import { DateContext } from "../../contexts/dateContext";
import { isBefore } from "date-fns";
import { setReservation } from "../../scripts/reservation/setReservation";
import { errorModalToggler } from "../../scripts/style-controllers/errorModalToggler";
import { dateIsoToUtc } from "../../scripts/reservation/dateIsoToUtc";
import ErrorModal from "../DatePicking/ErrorModal";
import IndRoomDescription from "./IndividualRoomPageComponents/IndRoomDescription";
import RoomSlider from "./IndividualRoomPageComponents/RoomSlider";
import DateAdjust from "./IndividualRoomPageComponents/DateAdjust";
import GuestAmount from "./IndividualRoomPageComponents/GuestAmount";
import PaymentOptions from "./IndividualRoomPageComponents/PaymentOptions";

function IndRoomCard({ selectedRoomDetails }: { selectedRoomDetails: RoomType }) {
  const { id, images, description, pricePerNight, capacity, type } = selectedRoomDetails;

  const [guestAmount, setGuestAmount] = useState<number>(0);
  const [checkInDate, setCheckInDate] = useState<string>("");
  const [checkOutDate, setCheckOutDate] = useState<string>("");
  const [shouldErrorBeVisible, setShouldErrorBeVisible] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  const onBookButtonClick = () => {
    if (checkInDate === "" || checkOutDate === "") {
      errorModalToggler(setErrorMessage, "Date fields are not set!", setShouldErrorBeVisible);
      return;
    }

    if (isBefore(checkOutDate, checkInDate)) {
      errorModalToggler(setErrorMessage, "Check-Out date can't be before Check-In date!", setShouldErrorBeVisible);
      return;
    }

    if (guestAmount === 0) {
      errorModalToggler(setErrorMessage, "Guest Amount must be more than 0!", setShouldErrorBeVisible);
      return;
    }

    const reservationData = {
      roomId: id,
      checkInDateUtc: dateIsoToUtc(checkInDate),
      checkOutDateUtc: dateIsoToUtc(checkOutDate),
      numberOfGuests: guestAmount,
    };

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
        <RoomSlider images={images} />
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

export default IndRoomCard;
