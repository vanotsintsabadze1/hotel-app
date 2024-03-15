import React from "react";

function GuestAmount({
  setGuestAmount,
  capacity,
  guestAmount,
}: {
  setGuestAmount: React.Dispatch<React.SetStateAction<number>>;
  capacity: number;
  guestAmount: number;
}) {
  const increaseGuestAmount = () => {
    if (guestAmount >= capacity) {
      alert("You have reached the maximum amount of guests for this room");
      setGuestAmount(capacity);
    } else {
      setGuestAmount((prev) => prev + 1);
    }
  };
  const decreaseGuestAmount = () => {
    if (guestAmount <= 0) {
      alert("You cannot have less than 0 guests");
      setGuestAmount(0);
    } else {
      setGuestAmount((prev) => prev - 1);
    }
  };

  return (
    <div className="w-full justify-center">
      <div className="mt-[1rem] flex w-full items-center justify-center">
        <input
          type="text"
          className="h-[4rem] w-[20rem] border-2 border-primary p-[1rem_1rem] text-[1.2rem]"
          placeholder="Amount of Guests.."
          contentEditable={false}
          value={guestAmount === 0 ? `Amount of Guests - ${guestAmount}` : guestAmount}
          readOnly
        />
        <button className="h-[4rem] w-[7rem] bg-primary text-[2rem] font-bold text-black" onClick={decreaseGuestAmount}>
          -
        </button>

        <button className="h-[4rem] w-[7rem] bg-primary text-[2rem] font-bold text-black" onClick={increaseGuestAmount}>
          +
        </button>
      </div>
    </div>
  );
}

export default GuestAmount;
