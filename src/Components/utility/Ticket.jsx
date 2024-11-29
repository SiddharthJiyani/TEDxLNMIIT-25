import ticketimage from "../../assets/Tickets.png";
import Marquee from "react-fast-marquee";
import Ticketsvg from "../../assets/Ticket.svg";
import Title from "../utility/Title";
import RedButton from "./RedButton";
import { Link } from "react-router-dom";

const Ticket = () => {
  return (
    <div className="relative w-full h-full p-5 flex flex-col items-center justify-center bg-black">
      <Title text="Tickets" className="text-center m-5" />

      {/* Marquee with red gradient background */}
      <div className="w-full overflow-hidden relative">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "radial-gradient(circle, red, darkred, black)",
            zIndex: -1,
          }}
        />
        <Marquee autoFill="true" speed="130" direction="right">
          <img
            src={Ticketsvg}
            alt="carousel"
            // width={350}
            // height={350}
            className="md:w-full w-[350px] md:h-[150px] object-cover transform transition-transform duration-500"
          />
        </Marquee>
      </div>

      {/* Ticket display section */}
      <Link className="flex flex-col items-center h-[50%] justify-center mt-8 space-y-6" to={"/booktickets"}>
        <img
          src={Ticketsvg}
          alt="ticket"
          className="object-cover transform transition-transform duration-500"
        />
        {/* <Link
          to="/booktickets"
          className="md:absolute md:right-[21.6rem] md:top-[30.3rem] px-6 py-2 bg-white text-red-500 font-bold rounded-lg shadow-md transition-all duration-300 ease-in-out  overflow-hidden group">
          <span className="absolute inset-0 bg-black translate-x-full transition-transform duration-500 ease-in-out group-hover:translate-x-0"></span>
          <span className="relative z-10 transition-colors duration-500 ease-in-out group-hover:text-white">
            Buy Ticket
          </span>
        </Link> */}
      </Link>

      {/* Bottom marquee with red gradient background */}
      <div className="w-full overflow-hidden relative mt-8">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            background: "radial-gradient(circle, red, darkred, black)",
            zIndex: -1,
          }}
        />
        <Marquee autoFill="true" speed="130">
          <img
            src={Ticketsvg}
            alt="carousel"
            // width={350}
            // height={350}
            className="md:w-full w-[350px]  md:h-[150px] object-cover transform transition-transform duration-500"
          />
        </Marquee>
      </div>
    </div> 
  );
};

export default Ticket;
