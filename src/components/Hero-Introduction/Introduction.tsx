import IntroductionTextContainer from "./IntroductionTextContainer";

function Introduction() {
  return (
    <section className="relative flex h-[45rem] w-full items-center justify-center bg-hero-image bg-cover bg-center bg-no-repeat p-[0_2rem] brightness-90 md:h-[55rem] lg:h-[72rem]">
      <div className="z-1 absolute h-full w-full bg-secondary opacity-[60%]"></div>
      <div className="z-[2] flex h-full w-full items-center justify-center ">
        <IntroductionTextContainer />
      </div>
    </section>
  );
}

export default Introduction;
