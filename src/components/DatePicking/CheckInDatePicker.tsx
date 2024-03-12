import DatePickerContainer from "./DatePickerContainer";
import DatePicker from "react-datepicker";
import "./DatePickerStyles.css";
import { useState, useContext, useEffect } from "react";
import { dateContext } from "../../contexts/dateContext";
import { formatISO } from "date-fns";
import "react-datepicker/dist/react-datepicker.css";

function CheckInDatePicker({ setVisibility }: { setVisibility: React.Dispatch<React.SetStateAction<boolean>> }) {
  const dateValueContext = useContext(dateContext);
  const [checkInDate, setCheckInDate] = useState<Date | null>(new Date());
  const [formattedCheckInDate, setFormattedCheckInDate] = useState<string>("");
  const {
    setReservationDate: { setCheckInDate: checkInDateSetter, setCheckOutDate },
  } = dateValueContext;

  useEffect(() => {
    var formattedDate = formatISO(checkInDate as Date);
    setFormattedCheckInDate(formattedDate);
  }, [checkInDate]);

  useEffect(() => {
    if (formattedCheckInDate !== "") {
      console.log(formattedCheckInDate);
    }
  }, [formattedCheckInDate]);

  const onCheckInSubmitButtonClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    checkInDateSetter(formattedCheckInDate);
    setVisibility(false);
    console.log("clicked");
  };

  return (
    <DatePickerContainer>
      <div className="relative flex h-full w-full flex-col items-center justify-center gap-[3rem]">
        <span className="text-[1.4rem] font-bold">Select Check-In Date</span>
        <DatePicker
          className="w-[15rem] rounded-[.5rem] border-2  border-primary p-[.5rem] text-center text-[1.8rem] font-bold tracking-wide"
          selected={checkInDate}
          onKeyDown={(e) => e.preventDefault()}
          minDate={new Date()}
          onChange={(date) => setCheckInDate(date)}
        />
        <button className="mt-[1rem] h-[4rem] w-[15rem] rounded-[.5rem] bg-primary text-[1.5rem] font-bold uppercase" onClick={onCheckInSubmitButtonClick}>
          Submit
        </button>
      </div>
    </DatePickerContainer>
  );
}

export default CheckInDatePicker;
