import Button from "../UI/Button";
import Arrow from "../../assets/icons/white-arrow.png";

const About = () => {
  return (
    <section className="bg-bgPrimary py-12 md:py-16 lg:py-20">
      <div className="grid grid-cols-12 gap-y-8 md:gap-y-10 lg:gap-y-0 lg:gap-x-6">

        {/* ── HEADING — full width mobile, offset desktop ── */}
        <div className="
          col-span-12
          lg:col-start-2 lg:col-span-9
          xl:col-start-2 xl:col-span-8
        ">
          <h2 className="
            text-[26px] md:text-[43px] xl:text-[51px] 2xl:text-[62px]
            font-semibold leading-[1.1] tracking-tight text-primary md:leading-[0.9] xl:leading-[1.05] lg:mb-12.75 2xl:mb-20
          ">
            Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
          </h2>
        </div>

        {/* ── IMAGE/VIDEO ── */}
        <div className="
          col-span-12
          ml-3
          md:col-start-1 md:col-span-3
          xl:col-span-2
          lg:row-start-2
        ">
          {/* MOBILE + TABLET — video, slightly rotated */}
          <div className="sm:hidden">
            <video
              className="w-full max-w-[85vw] rounded-2xl rotate-2"
              autoPlay
              loop
              muted
              playsInline
            >
              <source src="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4" />
            </video>
          </div>

          {/* DESKTOP — person image */}
          <div className="hidden md:block w-42 lg:w-40 xl:w-62.5">
            <img
              src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
              alt="Anniek Bril"
              className="rounded-2xl h-65 xl:h-82"
              draggable="false"
            />
          </div>
        </div>

        {/* ── BODY TEXT + BUTTON ── */}
        <div className="
          col-span-12
          md:col-start-5 md:col-span-6
          lg:col-start-5 lg:col-span-5 lg:row-start-2
          xl:col-start-5 xl:col-span-4
          flex flex-col justify-center gap-6 lg:justify-end
        ">
          <p className="
            text-base md:text-xl lg:text-[17px] xl:text-[21px] 2xl:text-[24px]
            text-primary font-semibold
            leading-[1.4]
          ">
            We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
            Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie.
            Nooit meer content zonder resultaat.
          </p>

          <Button
            icon={Arrow}
            className="border"
            iconStyle="bg-black"
            iconImgStyle="w-[14px]"
          >
            Leer ons kennen
          </Button>
        </div>

        {/* ── ARROW BUTTON — far right desktop only ── */}
        <div className="
          hidden md:flex
          md:col-start-12 md:col-span-1
          lg:col-start-11 lg:row-start-2
          flex-col justify-end items-end
        ">
          <button className="
  group relative w-11 h-11
  rounded-[0.75em] border border-primary
  overflow-hidden
  flex items-center justify-center
  transition-all duration-500
  ease-[cubic-bezier(0.34,1.56,0.64,1)]
  hover:rounded-[0.5em]
  hover:-rotate-2
">
            <div className="
              flex flex-col gap-12
              transition-all duration-1000
              -translate-y-8
              ease-[cubic-bezier(0.34,1.56,0.64,1)]
              group-hover:translate-y-8
            ">
              <svg className="w-4 h-4 text-secondary" viewBox="0 0 26 27" fill="currentColor">
                <path d="M0.876668 14.4267L3.42629 11.852L11.1376 19.5634L11.1376 0.828689L14.8621 0.828689L14.8621 19.5634L22.5609 11.852L25.123 14.4267L12.9999 26.5498L0.876668 14.4267Z" />
              </svg>
              <svg className="w-4 h-4 text-secondary" viewBox="0 0 26 27" fill="currentColor">
                <path d="M0.876668 14.4267L3.42629 11.852L11.1376 19.5634L11.1376 0.828689L14.8621 0.828689L14.8621 19.5634L22.5609 11.852L25.123 14.4267L12.9999 26.5498L0.876668 14.4267Z" />
              </svg>
            </div>
          </button>
        </div>

      </div>
    </section>
  );
};

export default About;