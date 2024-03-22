import React from "react";

function GuestAmount({ setGuestAmount, capacity, guestAmount }: { setGuestAmount: React.Dispatch<React.SetStateAction<number>>; capacity: number; guestAmount: number }) {
  const increaseGuestAmount = () => {
    if (guestAmount >= capacity) {
      return;
    } else {
      setGuestAmount((prev) => prev + 1);
    }
  };
  const decreaseGuestAmount = () => {
    if (guestAmount <= 0) {
      return;
    } else {
      setGuestAmount((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full justify-center">
      <div className="mt-[1rem] flex w-full items-center justify-center lg:justify-start">
        <input
          type="text"
          className="h-[4.5rem] w-[20rem] border-2 border-primary p-[1rem_1rem] text-[1.3rem]"
          placeholder="Amount of Guests.."
          contentEditable={false}
          value={`Amount of Guests - ${guestAmount}`}
          readOnly
        />
        <button className="h-[4.5rem] w-[7rem] bg-primary text-[2rem] font-bold text-black" onClick={decreaseGuestAmount}>
          -
        </button>

        <button className="h-[4.5rem] w-[7rem] bg-primary text-[2rem] font-bold text-black" onClick={increaseGuestAmount}>
          +
        </button>
      </div>
    </div>
  );
}

export default GuestAmount;
