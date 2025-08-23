import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "Syndeco completely transformed our online presence. Their SEO strategy boosted our search rankings, brought in more traffic, and directly improved our conversions. We've never been more visible online.",
      name: "Maloko Jess",
      role: "Head of Marketing, RedDot Africa",
      image: "/testmonial.jpeg",
    },
    {
      quote:
        "They worked on our site’s optimization, and the difference was clear right away. It loaded faster, felt smoother, and even our readers pointed it out. It was great to see real results without the usual tech jargon.",
      name: "Aloi Anthony",
      role: "Publisher, AfriPost Media",
      image: "/aloi.jpeg",
    },
    {
      quote:
        "Working with Syndeco was seamless from start to finish. They built our website from the ground up, brought our vision to life, and made the whole process collaborative and stress-free.",
      name: "Mr Peter",
      role: "Founder, Peters & Co.",
      image: "/testmonial1.jpeg",
    },
  ];

  // Base and hover shadows using hex colors for iOS compatibility
  const baseShadow = "0 4px 6px -1px #00000040, 0 2px 4px -2px #00000030";
  const hoverShadow = "0 10px 15px -3px #00000070, 0 4px 6px -2px #00000050";

  return (
    <section className="bg-[#f3f4f6] py-12 px-6 font-raleway">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-sm font-semibold text-[#003366] uppercase tracking-wide">
          Testimonials
        </p>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
          What Our Clients Say
        </h2>
      </div>

      <div className="mt-8 grid gap-8 md:grid-cols-3 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 text-left transition-shadow duration-300 ease-in-out"
            // inline style for initial shadow
            style={{ boxShadow: baseShadow }}
            // event handlers to toggle shadow on hover
            onMouseEnter={(e) => (e.currentTarget.style.boxShadow = hoverShadow)}
            onMouseLeave={(e) => (e.currentTarget.style.boxShadow = baseShadow)}
          >
            <p className="text-gray-800 leading-relaxed mb-6">“{t.quote}”</p>
            <div className="flex items-center gap-4">
              <img
                src={t.image}
                alt={t.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">{t.name}</p>
                <p className="text-sm text-gray-500">{t.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
