function IndRoomDescription({
  type,
  description,
  capacity,
  pricePerNight,
}: {
  type: number;
  description: string;
  capacity: number;
  pricePerNight: number;
}) {
  return (
    <div className="mt-[2rem] flex w-full flex-col justify-center gap-[0.7rem] text-[1.2rem]">
      <p>
        <b>Room Type</b>: {type}
      </p>
      <p>
        <b>Description</b>: {description}
      </p>
      <p>
        <b>Max Number of Guests</b>: {capacity}
      </p>
      <p>
        <b>Price per night</b>: ${pricePerNight}
      </p>
    </div>
  );
}

export default IndRoomDescription;
