import { MdApartment } from "react-icons/md";

function IntroductionTextContainer() {
  return (
    <div className="flex w-full flex-grow flex-col items-center gap-[2rem] uppercase">
      <div className="mt-[3rem] flex h-[22rem] w-full flex-col items-center justify-center  text-white md:h-[30rem] lg:h-[45rem] lg:w-[90rem] lg:items-start xl:w-[120rem]">
        <h2 className="drop-shadow-text-heavy text-[1.5rem] font-light leading-[2rem] tracking-wider lg:mb-[1rem] lg:text-[3rem] lg:tracking-[1rem]">Welcome To</h2>
        <h1 className="drop-shadow-text-heavy font-secondary text-[5rem] font-bold uppercase tracking-[0.5rem] md:text-[8rem] lg:text-[10rem] lg:font-semibold lg:leading-[12rem] lg:tracking-[2rem]">
          Luxury
        </h1>
        <h2 className="drop-shadow-text-heavy text-[1.8rem] font-semibold tracking-[1rem] lg:text-[4rem]">Hotel</h2>
        <p className="drop-shadow-text-heavy mt-[1rem] w-[30rem] text-center font-semibold md:mt-[2rem] lg:mt-[1rem] lg:text-left">
          Book your stay and enjoy Luxury redefined at the most affordable rates.
        </p>
      </div>
      <div className="mt-[1rem]] flex h-[5rem] w-full items-center justify-center">
        <button className="shadow-soft flex h-full w-[20rem] items-center justify-center gap-[0.3rem] rounded-[1rem] bg-primary duration-200 ease-out hover:scale-110">
          <MdApartment className="h-[2rem] w-[2rem] text-white" />
          <p className="text-[1.4rem] font-bold uppercase tracking-wider text-white">Book Now</p>
        </button>
      </div>
    </div>
  );
}

export default IntroductionTextContainer;
