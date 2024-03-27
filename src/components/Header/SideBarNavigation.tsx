import { Link } from "react-router-dom";

function SideBarNavigation() {
  return (
    <>
      <Link to="/" className="text-[1.2rem] font-semibold text-white">
        Home
      </Link>
      <Link to="/" className="text-[1.2rem] font-semibold text-white">
        Facilities
      </Link>
      <Link to="/rooms" className="text-[1.2rem] font-semibold text-white">
        Rooms
      </Link>
      <Link to="/" className="text-[1.2rem] font-semibold text-white">
        Contact-us
      </Link>
    </>
  );
}

export default SideBarNavigation;
