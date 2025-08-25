import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import JobsData from "../components/JobsData";


// console.log("JOBS LOADED:", JobsData);


const Careers = () => {
  const benefits = [
    "Work with a diverse, global team of innovators",
    "Opportunities for professional growth and leadership",
    "Remote-friendly culture with flexible hours",
    "Health & wellness programs",
    "Cutting-edge technology and tools",
  ];


  const baseShadow = "0 4px 10px rgba(0, 0, 0, 0.1)";
  const hoverShadow = "0 8px 20px rgba(0, 0, 0, 0.15)";

  return (
    <div className="careers-page font-montserrat">
      <motion.section
        className="relative py-24 px-6 md:px-16 text-center text-white"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/career.jpg')" }}
        />
        <div className="absolute inset-0 bg-[#003366]/80" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Join Our Global Team
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-raleway">
            Be part of an international company shaping the future of technology and innovation.
          </p>
        </div>
      </motion.section>

      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#003366] mb-8 text-center font-poppins">
          Why Work With Us
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-2xl transition-transform transform hover:-translate-y-1"
              initial={false}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              viewport={{ once: true }}
              style={{
                boxShadow: baseShadow,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = hoverShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = baseShadow;
              }}
            >
              <h3 className="text-lg font-semibold text-[#003366]">{benefit}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      

      <section className="py-20 px-6 md:px-16 bg-gray-50">
        <h2 className="text-3xl font-bold text-[#003366] mb-10 text-center font-poppins">
          Current Openings
        </h2>
        <div className="max-w-4xl mx-auto space-y-10">
          {JobsData.map((job, i) => (
            <motion.div
              key={job.id}
              className="p-8 bg-white rounded-2xl transition-transform transform hover:-translate-y-1"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.3 }}
              viewport={{ once: true }}
              style={{
                boxShadow: baseShadow,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = hoverShadow;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = baseShadow;
              }}
            >
              <h3 className="text-2xl font-bold text-[#003366] mb-2 font-poppins">
                {job.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {job.location} • {job.type}
              </p>
              <p className="text-gray-700 mb-6">{job.description_sh}</p>

              <Link
                to={`/careers/${job.id}`}
                className="inline-block bg-[#003366] text-white px-6 py-3 rounded-xl font-semibold shadow hover:bg-[#002244] transition"
              >
                Apply Now
              </Link>
            </motion.div>
          ))}
        </div>
      </section>

      <motion.section
        className="bg-[#003366] text-white py-20 px-6 md:px-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
          Ready to Shape the Future With Us?
        </h2>
        <p className="max-w-2xl mx-auto mb-8 text-lg">
          We’re always on the lookout for passionate individuals who want to make an impact.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-[#003366] px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-gray-200 transition"
        >
          Get in Touch
        </a>
      </motion.section>
    </div>
  );
};

export default Careers;
