// import React from "react";
import { Link } from "react-router-dom";

const WebKit = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-6 md:px-20 font-montserrat">
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-lg p-12">
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-poppins font-extrabold text-[#003366] mb-4 flex items-center justify-center gap-3">
            <span role="img" aria-label="rocket">
              🚀
            </span>{" "}
            Starter Web Kit
          </h1>
          <p className="text-gray-700 text-lg max-w-xl mx-auto">
            Get your business online fast with a sleek, responsive website.
            Includes 5 custom pages, basic SEO, and mobile optimization — delivered in 7 days.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#003366] mb-4">What’s Included?</h2>
          <ul className="list-disc list-inside text-gray-700 space-y-2">
            <li>5 Custom Designed Pages (Home, About, Services, Contact, Blog)</li>
            <li>Mobile-First Responsive Design</li>
            <li>Basic SEO Setup for Better Google Rankings</li>
            <li>Fast Loading & Optimized Performance</li>
            <li>SSL & Security Best Practices</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold text-[#003366] mb-4">Timeline & Pricing</h2>
          <p className="text-gray-700 mb-4">
            Delivered in <strong>7 days</strong> from project kickoff.
          </p>
          <p className="text-xl font-bold text-[#003366]">$120 — One-time payment</p>
        </section>

        <section className="text-center">
          <Link
            to="/contact"
            className="inline-block bg-[#003366] hover:bg-[#002244] text-white font-semibold px-8 py-4 rounded-xl shadow-md transition"
          >
            Book Now
          </Link>
        </section>
      </div>
    </div>
  );
};

export default WebKit;
