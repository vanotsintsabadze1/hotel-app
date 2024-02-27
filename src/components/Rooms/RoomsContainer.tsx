import { FaPerson } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";

type RoomType = {
  capacity: number;
  description: string;
  id: string;
  images: string[];
  pricePerNight: number;
  pricePerNightCurrency: number;
  type: number;
};

function RoomsContainer({ roomList }: { roomList: RoomType[] }) {
  return (
    <section className="flex w-full flex-col items-center justify-center">
      <div className="flex w-full flex-col items-center justify-center gap-[6rem] p-[5rem_0rem]">
        {roomList.length !== 0 ? (
          roomList.map((room, index) => {
            return (
              <div
                key={index}
                className="shadow-room-card min-h-[30rem] w-[30rem] gap-[2rem] rounded-[1rem]"
              >
                <div className="h-[14rem] w-full border-b-2 border-b-black">
                  <img src="#" alt={`room-${room.id}`} />
                </div>
                <div className="flex w-full flex-col justify-evenly p-[1rem]">
                  <h3 className="font-primary-bold text-[1.4rem]">{room.type}</h3>
                  <p className="">{room.description}</p>
                </div>
                <div className="flex items-center p-[0_1rem]">
                  <FaPerson className="flex h-[2rem] w-[2rem]" />
                  <p className="mt-[0.2rem] font-primary-bold text-[1.4rem]">{room.capacity}</p>
                </div>
                <div className="flex w-full items-center gap-[0.5rem] p-[1rem] ">
                  <FaMoneyBillWave className="h-[2rem] w-[2rem]" />
                  <p className="font-primary-bold text-[1.4rem]">${room.pricePerNightCurrency}</p>
                </div>
              </div>
            );
          })
        ) : (
          <p>Loading...</p>
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
