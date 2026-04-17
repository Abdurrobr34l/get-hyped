const HeroCard = ({ card, cardRef }) => {
  const themeClass =
    card.theme === "blue"
      ? "bg-[#1E90FF]"
      : card.theme === "green"
      ? "bg-[#3DDC84]"
      : "bg-transparent";

  const hideClass =
    card.hideOn === "mobile"
      ? "hidden md:block"
      : card.hideOn === "tablet-mobile"
      ? "hidden lg:block"
      : "block";

  return (
    <div
      ref={cardRef}
      data-index={card.id}
      className={`
        ${hideClass}
        ${themeClass}
        relative shrink-0
        rounded-[20px] md:rounded-[2em] lg:rounded-[3em]
        overflow-hidden
        cursor-pointer
        will-change-transform
      `}
      style={{
        width: "clamp(140px, 38vw, 320px)",
        aspectRatio: "4.8 / 6.2",
        marginLeft: card.id === 1 ? "0" : "clamp(-20px, -5vw, -60px)",
        zIndex: card.id,
      }}
    >
      {card.type === "stat" ? (
        <div className="flex flex-col justify-between h-full p-4 md:p-6 lg:p-8">
          <p className="text-[clamp(2rem,8vw,4rem)] font-black text-primary leading-none">
            {card.stat}
          </p>
          <div className="flex flex-col gap-1">
            <p className="text-[clamp(0.75rem,2.5vw,1.1rem)] font-bold text-primary">
              {card.subtitle}
            </p>
            <div className="w-full h-px bg-primary/30 my-1" />
            <p className="text-[clamp(0.65rem,2vw,0.9rem)] text-primary/70">
              {card.description}
            </p>
          </div>
        </div>
      ) : (
        <>
          {card.image && (
            <img
              src={card.image}
              alt=""
              className="absolute inset-0 w-full h-full object-cover"
              draggable={false}
            />
          )}
          {card.video && (
            <video
              src={card.video}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </>
      )}
    </div>
  );
};

export default HeroCard;