import React, { useContext, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import { UserContext } from "./UserContext";
import HeroCard from "./HeroCard";

const Hero = () => {
  const { courses, loading } = useContext(UserContext);
  const reversedUsers = useMemo(() => [...courses].reverse(), [courses]);
  
  
  return (
    <section className="py-8 bg-base-200 text-base-content">
      <h1 className="text-3xl font-bold text-center mb-6">Featured Courses</h1>
      <div className="px-4">{
        loading? <div className="flex justify-center">
          
         <span className="loading loading-bars loading-md"></span>
        </div>
          : 
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          pagination={{ clickable: true }}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
        >
          {reversedUsers.map((user) => (
            <SwiperSlide key={user.skillId}>
              <HeroCard user={user} />
            </SwiperSlide>
          ))}
        </Swiper>
        }
      </div>
    </section>
  );
};

export default Hero;
