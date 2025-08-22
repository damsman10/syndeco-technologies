import React from "react";
import { CheckCircle } from "lucide-react";
import { Link } from "react-router-dom";

const AboutHome = () => {
  return (
    <div className="w-4/5 mx-auto mt-12 mb-6 grid md:grid-cols-2 gap-12 items-center pt-2 pb-4 md:py-12 font-montserrat">
      
      <div className="left hidden relative md:flex gap-4 h-full">
        
        <img
          src="abt1.jpeg"
          alt="Team working"
          className="w-[18%] h-[58%] object-cover rounded-lg shadow-md image1"
        />

        <div className="flex-1 h-full">
          <img
            src="/abt2.jpeg"
            alt="Team meeting"
            className="w-full h-full object-cover rounded-lg shadow-md image2"
          />
          
        </div>
        
        <div className="overlay absolute bottom-6 left-0 bg-[#003366] text-white text-center p-6 rounded-lg shadow-md">
            <h4 className="text-lg font-semibold">24/7 Support</h4>
            <p className="text-sm mt-1 leading-6">Syndeco Technologies <br /> & IT Solution</p>
        </div>
      </div>

      
      <div>
        <p className="right text-sm text-[#003366] font-medium mb-2">About Our Company</p>
        <img
            src="/abt2.jpeg"
            alt="Team meeting"
            className="w-full h-full object-cover  md:hidden py-4 image2"
          />
        <h2 className="text-3xl font-bold text-gray-900 leading-snug">
          Discover Our Story <br /> Empowering Business Through Innovation
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Syndeco Technologies is a pioneering force in the realm of technology and IT
          solutions, dedicated to revolutionising the way businesses thrive in
          the digital age. Our approach is rooted in collaboration,
          transparency, and a relentless pursuit of excellence.
        </p>

        <ul className="mt-6 space-y-3">
          {[
            "Dramatically re-engineer value added IT system.",
            "Highlight any unique selling points or differentiators.",
            "Incorporate visuals such as team photo shots."
          ].map((point, idx) => (
            <li key={idx} className="flex items-start gap-2">
              <CheckCircle className="w-5 h-5 text-[#003366] shrink-0 mt-1" />
              <span className="text-gray-700">{point}</span>
            </li>
          ))}
        </ul>

        <div className="text-center md:text-left">
          
          <Link to="/about">
            <button className="mt-6 bg-[#003366] text-white px-6 py-3 rounded-md hover:bg-blue-700 transition ">
              Discover More →
            </button>
          </Link>

        </div>
      </div>
    </div>
  );
};

export default AboutHome;
