import { MdApartment } from "react-icons/md";

function IntroductionTextContainer() {
  return (
    <div className="flex w-full flex-grow flex-col items-center uppercase">
      <div className="flex h-[20rem] w-full flex-col items-center justify-center text-white">
        <h3 className="text-[1.9rem] font-light tracking-wider drop-shadow-hero-text">
          Welcome To
        </h3>
        <h1 className="font-['IBM_Plex_Serif'] text-[5rem] tracking-[0.5rem] drop-shadow-hero-text">
          Luxury
        </h1>
        <h2 className="text-[1.8rem] font-semibold tracking-[1rem] drop-shadow-hero-text">
          Hotel
        </h2>
      </div>
      <div className="flex h-[5rem] w-full items-center justify-center">
        <button className="flex h-full w-[20rem] items-center justify-center gap-[0.3rem] rounded-[1rem] bg-primary shadow-button-shadow">
          <MdApartment className="h-[2rem] w-[2rem] text-white" />
          <p className="text-[1.4rem]  font-bold uppercase tracking-wider text-white">
            Book Now
          </p>
        </button>
      </div>
    </div>
  );
}

export default IntroductionTextContainer;
