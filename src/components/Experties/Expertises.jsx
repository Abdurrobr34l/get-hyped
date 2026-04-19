import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import expertises from "../../data/expertises";
import ExpertiseCard from "./ExpertiseCard";

gsap.registerPlugin(ScrollTrigger);

const Expertises = () => {
  const cardRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const cards = cardRefs.current.filter(Boolean);
    if (cards.length === 0) return;

    // Each card pins and next card slides over it
    cards.forEach((card, i) => {
      // Pin each card
      ScrollTrigger.create({
        trigger: card,
        start: "top top+=60",
        end: () => `+=${(cards.length - i) * 100}%`,
        pin: true,
        pinSpacing: false,
      });

      // Scale down as next card covers it
      if (i < cards.length - 1) {
        gsap.to(card, {
          scale: 0.95,
          borderRadius: "2.5em",
          scrollTrigger: {
            trigger: cards[i + 1],
            start: "top bottom",
            end: "top top+=60",
            scrub: true,
          },
        });
      }
    });

    return () => ScrollTrigger.getAll().forEach(t => t.kill());
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative"
    >
      {expertises.map((item, index) => (
        <a href="#">
          <ExpertiseCard
            key={item.id}
            item={item}
            cardRef={(el) => (cardRefs.current[index] = el)}
          />
        </a>
      ))}
    </section>
  );
};

export default Expertises;