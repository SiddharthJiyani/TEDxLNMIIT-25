import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav
      style={{ backgroundColor: "rgb(20, 20, 20)" }}
      className="p-3 fixed w-8/12 mx-auto mt-3 left-0 right-0 shadow-lg z-50 rounded-full"
    >
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold flex items-center">
          <Link to="/" className="text-xl text-white">
            <img
              src="/path/to/logo.png" // Placeholder for TEDx logo, replace with actual image path
              alt="TEDx Logo"
              className="h-8 mr-3" // Reduced height of the logo
            />
          </Link>
        </div>

        {/* Center - Navigation Links */}
        <div className="hidden md:flex space-x-6 text-gray-300">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/about" className="hover:text-white">
            About us
          </Link>
          <Link to="/faq" className="hover:text-white">
            FAQ
          </Link>
          <Link to="/team" className="hover:text-white">
            Team
          </Link>
          <Link to="/partner" className="hover:text-white">
            Partner
          </Link>
          <Link to="/gallery" className="hover:text-white">
            Gallery
          </Link>
        </div>

        {/* Right Side - Social Icons and Contact Button */}
        <div className="flex items-center space-x-4">
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FontAwesomeIcon icon={faLinkedin} className="h-5 w-5" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-white"
          >
            <FontAwesomeIcon icon={faInstagram} className="h-5 w-5" />
          </a>

          {/* Contact Now Button */}
          <Link
            to="/contact"
            className="bg-white text-black font-semibold px-4 py-1 rounded-full hover:bg-gray-300"
          >
            Contact Now
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
