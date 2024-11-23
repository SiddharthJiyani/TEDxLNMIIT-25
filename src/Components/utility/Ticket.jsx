import ticketimage from "../../assets/Tickets.png";
const Ticket = () => {
  return (
    <div className="w-full h-full overflow-hidden p-5">
      <img
        src={ticketimage}
        alt="carousel"
        className="w-full h-full object-cover transform transition-transform duration-500"
      />
    </div>
  );
};

export default Ticket;
