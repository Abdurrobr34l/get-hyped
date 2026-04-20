import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Badge = () => {
  const badgeRef = useRef(null);
  const rotationRef = useRef(6);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;

      rotationRef.current = rotationRef.current - delta * 0.05;
      if (rotationRef.current > 6) rotationRef.current = 6;
      if (rotationRef.current < -6) rotationRef.current = -6;

      gsap.to(badgeRef.current, {
        rotation: rotationRef.current,
        duration: 0.3,
        ease: 'power2.out',
      });

      lastScrollY = currentY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="flex items-center justify-center">
      <div
        ref={badgeRef}
        className="relative flex items-center justify-center w-28 h-28 bg-[#FFB6FF] rounded-full"
        style={{ transform: 'rotate(6deg)' }}
      >
        <svg className="absolute w-full h-full p-1" viewBox="0 0 200 200">
          <defs>
            <path
              id="circlePath"
              d="M 100,100 m -75,0 a 75,75 0 1,1 150,0 a 75,75 0 1,1 -150,0"
            />
          </defs>
          <text
            className="uppercase fill-black"
            style={{ fontSize: '20px', fontWeight: '700', letterSpacing: '0.03em' }}
          >
            <textPath href="#circlePath">
              GET HYPED • GET NOTICED • GET RESULTS •
            </textPath>
          </text>
        </svg>
        <div className="text-3xl font-black text-black relative tracking-[0.01em] rotate-12 scale-y-[1.5]">
          GH
        </div>
      </div>
    </div>
  );
};

export default Badge;