import { lazy, Suspense } from "react";
import { Routes, Route, useLocation, Outlet } from "react-router-dom";
import { useEffect, useState } from "react";
import { headerBackgroundController } from "./scripts/style-controllers/headerBackgroundController.ts";
import { UserLoggedInStatusContext } from "./contexts/userLoggedInContext.ts";
import { checkUserStatus } from "./scripts/authorization/checkUserStatus.ts";
import Header from "./components/Header/Header.tsx";
import Footer from "./components/Footer/Footer.tsx";
const Home = lazy(() => import("./pages/Home.tsx"));
const Rooms = lazy(() => import("./pages/Rooms.tsx"));
import LoadingScreen from "./components/Loading-Screen/LoadingScreen.tsx";
const UserLogin = lazy(() => import("./pages/UserLogin.tsx"));
const NoPageFound = lazy(() => import("./pages/NoPageFound.tsx"));
const GoogleResponse = lazy(() => import("./pages/GoogleResponse.tsx"));
const IndividualRoomDetails = lazy(() => import("./pages/IndividualRoomDetails.tsx"));
const RoomsPageIntroduction = lazy(() => import("./components/Rooms/RoomsPageIntroduction.tsx"));
const ReservationSuccess = lazy(() => import("./pages/ReservationSuccess.tsx"));
const ReservationCancelled = lazy(() => import("./pages/ReservationCancelled.tsx"));

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
      <UserLoggedInStatusContext.Provider value={{ isUserLoggedIn, setUserIsLoggedIn }}>
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
              <Route path="rooms" element={<Rooms />}>
                <Route index element={<RoomsPageIntroduction />} />
                <Route path=":roomType" element={<IndividualRoomDetails />} />
              </Route>
              <Route path="/ReservationSuccess" element={<ReservationSuccess />} />
              <Route path="/ReservationCancelled" element={<ReservationCancelled />} />
              <Route path="login" element={<UserLogin />} />
            </Route>
            <Route path="/GoogleResponse" element={<GoogleResponse />} />
            <Route path="*" element={<NoPageFound />} />
          </Routes>
        </Suspense>
      </UserLoggedInStatusContext.Provider>
    </>
  );
}

export default App;
