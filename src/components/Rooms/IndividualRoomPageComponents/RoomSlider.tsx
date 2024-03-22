import { ImageBase64Type } from "../../../types";
import { memo } from "react";

function RoomSlider({ images }: { images: ImageBase64Type[] }) {
  return (
    <div className="flex h-[22rem] w-[40rem] items-center justify-center p-[0_2rem] xs:w-full sm:h-[28rem] sm:w-[46rem] md:h-[30rem] md:w-[50rem] lg:h-[32rem] lg:w-[50rem] xl:h-[48rem] xl:w-[70rem]">
      <img src={`data:image/jpeg;base64,${images[0].imageBase64}`} alt="" className="h-full w-full rounded-[.5rem] object-fill shadow-individual-room-card" />
    </div>
  );
}

export default memo(RoomSlider);
