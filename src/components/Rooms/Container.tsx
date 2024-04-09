import { room } from "@/interfaces/rooms";
import Card from "./Card";

interface Props {
  rooms: room[];
}

function Container({ rooms }: Props) {
  return (
    <section className="flex w-full items-center justify-center">
      <div className="flex w-full justify-center">
        <div className="flex flex-col items-center gap-[8rem] overflow-y-auto overflow-x-hidden p-[4.5rem_5rem] lg:grid lg:grid-cols-2 lg:items-center lg:justify-center xl:grid-cols-3 xl:gap-[10rem]">
          {rooms.map((room) => {
            return <Card room={room} key={room.id} />;
          })}
        </div>
      </div>
    </section>
  );
}

export default Container;
