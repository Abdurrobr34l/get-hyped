import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import expertises from "../../data/expertises";
import ExpertiseCard from "./ExpertiseCard";

gsap.registerPlugin(ScrollTrigger);

const Expertises = () => {
  const containerRef = useRef(null);
  const cardRefs = useRef([]);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (cards.length === 0) return;

    // Random tilts: right, left, straight
    const tilts = cards.map(() => gsap.utils.random(-10, 10));

    // Set all cards except first hidden below
    cards.forEach((card, i) => {
      if (i > 0) {
        gsap.set(card, { yPercent: 100 });
      }
    });

    // Set perspective + origin BEFORE timeline
    cards.forEach((card) => {
      gsap.set(card, {
        transformPerspective: 1200,
        transformOrigin: "50% 40%",
      });
    });

    // Set all cards except first hidden below
    cards.forEach((card, i) => {
      if (i > 0) {
        gsap.set(card, { yPercent: 100 });
      }
    });

    // Single timeline pinned to container
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top top",
        end: `+=${cards.length * 600}`,
        scrub: 0.8,
        pin: true,
      },
    });

    cards.forEach((card, i) => {
      if (i < cards.length - 1) {
        // Current card falls back with 3D tilt
        tl.to(card, {
          yPercent: 0,
          rotateX: 45,
          rotateZ: tilts[i],
          scale: 0.75,
          // transformPerspective: 1200,
          // transformOrigin: "50% 10%",
          ease: "power2.in",
          duration: 1,
        }, i)
          // Next card slides up
          .to(cards[i + 1], {
            yPercent: 0,
            ease: "power2.out",
            duration: 1,
          }, i + 0.1);
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section
      id="experties"
      ref={containerRef}
      className="relative h-screen overflow-hidden"
    >
      {expertises.map((item, index) => (
        <div
          key={item.id}
          ref={(el) => (cardRefs.current[index] = el)}
          className="absolute inset-0"
          style={{ padding: "8vh 0" }}
        >
          <ExpertiseCard item={item} />
        </div>
      ))}
    </section>
  );
};

export default Expertises;