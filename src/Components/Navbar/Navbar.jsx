import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";

const Navbar = () => {
  return (
    <nav className="bg-customDark backdrop-blur-md border border-white/20 p-2 sm:p-3 md:p-4 lg:p-2 fixed left-0 right-0 mx-auto mt-6 max-w-[90%] min-h-[48px] flex items-center justify-between gap-4 rounded-[60px] shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold flex items-center">
          <Link to="/" className="text-xl text-white">
            <img src="/logo.png" alt="TEDx Logo" className="h-9 mr-3 ml-3" />
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
        <div className="flex items-center gap-2 ">
          <a
            href="https://www.linkedin.com/company/tedxlnmiit/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 rounded-full p-2 flex items-center justify-center hover:opacity-65 transition-all duration-500"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-gray-300 h-7 w-7"
            />
          </a>
          <a
            href="https://www.instagram.com/tedxlnmiit/"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gray-600 rounded-full p-2 flex items-center justify-center hover:opacity-65 transition-all duration-500"
          >
            <FontAwesomeIcon
              icon={faInstagram}
              className="text-gray-300 h-7 w-7"
            />
          </a>

          <div className=" flex items-center justify-center border border-gray-600 rounded-[60px]  p-1 hover:opacity-65 transition-all duration-500">
            <Link
              to="/contact"
              className=" text-white font-semibold px-4 py-1 rounded-full"
            >
              Contact Now
            </Link>
            <img
              src="https://assets.website-files.com/64b4320d9bd69e8f6cf59f6e/64b67612c66e41b4809bfba2_Group%20427319613.svg"
              loading="lazy"
              alt="Nav Try Icon"
              className="nav-try-icon ml-1 h-9 w-9"
            />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
