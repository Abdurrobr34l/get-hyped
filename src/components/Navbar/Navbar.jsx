import React, { useState } from "react";
import NavLink from "../UI/NavLink";
import Button from "../UI/Button";
import Fire from "../../assets/icons/fire-icon.png";
import Logo from "../../assets/logo.png";
import Drawer from "./Drawer";

const navLinks = [
  { name: "Expertises", href: "#" },
  { name: "Work", href: "#" },
  { name: "About", href: "#" },
  { name: "Contact", href: "#" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

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
      <div className="hidden lg:flex items-center gap-1 bg-white/60 px-2 py-1.5 rounded-[12.8px]">
        {navLinks.map((link, index) => (
          <NavLink key={index} href={link.href}>
            {link.name}
          </NavLink>
        ))}
      </div>

      {/* CTA BUTTON (DESKTOP) */}
      <div className="hidden lg:block">
        <Button
          onClick={() => setIsDrawerOpen(true)}
          className="bg-pink"
          icon={Fire}
          iconAlt="fire icon"
          iconStyle="bg-white"
          >
          Get Results
        </Button>
      </div>
      <Drawer
  isOpen={isDrawerOpen}
  onClose={() => setIsDrawerOpen(false)}
/>

      {/* HAMBURGER (MOBILE) */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden bg-purple-300 p-3 rounded-lg"
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

          <Button 
          className="flex items-center gap-2 bg-purple-300 px-5 py-2 text-[6.2px] rounded-full" 
          textStyle={"text-[6.2px]"}
          children={"Get Resultsss"}
          icon={Fire}
          iconAlt="Fire icon"
          iconStyle="bg-white"
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;