import { HashLink as Link } from "react-router-hash-link";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Hamburger from "./HamBurger.jsx";
import logo from "../../assets/tednewlogo.png";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const isActiveLink = (path) => location.pathname === path;

  return (
    <div>
      <nav className="bg-[rgba(20,20,20,0.5)] sticky fixed backdrop-blur-md border border-white/20 p-2 sm:p-3 md:p-4 lg:p-2 left-0 right-0 mx-auto mt-6 max-w-[90%] min-h-[48px] flex items-center justify-between gap-4 rounded-[60px] shadow-lg z-50">
        <div className="container mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold flex items-center">
            <Link smooth to="/" className="text-xl text-white">
              <img src={logo} alt="TEDx Logo" className="h-11 mr-3 ml-1" />
            </Link>
          </div>

          {/* Center - Navigation Links */}
          <div
            className={`hidden md:flex space-x-6 text-gray-300 ${
              isMenuOpen ? "flex" : "hidden"
            } lg:flex`}
          >
            <Link
              smooth
              to="/"
              className={`hover:text-white ${
                isActiveLink("/") ? "text-red-500" : ""
              }`}
              onClick={closeMenu}
            >
              Home
            </Link>
            <Link
              smooth
              to="/#about"
              className={`hover:text-white ${
                isActiveLink("/#about") ? "text-red-500" : ""
              }`}
              onClick={closeMenu}
            >
              About us
            </Link>
            <Link
              smooth
              to="/#faq"
              className={`hover:text-white ${
                isActiveLink("/#faq") ? "text-red-500" : ""
              }`}
              onClick={closeMenu}
            >
              FAQ
            </Link>
            <Link
              to="/team"
              className={`hover:text-white ${
                isActiveLink("/team") ? "text-red-500" : ""
              }`}
              onClick={closeMenu}
            >
              Team
            </Link>
            <Link
              to="/partner"
              className={`hover:text-white ${
                isActiveLink("/partner") ? "text-red-500" : ""
              }`}
              onClick={closeMenu}
            >
              Partner
            </Link>
            <Link
              to="/gallery"
              className={`hover:text-white ${
                isActiveLink("/gallery") ? "text-red-500" : ""
              }`}
              onClick={closeMenu}
            >
              Gallery
            </Link>
          </div>

          {/* Right Side - Social Icons and Contact Button */}
          <div className="flex items-center gap-2">
            <a
              href="https://www.linkedin.com/company/tedxlnmiit/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-600 rounded-full p-2 flex items-center justify-center hover:opacity-65 transition-all duration-500 hidden sm:flex"
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
              className="border border-gray-600 rounded-full p-2 flex items-center justify-center hover:opacity-65 transition-all duration-500 hidden sm:flex"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="text-gray-300 h-7 w-7"
              />
            </a>

            <div className="flex items-center justify-center border border-gray-600 rounded-[60px] p-1 hover:opacity-65 transition-all duration-500 hidden lg:flex">
              <Link
                to="/contact"
                className="text-white font-semibold px-4 py-1 rounded-full"
                onClick={closeMenu}
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
            {/* Hamburger Menu for Mobile */}
            <div className="md:hidden" onClick={toggleMenu}>
              <Hamburger close={isMenuOpen} />
            </div>
          </div>
        </div>
      </nav>
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className={`sticky  left-0 top-10 z-60 flex h-screen w-full flex-col items-center justify-center gap-12 bg-customDark duration-700 ease-in-out lg:hidden`}
        >
          <Link
            to="/"
            className="mt-20 text-white hover:text-gray-300"
            onClick={closeMenu}
          >
            Home
          </Link>
          <Link
            smooth
            to="/#about"
            className="text-white hover:text-gray-300"
            onClick={closeMenu}
          >
            About us
          </Link>
          <Link
            smooth
            to="/#faq"
            className="text-white hover:text-gray-300"
            onClick={closeMenu}
          >
            FAQ
          </Link>
          <Link
            to="/team"
            className="text-white hover:text-gray-300"
            onClick={closeMenu}
          >
            Team
          </Link>
          <Link
            to="/partner"
            className="text-white hover:text-gray-300"
            onClick={closeMenu}
          >
            Partner
          </Link>
          <Link
            to="/gallery"
            className="text-white hover:text-gray-300"
            onClick={closeMenu}
          >
            Gallery
          </Link>
          <div className="flex flex-col items-center">
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
            <Link
              to="/contact"
              className="text-white font-semibold px-4 py-1 rounded-full hover:bg-gray-700 transition-all duration-500"
              onClick={closeMenu}
            >
              Contact Now
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
