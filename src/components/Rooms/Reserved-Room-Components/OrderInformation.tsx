function OrderInformation({
  roomType,
  description,
  formattedCheckInDate,
  formattedCheckOutDate,
  numberOfGuests,
}: {
  roomType: string | undefined;
  description: string | undefined;
  formattedCheckInDate: string | undefined;
  formattedCheckOutDate: string | undefined;
  numberOfGuests: number | undefined;
}) {
  return (
    <div className="flex w-full flex-col justify-center gap-[1.5rem] text-[1.35rem] sm:w-[42rem] md:w-[46rem]">
      <div className="mb-[1rem] w-full">
        <h1 className="mt-[2rem] flex items-center justify-center text-[1.7rem] font-bold uppercase tracking-wider text-green-400">Order Completed</h1>
      </div>
      <p>
        <b>Room Type</b>: {roomType}
      </p>
      <p>
        <b>Description</b>: {description}
      </p>
      <p className="lg:w-[50rem]">
        <b>Check-In Date</b>: {formattedCheckInDate}
      </p>
      <p className="lg:w-[50rem]">
        <b>Check-Out Date</b>: {formattedCheckOutDate}
      </p>
      <p>
        <b>Number of Guests</b>: {numberOfGuests}
      </p>
    </div>
  );
}
export default OrderInformation;
