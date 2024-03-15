import { FaCcPaypal } from "react-icons/fa";
import { RiVisaLine } from "react-icons/ri";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcAmex } from "react-icons/fa6";
function PaymentOptions() {
  return (
    <div className="mt-[1.5rem] flex w-full flex-col justify-center gap-[0.7rem]">
      <p>
        <b>Payment Options</b>:
      </p>
      <div className="flex w-full items-center gap-[1rem]">
        <FaCcPaypal className="h-[3rem] w-[3rem]" />
        <RiVisaLine className="h-[3rem] w-[3rem]" />
        <FaCcMastercard className="h-[3rem] w-[3rem]" />
        <FaCcAmex className="h-[3rem] w-[3rem]" />
      </div>
    </div>
  );
}

export default PaymentOptions;
