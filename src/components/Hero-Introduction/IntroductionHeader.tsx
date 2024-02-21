import { CgMenuMotion } from "react-icons/cg";

function IntroductionHeader() {
  return (
    <header className="w-full h-[10rem] relative">
      <CgMenuMotion className="w-[3.5rem] h-[3.5rem] absolute top-[1.5rem] right-0 text-white " />
      <div className="w-[12rem] h-[7rem] bg-primary rounded-bl-[3rem] rounded-br-[3rem] flex flex-col items-center justify-center text-secondary">
        <h1 className="text-[1.7rem] font-bold tracking-widest font-['IBM_Plex_Serif']">LUXURY</h1>
        <p className="tracking-[0.4rem] font-bold">HOTELS</p>
      </div>
    </header>
  );
}

export default IntroductionHeader;
