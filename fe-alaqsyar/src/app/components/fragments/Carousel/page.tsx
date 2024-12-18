"use client";

// Import Swiper core and required modules
import { Navigation, Pagination, A11y } from "swiper/modules";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface CarouselProps {
  banners: string[];
}

const Carousel: React.FC<CarouselProps> = ({ banners }) => {
  return (
    <>
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
        className="w-full h-1/2"
        autoplay={{ delay: 3000 }}
      >
        {banners.map((item, index) => (
          <SwiperSlide key={index}>
            <Image
              src={item}
              alt={`banner${index + 1}`}
              width={1080}
              height={720}
              priority
              className="w-full shadow-lg object-cover border-b-2 border-gray-500"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
