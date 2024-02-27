import IntroductionTextContainer from "./IntroductionTextContainer";
import { IoArrowDownSharp } from "react-icons/io5";

function Introduction() {
  return (
    <section className="relative flex h-[47rem] w-full items-center justify-center bg-hero-image bg-cover bg-center bg-no-repeat p-[0_2rem] brightness-90 md:h-[55rem] lg:h-[72rem]">
      <div className="z-1 absolute h-full w-full bg-secondary opacity-[60%]"></div>
      <div className="z-[2] flex h-full w-full items-center justify-center ">
        <IntroductionTextContainer />
      </div>

      <button className="absolute bottom-[2rem] flex  h-[4rem] w-[4rem] animate-bounce items-center justify-center rounded-[50%] bg-white sm:bottom-[2.5rem]">
        <IoArrowDownSharp className="h-[2rem] w-[2rem]" />
      </button>
    </section>
  );
}

export default Introduction;
