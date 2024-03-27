import { Link } from "react-router-dom";
import { LuUserCircle } from "react-icons/lu";
import { useContext, useState } from "react";
import { AnimatePresence } from "framer-motion";
import { UserLoggedInStatusContext } from "../../contexts/userLoggedInContext";
import { signUserOut } from "../../scripts/authorization/signUserOut";
import LoginCard from "./Log-In-Card/LoginCard";

function Navigation() {
  const [loginCardVisibility, setLoginCardVisibility] = useState<Boolean>(false);
  const userLoggedInContext = useContext(UserLoggedInStatusContext);
  const { isUserLoggedIn, setUserIsLoggedIn } = userLoggedInContext;

  const enableLoginCard = () => setLoginCardVisibility((prev) => !prev);

  const onClickSignUserOut = async () => {
    await signUserOut();
    setUserIsLoggedIn(false);
  };

  return (
    <div className="ease relative hidden h-full w-[47rem] items-center justify-evenly gap-[2rem] text-[1.5rem] font-normal text-white md:flex lg:flex">
      <Link to="/" className="ease drop-shadow-text-medium duration-200 hover:font-bold hover:underline">
        Home
      </Link>
      <Link to="/" className="ease drop-shadow-text-medium duration-200 hover:font-bold hover:underline">
        Facilities
      </Link>
      <Link to="/rooms" className="ease drop-shadow-text-medium duration-200 hover:font-bold hover:underline">
        Rooms
      </Link>
      <Link to="/" className="ease drop-shadow-text-medium duration-200 hover:font-bold hover:underline">
        Contact-us
      </Link>
      {!isUserLoggedIn ? (
        <button className="flex h-[3.5rem] min-w-[12rem] items-center justify-center gap-[0.6rem] rounded-[0.5rem] bg-white" onClick={enableLoginCard}>
          <p className="text-[1.2rem] font-bold uppercase text-black">Log In</p>
          <LuUserCircle className="h-[2rem] w-[2rem] text-black" />
        </button>
      ) : (
        <button onClick={onClickSignUserOut}>Sign Out</button>
      )}
      <AnimatePresence>{loginCardVisibility && <LoginCard />}</AnimatePresence>
    </div>
  );
}

export default Navigation;
