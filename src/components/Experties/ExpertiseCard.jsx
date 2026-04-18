import Button from "../UI/Button";
import ArrowBlack from "../../assets/icons/black-arrow.png";
import ArrowWhite from "../../assets/icons/white-arrow.png";

const ExpertiseCard = ({ item, cardRef }) => {
  return (
    <div
      ref={cardRef}
      className="relative w-full min-h-[85vh] rounded-[2em] overflow-hidden flex items-center px-8 md:px-12 lg:px-16 py-10"
      style={{ backgroundColor: item.bg }}
    >
      {/* NUMBER — faded background */}
      <span
        className="absolute top-6 right-8 text-[8rem] md:text-[6rem] font-black leading-none select-none pointer-events-none"
        style={{ color: item.bg, filter: "brightness(0.88)" }}
      >
        {item.number}
      </span>

      {/* LEFT CONTENT */}
      <div className="flex flex-col gap-6 w-full lg:w-1/2 z-10">
        <div>
          {/* LABEL */}
          <span className="inline-block bg-white text-primary text-sm font-medium px-3 py-1 rounded-full w-fit">
            {item.label}
          </span>

          {/* TITLE */}
          <h2 className="text-[10vw] sm:text-[7vw] md:text-[6vw] lg:text-[5vw] xl:text-[4vw] font-semibold leading-none text-primary">
            {item.title}
          </h2>
        </div>

        {/* VIDEO — mobile only, shows between title and text */}
        <div className="block lg:hidden w-full max-w-[60vw] self-end">
          <div className="relative rounded-2xl overflow-hidden border-4 border-white rotate-2 aspect-3/4">
            <video
              src={item.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
        </div>

        {/* SUBTITLE + DESCRIPTION */}
        <div className="flex flex-col gap-2 max-w-sm">
          <p className="text-base md:text-lg font-bold text-primary">
            {item.subtitle}
          </p>
          <p className="text-sm md:text-base text-primary/70 leading-relaxed">
            {item.description}
          </p>
        </div>

        {/* BUTTON */}
        <Button
          children={item.buttonText}
          className={item.id === 1 ? "bg-secondary text-white!" : "bg-white"}
          icon={item.id === 1 ? ArrowBlack : ArrowWhite}
          iconAlt="Arrow image"
          iconStyle={item.id === 1 ? "bg-[#ffffff]" : "bg-black"}
          iconImgStyle={"w-3.5"}
        />
      </div>

      {/* RIGHT — video card desktop */}
      <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2">
        <div className="relative w-[22vw] aspect-3/4 rounded-2xl overflow-hidden border-4 border-white rotate-3 shadow-xl">
          <video
            src={item.video}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default ExpertiseCard;