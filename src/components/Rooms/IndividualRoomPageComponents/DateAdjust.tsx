import { useState, useContext, useEffect } from "react";
import { dateContext } from "../../../contexts/dateContext";
import CheckInDatePicker from "../../DatePicking/CheckInDatePicker";
import CheckOutDatePicker from "../../DatePicking/CheckOutDatePicker";
import { getISODay, getMonth, format } from "date-fns";

function DateAdjust() {
  const dateValueContext = useContext(dateContext);
  const {
    reservationDates: { checkInDate, checkOutDate },
  } = dateValueContext;
  const [checkInDatePickerVisibility, setCheckInDatePickerVisibility] = useState<boolean>(false);
  const [checkOutDatePickerVisibility, setCheckOutDatePickerVisibility] = useState<boolean>(false);
  const [checkInValue, setCheckInValue] = useState<string>(checkInDate);
  const [checkOutValue, setCheckOutValue] = useState<string>("Not Set");

  useEffect(() => {
    if (checkInDate !== "") {
      setCheckInValue(`${getISODay(checkInDate)} ${format(checkInDate, "LLLL")}`);
    }
  }, [checkInDate]);

  useEffect(() => {
    if (checkOutDate !== "") {
      setCheckOutValue(`${getISODay(checkOutDate)} ${format(checkOutDate, "LLLL")}`);
    }
  }, [checkOutDate]);

  return (
    <div className="relative mb-[1rem] mt-[1rem] flex w-full items-center justify-center gap-[3rem] p-[1rem_0_2rem_0]">
      <div className="flex flex-col items-center gap-[0.5rem]">
        <p>
          <b>Check In</b>
        </p>
        <input
          className="h-[5rem] w-[9rem] rounded-lg bg-secondary text-center text-[1.1rem] font-bold text-white"
          value={checkInValue === "" ? "Not Set" : checkInValue}
          onClick={() => setCheckInDatePickerVisibility(true)}
          readOnly
        ></input>

        {/* CheckOut */}
      </div>
      <div className="flex h-full flex-col items-center  gap-[0.5rem]">
        <p>
          <b>Check Out</b>
        </p>
        <input
          className="h-[5rem] w-[9rem] rounded-lg bg-secondary text-center text-[1.1rem] font-bold text-white"
          value={checkOutValue === "" ? "Not Set" : checkOutValue}
          readOnly
          onClick={() => setCheckOutDatePickerVisibility(true)}
        ></input>
      </div>
      {checkInDatePickerVisibility && <CheckInDatePicker setVisibility={setCheckInDatePickerVisibility} />}
      {checkOutDatePickerVisibility && <CheckOutDatePicker setVisibility={setCheckOutDatePickerVisibility} />}
    </div>
  );
}

export default DateAdjust;
