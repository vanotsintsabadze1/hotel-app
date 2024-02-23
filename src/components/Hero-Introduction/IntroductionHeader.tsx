import { CgMenuMotion } from "react-icons/cg";

function IntroductionHeader() {
  return (
    <header className="relative h-[10rem] w-full">
      <CgMenuMotion className="absolute right-0 top-[1.5rem] h-[3.5rem] w-[3.5rem] text-white " />
      <div className="flex h-[7rem] w-[12rem] flex-col items-center justify-center rounded-bl-[3rem] rounded-br-[3rem] bg-primary text-secondary">
        <h1 className="font-['IBM_Plex_Serif'] text-[1.7rem] font-bold tracking-widest">
          LUXURY
        </h1>
        <p className="font-bold tracking-[0.4rem]">HOTELS</p>
      </div>
    </header>
  );
}

export default IntroductionHeader;
