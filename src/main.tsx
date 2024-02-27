import "./index.css";
import "./fontFamilies.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home.tsx";
import Header from "./components/Header/Header.tsx";
import Rooms from "./pages/Rooms.tsx";
import Footer from "./components/Footer/Footer.tsx";
import NoPageFound from "./pages/NoPageFound.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/rooms" element={<Rooms />} />
      <Route path="*" element={<NoPageFound />}></Route>
    </Routes>
    <Footer />
  </BrowserRouter>,
);
