import DatePickerContainer from "./DatePickerContainer";
import DatePicker from "react-datepicker";
import { useState, useContext, useEffect } from "react";
import { DateContext } from "../../contexts/dateContext";
import { formatISO } from "date-fns";

import "react-datepicker/dist/react-datepicker.css";
import "./DatePickerStyles.css";

function CheckOutDatePicker({ setVisibility }: { setVisibility: React.Dispatch<React.SetStateAction<boolean>> }) {
  const dateValueContext = useContext(DateContext);
  let currentDate = new Date();
  let minDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate() + 1);
  const [checkOutDate, setCheckOutDate] = useState<Date | null>(minDate);
  const [formattedCheckOutDate, setFormattedCheckOutDate] = useState<string>("");
  const {
    setReservationDate: { setCheckOutDate: checkOutDateSetter },
  } = dateValueContext;

  useEffect(() => {
    var formattedDate = formatISO(checkOutDate as Date);
    setFormattedCheckOutDate(formattedDate);
  }, [checkOutDate]);

  const onCheckInSubmitButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    checkOutDateSetter(formattedCheckOutDate);
    setVisibility(false);
  };

  return (
    <DatePickerContainer>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-[3rem]">
        <span className="text-[1.4rem] font-bold">Select Check-Out Date</span>
        <DatePicker
          className="w-[15rem] rounded-[.5rem] border-2  border-primary p-[.5rem] text-center text-[1.8rem] font-bold tracking-wide"
          selected={checkOutDate}
          onKeyDown={(e) => e.preventDefault()}
          minDate={minDate}
          onChange={(date) => setCheckOutDate(date)}
        />
        <button className="mt-[1rem] h-[4rem] w-[15rem] rounded-[.5rem] bg-primary text-[1.5rem] font-bold uppercase" onClick={onCheckInSubmitButtonClick}>
          Submit
        </button>
      </div>
    </DatePickerContainer>
  );
}

export default CheckOutDatePicker;
