import { Outlet } from "react-router-dom";

function Rooms() {
  return (
    <section className="relative flex w-full flex-[1] flex-col items-center justify-center">
      <Outlet />
    </section>
  );
}

export default Rooms;
