import { lazy, Suspense } from "react";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { headerBackgroundController } from "./scripts/style-controllers/headerBackgroundController.ts";
import { createContext } from "react";
import { userAuthorizedType } from "./types.ts";
import { checkUserStatus } from "./scripts/authorization/checkUserStatus.ts";
import LoadingScreen from "./components/loading-screen/LoadingScreen.tsx";

const Home = lazy(() => import("./pages/Home.tsx"));
const Rooms = lazy(() => import("./pages/Rooms.tsx"));
const UserLogin = lazy(() => import("./pages/UserLogin.tsx"));
const NoPageFound = lazy(() => import("./pages/NoPageFound.tsx"));
const GoogleResponse = lazy(() => import("./pages/GoogleResponse.tsx"));

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

  const onLoadCheckIfUserIsActive = async () => {
    const status = await checkUserStatus();
    setUserIsLoggedIn(status);
  };

  useEffect(() => {
    onLoadCheckIfUserIsActive();
    const userStatusCheckInterval = setInterval(onLoadCheckIfUserIsActive, 180000);
    return () => clearInterval(userStatusCheckInterval);
  }, []);

  return (
    <>
      <userIsLoggedIn.Provider value={{ isUserLoggedIn, setUserIsLoggedIn }}>
        <Suspense fallback={<LoadingScreen />}>
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
        </Suspense>
      </userIsLoggedIn.Provider>
    </>
  );
}

export default App;
