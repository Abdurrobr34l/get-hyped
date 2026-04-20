import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../UI/Button";
import Arrow from "../../assets/icons/white-arrow.png";
import workItems from "../../data/workItems";
import WorkCard from "./WorkCard";

gsap.registerPlugin(ScrollTrigger);

const Work = () => {
  const sectionRef = useRef(null);
  const card0Ref = useRef(null);
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  useEffect(() => {
    const refs = [card0Ref, card1Ref, card2Ref];

    const getYValues = () => {
      // if (window.innerWidth < 768) return [-30, -60, -45];
      if (window.innerWidth < 1024) return [10, -20, -80];
      if (window.innerWidth < 1280) return [15, -25, -60];
      if (window.innerWidth < 1536) return [15, -15, -45];
      return [15, -10, -45];
    };

    refs.forEach((ref, i) => {
      if (!ref.current) return;
      gsap.to(ref.current, {
        yPercent: getYValues()[i],
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="bg-bgPrimary pt-16 md:pt-20 pb-32 overflow-hidden"
    >
      {/* HEADER */}
      <div className="flex flex-col gap-4 mb-14 md:mb-8 max-w-2xl lg:pl-20 lg:max-w-120 xl:pl-25.5 xl:max-w-133 2xl:max-w-160">
        <h2 className="text-[37px] sm:text-[8vw] md:text-[4em] lg:text-[4em] xl:text-[80px] 2xl:text-[102px] font-bold leading-none tracking-tight text-primary">
          Content<br />dat scoort.
        </h2>
        <p className="text-[14px] md:text-[1.4em] font-semibold text-primary leading-6.5 max-w-[78%] lg:text-[1.1em] lg:leading-5.5 xl:leading-6.5 xl:text-[1.3em] 2xl:text-[25px] 2xl:leading-8.5">
          Wij vertellen jouw verhaal. Op een manier die écht past bij jouw doelgroep. Met creatieve content die werkt en het verschil maakt.
        </p>
        <div className="mt-1">
          <Button
            className="text-[13px]! bg-transparent border 2xl:text-base!"
            icon={Arrow}
            iconAlt="Arrow"
            iconStyle="bg-black"
            iconImgStyle="w-3"
          >
            Bekijk al ons werk
          </Button>
        </div>
      </div>

      {/* MOBILE — stacked with tilts */}
      <div className="flex flex-col gap-6 md:hidden items-center">
        {workItems.map((item, index) => (
          <div
            key={item.id}
            className="w-67"
            style={{
              transform: index === 0
                ? "rotate(-3deg)"
                : index === 1
                  ? "rotate(2deg)"
                  : "rotate(-2deg)",
            }}
          >
            <WorkCard item={item} />
          </div>
        ))}
      </div>

      {/* DESKTOP — scattered layout */}
      <div className="hidden md:flex items-end justify-center gap-6 lg:gap-13.75 absolute lg:px-10.5 xl:gap-17.25 xl:px-13.25 2xl:gap-21">
        {/* LEFT */}
        <div ref={card0Ref} className="w-56 self-end lg:hover:-rotate-2! transition-transform ease-linear duration-200 lg:w-[256px] xl:w-[320px] 2xl:w-[384px]">
          <WorkCard item={workItems[0]} />
        </div>
        {/* CENTER */}
        <div ref={card1Ref} className="w-56 self-center lg:hover:-rotate-2! transition-transform ease-linear duration-200 lg:w-[256px] xl:w-[320px] 2xl:w-[384px]">
          <WorkCard item={workItems[1]} />
        </div>
        {/* RIGHT */}
        <div ref={card2Ref} className="w-56 self-start lg:hover:-rotate-2! transition-transform ease-linear duration-200 lg:w-[256px] xl:w-[320px] 2xl:w-[384px]">
          <WorkCard item={workItems[2]} />
        </div>
      </div>
    </section>
  );
};

export default Work;