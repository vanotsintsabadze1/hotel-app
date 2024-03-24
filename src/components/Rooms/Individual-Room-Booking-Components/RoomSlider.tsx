import { ImageBase64Type } from "../../../types";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

import { memo } from "react";

function RoomSlider({ images, sliderType }: { images: ImageBase64Type[] | undefined; sliderType: string }) {
  const indReservationSliderStyles: string =
    "flex h-[22rem] w-[40rem] items-center justify-center p-[0_2rem] xs:w-full sm:w-[40rem] sm:h-[25rem] md:h-[30rem] md:w-[50rem] lg:h-[32rem] lg:w-[50rem] xl:h-[48rem] xl:w-[70rem]";
  const roomContainerSliderStyles: string = "w-full h-full rounded-tl-[0.5rem] rounded-tr-[0.5rem]";

  return (
    <div className={sliderType === "indRoom" ? indReservationSliderStyles : sliderType === "roomContainer" ? roomContainerSliderStyles : ""}>
      {images === undefined ? null : (
        <Swiper
          className={`h-full w-full ${sliderType === "indRoom" ? "rounded-[1rem]" : "rounded-tl-[0.5rem] rounded-tr-[0.5rem]"} shadow-2xl`}
          slidesPerView={1}
          modules={[Pagination]}
          pagination={{ dynamicBullets: true }}
        >
          {images.map((image, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img src={`data:image/jpeg;base64,${image.imageBase64}`} className="h-full w-full" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      )}
    </div>
  );
}

export default memo(RoomSlider);
