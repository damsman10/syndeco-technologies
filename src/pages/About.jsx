import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="about-page font-montserrat">
      <motion.section
        className="relative bg-[#003366] text-white py-20 px-6 md:px-16 text-center"
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/abt.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-[#003366]/80"></div>
        <div className="relative z-10">
            <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            About Us
            </h1>
            <p className="max-w-2xl mx-auto text-lg md:text-xl font-raleway">
            Innovating Digital Solutions for a Smarter Tomorrow
            </p>
        </div>
      </motion.section>

      <section className="py-20 px-6 md:px-16 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={false}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
        
          <h2 className="text-3xl font-bold text-[#003366] mb-6 font-poppins">
            Who We Are
          </h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            We are a forward-thinking technology company committed to delivering
            innovative and scalable digital solutions. Our focus is on helping
            businesses adapt to the ever-changing digital landscape with
            creativity, precision, and impact.
          </p>
          <p className="text-gray-700 leading-relaxed">
            With a team of passionate professionals, we provide services that
            blend design, technology, and strategy to create experiences that
            truly matter.
          </p>
        </motion.div>

        <motion.div
          initial={false}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img
            src="/abt1.jpeg"
            alt="About Syndeco"
            className="rounded-2xl shadow-lg"
          />
        </motion.div>
      </section>

      <section className="bg-[#f3f4f6] py-20 px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#003366] mb-4 font-poppins">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To empower businesses with smart digital solutions that inspire
              growth, foster innovation, and drive success in a connected world.
            </p>
          </motion.div>

          <motion.div
            className="bg-white p-8 rounded-2xl shadow-md"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold text-[#003366] mb-4 font-poppins">
              Our Vision
            </h3>
            <p className="text-gray-700 leading-relaxed">
              To be a global leader in technology innovation, shaping the future
              of digital experiences with excellence and integrity.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 px-6 md:px-16 text-center">
        <motion.h2
          className="text-3xl font-bold text-[#003366] mb-12 font-poppins"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Why Choose Us
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            {
              title: "Expertise",
              text: "Years of proven experience in building scalable and modern solutions.",
            },
            {
              title: "Innovation",
              text: "We embrace cutting-edge technologies to deliver creative outcomes.",
            },
            {
              title: "Commitment",
              text: "Dedicated to excellence, we go the extra mile to ensure client satisfaction.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="p-6 bg-white rounded-2xl shadow-md hover:shadow-lg transition"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-xl font-semibold text-[#003366] mb-3">
                {item.title}
              </h4>
              <p className="text-gray-600">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
