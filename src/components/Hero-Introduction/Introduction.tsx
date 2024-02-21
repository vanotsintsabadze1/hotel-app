import IntroductionHeader from "./IntroductionHeader";
import IntroductionTextContainer from "./IntroductionTextContainer";

function Introduction() {
  return (
    <section className="w-full h-[40rem] bg-hero-image brightness-90 bg-no-repeat bg-cover bg-center relative flex justify-center items-center p-[0_2rem]">
      <div className="w-full h-full absolute z-1 bg-secondary opacity-[50%]"></div>
      <div className="w-full h-full z-[2] flex flex-col items-center">
        <IntroductionHeader />
        <IntroductionTextContainer />
      </div>
    </section>
  );
}

export default Introduction;
