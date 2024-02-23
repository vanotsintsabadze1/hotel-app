import IntroductionHeader from "./IntroductionHeader";
import IntroductionTextContainer from "./IntroductionTextContainer";

function Introduction() {
  return (
    <section className="relative flex h-[40rem] w-full items-center justify-center bg-hero-image bg-cover bg-center bg-no-repeat p-[0_2rem] brightness-90">
      <div className="z-1 absolute h-full w-full bg-secondary opacity-[50%]"></div>
      <div className="z-[2] flex h-full w-full flex-col items-center">
        <IntroductionHeader />
        <IntroductionTextContainer />
      </div>
    </section>
  );
}

export default Introduction;
