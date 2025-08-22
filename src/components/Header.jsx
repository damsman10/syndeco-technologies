import { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Careers", href: "/careers" },
  { label: "Contact", href: "/contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <div className="topheader h-8 bg-[#003366] hidden md:flex items-center justify-center text-white text-[12px] font-raleway">
        Innovating Digital Solutions for a Smarter Tomorrow...
      </div>

      <div className="mainheader py-6 px-6 md:px-12 flex items-center justify-between shadow-sm relative z-50">
        <div className="logo flex items-center space-x-2">
          <span className="text-2xl font-bold text-[#003366] font-poppins">
            SYNDECO
          </span>
        </div>

        <nav className="nav hidden md:flex space-x-14 text-gray-700 font-medium font-montserrat">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={`relative pb-1 transition duration-200 font-montserrat
                ${
                  location.pathname === link.href
                    ? "text-[#003366] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-[#003366]"
                    : "text-gray-700 hover:text-[#003366] after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-[2px] after:bg-[#003366] hover:after:w-full after:transition-all after:duration-300"
                }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="right flex items-center space-x-6 font-montserrat">
          <div className="hidden md:flex items-center text-[#003366] font-medium">
            <FaPhoneAlt className="mr-2" />
            <span>+234 810 864 8372</span>
          </div>
          <div className="cta hidden md:block">
            <Link
              to="/contact"
              className="bg-[#003366] cursor-pointer text-white px-5 py-2 rounded-md hover:bg-blue-700 transition font-bold"
            >
              Get A Quote
            </Link>
          </div>

          <button onClick={() => setIsOpen(true)} className="md:hidden text-[#003366]">
            <Menu size={28} />
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="fixed inset-0 bg-black/50 z-40" onClick={() => setIsOpen(false)}></div>

          <div className="fixed top-0 right-0 w-64 h-full bg-[#003366] text-white z-50 p-6 flex flex-col gap-6 shadow-lg transition-transform">
            <button onClick={() => setIsOpen(false)} className="self-end text-white">
              <X size={28} />
            </button>
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setIsOpen(false)}
                className={`font-montserrat text-lg ${
                  location.pathname === link.href ? "text-white underline" : "hover:text-gray-300"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-auto">
              <Link
                to="/contact"
                className="bg-white text-[#003366] px-4 py-2 rounded-md font-bold block text-center hover:bg-gray-200 transition"
              >
                Get A Quote
              </Link>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Header;
