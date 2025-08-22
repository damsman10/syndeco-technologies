import Stat from "./Stat";
import { Link, NavLink } from "react-router-dom";

const Hero = () => {
  return (
    <section className="hero bg-[#f3f4f6] relative">
      <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-20 lg:px-40 pt-20 pb-32">
        <div className="left max-w-xl flex flex-col gap-5 md:w-1/2">
          <p className="text-sm font-semibold text-[#003366] font-raleway pl-1">
            Software Development & IT Solution
          </p>
          <h1 className="text-[2.5rem] md:text-[3rem] font-extrabold text-black font-raleway leading-tight">
            Shaping Digital Solutions Through <span className="text-[#003366]">Innovation</span>
          </h1>
          <p className="text-black font-raleway text-[1.1rem] md:text-[1.2rem] leading-relaxed">
            Delivering holistic digital experiences through technical expertise, creative strategy, and user-centric thinking
          </p>
          <div className="flex flex-col md:flex-row flex-wrap gap-4 mt-4">
          <Link to="/contact" className="w-full md:w-auto">
            <button className="bg-[#003366] text-white text-center px-6 py-3 rounded-md font-semibold hover:bg-blue-700 transition w-full md:w-auto">
              Get Started Now →
            </button>
          </Link>
            <a
              href="mailto:info@syndeco.ng?subject=Inquiry%20from%20Website"
              className="w-full md:w-auto inline-block border-2 border-blue-900 border-solid text-blue-900 text-center px-6 py-3 rounded-md font-semibold hover:bg-blue-900 hover:text-white transition"
            >
              Contact Us
            </a>


          </div>
        </div>

        <div className="right relative mt-12 md:mt-0 md:w-1/2 flex justify-center">
          <img
            src="/heroimg.jpeg"
            alt="Professional IT Team at Work"
            className="rounded-full w-96 h-96 object-cover"
          />

          <div className="absolute -bottom-12 md:bottom-4 left-8 text-center md:text-left md:left-4 bg-white shadow-lg rounded-lg p-3 flex flex-col gap-2 max-w-[250px]">
            <div className="flex justify-center md:justify-start -space-x-2">
            <img className="w-8 h-8 rounded-full border-2 border-white" src="/83.jpg" />
            <img className="w-8 h-8 rounded-full border-2 border-white" src="/54.jpg" />
            <img className="w-8 h-8 rounded-full border-2 border-white" src="/32.jpg" />
            <img className="w-8 h-8 rounded-full border-2 border-white" src="/26.jpg" />
            <img className="w-8 h-8 rounded-full border-2 border-white" src="/12.jpg" />
            <img className="w-8 h-8 rounded-full border-2 border-white" src="/30.jpg" />
          </div>

            <p className="text-[12px] text-gray-700 leading-snug font-montserrat">
              <strong>3k+</strong> businesses trust Syndeco for IT solutions. Get on board today.
            </p>
          </div>

          <div className="absolute font-montserrat flex items-center gap-2 top-4 right-6 bg-white border border-gray-200 shadow-md rounded-md px-6 py-3">
            <p className="text-2xl md:text-3xl font-poppins font-bold text-black">+5</p>
            <div className="flex flex-col text-xs font-bold leading-tight">
              <span className="text-gray-700">Years</span>
              <span className="text-blue-700">Experience</span>
            </div>
          </div>
        </div>
      </div>


      <Stat />


    </section>
  );
};

export default Hero;
