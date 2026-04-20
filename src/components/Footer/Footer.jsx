import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import { FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube, FaGripfire } from 'react-icons/fa';
import { HiFire, HiMail } from 'react-icons/hi';
import Badge from './FooterBadge';
import FooterImageTrail from './FooterImageTrail';

const NAV_ITEMS = ['Expertises', 'Work', 'About', 'Contact'];
const SOCIAL_ICONS = [FaLinkedinIn, FaTiktok, FaInstagram, FaYoutube];

// ── Nav link with GSAP slide-up hover ──────────────────────────────────────
const NavLink = ({ item }) => {
  const linkRef = useRef(null);

  const handleEnter = () => {
    gsap.to(linkRef.current.querySelectorAll('span.slide'), {
      y: '-100%',
      duration: 0.35,
      ease: 'power2.out',
      stagger: 0,
    });
    gsap.to(linkRef.current, { backgroundColor: '#161616', duration: 0.25, ease: 'power2.out' });
  };

  const handleLeave = () => {
    gsap.to(linkRef.current.querySelectorAll('span.slide'), {
      y: '0%',
      duration: 0.35,
      ease: 'power2.out',
    });
    gsap.to(linkRef.current, { backgroundColor: '#ffffff', duration: 0.25, ease: 'power2.out' });
  };

  return (
    <a
      ref={linkRef}
      href={`#${item.toLowerCase()}`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
      className="relative px-3 py-2 text-sm font-semibold bg-white rounded-lg overflow-hidden cursor-pointer"
      style={{ display: 'inline-block' }}
    >
      <span className="relative block overflow-hidden h-5">
        <span className="slide block text-black transition-none">{item}</span>
        <span className="slide block absolute top-full left-0 text-white">{item}</span>
      </span>
    </a>
  );
};

// ── Main Footer ─────────────────────────────────────────────────────────────
const Footer = () => {
  const headingRef = useRef(null);
  const buttonsRef = useRef(null);

  useEffect(() => {
    // Entrance animation
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 60 },
      { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: headingRef.current, start: 'top 85%' } }
    );
    gsap.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2, scrollTrigger: { trigger: buttonsRef.current, start: 'top 90%' } }
    );
  }, []);

  return (
    <footer className="bg-bgPrimary px-8">
      <div className="w-full h-px bg-gray-300 my-10" />

      {/* ── DESKTOP ── */}
      <div className="hidden md:block">
        {/* Hero CTA area with image trail */}
        <div className="relative overflow-hidden pt-64 pb-8">
          <FooterImageTrail />

          <div className="relative z-10 flex flex-col items-center text-center px-6 pointer-events-none">
            <h2
              ref={headingRef}
              className="text-[88px] text-primary font-semibold leading-[1.5em] tracking-[-0.05em] mb-2.5"
            >
              Let's Get Hyped!
            </h2>

            <div ref={buttonsRef} className="flex z-10 items-center gap-3 pointer-events-auto">
              {/* Mail button */}
              <button
                className="group flex items-center gap-2 px-5 py-3 rounded-full border-[1.5px] border-black bg-white text-black font-semibold text-sm transition-all duration-300 hover:bg-black hover:text-white"
              >
                <HiMail size={16} />
                Mail ons direct
              </button>

              {/* CTA button */}
              <button
                className="group flex items-center gap-2 px-5 py-3 rounded-full bg-[#FF5F1F] text-white font-semibold text-sm transition-all duration-300 hover:bg-[#e0521a]"
              >
                <HiFire size={16} />
                Get Results
              </button>
            </div>
          </div>
        </div>

        {/* ── Footer Bottom Desktop ── */}
        <div className="relative w-full overflow-hidden flex items-end py-5">
          {/* Badge */}
          <div className="absolute right-[calc(10%-32px)] -top-10 z-20">
            <Badge />
          </div>

          <div className="relative w-full h-56.25 flex items-start justify-start">
            {/* Skewed background */}
            <div
              className="absolute inset-0 bg-[#e2dacb]"
              style={{
                borderTopLeftRadius: '10px',
                borderTopRightRadius: '30px',
                transform: 'skewY(-7deg)',
                transformOrigin: 'top right',
                bottom: '-100px',
              }}
            />

            {/* Logo */}
            <div className="relative pt-12.75 w-auto">
              <div className="md:flex justify-start items-center px-1">
                {/* Replace with your <ExactHypeLogo /> if available */}
                <div className="text-4xl font-black text-primary pl-6 pt-4">GH</div>
              </div>
            </div>

            {/* Links + info */}
            <div className="relative z-10 flex-1 px-16 py-10">
              <div className="flex justify-between items-start pt-12">

                {/* LEFT — nav + social */}
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-2">
                    {NAV_ITEMS.map((item) => (
                      <NavLink key={item} item={item} />
                    ))}
                  </div>

                  <div className="flex items-center gap-3">
                    <span className="font-semibold text-[#1a1a1a] text-[16px]">Follow us</span>
                    <div className="flex gap-2">
                      {SOCIAL_ICONS.map((Icon, i) => (
                        <a
                          key={i}
                          href="#"
                          className="bg-[#F5F5F5] p-2 rounded-full text-black hover:bg-white transition-transform duration-300 hover:scale-110"
                        >
                          <Icon size={15} />
                        </a>
                      ))}
                    </div>
                  </div>

                  <div className="flex justify-between items-center text-[10px] text-gray-600 mt-2 gap-6">
                    <p>© 2025 Get Hyped</p>
                    <p>© Design by Dylan</p>
                  </div>
                </div>

                {/* RIGHT — contact */}
                <div className="flex flex-col gap-3">
                  <div>
                    <h4 className="text-sm font-semibold">Contact</h4>
                    <p className="text-xs">info@gethyped.nl</p>
                    <p className="text-xs">+31 6 1533 7496</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold">Adres</h4>
                    <p className="text-xs">Beltrumsestraat 6,<br />7141 AL Groenlo</p>
                    <p className="text-[9px] text-[#A1A1A1] mt-6">Privacyvoorwaarden</p>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ── MOBILE ── */}
      <div className="block md:hidden">
        <div className="relative w-full bg-primary overflow-hidden flex items-end py-1">
          {/* Skewed bg */}
          <div
            className="absolute inset-0 bg-[#e2dacb] w-full"
            style={{
              borderTopLeftRadius: '10px',
              borderTopRightRadius: '30px',
              transform: 'skewY(-9deg)',
              transformOrigin: 'top right',
              bottom: '-100px',
            }}
          />

          <div className="relative z-10 w-full px-6 flex flex-col items-center gap-6 pb-8">
            {/* Logo */}
            <div className="text-5xl font-black text-primary mt-4">GH</div>

            {/* CTA button */}
            <button className="bg-[#FF5F1F] text-white px-4 py-2 rounded-xl font-bold flex items-center gap-2">
              Get Hyped! Neem contact op
              <span className="bg-white text-[#FF5F1F] rounded-xl p-1">
                <FaGripfire size={20} />
              </span>
            </button>

            {/* Nav links */}
            <div className="flex justify-center gap-2 flex-wrap">
              {NAV_ITEMS.map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="px-3 py-2 text-sm font-bold bg-white rounded-[10px] shadow-sm text-black"
                >
                  {item}
                </a>
              ))}
            </div>

            {/* Socials */}
            <div className="flex gap-3">
              {SOCIAL_ICONS.map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-white p-3 rounded-full text-black shadow-sm transition-transform duration-300 hover:scale-110 active:scale-95"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>

            {/* Contact info */}
            <div className="text-center text-[#4b4b4b] space-y-2">
              <p className="text-sm font-semibold">info@gethyped.nl</p>
              <p className="text-sm font-semibold">+31 6 1533 7496</p>
              <p className="text-sm font-semibold">Beltrumsestraat 6,<br />7141 AL Groenlo</p>
              <p className="text-[12px] text-gray-500 mt-3">Privacyvoorwaarden</p>
            </div>

            {/* Copyright */}
            <div className="flex flex-col items-center text-[12px] text-gray-600 gap-1">
              <p>© 2025 Get Hyped</p>
              <p>© Design by Dylan</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;