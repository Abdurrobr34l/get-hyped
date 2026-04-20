import React, { useRef, useCallback } from 'react';
import { gsap } from 'gsap';

const images = [
  'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415233f03ab6c1143fa_gh-logo-pink.svg',
  'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3404e57460370b97757c_7719b29e960423bac19acd325c901392_gh-logo-blue.svg',
  'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415e192971624995445_gh-logo-green.svg',
  'https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/684c3415b3eecf81e4b1d9a7_gh-logo-red.svg',
];

const FooterImageTrail = () => {
  const lastPos = useRef({ x: 0, y: 0 });
  const imgIndexRef = useRef(0);
  const containerRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const dx = e.clientX - lastPos.current.x;
    const dy = e.clientY - lastPos.current.y;
    const dist = Math.sqrt(dx * dx + dy * dy);

    if (dist < 80) return;

    lastPos.current = { x: e.clientX, y: e.clientY };

    const img = document.createElement('img');
    img.src = images[imgIndexRef.current % images.length];
    imgIndexRef.current++;

    const rotation = Math.random() * 40 - 20;
    const rect = containerRef.current.getBoundingClientRect();

    Object.assign(img.style, {
      position: 'absolute',
      left: `${e.clientX - rect.left - 50}px`,
      top: `${e.clientY - rect.top - 50}px`,
      width: '100px',
      height: '100px',
      pointerEvents: 'none',
      transform: `rotate(${rotation}deg) scale(0.5)`,
      opacity: '0',
      zIndex: '0',
    });

    containerRef.current.appendChild(img);

    // Animate in
    gsap.to(img, {
      opacity: 1,
      scale: 1,
      y: 0,
      duration: 0.25,
      ease: 'back.out(1.7)',
    });

    // Animate out after delay
    gsap.to(img, {
      opacity: 0,
      scale: 0.8,
      y: -40,
      duration: 0.4,
      ease: 'power2.in',
      delay: 0.6,
      onComplete: () => img.remove(),
    });
  }, []);

  return (
    <div
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="absolute inset-0 overflow-hidden"
      style={{ pointerEvents: 'all' }}
    />
  );
};

export default FooterImageTrail;