import ticketimage from "../../assets/Tickets.png";
import Marquee from "react-fast-marquee";
import Ticketsvg from "../../assets/Ticket.svg";
import Title from "../utility/Title";
import RedButton from "./RedButton";
import { Link } from "react-router-dom";
const Ticket = () => {
  return (
    <div
      className="relative w-full h-full overflow-hidden p-5"
      style={{
        background: "radial-gradient(circle,red,darkred,black)",
      }}
    >
      <Title text="Tickets" className="text-center" />
      <Marquee autoFill="true" speed="150" direction="right">
        <img
          src={Ticketsvg}
          alt="carousel"
          className="w-full h-[150px] object-cover transform transition-transform duration-500   "
        />
      </Marquee>
      <div className="inline-flex justify-around items-center w-full">
        <img
          src={Ticketsvg}
          alt="carousel"
          className="object-cover transform transition-transform duration-500 ml-10"
        />
        <Link
          to="/booktickets"
          className="px-6 py-2 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-75 transition"
        >
          Buy Ticket
        </Link>
      </div>

      <Marquee autoFill="true" speed="150">
        <img
          src={Ticketsvg}
          alt="carousel"
          className="w-full h-[150px] object-cover transform transition-transform duration-500   "
        />
      </Marquee>
    </div>
  );
};

export default Ticket;
