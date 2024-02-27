import { CgMenuMotion } from "react-icons/cg";
import { useState } from "react";
import HeaderBanner from "./HeaderBanner";
import SideBar from "./SideBar";
import Navigation from "./Navigation";

function Header() {
  const [sideBarVisibility, setSideBarVisibility] = useState(false);

  const handleSideBarVisibility = () => {
    setSideBarVisibility(!sideBarVisibility);
  };

  return (
    <header className="absolute top-0 z-[4] flex h-[10rem] w-full justify-center">
      <div className="flex w-full justify-between md:w-[62rem] lg:w-[80rem] xl:w-[120rem]">
        <HeaderBanner />
        <CgMenuMotion
          className="absolute right-0 top-[1.5rem] hidden h-[3.5rem] w-[3.5rem] text-white sm:block"
          onClick={handleSideBarVisibility}
        />
        {sideBarVisibility && <SideBar />}
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
