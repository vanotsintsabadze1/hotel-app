import { Outlet } from "react-router-dom";

function Rooms() {
  return (
    <section className="w-full">
      <Outlet />
    </section>
  );
}

export default Rooms;
