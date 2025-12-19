import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "Do I need to provide my own content?",
    answer: "Yes, you provide your business details, images, and text. We’ll guide you if needed."
  },
  {
    question: "Can I request extra features?",
    answer: "Absolutely! We can customize beyond the core offer — extra features are billed separately."
  },
  {
    question: "Will my site be mobile responsive?",
    answer: "100%. All sites are mobile-optimized for phones and tablets."
  },
  {
    question: "Where will my site be hosted?",
    answer: "We recommend Vercel or Netlify (free tiers available), but we can deploy anywhere."
  }
];

const testimonials = [
  {
    name: "Sonia K.",
    feedback: "I got my website live in 5 days. It looks professional and my customers love it!"
  },
  {
    name: "David A.",
    feedback: "Perfect for startups. I had zero web presence and now I have a strong brand online."
  }
];

const WebKit = () => {
  const [activeFaq, setActiveFaq] = useState(null);
  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20 font-montserrat">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-12">
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-poppins font-extrabold text-[#003366] mb-4 flex items-center justify-center gap-3">
            <span role="img" aria-label="rocket">🚀</span>
            Starter Web Kit
          </h1>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto mb-6">
            A done-for-you, professional website built in 7 days — fast, affordable, and built to convert.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#003366] hover:bg-[#002244] text-white font-semibold px-10 py-4 rounded-xl shadow-md transition"
          >
            Book Now
          </Link>
        </header>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#003366] mb-6">What’s Included</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-3">
            <li>✅ 5 Custom Pages (Home, About, Services, Contact, Blog)</li>
            <li>✅ Mobile-First Responsive Design</li>
            <li>✅ Basic SEO Setup (Google-friendly)</li>
            <li>✅ Fast Loading + Performance Optimization</li>
            <li>✅ SSL Setup & Basic Site Security</li>
            <li>✅ Free Hosting Consultation & Deployment</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#003366] mb-6">Platform Options</h2>
          <p className="text-gray-700 mb-4">
            Every Starter Web Kit can be delivered using:
          </p>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>⚙️ <strong>Custom HTML/CSS/React</strong> — Fast, lightweight, built from scratch</li>
            <li>🧩 <strong>WordPress</strong> — Easy to manage with a dashboard, ideal for blogs and small businesses</li>
          </ul>
          <p className="text-gray-700 mt-4">
            We'll help you choose the right platform based on your goals, technical comfort, and scalability needs.
          </p>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#003366] mb-6">How It Works</h2>
          <ol className="list-decimal list-inside text-gray-700 space-y-3">
            <li>📩 You fill out a quick onboarding form after booking.</li>
            <li>🎨 We design a tailored layout and send it for review.</li>
            <li>💻 We build and optimize your website (within 5–7 days).</li>
            <li>🚀 You approve and we launch it on your domain.</li>
          </ol>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#003366] mb-6">Who Is This For?</h2>
          <p className="text-gray-700 max-w-3xl">
            The Starter Web Kit is ideal for:
          </p>
          <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2">
            <li>Small business owners</li>
            <li>Freelancers or consultants</li>
            <li>Startups with no online presence</li>
            <li>Non-tech founders needing a website fast</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#003366] mb-6">Client Feedback</h2>
          <div className="space-y-6">
            {testimonials.map(({ name, feedback }, i) => (
              <blockquote key={i} className="bg-gray-100 p-6 rounded-xl shadow-inner text-gray-800 italic">
                “{feedback}”
                <footer className="mt-2 font-semibold text-[#003366]">— {name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#003366] mb-6">FAQs</h2>
          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="border border-gray-300 rounded-lg p-4 cursor-pointer"
                onClick={() => toggleFaq(idx)}
              >
                <h4 className="font-semibold text-[#003366] flex justify-between items-center">
                  {faq.question}
                  <span>{activeFaq === idx ? "−" : "+"}</span>
                </h4>
                {activeFaq === idx && (
                  <p className="mt-2 text-gray-700">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </section>

        <section className="text-center mt-16">
          <p className="text-xl md:text-2xl font-bold text-[#003366] mb-4">$120 — One-time Payment</p>
          <Link
            to="/contact"
            className="inline-block bg-[#003366] hover:bg-[#002244] text-white font-semibold px-10 py-4 rounded-xl shadow-md transition"
          >
            Book Your Website Now
          </Link>
        </section>
      </div>
    </div>
  );
};

export default WebKit;
