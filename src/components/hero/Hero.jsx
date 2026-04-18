import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroCards from "../../data/heroCards";
import HeroCard from "./HeroCard";

const Hero = () => {
  const cardRefs = useRef([]);
  const headingRef = useRef(null);
  const subRef = useRef(null);

useEffect(() => {
  const timer = setTimeout(() => {
    const cards = cardRefs.current.filter(Boolean);
    console.log("Cards found:", cards.length);

    if (cards.length === 0) return;

    cards.forEach((card) => {
      const rotate = (Math.random() - 0.5) * 20;
      const yPercent = (Math.random() - 0.5) * 6;
      gsap.set(card, { rotate, yPercent });
    });

    const handlers = cards.map((card, i) => {
      // UPDATED onEnter
      const onEnter = () => {
        gsap.to(card, {
          scale: 1.08,
          rotate: 0,
          yPercent: 0,
          zIndex: 20,
          duration: 0.5,
          ease: "expo.out",
        });
        cards.forEach((other, j) => {
          if (j === i) return;
          gsap.to(other, {
            x: j < i ? "-8vw" : "8vw",
            duration: 0.5,
            ease: "expo.out",
          });
        });
      };

      // UPDATED onLeave
      const onLeave = () => {
        const rotate = (Math.random() - 0.5) * 20;
        const yPercent = (Math.random() - 0.5) * 6;
        gsap.to(card, {
          scale: 1,
          rotate,
          yPercent,
          zIndex: Number(card.dataset.index),
          duration: 0.6,
          ease: "expo.out",
        });
        cards.forEach((other, j) => {
          if (j === i) return;
          gsap.to(other, {
            x: 0,
            duration: 0.6,
            ease: "expo.out",
          });
        });
      };

      card.addEventListener("mouseenter", onEnter);
      card.addEventListener("mouseleave", onLeave);
      return { card, onEnter, onLeave };
    });

    gsap.from(headingRef.current, {
      y: 40,
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.from(subRef.current, {
      y: 30,
      duration: 0.8,
      delay: 0.15,
      ease: "power3.out",
    });
    gsap.from(cards, {
      y: 60,
      stagger: 0.08,
      duration: 0.6,
      delay: 0.25,
      ease: "power3.out",
    });

    return () => {
      handlers.forEach(({ card, onEnter, onLeave }) => {
        card.removeEventListener("mouseenter", onEnter);
        card.removeEventListener("mouseleave", onLeave);
        gsap.killTweensOf(card);
      });
    };
  }, 100);

  return () => clearTimeout(timer);
}, []);

  return (
    <section className="py-14 px-[13.361px] xs:px-[15.66px] md:px-[24.799px] lg:px-[21.333px] xl:px-[26.667px] 2xl:px-8">
      <div className="w-full min-h-screen">

        {/* HEADLINE */}
        <h1
          ref={headingRef}
          className="
          text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[8.5vw] 2xl:text-[100px]
          font-semibold leading-none tracking-tight
          text-primary max-w-[90%] md:max-w-[70%] lg:max-w-[60%] 2xl:max-w-[70%]
          mb-4 md:mb-6
        "
        >
          Get Hyped. Get Noticed. Get Results.
        </h1>

        {/* SUBTEXT */}
        <p
          ref={subRef}
          className="
          text-sm md:text-base lg:text-lg xl:text-2xl
          text-primary font-semibold
          max-w-65 md:max-w-sm
          mb-8 md:mb-10 lg:mb-12
          leading-7.5
        "
        >
          Klaar met gokken op content die niets oplevert?
        </p>

        {/* CARDS ROW */}
        <div className="flex items-end pl-[2vw] md:pl-[4vw] overflow-visible">
          {heroCards.map((card, index) => (
            <HeroCard
              key={card.id}
              card={card}
              cardRef={(el) => (cardRefs.current[index] = el)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;