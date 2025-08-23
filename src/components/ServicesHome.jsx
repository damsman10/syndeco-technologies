import {
  CodeBracketIcon,
  GlobeAltIcon,
  PencilSquareIcon,
  MegaphoneIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const services = [
  {
    title: "Software Development",
    description:
      "Custom software solutions tailored to meet your unique business processes.",
    icon: CodeBracketIcon,
  },
  {
    title: "Website Development",
    description:
      "Responsive and scalable websites built with the latest technologies.",
    icon: GlobeAltIcon,
  },
  {
    title: "Tech Support & Maintenance",
    description:
      "Reliable technical support and site optimization to ensure smooth operations.",
    icon: WrenchScrewdriverIcon,
  },
  {
    title: "Web Design",
    description:
      "Modern, user-focused designs that enhance engagement and usability.",
    icon: PencilSquareIcon,
  },
  {
    title: "Digital Marketing",
    description:
      "Targeted strategies to boost visibility, engagement, and conversions.",
    icon: MegaphoneIcon,
  },
  {
    title: "IT Training",
    description:
      "Hands-on training programs designed to upskill your workforce in technology.",
    icon: AcademicCapIcon,
  },
];

const ServicesHome = () => {
  return (
    <div className="relative bg-[#f3f4f6] py-20 overflow-hidden font-raleway">

      <div className="w-4/5 mx-auto">
       
        <div className="title text-center mb-12">
          <p className="text-sm font-medium text-[#003366]">Our Services</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Empower Your Business With <br />
            Comprehensive IT Solutions
          </h2>
        </div>

        
        <div className="services text-center grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {services.map((service, idx) => (
            <div
              key={idx}
              className="group bg-white p-6 rounded-lg shadow-sm border border-gray-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              <service.icon className="h-10 w-10 text-[#003366] mb-4 mx-auto transition-transform duration-300 group-hover:scale-110" />
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {service.title}
              </h3>
              <p className="text-[16px] leading-6 text-gray-600 mb-4">
                {service.description}
              </p>
              <Link
                to="/services"
                className="text-[#003366] text-sm font-medium hover:underline"
              >
                Learn More →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesHome;
