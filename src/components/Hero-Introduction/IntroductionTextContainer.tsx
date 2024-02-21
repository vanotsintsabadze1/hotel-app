import { MdApartment } from "react-icons/md";

function IntroductionTextContainer() {
  return (
    <div className="w-full flex-grow flex flex-col items-center uppercase">
      <div className="w-full h-[20rem] flex flex-col items-center text-white justify-center">
        <h3 className="text-[1.9rem] font-light tracking-wider drop-shadow-hero-text">Welcome To</h3>
        <h1 className="text-[5rem] font-['IBM_Plex_Serif'] tracking-[0.5rem] drop-shadow-hero-text">Luxury</h1>
        <h2 className="text-[1.8rem] font-semibold tracking-[1rem] drop-shadow-hero-text">Hotel</h2>
      </div>
      <div className="w-full h-[5rem] flex justify-center items-center">
        <button className="w-[20rem] h-full bg-primary rounded-[1rem] shadow-button-shadow flex justify-center items-center gap-[0.3rem]">
          <MdApartment className="w-[2rem] h-[2rem] text-white" />
          <p className="text-white  text-[1.4rem] uppercase font-bold tracking-wider">Book Now</p>
        </button>
      </div>
    </div>
  );
}

export default IntroductionTextContainer;
