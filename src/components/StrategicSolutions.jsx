import { Server, ShieldCheck, Cloud } from "lucide-react";

const features = [
  {
    icon: Server,
    title: "Enterprise IT Infrastructure",
    description:
      "Design and deploy resilient infrastructures that are efficient, scalable, and secure for growing businesses.",
  },
  {
    icon: ShieldCheck,
    title: "Cybersecurity & Compliance",
    description:
      "Protect your digital assets with end-to-end security, regulatory compliance, and proactive monitoring.",
  },
  {
    icon: Cloud,
    title: "Cloud & Data Solutions",
    description:
      "Leverage cloud for storage, backup, and disaster recovery to keep operations running smoothly.",
  },
];

const StrategicSolutions = () => {
  return (
    <div className="py-20 bg-white flex flex-col md:flex-row items-stretch gap-12 w-4/5 mx-auto font-montserrat">
      
      <div className="left flex-1 flex flex-col justify-between">
        <div>
          <p className="text-sm font-medium text-[#003366] text-center md:text-left mb-2">Best IT Solution</p>
          <h2 className="text-3xl md:text-4xl text-center md:text-left font-extrabold text-gray-900 mb-4">
            Let’s Elevate Your Business
            With Strategic IT Solutions
          </h2>

          <img
              src="/cl-co.jpg"
              alt="cloud computing"
              className="w-full h-48 object-cover block py-3 md:hidden"
            />

          <p className="text-gray-700 mb-8 text-[16px] leading-7">
            At Syndeco, we deliver tailored IT services that strengthen operations, enhance productivity,
            and drive long-term growth. Our solutions adapt to your unique business needs.
          </p>
          <div className="space-y-6">
            {features.map((feature, idx) => (
              <div key={idx} className="flex items-start gap-4">
                <feature.icon className="w-6 h-6 text-[#003366] mt-1" />
                <div>
                  <h4 className="text-[17px] font-semibold text-gray-800">{feature.title}</h4>
                  <p className="text-[16px] md:text-[16px] text-gray-600 mt-1 leading-6">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>


        <a
          href="#contact"
          className="self-center md:self-baseline mt-8 bg-[#003366] text-white px-6 py-3 rounded-md text-sm font-semibold hover:bg-[#002244] transition"
        >
          Discover More →
        </a>
      </div>

    
      <div className="right hidden flex-1 md:flex gap-6">
        <div className="flex flex-col gap-6 flex-1">
          <img
            src="/server.jpg"
            alt="Modern server room"
            className="rounded-lg shadow-md object-cover flex-1"
          />
          <img
            src="/ai.avif"
            alt="Artificial intelligence concept"
            className="rounded-lg shadow-md object-cover flex-1"
          />
        </div>
        <div className="flex flex-1 items-center">
          <img
            src="/ai2.avif"
            alt="Futuristic IT solutions"
            className="rounded-lg shadow-md object-cover w-full h-3/6"
          />
        </div>
      </div>
    </div>
  );
};

export default StrategicSolutions;
