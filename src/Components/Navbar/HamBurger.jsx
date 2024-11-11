import PropTypes from "prop-types";

export default function Hamburger(props) {
  return (
    <div
      className="flex h-[30px] w-[30px] cursor-pointer flex-col justify-around "
      onClick={props.toggleMenu} // Call a function to toggle the menu
    >
      <span
        className={`h-[0.25rem] w-[2rem] rounded-sm bg-white duration-200 ease-in-out ${
          props.close ? "transform rotate-45 translate-y-[0.6rem]" : ""
        }`}
      ></span>
      <span
        className={`h-[0.25rem] w-[2rem] rounded-sm bg-white duration-200 ease-in-out ${
          props.close ? "opacity-0" : "opacity-100"
        }`}
      ></span>
      <span
        className={`h-[0.25rem] w-[2rem] rounded-sm bg-white duration-200 ease-in-out ${
          props.close ? "transform -rotate-45 -translate-y-[0.6rem]" : ""
        }`}
      ></span>
    </div>
  );
}

Hamburger.propTypes = {
  close: PropTypes.bool.isRequired, // Indicates if the menu is open
  toggleMenu: PropTypes.func.isRequired, // Function to toggle the menu state
};
