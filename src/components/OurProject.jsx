import { Link } from "react-router-dom";

const projects = [
  {
    title: "Web-Based Vehicle Reservation System",
    image: "/proj2.png",
  },
  {
    title: "Next-Gen E-Commerce Ecosystem",
    image: "/ecom.png",
  },
  {
    title: "Integrated Advertising Performance Framework",
    image: "/proj.png",
  },
];

const OurProject = () => {
  return (
    <div className="pt-16 pb-8 bg-gray-50 text-center font-raleway px-2 md:px-0">
      <p className="text-sm text-[#003366] font-semibold mb-2">Our Projects</p>
      <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-10">
        Driving Success Through <br className="hidden md:block" /> Innovative IT Solutions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative rounded-xl overflow-hidden shadow-lg group"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-[rgba(0,0,0,0.55)] transition duration-300 z-10"></div>
            <div className="overlay h-30 flex flex-col justify-between absolute bottom-4 left-4 right-4 bg-white bg-opacity-95 backdrop-blur-md px-5 py-4 rounded-lg shadow-md text-left z-20">
              <h3 className="text-[18px] text-center md:text-[18px] font-semibold text-gray-900">
                {project.title}
              </h3>
              <Link
                to="/portfolio"
                className="text-[#003366] text-sm mt-2 inline-block font-medium hover:underline"
              >
                Explore →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Link
          to="/portfolio"
          className="inline-block px-6 py-3 bg-[#003366] text-white font-semibold rounded-lg shadow-md hover:bg-[#002244] transition"
        >
          View More Projects →
        </Link>
      </div>
    </div>
  );
};

export default OurProject;
