import { Link } from "react-router-dom";

const CallToAction = () => {
  return (
    <div className="bg-[#003366] py-16 px-6">
      <div className="max-w-6xl font-montserrat mx-auto flex flex-col md:flex-row justify-between items-center text-white text-center md:text-left gap-10">
        <div className="flex-1">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4 leading-snug">
            At Syndeco Technologies, We are <br className="hidden md:block" /> 
            Committed To Businesses
          </h2>
          <p className="text-[16px] md:text-[18px] leading-7 text-white/90 max-w-xl mx-auto md:mx-0">
            Take the first step towards achieving your business goals by contacting us today. 
            Schedule a consultation with one of our specialists to discuss your objectives 
            and explore how our innovative solutions can propel your business forward.
          </p>
        </div>

        <div className="w-full md:w-auto flex flex-col sm:flex-row gap-4 justify-center md:justify-end">
          <Link to="/contact">
            <button className="bg-white text-[#003366] font-medium px-5 py-3 rounded-md hover:bg-gray-100 transition w-full sm:w-auto">
              Request a Consultation →
            </button>
          </Link>
          
          <Link to="/contact">
            <button className="border border-solid border-white text-white font-medium px-5 py-3 rounded-md hover:bg-white hover:text-[#003366] transition w-full sm:w-auto">
              Explore Solution →
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;
