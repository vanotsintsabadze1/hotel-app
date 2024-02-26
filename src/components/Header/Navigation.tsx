import { Link } from "react-router-dom";

function Navigation() {
  return (
    <div className="ease hidden h-[7rem] w-[35rem] items-center justify-evenly gap-[2rem] text-[1.5rem] font-normal text-white group-hover:font-semibold md:flex">
      <Link
        to="/"
        className="ease drop-shadow-navigation-text duration-200 hover:font-semibold hover:underline"
      >
        Home
      </Link>
      <Link
        to="/"
        className="ease drop-shadow-navigation-text duration-200 hover:font-semibold hover:underline"
      >
        Facilities
      </Link>
      <Link
        to="/"
        className="ease drop-shadow-navigation-text duration-200 hover:font-semibold hover:underline"
      >
        Rooms
      </Link>
      <Link
        to="/"
        className="ease drop-shadow-navigation-text duration-200 hover:font-semibold hover:underline"
      >
        Contact-us
      </Link>
    </div>
  );
}

export default Navigation;
