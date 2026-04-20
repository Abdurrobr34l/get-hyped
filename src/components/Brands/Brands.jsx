import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import { gsap } from "gsap";
import brands from "../../data/brands";
import "swiper/css";

const Brands = () => {
  const sectionRef = useRef(null);
  const [isScattered, setIsScattered] = useState(false);

  const handleScatter = () => {
    if (isScattered) return;

    const allCards = gsap.utils.toArray(".logo-card");

    allCards.forEach((card) => {
      gsap.to(card, {
        x: gsap.utils.random(-30, 30),
        y: gsap.utils.random(-20, 20),
        rotation: gsap.utils.random(-9, 9),
        ease: "power3.out",
        force3D: true,
      });
    });

    setIsScattered(true);
  };

  const resetScatter = () => {
    const allCards = gsap.utils.toArray(".logo-card");

    allCards.forEach((card) => {
      gsap.to(card, {
        x: 0,
        y: 0,
        rotation: 0,
        ease: "power3.out",
      });
    });

    setIsScattered(false);
  };

  return (
    <section ref={sectionRef} className="pt-175 pb-20 overflow-visible">
      <h1 className="text-[2.3em] md:text-[3.7em] leading-[0.95em] tracking-[-0.05em] font-semibold ml-4 text-[#3a3a3a] md:text-[#1d1d1d] md:ml-10 mb-8 md:mb-12">
        These brands <br /> got hyped.
      </h1>

      <div className="cursor-grab">
        <Swiper
          modules={[Autoplay, FreeMode]}
          slidesPerView="auto"
          spaceBetween={30}
          loop={true}
          freeMode={{
            enabled: true,
            momentum: false,
          }}
          speed={4000}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          allowTouchMove={true}
          className="overflow-visible"
          onSliderFirstMove={handleScatter}
          onTransitionEnd={resetScatter}
        >
          {brands.map((logo, index) => (
            <SwiperSlide
              key={index}
              className="w-auto flex justify-center px-0 md:px-1"
            >
              <div
                onClick={handleScatter}
                className="boxxx flex justify-center items-center transition-transform duration-300 active:scale-95 bg-white w-37.5 rounded-[13px] md:rounded-xl border border-[#16161659]"
              >
                <img src={logo} alt="Brand Logo" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Brands;