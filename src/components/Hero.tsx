import { Link } from "react-router-dom";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";

import womanImg from "../assets/woman_hero.png";
const Hero = () => {
  return (
    <section className="bg-gradient-to-r py-14 from-cyan-500 to-blue-100  shadow-lg h-[800px]">
      <div className="container mx-auto flex justify-around h-full">
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[3px] bg-blue-600 mr-3"></div>
            <div>The time is now</div>
          </div>
          <h1 className="text-[70px] lg:text-7xl leading-[1.1] font-light mb-4">
            Find yourself
            <br />
            <span className="font-semibold">Seasonal Sale</span>
          </h1>
          <ScrollLink
            to="home" // Target the ID of the element to scroll to
            smooth={true}
            duration={500}
            className="self-start cursor-pointer uppercase font-semibold border-b-2 border-primary"
          >
            Discover More
          </ScrollLink>
        </div>
        <div className="hidden lg:block">
          <img src={womanImg} alt="woman image" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
