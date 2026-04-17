import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import heroCards from "../../data/heroCards";
import HeroCard from "./HeroCard";

const Hero = () => {
  const cardRefs = useRef([]);
  const headingRef = useRef(null);
  const subRef = useRef(null);

  useEffect(() => {
    // Random tilt on mount
    cardRefs.current.forEach((card) => {
      if (!card) return;
      const rotate = (Math.random() - 0.5) * 16;
      const ty = (Math.random() - 0.5) * 4;
      gsap.set(card, { rotate, y: `${ty}%` });
    });

    // Hover logic
    cardRefs.current.forEach((card, i) => {
      if (!card) return;

      card.addEventListener("mouseenter", () => {
        // Scale up hovered card
        gsap.to(card, {
          scale: 1.06,
          zIndex: 20,
          duration: 0.25,
          ease: "power2.out",
        });

        // Push ALL other cards away from hovered card
        cardRefs.current.forEach((other, j) => {
          if (!other || j === i) return;
          gsap.to(other, {
            x: j < i ? "-5vw" : "5vw",
            duration: 0.25,
            ease: "power2.out",
          });
        });
      });

      card.addEventListener("mouseleave", () => {
        // New random tilt
        const rotate = (Math.random() - 0.5) * 16;
        gsap.to(card, {
          scale: 1,
          rotate,
          zIndex: card.dataset.index,
          duration: 0.3,
          ease: "power2.out",
        });

        // Restore all cards
        cardRefs.current.forEach((other, j) => {
          if (!other || j === i) return;
          gsap.to(other, {
            x: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    });

    // Entrance animations
    gsap.from(headingRef.current, {
      y: 40,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    });
    gsap.from(subRef.current, {
      y: 30,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
      ease: "power3.out",
    });
    gsap.from(cardRefs.current.filter(Boolean), {
      y: 60,
      opacity: 0,
      stagger: 0.08,
      duration: 0.6,
      delay: 0.3,
      ease: "power3.out",
    });
  }, []);

  return (
    <section className="w-full min-h-screen px-4 md:px-8 lg:px-12 xl:px-16 pt-6 pb-0 overflow-hidden">

      {/* HEADLINE */}
      <h1
        ref={headingRef}
        className="
          text-[13vw] sm:text-[11vw] md:text-[10vw] lg:text-[8.5vw]
          font-black leading-none tracking-tight
          text-primary max-w-[90%] md:max-w-[70%] lg:max-w-[60%]
          mb-4 md:mb-6
        "
      >
        Get Hyped. Get Noticed. Get Results.
      </h1>

      {/* SUBTEXT */}
      <p
        ref={subRef}
        className="
          text-sm md:text-base lg:text-lg
          text-primary/70 font-medium
          max-w-65 md:max-w-xs
          mb-8 md:mb-10 lg:mb-12
          leading-snug
        "
      >
        Klaar met gokken op content die niets oplevert?
      </p>

      {/* CARDS ROW */}
      <div className="flex items-end pl-[2vw] md:pl-[4vw]">
        {heroCards.map((card, index) => (
          <HeroCard
            key={card.id}
            card={card}
            cardRef={(el) => (cardRefs.current[index] = el)}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;