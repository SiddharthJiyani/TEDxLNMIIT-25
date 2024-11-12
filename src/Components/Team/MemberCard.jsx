import manav from "../../assets/team/manav.jpg";
const MemberCard = ({ name, position }) => {
  return (
    <div className="flex flex-col items-center bg-black p-4 rounded-lg">
      {/* Image section */}
      <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-gray-800">
        <img src={manav} alt={name} className="w-full h-full object-cover" />
      </div>

      {/* Name section */}
      <h3 className="mt-4 text-xl font-bold text-red-500">{name}</h3>

      {/* Title section */}
      <p className="text-lg italic text-gray-400">{position}</p>
    </div>
  );
};

export default MemberCard;
