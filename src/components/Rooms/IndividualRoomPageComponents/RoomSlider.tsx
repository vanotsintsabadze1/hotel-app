import { ImageBase64Type } from "../../../types";
import { memo } from "react";

function RoomSlider({ images }: { images: ImageBase64Type[] }) {
  return (
    <div className="mb-[1.5rem] mt-[3rem] flex h-[20rem] w-full items-center justify-center">
      <img src={`data:image/jpeg;base64,${images[0].imageBase64}`} alt="" className="rounded-[.5rem] object-fill shadow-individual-room-card" />
    </div>
  );
}

export default memo(RoomSlider);
