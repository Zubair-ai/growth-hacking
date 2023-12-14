import React, { useRef, useEffect } from "react";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";

const SliderComponent = () => {
  const swiperRef = useRef(null);

  useEffect(() => {
    if (swiperRef.current) {
      const swiper = new Swiper(swiperRef.current, {
        slidesPerView: "auto",
        spaceBetween: 30,
        loop: true,
        centeredSlides: true, 
        autoplay: {
          delay: 2000,
          disableOnInteraction: false,
        },
      });

      const changeDirection = () => {
        swiper.params.autoplay.reverseDirection =
          !swiper.params.autoplay.reverseDirection;
      };

      const interval = setInterval(changeDirection, 2000);

      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="swiper-container" ref={swiperRef}>
      <div className="swiper-wrapper">
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
      </div>
    </div>
  );
};

export default SliderComponent;
