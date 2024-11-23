import PropTypes from "prop-types";

export default function Hamburger({ close, toggleMenu }) {
  return (
    <div
      className="fixed sticky-top flex h-[30px] w-[30px] cursor-pointer flex-col justify-around"
      onClick={toggleMenu}
    >
      <span
        className={`h-[0.25rem] w-[2rem] rounded-sm bg-white duration-200 ease-in-out ${
          close ? "transform rotate-45 translate-y-[0.6rem]" : ""
        }`}
      ></span>
      <span
        className={`h-[0.25rem] w-[2rem] rounded-sm bg-white duration-200 ease-in-out ${
          close ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`h-[0.25rem] w-[2rem] rounded-sm bg-white duration-200 ease-in-out ${
          close ? "transform -rotate-45 -translate-y-[0.6rem]" : ""
        }`}
      ></span>
    </div>
  );
}

Hamburger.propTypes = {
  close: PropTypes.bool.isRequired,
  toggleMenu: PropTypes.func.isRequired,
};
