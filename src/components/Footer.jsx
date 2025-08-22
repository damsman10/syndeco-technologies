import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { FiPhoneCall, FiMail, FiGlobe, FiSmartphone } from "react-icons/fi";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-white border-t">
      <div className="px-6 md:px-0 max-w-6xl font-raleway mx-auto mt-6 py-8 flex flex-col md:flex-row md:justify-between gap-12 text-base md:text-[16px] text-gray-700 text-center md:text-left">

        <div className="flex flex-col items-center md:items-start w-full md:w-[27%]">
          <h2 className="text-[28px] md:text-[32px] font-bold text-[#003366] mb-2">Syndeco</h2>
          <p className="mb-4 max-w-sm">
            At Syndeco Technologies Ltd, we are dedicated to delivering innovative technology
            solutions tailored to meet the unique needs of businesses like yours.
          </p>
          <div className="flex space-x-4 mt-4 text-gray-600">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          </div>
        </div>

        <div className="flex flex-col items-center md:items-start w-full md:w-[15%]">
          <h3 className="font-bold text-gray-900 mb-3 text-[20px]">Useful Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" >Home</Link></li>
            <li><Link to="/blog" >Blog</Link></li>
            <li><Link to="/services" >Our Services</Link></li>
            <li><Link to="/portfolio" >Projects</Link></li>
            <li><Link to="/careers" >Work with us</Link></li>
          </ul>
        </div>

        <div className="flex flex-col items-center md:items-start w-full md:w-[20%]">
          <h3 className="font-bold text-gray-900 mb-3 text-[20px]">Contact Us</h3>
          <ul className="space-y-3 text-gray-700">
            <li className="flex items-center justify-center md:justify-start gap-2"><FiSmartphone /> <a href="tel:2348108648372">234 810 8648 372</a></li>
            <li className="flex items-center justify-center md:justify-start gap-2"><FiPhoneCall /> <a href="tel:0355688547">03 5568 8547</a></li>
            <li className="flex items-center justify-center md:justify-start gap-2"><FiMail /><a href="mailto:info@syndeco.ng">info@syndeco.ng</a></li>
            <li className="flex items-center justify-center md:justify-start gap-2"><FiGlobe /> <a href="https://www.syndeco.ng" target="_blank" rel="noopener noreferrer">www.syndeco.ng</a></li>
          </ul>
        </div>

        <div className="px-6 md:px-0 flex flex-col items-center md:items-start w-full md:w-[24%]">
          <h3 className="font-bold text-gray-900 mb-3 text-[20px]">Newsletter</h3>
          <p className="mb-4 max-w-xs">Subscribe to get the latest updates, news, and offers.</p>
          <form className="flex flex-col sm:flex-row gap-2 w-full max-w-sm">
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#003366]"
            />
            <button
              type="submit"
              className="bg-[#003366] text-white px-4 py-2 rounded-md hover:bg-blue-900 transition"
            >
              Subscribe
            </button>
          </form>
        </div>

      </div>

      <div className="border-t py-4 text-center text-base md:text-sm text-gray-600 flex flex-col md:flex-row justify-between items-center px-2 max-w-6xl mx-auto">
        <p>Copyright ©2024 Syndeco. All Rights Reserved</p>
        <div className="flex gap-4 mt-2 md:mt-0">
          <a href="/terms" className="hover:underline">Terms & Conditions</a>
          <a href="/privacy" className="hover:underline">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
