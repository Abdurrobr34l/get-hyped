import { useEffect, useRef } from "react";

const WorkCard = ({ item }) => {
  const videoRef = useRef(null);

  useEffect(() => {
    if (window.innerWidth < 768) {
      videoRef.current?.play();
    }
  }, []);
  return (
    <a
      href={item.href}
      className="group relative block rounded-4xl p-1.5"
      style={{ backgroundColor: item.color }}
      onMouseEnter={() => { if (window.innerWidth >= 768) videoRef.current?.play(); }}
      onMouseLeave={() => {
        if (window.innerWidth >= 768 && videoRef.current) {
          videoRef.current.pause();
          videoRef.current.currentTime = 0;
        }
      }}
    >
      <div className="relative rounded-[26px] overflow-hidden aspect-[14.8/19.18]">

        {/* MEDIA */}
        <div className="relative aspect-9/12">
          <img
            src={item.image}
            alt=""
            className="absolute inset-0 w-full h-full object-cover transition-opacity duration-300 group-hover:opacity-0"
            draggable={false}
          />
          <video
            ref={videoRef}
            src={item.video}
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          />
        </div>

        {/* SVG SHAPE */}
        <div className="absolute bottom-0 left-0 w-full p-2" style={{ height: '65%' }}>
          <svg
            viewBox="0 0 429 300"
            className="w-full h-full"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M428.625 100V265C428.625 283.225 413.850 298 395.625 298L33 298C14.775 298 0 283.225 0 265V160C0 153 5.03458 147 11.904 145.867L388.605 83C409.565 79.5 428.625 95.75 428.625 100Z"
              fill={item.color}
            />
          </svg>
        </div>

        {/* CONTENT */}
        <div className="absolute bottom-0 left-0 w-full p-4 z-10 text-white">
          <h3 className="text-base font-bold leading-tight mb-3">
            {item.title}
          </h3>
          <span
            className="px-3 py-1 text-xs font-semibold rounded-md"
            style={{ backgroundColor: item.labelColor }}
          >
            {item.brand}
          </span>
        </div>

        {/* ARROW */}
        <div className="absolute bottom-5 right-4 z-10 -rotate-128">
          <button className="
  group relative w-11 h-11
  rounded-full bg-white
  overflow-hidden
  flex items-center justify-center
">
            <div className="
              flex flex-col gap-12
              transition-all duration-500
              -translate-y-8
              ease-[cubic-bezier(0.34,1.56,0.64,1)]
              group-hover:translate-y-8
            ">
              <svg className="w-4 h-4 text-primary" viewBox="0 0 26 27" fill="currentColor">
                <path d="M0.876668 14.4267L3.42629 11.852L11.1376 19.5634L11.1376 0.828689L14.8621 0.828689L14.8621 19.5634L22.5609 11.852L25.123 14.4267L12.9999 26.5498L0.876668 14.4267Z" />
              </svg>
              <svg className="w-4 h-4 text-primary" viewBox="0 0 26 27" fill="currentColor">
                <path d="M0.876668 14.4267L3.42629 11.852L11.1376 19.5634L11.1376 0.828689L14.8621 0.828689L14.8621 19.5634L22.5609 11.852L25.123 14.4267L12.9999 26.5498L0.876668 14.4267Z" />
              </svg>
            </div>
          </button>
        </div>

      </div>
    </a>
  );
};

export default WorkCard;