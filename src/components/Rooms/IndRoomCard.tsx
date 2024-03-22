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
      <div className="min-h-[60rem] w-full rounded-[1rem]  pb-[3rem]  shadow-individual-room-card xl:w-[150rem]">
        <div className="flex items-center justify-center p-[1rem]">
          <h1 className="mt-[2rem] font-primary-bold text-[1.7rem] uppercase tracking-wider">Room Overview</h1>
        </div>
        <div className="flex w-full flex-col items-center lg:flex-grow lg:flex-row">
          <section className="flex w-full items-center justify-center p-[1rem_0_.5rem_0] lg:w-1/2 lg:p-[2rem]">
            <RoomSlider images={images} />
          </section>
          <section className="flex w-full flex-col items-center p-[0_2rem] lg:w-1/2 lg:p-0">
            <IndRoomDescription type={type} description={description} capacity={capacity} pricePerNight={pricePerNight} />
            <DateAdjust />
            <GuestAmount setGuestAmount={setGuestAmount} guestAmount={guestAmount} capacity={capacity} />
            <PaymentOptions />
            <div className="mb-[2rem] mt-[2rem] flex items-center justify-center p-[4rem_0rem_2rem_] lg:mb-[2rem] lg:mt-0">
              <button
                onClick={onBookButtonClick}
                className="drop-shadow- h-[4.5rem] w-[17rem] rounded-[.5rem] bg-primary font-primary-bold text-[1.3rem] uppercase tracking-wider text-slate-800 shadow-2xl"
              >
                Book
              </button>
            </div>
            {shouldErrorBeVisible && <ErrorModal errorMessage={errorMessage} />}
          </section>
        </div>
      </div>
    </DateContext.Provider>
  );
}

export default IndRoomCard;
