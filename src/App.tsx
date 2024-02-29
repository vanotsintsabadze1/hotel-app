import Home from "./pages/Home.tsx";
import Header from "./components/Header/Header.tsx";
import Rooms from "./pages/Rooms.tsx";
import Footer from "./components/Footer/Footer.tsx";
import NoPageFound from "./pages/NoPageFound.tsx";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import UserLogin from "./pages/UserLogin.tsx";
import { useEffect, useState } from "react";
import { headerBackgroundController } from "./scripts/headerBackgroundController.ts";
import GoogleResponse from "./pages/GoogleResponse.tsx";
import { createContext } from "react";
import { userAuthorizedType } from "./types.ts";
// import { checkIfUserIsActive } from "./scripts/login/checkIfUserIsActive.ts";

export const userIsLoggedIn = createContext<userAuthorizedType>({
  isUserLoggedIn: false,
  setUserIsLoggedIn: (_status: boolean) => {},
});

function App() {
  const [headerBackground, setHeaderBackground] = useState("transparent");
  const [isUserLoggedIn, setUserIsLoggedIn] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const color = headerBackgroundController(location.pathname);
    setHeaderBackground(color);
  }, [location.pathname]);

  // const onLoadSetUserActiveStatus = async (): Promise<void> => {
  //   const userStatus = await checkIfUserIsActive();
  //   setUserIsLoggedIn(userStatus as boolean);
  // };

  // useEffect(() => {
  //   onLoadSetUserActiveStatus();
  // }, []);

  return (
    <>
      <userIsLoggedIn.Provider value={{ isUserLoggedIn, setUserIsLoggedIn }}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Header headerBackgroundColor={headerBackground} />
                <Outlet />
                <Footer />
              </>
            }
          >
            <Route index element={<Home />} />
            <Route path="rooms" element={<Rooms />} />
            <Route path="login" element={<UserLogin />} />
          </Route>
          <Route path="/GoogleResponse" element={<GoogleResponse />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </userIsLoggedIn.Provider>
    </>
  );
}

export default App;
