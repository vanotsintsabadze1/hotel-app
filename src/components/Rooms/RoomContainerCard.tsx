import { FaPerson } from "react-icons/fa6";
import { FaMoneyBillWave } from "react-icons/fa";
import { RoomType } from "../../types";
import { useNavigate } from "react-router-dom";
import RoomSlider from "./Individual-Room-Booking-Components/RoomSlider";

function RoomContainerCard({ room, roomId }: { room: RoomType; roomId: string }) {
  const navigate = useNavigate();

  const onClickRedirectToRoom = () => {
    navigate(`/rooms/${roomId}`);
  };

  const { images } = room || {};

  return (
    <div className="relative min-h-[45rem] max-w-[32rem] gap-[2rem] rounded-[1rem] shadow-soft">
      <div className="h-[20rem] w-full border-b-2 border-b-black">
        <RoomSlider images={images} sliderType="roomContainer" />
      </div>
      <div className="flex w-full flex-col justify-evenly gap-[.5rem] p-[1rem]">
        <h3 className="text-[1.4rem] font-bold">{room.type}</h3>
        <p className="text-[1.2rem] font-semibold">{room.description}</p>
      </div>
      <div className="mt-[0.5rem] flex items-center gap-[1rem] divide-x-2 divide-gray-500 p-[0_1rem]">
        <div className="flex items-center">
          <FaPerson className="flex h-[2rem] w-[2rem]" />
          <p className="mt-[0.2rem] text-[1.4rem] font-bold">{room.capacity}</p>
        </div>
        <div className="flex w-full items-center gap-[0.5rem] p-[1rem] ">
          <FaMoneyBillWave className="h-[2rem] w-[2rem]" />
          <p className="text-[1.4rem] font-bold">${room.pricePerNight} - 1 Night</p>
        </div>
      </div>
      <div className="absolute bottom-[3rem] flex w-full items-center justify-center ">
        <button className="h-[3.7rem] w-[13rem] rounded-[0.5rem] bg-primary shadow-2xl" onClick={onClickRedirectToRoom}>
          <p className="text-[1.2rem] font-semibold tracking-[0.3rem] text-white drop-shadow-text-soft">Book</p>
        </button>
      </div>
    </div>
  );
}

export default RoomContainerCard;
