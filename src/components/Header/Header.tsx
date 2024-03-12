import { CgMenuMotion } from "react-icons/cg";
import { useEffect, useState } from "react";
import HeaderBanner from "./HeaderBanner";
import SideBar from "./SideBar";
import Navigation from "./Navigation";
import { AnimatePresence } from "framer-motion";
import { useLocation } from "react-router-dom";

function Header({ headerBackgroundColor }: { headerBackgroundColor: string }) {
  const location = useLocation();

  const [sideBarVisibility, setSideBarVisibility] = useState(false);

  const handleSideBarVisibility = () => {
    setSideBarVisibility((prev) => !prev);
  };

  useEffect(() => {
    sideBarVisibility ? setSideBarVisibility(false) : null;
  }, [location.pathname]);

  return (
    <header
      className={`bg-${headerBackgroundColor} absolute top-0 z-[4] flex h-[8rem] w-full justify-center p-[0_1rem] sm:h-[9rem] md:p-[0_3rem]`}
    >
      <div className="flex w-full justify-between md:w-full lg:w-full xl:w-[120rem]">
        <HeaderBanner />
        <button
          className="lg absolute right-[2rem] top-[1.5rem] hidden sm:block md:block"
          onClick={handleSideBarVisibility}
        >
          <CgMenuMotion className="md-lg:block hidden h-[3.5rem] w-[3.5rem] text-white sm:block lg:hidden" />
        </button>
        <AnimatePresence>
          {sideBarVisibility && <SideBar toggleBar={handleSideBarVisibility} />}
        </AnimatePresence>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
