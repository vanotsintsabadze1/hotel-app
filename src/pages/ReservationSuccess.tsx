import { useLocation } from "react-router-dom";
import { getReservationByIdentifier } from "../scripts/fetching/getReservationByIdentifier";
import { useEffect, useState } from "react";

function ReservationSuccess() {
  const location = useLocation();
  const [_, reservationIdentifier] = location.search.split("ReservationIdentifier=");
  const [roomData, setRoomData] = useState();

  const getReservedRoom = async () => {
    const data = await getReservationByIdentifier(reservationIdentifier);
    setRoomData(roomData);
    console.log(data);
  };

  useEffect(() => {
    if (reservationIdentifier !== null && reservationIdentifier !== undefined) {
      getReservedRoom();
    }
  }, []);

  return (
    <main className="mb-[5rem] mt-[13rem] flex w-full items-center justify-center p-[0_2.5rem]">
      <div className="shadow-soft min-h-[60rem] w-full  rounded-[1rem]  pb-[3rem] xl:w-[150rem]">
        <div className="flex items-center justify-center p-[1rem]">
          <h1 className="mt-[2rem] font-bold text-[1.7rem] uppercase tracking-wider">Room Overview</h1>
        </div>
        <div className="flex w-full flex-col items-center lg:flex-grow lg:flex-row">
          <section className="flex w-full items-center justify-center p-[1rem_0_.5rem_0] lg:w-1/2 lg:p-[2rem]">
            <div className="flex h-[22rem] w-[40rem] items-center justify-center p-[0_2rem] xs:w-full sm:h-[28rem] sm:w-[46rem] md:h-[30rem] md:w-[50rem] lg:h-[32rem] lg:w-[50rem] xl:h-[48rem] xl:w-[70rem]">
              <img src="" alt="" className="shadow-soft h-full w-full rounded-[.5rem] object-fill" />
            </div>
          </section>
          <section className="flex w-full flex-col items-center p-[0_2rem] lg:w-1/2 lg:p-0">
            <div className="flex w-full items-center justify-center">
              <div className="flex w-full flex-col justify-center gap-[0.7rem] text-[1.35rem] sm:w-[42rem] md:w-[46rem]">
                <div className="mb-[1rem] w-full">
                  <h1 className="mt-[2rem] flex items-center justify-center font-bold text-[1.7rem] uppercase tracking-wider text-green-400">Order Completed</h1>
                </div>
                <p>
                  <b>Room Type</b>: Suite
                </p>
                <p className="lg:w-[50rem]">
                  <b>Description</b>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam, iusto.
                </p>
                <p>
                  <b>Max Number of Guests</b>: 2
                </p>
                <p>
                  <b>Price per night</b>: $450
                </p>
              </div>
            </div>
            <div className="mb-[2rem] mt-[2rem] flex items-center justify-center p-[4rem_0rem_2rem_] lg:mb-[2rem] lg:mt-0">
              <button className="shadow-soft h-[4.5rem] w-[17rem] rounded-[.5rem] bg-primary font-bold text-[1.3rem] uppercase tracking-wider text-slate-800">Go Back</button>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}

export default ReservationSuccess;
