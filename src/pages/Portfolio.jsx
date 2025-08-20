import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      text: "A modern online store with secure payments and responsive design.",
      image: "/p1.jpg",
    },
    {
      title: "Corporate Website",
      text: "Professional and scalable web presence for a global enterprise.",
      image: "/p2.jpg",
    },
    {
      title: "Mobile App",
      text: "Seamless mobile application designed for cross-platform use.",
      image: "/p3.jpg",
    },
    {
      title: "News Portal",
      text: "High-traffic news platform optimized for speed and SEO.",
      image: "/p4.jpg",
    },
    {
      title: "Portfolio Showcase",
      text: "Creative portfolio website highlighting skills and achievements.",
      image: "/p5.jpg",
    },
    {
      title: "Business Dashboard",
      text: "Data-driven analytics dashboard with real-time insights.",
      image: "/p6.jpg",
    },
  ];

  return (
    <div className="portfolio-page font-montserrat">
      <motion.section
        className="relative py-20 px-6 md:px-16 text-center text-white"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/cl-co.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-[#003366]/80"></div>
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Our Portfolio
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-raleway">
            Showcasing Innovation, Creativity, and Proven Results
          </p>
        </div>
      </motion.section>

      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {projects.map((project, i) => (
          <motion.div
            key={i}
            className="bg-white rounded-2xl shadow-md hover:shadow-xl overflow-hidden transition transform hover:-translate-y-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-[#003366] mb-3 font-poppins">
                {project.title}
              </h3>
              <p className="text-gray-700 leading-relaxed">{project.text}</p>
            </div>
          </motion.div>
        ))}
      </section>

      <motion.section
        className="bg-gray-100 py-20 px-6 md:px-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#003366] mb-6 font-poppins">
          Let’s Build Something Great Together
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          From startups to enterprises, we’ve delivered impactful solutions. Let’s bring your vision to life.
        </p>
        <a
          href="/contact"
          className="inline-block bg-[#003366] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-[#002244] transition"
        >
          Start a Project
        </a>
      </motion.section>
    </div>
  );
};

export default Portfolio;
