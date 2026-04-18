import ArrowSVG from "../../utilities/ArrowSVG";
import Button from "../UI/Button";
import Arrow from "../../assets/icons/white-arrow.png";

const About = () => {
  return (
    <section className="bg-bgPrimary py-20">
      <div className="">

        <div className="grid grid-cols-12 gap-y-12">

          {/* HEADING */}
          <div className="col-span-12 lg:col-start-2 lg:col-span-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold leading-[1em]">
              Wij maken content die opvalt. Die blijft hangen. Die jouw doelgroep raakt en jouw merk in beweging brengt. Snel, krachtig en energiek.
            </h2>
          </div>

          {/* IMAGE / VIDEO */}
          <div className="col-span-12 lg:col-start-1 lg:col-span-2">

            {/* MOBILE VIDEO */}
            <div className="block lg:hidden">
              <video
              // transform: translate(5vw) rotate(3deg)
                className="w-[75vw] transform translate-[5vw] rotate-3 rounded-2xl"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src="https://gethyped.b-cdn.net/New%20Reach/new-reach-loop.mp4" />
              </video>
            </div>

            {/* DESKTOP IMAGE */}
            <div className="hidden lg:block">
              <img
                src="https://cdn.prod.website-files.com/6848603da8e6ac95794b7498/6894757aa6dd3f84f6e463a2_Anniek%20Bril.webp"
                alt=""
                className="rounded-2xl w-full"
                draggable="false"
              />
            </div>
          </div>

          {/* TEXT */}
          <div className="col-span-12 flex flex-col justify-end lg:col-start-5 lg:col-span-4">
            <p className="text-base md:text-[1.6em] leading-[1.3em] font-semibold mb-6">
              We stoppen niet bij mooie plaatjes en vette beelden. We maken het meetbaar.
              Zo weet je precies wat werkt en wat niet. Nooit meer content zonder strategie.
              Nooit meer content zonder resultaat.
            </p>
            
            <Button children={"Leer ons kennen"} className=" inline-block border" icon={Arrow} iconStyle="bg-black" iconImgStyle="w-[14px]" />
          </div>

          {/* BUTTON */}
          <div className="col-span-12 lg:col-start-11 lg:col-span-1 flex flex-col justify-end items-end">

            <button className="group relative w-12 h-12 rounded-[0.75em] border overflow-hidden flex items-center justify-center transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:rounded-[0.5em]">

              {/* ICON TRACK */}
              <div className="flex flex-col gap-12 transition-all -translate-y-8 duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:translate-y-9">

                {/* ICON 1 */}
                <svg
                  className="w-5 h-5 text-secondary"
                  viewBox="0 0 26 27"
                  fill="currentColor"
                >
                  <path d="M0.876668 14.4267L3.42629 11.852L11.1376 19.5634L11.1376 0.828689L14.8621 0.828689L14.8621 19.5634L22.5609 11.852L25.123 14.4267L12.9999 26.5498L0.876668 14.4267Z" />
                </svg>

                {/* ICON 2 (duplicate) */}
                <svg
                  className="w-5 h-5 text-secondary"
                  viewBox="0 0 26 27"
                  fill="currentColor"
                >
                  <path d="M0.876668 14.4267L3.42629 11.852L11.1376 19.5634L11.1376 0.828689L14.8621 0.828689L14.8621 19.5634L22.5609 11.852L25.123 14.4267L12.9999 26.5498L0.876668 14.4267Z" />
                </svg>

              </div>

            </button>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;