import { lazy } from "react";
import RoomsPageIntroduction from "../components/Rooms/RoomsPageIntroduction";
const RoomsContainer = lazy(() => import("../components/Rooms/RoomsContainer"));

function Rooms() {
  return (
    <section className="w-full">
      <RoomsPageIntroduction />
      <RoomsContainer />
    </section>
  );
}

export default Rooms;
