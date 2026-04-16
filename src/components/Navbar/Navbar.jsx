import React, { useState } from "react";
import NavLink from "../UI/NavLink";
import Button from "../UI/Button";
import Fire from "../../assets/fire-icon.png";
import Logo from "../../assets/logo.png";

const navLinks = [
  { name: "Expertises", href: "#" },
  { name: "Work", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center justify-between py-4">

      {/* LOGO */}
      <a href="/">
        <img
          src={Logo}
          alt="logo"
          className="
          w-24.75 h-10
          md:w-28.5 md:h-11.5
          lg:w-25 lg:h-10
          xl:w-31.25 xl:h-12.5
          2xl:w-37.5 2xl:h-15
        "
        />
      </a>

      {/* DESKTOP MENU */}
      <div className="hidden md:flex items-center gap-1 bg-white/60 p-2 rounded-[1em]">
        {navLinks.map((link, index) => (
          <NavLink key={index} href={link.href}>
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* CTA BUTTON (DESKTOP) */}
      <div className="hidden md:block">
        <Button
        className="bg-pink"
          icon={Fire}
          iconAlt="fire icon">
            Get Results
        </Button>
      </div>

      {/* HAMBURGER (MOBILE) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden bg-purple-300 p-3 rounded-lg"
      >
        <div className="w-5 h-0.5 bg-black mb-1"></div>
        <div className="w-5 h-0.5 bg-black"></div>
      </button>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-bgSecondary flex flex-col items-center gap-6 py-6 md:hidden">
          {navLinks.map((link, index) => (
            <NavLink key={index} href={link.href}>
              {link.name}
            </NavLink>
          ))}

          <Button className="flex items-center gap-2 bg-purple-300 px-5 py-2 rounded-full">
            Get Results
            <img src={Fire} alt="fire" className="w-4 h-4" />
          </Button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;