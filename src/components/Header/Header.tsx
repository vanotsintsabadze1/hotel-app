"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import Navigation from "./Navigation";

const paths = {
  hero: "/",
  rooms: "/rooms",
};

const divAnimation = {
  hidden: { x: 200 },
  visible: { x: 0 },
};

function Header() {
  const pathname: string = usePathname();
  const [burgerMenuVisibility, setBurgerMenuVisibility] = useState<boolean>(false);

  useEffect(() => {
    setBurgerMenuVisibility(false);
  }, [pathname]);

  const handleBurgerMenuVisibility = () => {
    setBurgerMenuVisibility((prev) => !prev);
  };

  return (
    <header
      className={`h-[10rem] w-full ${pathname.startsWith(paths.hero) || pathname.startsWith(paths.rooms) ? "absolute bg-transparent" : "relative bg-secondary"} z-[4] flex justify-center`}
    >
      <div className="relative flex h-full w-full p-[0_1rem] md:justify-between lg:w-[100rem] lg:justify-between xl:w-[120rem]">
        <div className="flex h-[8rem] w-[12rem] flex-col items-center justify-center rounded-bl-[1.7rem] rounded-br-[1.7rem] bg-primary shadow-md">
          <h1 className="font-secondary text-[1.8rem] font-bold uppercase tracking-[.1rem] text-secondary">
            Luxury
          </h1>
          <p className="font-secondary text-[1.3rem] font-semibold uppercase tracking-widest text-secondary">
            Hotels
          </p>
        </div>
        <div className="absolute right-[2.5rem] top-1/2 translate-y-[-50%] md:hidden lg:hidden">
          <button className="relative h-[4rem] w-[3.5rem]" onClick={handleBurgerMenuVisibility}>
            <Image src="/images/misc/burger-menu.webp" alt="burger-menu" fill />
          </button>
        </div>
        <div className="hidden md:block lg:block">
          <Navigation usedFor="desktop" />
        </div>
        <AnimatePresence>
          {burgerMenuVisibility && (
            <motion.div
              initial="hidden"
              animate="visible"
              exit="hidden"
              variants={divAnimation}
              className="fixed right-0 top-0 z-[5] flex h-screen w-[18rem] flex-col items-end bg-secondary lg:hidden"
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <div className="absolute right-[2.5rem] top-[3.5rem]  md:hidden lg:hidden">
                <button
                  className="relative h-[4rem] w-[3.5rem]"
                  onClick={handleBurgerMenuVisibility}
                >
                  <Image
                    src="/images/misc/burger-menu.webp"
                    className="z-[1]"
                    alt="burger-menu"
                    fill
                  />
                </button>
              </div>
              <Navigation usedFor="mobile" />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}

export default Header;
