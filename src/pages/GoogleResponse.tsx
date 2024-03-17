import { useContext, useEffect } from "react";
import { LiaThumbsUp } from "react-icons/lia";
import { UserLoggedInStatusContext } from "../contexts/userLoggedInContext";
import { useNavigate } from "react-router-dom";
import { handleUserStatus } from "../scripts/authorization/handleUserStatus";

function GoogleResponse() {
  const loggedInState = useContext(UserLoggedInStatusContext);
  const { setUserIsLoggedIn } = loggedInState;
  const navigate = useNavigate();

  useEffect(() => {
    handleUserStatus();
    setUserIsLoggedIn(true);

    const navigateToHomePageTimer = setTimeout(() => {
      navigate("/");
    }, 2500);

    return () => clearTimeout(navigateToHomePageTimer);
  }, []);

  return (
    <section className="flex h-[100dvh] w-full items-center justify-center bg-secondary">
      <div className="flex h-[60rem] w-[60rem] flex-col items-center justify-center gap-[2rem] rounded-[2rem] bg-white shadow-2xl">
        <h1 className="font-primary-bold text-[3rem]">You've successfully authorized!</h1>
        <div className="flex items-center justify-center gap-[1rem]">
          <p className="text-[1.5rem]">We'll automatically navigate you to the home page</p>
          <LiaThumbsUp className="h-[2rem] w-[2rem]" />
        </div>
      </div>
    </section>
  );
}

export default GoogleResponse;
