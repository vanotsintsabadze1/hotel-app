import { FaPerson } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { useState, useEffect } from "react";
import { getRooms } from "../../scripts/fetching/getRooms.ts";
import { RoomType } from "../../types";
import LoadingScreen from "../loading-screen/LoadingScreen.tsx";

function RoomsContainer() {
  const [rooms, setRooms] = useState<RoomType[]>([]);

  const fetchRooms = async () => {
    const hotelRooms = await getRooms();
    setRooms((hotelRooms as RoomType[]) || []);
  };

  useEffect(() => {
    fetchRooms();
  }, []);

  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-[6rem] p-[5rem_0rem]">
        {rooms.length !== 0 ? (
          rooms.map((room, index) => {
            return (
              <div
                key={index}
                className="min-h-[40rem] w-[32rem] gap-[2rem] rounded-[1rem] shadow-room-card"
              >
                <div className="h-[20rem] w-full border-b-2 border-b-black">
                  <img src="#" alt={`room-${room.id}`} />
                </div>
                <div className="flex w-full flex-col justify-evenly gap-[1rem] p-[1rem]">
                  <h3 className="font-primary-bold text-[1.4rem]">{room.type}</h3>
                  <p className="text-[1.2rem] font-semibold">{room.description}</p>
                </div>
                <div className="mt-[0.5rem] flex items-center gap-[1rem] divide-x-2 divide-gray-500 p-[0_1rem]">
                  <div className="flex items-center">
                    <FaPerson className="flex h-[2rem] w-[2rem]" />
                    <p className="mt-[0.2rem] font-primary-bold text-[1.4rem]">{room.capacity}</p>
                  </div>
                  <div className="flex w-full items-center gap-[0.5rem] p-[1rem] ">
                    <FaMoneyBillWave className="h-[2rem] w-[2rem]" />
                    <p className="font-primary-bold text-[1.4rem]">
                      ${room.pricePerNight} - 1 Night
                    </p>
                  </div>
                </div>
                <div className="mb-[2rem] mt-[1.5rem] flex w-full items-center justify-center ">
                  <button className="h-[3.7rem] w-[13rem] rounded-[0.5rem] bg-primary shadow-2xl">
                    <p className="text-[1.2rem] font-semibold tracking-[0.3rem] text-white drop-shadow-hero-text">
                      Book
                    </p>
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <LoadingScreen />
        )}
      </div>
    </section>
  );
}

export default RoomsContainer;

// capacity: number;
//   description: string;
//   id: string;
//   images: string[];
//   pricePerNight: number;
//   pricePerNightCurrency: number;
//   type: number
