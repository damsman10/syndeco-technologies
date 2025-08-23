import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section className="font-montserrat">
      <motion.section
        className="relative py-28 px-6 md:px-16 text-center"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/contact.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-[#003366]/80"></div>
        <div className="relative z-10 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Get In Touch
          </h2>
          <p className="text-white text-lg leading-relaxed">
            Have a project in mind or want to learn more about our services?  
            Let’s connect—we’d love to hear from you.
          </p>
        </div>
      </motion.section>

      <div className="max-w-6xl mx-auto py-16 px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl font-semibold text-[#003366] mb-8">
            Contact Information
          </h3>
          <ul className="space-y-6 text-gray-700">
            <li className="flex items-center space-x-4">
              <FaMapMarkerAlt className="text-[#003366] text-xl" />
              <span>123 Innovation Street, Lagos, Nigeria</span>
            </li>
            <li className="flex items-center space-x-4">
              <FaPhoneAlt className="text-[#003366] text-xl" />
              <span>+234 810 864 8372</span>
            </li>
            <li className="flex items-center space-x-4">
              <FaEnvelope className="text-[#003366] text-xl" />
              <span>info@syndeco.ng</span>
            </li>
          </ul>

          <div className="mt-10">
            <iframe
              title="Google Map"
              src="https://maps.google.com/maps?q=Lagos%20Nigeria&t=&z=13&ie=UTF8&iwloc=&output=embed"
              className="w-full h-64 rounded-lg border-2 border-[#003366]/30 shadow-md"
            ></iframe>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-[#003366] mb-8">
            Send Us a Message
          </h3>
          <form className="space-y-6">
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#003366] shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Email Address
              </label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#003366] shadow-sm"
              />
            </div>
            <div>
              <label className="block text-gray-700 mb-2 font-medium">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Your Message..."
                className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#003366] shadow-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              className="bg-[#003366] text-white font-bold px-8 py-3 rounded-md hover:bg-blue-700 transition shadow-md"
            >
              Send Message
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
