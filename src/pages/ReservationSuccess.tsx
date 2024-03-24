import { useLocation, useNavigate } from "react-router-dom";
import { getReservationByIdentifier } from "../scripts/fetching/getReservationByIdentifier";
import { useEffect, useState } from "react";
import { ReservedRoomDetails } from "../types";
import { format } from "date-fns";
import LoadingScreen from "../components/Loading-Screen/LoadingScreen";
import RoomSlider from "../components/Rooms/Individual-Room-Booking-Components/RoomSlider";
import OrderInformation from "../components/Rooms/Reserved-Room-Components/OrderInformation";

function ReservationSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const [_, reservationIdentifier] = location.search.split("ReservationIdentifier=");
  const [roomData, setRoomData] = useState<ReservedRoomDetails>();

  const getReservedRoom = async () => {
    const data = await getReservationByIdentifier(reservationIdentifier);
    setRoomData(data);
  };

  useEffect(() => {
    if (reservationIdentifier !== null && reservationIdentifier !== undefined) {
      getReservedRoom();
    }
  }, []);

  const { checkInDateUtc, checkOutDateUtc, numberOfGuests, room, status } = roomData || {};
  const { type: roomType, images, description } = room || {};
  const formattedCheckInDate = checkInDateUtc ? format(new Date(checkInDateUtc), "dd MMM, yyyy") : "";
  const formattedCheckOutDate = checkOutDateUtc ? format(new Date(checkOutDateUtc), "dd MMM, yyyy") : "";

  if (status === 1) {
    return (
      <main className="mb-[5rem] mt-[13rem] flex w-full items-center justify-center p-[0_2.5rem]">
        <div className="min-h-[40rem] w-full rounded-[1rem] pb-[2rem] shadow-soft xl:w-[150rem]">
          <div className="flex w-full flex-col items-center lg:flex-grow lg:flex-row">
            <section className="flex w-full items-center justify-center p-[1rem_0_.5rem_0] lg:w-1/2 lg:p-[2rem]">
              <div className="mt-[2rem] flex w-full items-center justify-center">
                <RoomSlider images={images} sliderType="indRoom" />
              </div>
            </section>
            <section className="flex w-full flex-col items-center p-[0_2rem] lg:w-1/2 lg:p-0">
              <div className="flex w-full items-center justify-center">
                <OrderInformation
                  roomType={roomType}
                  description={description}
                  formattedCheckInDate={formattedCheckInDate}
                  formattedCheckOutDate={formattedCheckOutDate}
                  numberOfGuests={numberOfGuests}
                />
              </div>
              <div className="mt-[2rem] flex items-center justify-center p-[4rem_0rem_2rem_] lg:mb-[2rem] lg:mt-0">
                <button
                  className="h-[4.5rem] w-[17rem] rounded-[.5rem] bg-primary text-[1.3rem] font-bold uppercase tracking-wider text-slate-800 shadow-soft"
                  onClick={() => {
                    navigate("/");
                  }}
                >
                  Go Back
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    );
  } else {
    return <LoadingScreen />;
  }
}

export default ReservationSuccess;
