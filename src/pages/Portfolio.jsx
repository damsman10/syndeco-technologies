import { motion } from "framer-motion";

const Portfolio = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      text: "A modern online store with secure payments and responsive design.",
      image: "/ecom.png",
    },
    {
      title: "HR Landing Page",
      text: "Responsive landing page engineered for high-impact HR training marketing.",
      image: "/SuportPro.png",
    },
    {
      title: "News Portal",
      text: "High-traffic news platform optimized for speed and SEO.",
      image: "/proj3.png",
    },
    {
      title: "Corporate Website",
      text: "Professional and scalable web presence for a global enterprise.",
      image: "/corp.jpg",
    },
    {
      title: "Mobile App",
      text: "Seamless mobile application designed for cross-platform use.",
      image: "/mob-app.jpg",
    },
    {
      title: "Car Rental Platform",
      text: "A digital service that lets users easily search, book, and manage car rentals in their area.",
      image: "/proj2.png",
    },
    {
      title: "Business Dashboard",
      text: "Data-driven analytics dashboard with real-time insights.",
      image: "/proj.png",
    },
    {
      title: "Church Website",
      text: "Engaging and responsive church platform built to share sermons, events, and community updates.",
      image: "/church.jpg",
    },
    {
      title: "Joy Academy",
      text: "A colorful, engaging website for a modern children’s school — built to inform parents and inspire young learners.",
      image: "/school.jpg",
    }
  ];

  const clients = [
    "/kfila.png",
    "/supportpr.png",
    "/alpha.jpg",
    "/afrilogo.png",
    "/reddot.png",
    "/msn.png",
    "/snap.svg",
    "/dp.png",
    "/sail.jpg",
    "/retain.jpg",
  ];

  const baseShadow = "0 4px 8px rgba(0, 0, 0, 0.12)";
  const hoverShadow = "0 10px 20px rgba(0, 0, 0, 0.18)";

  return (
    <div className="portfolio-page font-montserrat">
      <motion.section
        className="relative py-20 px-6 md:px-16 text-center text-white"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
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
            className="bg-white rounded-2xl overflow-hidden transition-transform transform hover:-translate-y-2 cursor-pointer"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.15 }}
            viewport={{ once: true }}
            style={{
              boxShadow: baseShadow,
              transition: "box-shadow 0.3s ease, transform 0.3s ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.boxShadow = hoverShadow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.boxShadow = baseShadow;
            }}
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

      <section className="bg-white py-16 px-6 md:px-16 text-center overflow-hidden">
        <h2 className="text-3xl font-bold text-[#003366] mb-10 font-poppins">
          Trusted by Businesses We’ve Empowered
        </h2>

        <div className="hidden md:block relative w-full overflow-hidden">
          <div className="flex gap-8 animate-marquee">
            {clients.concat(clients).map((logo, i) => (
              <img
                key={i}
                src={logo}
                alt="Client Logo"
                className="h-12 max-w-[200px] object-contain grayscale opacity-80 hover:opacity-100 transition"
                loading="lazy"
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 gap-6 justify-items-center md:hidden">
          {clients.map((logo, i) => (
            <img
              key={i}
              src={logo}
              alt="Client Logo"
              className="h-12 max-w-[150px] object-contain grayscale opacity-80 hover:opacity-100 transition"
              loading="lazy"
            />
          ))}
        </div>
      </section>

      <motion.section
        className="bg-[#f3f4f6] py-20 px-6 md:px-16 text-center"
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
