import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Button from "../UI/Button";
import Plane from "../../assets/icons/plane-icon.png";
import InputField from "../UI/InputField";
import TextareaField from "../UI/TextareaField";

const Drawer = ({ isOpen, onClose }) => {
  const modalRef = useRef(null);
  const panelRef = useRef(null);

  // ICONS
  const SuccessIcon = () => (
    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-green-500 text-lg">
      ✔
    </span>
  );

  const ErrorIcon = () => (
    <span className="absolute right-4 top-1/2 -translate-y-1/2 text-red-500 text-lg">
      ✖
    </span>
  );
  // Set initial position on mount
  useEffect(() => {
    gsap.set(panelRef.current, { xPercent: 100 });
  }, []);

  // Handle open/close
  useEffect(() => {
    if (!panelRef.current || !modalRef.current) return;

    if (isOpen) {
      gsap.set(modalRef.current, { display: "block" });
      gsap.to(modalRef.current, {
        backgroundColor: "rgba(34,34,34,0.6)",
        duration: 0.3,
      });
      gsap.to(panelRef.current, {
        xPercent: 0,
        duration: 0.5,
        ease: "power3.out",
      });
    } else {
      gsap.to(panelRef.current, {
        xPercent: 100,
        duration: 0.5,
        ease: "power3.in",
      });
      gsap.to(modalRef.current, {
        backgroundColor: "rgba(34,34,34,0)",
        duration: 0.3,
        delay: 0.2,
        onComplete: () => {
          gsap.set(modalRef.current, { display: "none" });
        },
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={modalRef}
      className="fixed inset-0 z-50 hidden"
    >
      {/* OVERLAY */}
      <div
        onClick={onClose}
        className="absolute inset-0 z-40"
      />

      {/* PANEL */}
      <div
        ref={panelRef}
        className="
          absolute top-0 right-0 h-full z-50
          bg-bgPrimary
          w-full md:w-[90%] lg:w-1/2
          p-6 md:p-10
          overflow-y-auto
        "
      >
        {/* CLOSE */}
        <div className="flex justify-end mb-6">
          <Button
            onClick={onClose}
            children={"Sluit"}
            className="px-[0.5em]! py-[0.55em]! text-[13.2px]! border"
          />
        </div>

        <h2 className="text-[27px] md:text-5xl lg:text[38px] font-semibold mb-4 md:mb-5">
          Leave us a message
        </h2>

        <form className="flex flex-col gap-6">

          <InputField
            label="Voor- en achternaam *"
            placeholder="Wie ben je?"
            required
            validator={(v) => v.length > 2}
          />

          <InputField
            label="E-mail *"
            placeholder="Hoe kunnen we je bereiken?"
            type="email"
            required
            validator={(v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v)}
          />

          <InputField
            label="Telefoonnummer"
            placeholder="Je telefoonnummer"
            type="tel"
            validator={(v) => v === "" || v.length >= 10}
          />

          {/* TEXTAREA (manual version) */}
          <TextareaField
            label="Bericht *"
            placeholder="Vertel ons wat je zoekt (of gewoon iets leuks)."
            required
            validator={(v) => v.length > 5}
          />

          {/* CHECKBOX */}
          <div className="flex items-center gap-3">
            <input type="checkbox" id="privacy" className="w-4 h-4" />
            <label htmlFor="privacy" className="text-sm">
              Ik accepteer de{" "}
              <span className="underline">Privacyvoorwaarden</span> *
            </label>
          </div>

          {/* SUBMIT */}
          <div className="flex flex-wrap items-center gap-4">
            <Button
              children={"Verstuur bericht"}
              icon={Plane}
              iconAlt="Plane icon"
              iconStyle="bg-white"
              className="bg-secondary text-white!"
            />

            <span className="text-sm font-bold text-[19.2px]">
              Of bel{" "}
              <a href="tel:+31615337496" className="text-secondary">
                +31 6 1533 7496
              </a>
            </span>
          </div>

        </form>
      </div>
    </div>
  );
};

export default Drawer;