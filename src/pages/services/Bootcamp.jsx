import React, { useState } from "react";
import { Link } from "react-router-dom";

const faqData = [
  {
    question: "Is this course beginner-friendly?",
    answer: "Yes. The program starts from the basics and gradually builds you up to an advanced level."
  },
  {
    question: "Do I need prior coding experience?",
    answer: "No prior experience is required. Everything will be taught from scratch."
  },
  {
    question: "Are the sessions live?",
    answer: "Yes, classes are live and interactive. Recordings will also be available."
  },
  {
    question: "Will I build real projects?",
    answer: "Yes. You will work on real-world projects to build your portfolio."
  }
];

const testimonials = [
  {
    name: "Mustapha Olalere",
    feedback: "This bootcamp gave me real confidence in frontend development. The projects made all the difference."
  },
  {
    name: "Theophilus",
    feedback: "Very practical and straight to the point. I started building websites faster than I expected."
  }
];

const Bootcamp = () => {
  const [activeFaq, setActiveFaq] = useState(null);

  const toggleFaq = (index) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20 font-montserrat">
      <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-lg p-12">

        {/* Hero */}
        <header className="mb-16 text-center">
          <h1 className="sm:text-5xl text-3xl font-poppins font-extrabold text-[#003366] mb-4">
            Frontend Development Bootcamp
          </h1>
          <p className="text-gray-700 text-xl max-w-3xl mx-auto mb-6">
            Learn how to build modern, responsive websites from scratch and become job-ready with real-world projects.
          </p>

          <Link
            to="/enroll"
            className="inline-block bg-[#003366] hover:bg-[#002244] text-white font-semibold px-10 py-4 rounded-xl shadow-md transition"
          >
            Enroll Now
          </Link>
        </header>

        {/* What You'll Learn */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#003366] mb-6">What You’ll Learn</h2>
          <ul className="grid md:grid-cols-2 gap-4 text-gray-700">
            <li>✔ HTML5 & semantic structure</li>
            <li>✔ CSS3, Flexbox & Grid</li>
            <li>✔ Responsive design (mobile-first)</li>
            <li>✔ JavaScript fundamentals (ES6+)</li>
            <li>✔ DOM manipulation & events</li>
            <li>✔ Git & deployment</li>
            <li>✔ Building real-world projects</li>
          </ul>
        </section>

        {/* Packages */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#003366] mb-10 text-center">
            Choose Your Package
          </h2>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Basic */}
            <div className="border rounded-2xl p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-[#003366] mb-2">
                Frontend Fundamentals
              </h3>
              <p className="text-gray-600 mb-4">
                Perfect for beginners starting from scratch.
              </p>

              <p className="text-3xl font-bold mb-6">₦80,000</p>

              <ul className="space-y-3 text-gray-700 mb-6">
                <li>✔ HTML</li>
                <li>✔ CSS</li>
                <li>✔ JavaScript</li>
                <li>✔ Version control with Git</li>
                <li>✔ Starter projects</li>
              </ul>

              <Link
                to="/enroll"
                className="block text-center bg-[#003366] text-white py-3 rounded-lg font-semibold"
              >
                Get Started
              </Link>
            </div>

            {/* Advanced */}
            <div className="border-2 border-[#003366] rounded-2xl p-8 shadow-md">
              <h3 className="text-2xl font-bold text-[#003366] mb-2">
                Frontend Advanced
              </h3>
              <p className="text-gray-600 mb-4">
                For serious learners who want to go pro.
              </p>

              <p className="text-3xl font-bold mb-6">₦200,000</p>

              <ul className="space-y-3 text-gray-700 mb-6">
                <li>✔ Everything in Fundamentals</li>
                <li>✔ React.js</li>
                <li>✔ Tailwind CSS</li>
                <li>✔ Advanced projects</li>
                <li>✔ Portfolio development</li>
              </ul>

              <Link
                to="/enroll"
                className="block text-center bg-[#003366] text-white py-3 rounded-lg font-semibold"
              >
                Go Advanced
              </Link>
            </div>

          </div>
        </section>

        {/* Instructor */}
        <section className="mb-16 flex flex-col md:flex-row items-center gap-8">
          <img
            src="/sage.jpg"
            alt="Instructor"
            className="w-40 h-40 rounded-full object-cover shadow-lg"
          />
          <div>
            <h3 className="text-2xl font-semibold text-[#003366] mb-2">
              Meet Your Instructor
            </h3>
            <p className="text-gray-700 max-w-xl">
              Sage Gipito — frontend developer and mentor focused on helping students gain practical, job-ready skills through real-world training.
            </p>
          </div>
        </section>

        {/* Testimonials */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#003366] mb-6">
            What Students Say
          </h2>
          <div className="space-y-6">
            {testimonials.map(({ name, feedback }, idx) => (
              <blockquote
                key={idx}
                className="bg-gray-100 rounded-xl p-6 italic"
              >
                “{feedback}”
                <footer className="mt-2 font-semibold text-[#003366]">
                  — {name}
                </footer>
              </blockquote>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold text-[#003366] mb-6">
            FAQ
          </h2>
          <div className="space-y-4">
            {faqData.map((faq, idx) => (
              <div
                key={idx}
                className="border rounded-lg p-4 cursor-pointer"
                onClick={() => toggleFaq(idx)}
              >
                <h4 className="font-semibold flex justify-between">
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

        {/* Final CTA */}
        <section className="text-center">
          <h3 className="text-2xl font-semibold text-[#003366] mb-4">
            Ready to Start Your Tech Journey?
          </h3>
          <Link
            to="/enroll"
            className="inline-block bg-[#003366] hover:bg-[#002244] text-white px-10 py-4 rounded-xl font-semibold"
          >
            Enroll Now
          </Link>
        </section>

      </div>
    </div>
  );
};

export default Bootcamp;