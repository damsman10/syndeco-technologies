import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const baseShadow = "0 4px 8px rgba(0, 0, 0, 0.15)";
const hoverShadow = "0 10px 20px rgba(0, 0, 0, 0.25)";

const Services = () => {
  const services = [
    {
      title: "Mobile Solutions",
      text: "Seamless mobile experiences that connect with your audience anywhere.",
      icon: "📱",
    },
    {
      title: "Cloud Integration",
      text: "Secure, scalable, and efficient cloud solutions for modern businesses.",
      icon: "☁️",
    },
    {
      title: "Web Development",
      text: "Modern, responsive, and scalable websites tailored to your business needs.",
      icon: "💻",
    },
    {
      title: "UI/UX & Graphics Design",
      text: "Creative visuals and intuitive experiences that strengthen your brand identity.",
      icon: "🎨",
    },
    {
      title: "IT Training",
      text: "Empowering teams with hands-on training to stay ahead in the digital era.",
      icon: "📘",
    },
    {
      title: "SEO Optimization",
      text: "Boost your visibility and rank higher with data-driven SEO strategies.",
      icon: "🚀",
    },
  ];

  return (
    <div className="services-page font-montserrat">
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
            Our Services
          </h1>
          <p className="max-w-2xl mx-auto text-lg md:text-xl font-raleway">
            Delivering Excellence Through Innovation and Expertise
          </p>
        </div>
      </motion.section>

      <section className="py-20 px-6 md:px-16 max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, i) => (
          <motion.div
            key={i}
            className="p-8 bg-white rounded-2xl transition-transform cursor-pointer"
            initial={false}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true }}
            style={{ boxShadow: baseShadow }}
            onMouseEnter={e => (e.currentTarget.style.boxShadow = hoverShadow)}
            onMouseLeave={e => (e.currentTarget.style.boxShadow = baseShadow)}
            whileHover={{ scale: 1.03, y: -8 }}
          >
            <div className="text-5xl mb-6">{service.icon}</div>
            <h3 className="text-2xl font-bold text-[#003366] mb-4 font-poppins">
              {service.title}
            </h3>
            <p className="text-gray-700 leading-relaxed">{service.text}</p>
          </motion.div>
        ))}
      </section>

      <motion.section
        className="bg-[#f3f4f6] py-20 px-6 md:px-16 text-center"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-3xl font-bold text-[#003366] mb-6 font-poppins">
          Ready to Elevate Your Business?
        </h2>
        <p className="max-w-2xl mx-auto text-gray-700 mb-8">
          Whether you’re a startup or an enterprise, our team is here to craft solutions
          that drive growth and innovation for your business.
        </p>
        <Link
          to="/contact"
          className="inline-block bg-[#003366] text-white px-8 py-3 rounded-xl font-semibold shadow-md hover:bg-[#002244] transition"
        >
          Get in Touch
        </Link>
      </motion.section>
    </div>
  );
};

export default Services;
