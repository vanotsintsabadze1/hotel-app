import { lazy } from "react";
import { IoArrowDownSharp } from "react-icons/io5";
const RoomsContainer = lazy(() => import("../Rooms/RoomsContainer"));

function RoomsPageIntroduction() {
  return (
    <>
      <div className="center relative flex h-[35rem] w-full flex-col items-center justify-center bg-room-image bg-cover bg-center shadow-2xl md:h-[40rem] lg:h-[50rem]">
        <div className="absolute h-full w-full bg-secondary opacity-[70%]"></div>
        <div className="flex w-full flex-col items-center justify-center gap-[0.5rem]">
          <h1 className=" z-[1] text-center font-primary-bold text-[3rem] uppercase tracking-[0.2rem] text-white drop-shadow-hero-text md:w-[50rem] md:text-[4rem] lg:w-[80rem] lg:text-[6rem]">
            Recharge your travels
          </h1>
          <p className="z-[2] text-center text-[1.3rem] font-[500] text-white drop-shadow-hero-text">
            Book your stay now!
          </p>
        </div>

        <button className="absolute bottom-[2rem] flex  h-[4rem] w-[4rem] animate-bounce items-center justify-center rounded-[50%] bg-white sm:bottom-[2.5rem]">
          <IoArrowDownSharp className="h-[2rem] w-[2rem]" />
        </button>
      </div>
      <RoomsContainer />
    </>
  );
}

export default RoomsPageIntroduction;
