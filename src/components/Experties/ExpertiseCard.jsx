import Button from "../UI/Button";
import ArrowBlack from "../../assets/icons/black-arrow.png";
import ArrowWhite from "../../assets/icons/white-arrow.png";

const ExpertiseCard = ({ item, cardRef }) => {
  return (
    <div
      ref={cardRef}
      className="experties-wrapper relative w-full min-h-[85vh] rounded-[1em]! overflow-hidden flex items-center p-4! md:p-6! lg:p-8!  xl:p-10.5!"
      style={{ backgroundColor: item.bg }}
    >
      {/* NUMBER — faded background */}
      <span
        className="absolute top-4 right-4 text-[2.3em] font-semibold leading-none select-none pointer-events-none md:text-[6rem] lg:right-8"
        style={{ color: item.numberColor }}
      >
        {item.number}
      </span>

      {/* LEFT CONTENT */}
      <div className="flex flex-col justify-between gap-10 w-full md:w-1/2 z-10 h-full">
        {/* TITLE + DESCRIPTION */}
        <div className="flex flex-col gap-[0.50em]">
          {/* LABEL */}
          <span className="flex items-center bg-white text-primary text-[0.81em] font-semibold px-[0.75em] h-[2.5em] rounded-[0.5em] w-fit xl:text-[17px] xl:py-[0.65em]">
            {item.label}
          </span>

          {/* TITLE */}
          <h2 className="text-[1.5em] sm:text-[7vw] md:text-[6vw] xl:text-[4vw] 2xl:text-[6em] font-bold leading-none text-primary">
            {item.title}
          </h2>
        </div>

        {/* VIDEO — mobile only, shows between title and text */}
        <div className="block md:hidden w-full max-w-[80vw] self-end">
          <div className="relative rounded-2xl overflow-hidden border-4 border-white rotate-2 aspect-3.5/4.5">
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

        {/* SUBTITLE + DESCRIPTION + BUTTON */}
        <div className="flex flex-col gap-[0.40em]">
          <p className="text-base md:text-lg font-semibold text-primary 2xl:text-[28px] 2xl:max-w-lg">
            {item.subtitle}
          </p>
          <p className="text-sm font-medium md:text-base text-primary leading-4.5 max-w-sm">
            {item.description}
          </p>
          {/* BUTTON */}
          <Button
            children={item.buttonText}
            className={item.id === 1 ? "bg-secondary text-white! text-[13px]! lg:mt-1.5 xl:text-[17px]!" : "bg-white text-[13px]! lg:mt-1.5 xl:text-[17px]!"}
            icon={item.id === 1 ? ArrowBlack : ArrowWhite}
            iconAlt="Arrow image"
            iconStyle={item.id === 1 ? "bg-[#ffffff]" : "bg-black"}
            iconImgStyle={"w-3.5"}
          />
        </div>

      </div>

      {/* RIGHT — video card desktop */}
      <div className="hidden md:block absolute right-16 top-1/2 -translate-y-1/2">
        <div className="relative w-[22vw] aspect-3/7 rounded-3xl overflow-hidden border-10 border-white rotate-3 shadow-xl md:w-[24vw] md:aspect-4/5.5 lg:w-[22vw] lg:aspect-4/5.5 xl:w-[24vw] xl:aspect-4/6 2xl:w-[21vw] 2xl:aspect-3/4">
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