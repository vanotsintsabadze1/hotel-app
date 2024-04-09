import Image from "next/image";

function Introduction() {
  return (
    <section className="relative flex h-[40rem] w-full flex-col items-center md:h-[45rem] lg:h-[50rem]">
      <Image
        src="/images/background-images/room-page-bg.webp"
        alt="room-page-bg"
        fill
        className="absolute bg-center object-cover"
      />
      <canvas className="absolute h-full w-full bg-secondary opacity-65"></canvas>
      <div className="mt-[13rem] flex w-full flex-col items-center justify-center gap-[1rem]">
        <h1 className="z-[1] text-center text-[3.5rem] font-bold uppercase tracking-[0.2rem] text-white drop-shadow-text-md sm:w-[40rem] sm:text-[4rem] md:w-[50rem] md:text-[4.5rem] lg:w-[80rem] lg:text-[6rem]">
          Recharge your travels
        </h1>
        <p className="drop-shadow-text-heavy z-[2] text-center text-[1.3rem] font-[500] text-white">
          Book your stay now!
        </p>
      </div>
      <div className="z-[1] mt-[4rem] flex w-full items-center justify-center">
        <button className="h-[4.5rem] w-[4.5rem] animate-bounce rounded-[50%] bg-white shadow-md"></button>
      </div>
    </section>
  );
}

export default Introduction;
