import Image from "next/image";
import Link from "next/link";

function Introduction() {
  return (
    <section className="relative flex h-[50rem] w-full flex-col items-center lg:h-[70rem]">
      <Image
        src="/images/background-images/hero.webp"
        className="absolute bg-center object-cover"
        fill
        alt="something"
      />
      <canvas className="absolute h-full w-full bg-secondary opacity-65"></canvas>
      <div className="z-[3] mt-[15rem] flex w-full flex-col items-center justify-center gap-[1rem] text-white lg:mt-[20rem] lg:w-[100rem] lg:items-start xl:w-[120rem]">
        <h2 className="text-[1.8rem] uppercase tracking-wide drop-shadow-text-md lg:text-[2.5rem]">
          Welcome To
        </h2>
        <h1 className="font-secondary text-[5rem] font-black uppercase tracking-[1.5rem] drop-shadow-text-soft lg:text-[12rem] lg:leading-[11rem]">
          Luxury
        </h1>
        <h3 className="text-[2rem] font-medium uppercase tracking-[.5rem] drop-shadow-text-soft lg:mt-[2rem] lg:text-[2.5rem]">
          Hotels
        </h3>
        <p className="mt-[1rem] w-[30rem] text-center text-[1.2rem] font-semibold drop-shadow-text-md lg:text-left">
          Book your stay and enjoy Luxury redefined at the most affordable rates.
        </p>
      </div>
      <div className="z-[3] mt-[4rem] flex w-full justify-center">
        <button className="flex h-[5rem] w-[20rem] items-center justify-center gap-[.5rem] rounded-[1rem] bg-primary shadow-md lg:mt-[5rem]">
          <Image
            src="/images/misc/introduction-key-icon.webp"
            alt="hotel-key-icon"
            width={20}
            height={20}
          ></Image>
          <Link
            href="/rooms"
            className="text-[1.4rem] font-medium uppercase text-[#F8F8FF] drop-shadow-text-md"
          >
            Book Now
          </Link>
        </button>
      </div>
    </section>
  );
}

export default Introduction;
