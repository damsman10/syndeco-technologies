import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "Is this course beginner-friendly?",
    answer: "Absolutely! We start from the basics and gradually build up your skills."
  },
  {
    question: "Do I need any prior coding experience?",
    answer: "No prior experience needed. Just bring your enthusiasm!"
  },
  {
    question: "Are the sessions live or recorded?",
    answer: "Sessions are live with recordings available to review anytime."
  },
  {
    question: "Will I get a certificate?",
    answer: "Yes, you receive a certificate upon successful course completion."
  }
];

const testimonials = [
  {
    name: "Jane Doe",
    feedback: "This bootcamp transformed my career. The hands-on projects were invaluable!"
  },
  {
    name: "John Smith",
    feedback: "Great instructors and clear explanations. Highly recommend to beginners."
  }
];

const Bootcamp = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20 font-montserrat">
      <div className="max-w-5xl mx-auto bg-white rounded-3xl shadow-lg p-12">
        {/* Hero */}
        <header className="mb-12 text-center">
          <h1 className="text-5xl font-poppins font-extrabold text-[#003366] mb-4 flex items-center justify-center gap-3">
            <span role="img" aria-label="graduation cap">
              🎓
            </span>
            Frontend Mastery Bootcamp
          </h1>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto mb-6">
            Master modern frontend development with live guidance, projects, and real-world skills — from HTML to React.
          </p>
          <Link
            to="/contact"
            className="inline-block bg-[#003366] hover:bg-[#002244] text-white font-semibold px-10 py-4 rounded-xl shadow-md transition"
          >
            Enroll Today
          </Link>
        </header>

        {/* Course Curriculum */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#003366] mb-6">Course Curriculum</h2>
          <ul className="space-y-4 text-gray-700 list-disc list-inside">
            <li><strong>Module 1:</strong> HTML5 & Semantic Markup</li>
            <li><strong>Module 2:</strong> CSS3 & Responsive Design</li>
            <li><strong>Module 3:</strong> JavaScript Essentials & ES6+</li>
            <li><strong>Module 4:</strong> React Fundamentals & Components</li>
            <li><strong>Module 5:</strong> State Management & Hooks</li>
            <li><strong>Module 6:</strong> Building Projects & Deploying</li>
            <li><strong>Module 7:</strong> Best Practices & Debugging</li>
          </ul>
        </section>

        {/* Instructor Intro */}
        <section className="mb-12 flex flex-col md:flex-row items-center gap-8">
          <img
            src="/sage.jpg"
            alt="Instructor"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-semibold text-[#003366] mb-2">Meet Your Instructor</h3>
            <p className="text-gray-700 max-w-xl">
              Sage Gipito — seasoned frontend developer and mentor, with 10+ years crafting impactful software and training aspiring developers worldwide.
            </p>
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#003366] mb-6">Frequently Asked Questions</h2>
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

        {/* Testimonials */}
        <section className="mb-12">
          <h2 className="text-3xl font-semibold text-[#003366] mb-6">What Our Students Say</h2>
          <div className="space-y-6">
            {testimonials.map(({ name, feedback }, idx) => (
              <blockquote
                key={idx}
                className="bg-gray-100 rounded-xl p-6 shadow-inner italic text-gray-800"
              >
                “{feedback}”
                <footer className="mt-2 font-semibold text-[#003366]">— {name}</footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* Pricing */}
        <section className="text-center">
          <p className="text-2xl font-bold text-[#003366] mb-4">$150 — Full Course</p>
          <Link
            to="/contact"
            className="inline-block bg-[#003366] hover:bg-[#002244] text-white font-semibold px-10 py-4 rounded-xl shadow-md transition"
          >
            Enroll Today
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Bootcamp;
