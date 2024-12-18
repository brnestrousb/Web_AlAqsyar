"use client";

import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface SlideData {
  image: string;
  title: string;
  description: string;
  link: string;
}

interface CarouselCardProps {
  slides: SlideData[];
}

const CarouselCard: React.FC<CarouselCardProps> = ({ slides }) => {
  return (
    <div>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        navigation
        breakpoints={{
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[450px] flex flex-col justify-between border-slate-300 shadow-xl border-2 rounded-lg">
              <Image
                className="shadow-lg h-72 w-full object-cover border-b-2 border-gray-500"
                src={slide.image}
                alt={slide.title}
                width={500}
                height={500}
              />
              <div className="p-2 flex-col flex items-center gap-4">
                <h1 className="text-center font-semibold">{slide.title}</h1>
                <p className="line-clamp-1">{slide.description}</p>
                <button
                  onClick={() => (window.location.href = slide.link)}
                  className="bg-indigo-500 text-white px-4 py-2 rounded-lg"
                >
                  Lihat Selengkapnya
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CarouselCard;
