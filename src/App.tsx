import Home from "./pages/Home.tsx";
import Header from "./components/Header/Header.tsx";
import Rooms from "./pages/Rooms.tsx";
import Footer from "./components/Footer/Footer.tsx";
import NoPageFound from "./pages/NoPageFound.tsx";
import { Routes, Route, useLocation } from "react-router-dom";
import UserLogin from "./pages/UserLogin.tsx";
import { useEffect, useState } from "react";
import { headerBackgroundController } from "./scripts/headerBackgroundController.ts";

function App() {
  const [headerBackground, setHeaderBackground] = useState("transparent");

  const location = useLocation();

  useEffect(() => {
    const color = headerBackgroundController(location.pathname);
    setHeaderBackground(color);
  }, [location.pathname]);

  return (
    <>
      <Header headerBackgroundColor={headerBackground} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/rooms" element={<Rooms />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="*" element={<NoPageFound />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
