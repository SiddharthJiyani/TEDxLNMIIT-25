import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import ticketimage from "../../assets/Tickets.png";
import Marquee from "react-fast-marquee";

const Ticket = () => {
  return (
    <div className="w-full h-[400px] overflow-hidden p-5 relative">
      {/* First marquee, rotated to skew */}
      <Marquee
        autoFill="true"
        pauseOnHover="true"
        speed="100"
        style={{
          position: "absolute",
          top: -100,
          left: 50,
          transform: "rotate(25deg)",
          transformOrigin: "top left",
        }}
      >
        <Link to="/booktickets">
          <img
            src={ticketimage}
            alt="carousel"
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              transition: "transform 0.5s",
            }}
          />
        </Link>
      </Marquee>

      {/* Second marquee, rotated in opposite direction */}
      <Marquee
        autoFill="true"
        pauseOnHover="true"
        speed="100"
        direction="right"
        style={{
          position: "absolute",
          top: -140,
          right: 10,
          transform: "rotate(-25deg)",
          transformOrigin: "bottom right",
        }}
      >
        <Link to="/booktickets">
          <img
            src={ticketimage}
            alt="carousel"
            style={{
              width: "100%",
              height: "150px",
              objectFit: "cover",
              transition: "transform 0.5s",
            }}
          />
        </Link>
      </Marquee>
    </div>
  );
};

export default Ticket;
