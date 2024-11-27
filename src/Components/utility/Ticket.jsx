import ticketimage from "../../assets/Tickets.png";
import Marquee from "react-fast-marquee";
const Ticket = () => {
  return (
    <div className="w-full h-full overflow-hidden p-5">
      <Marquee autoFill="true" speed="150">
        <img
          src={ticketimage}
          alt="carousel"
          className="w-full h-[150px] object-cover transform transition-transform duration-500   "
        />
      </Marquee>
    </div>
  );
};

export default Ticket;
