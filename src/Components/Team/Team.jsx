import MemberCard from "./MemberCard";

const Team = () => {
  return (
    <div className="bg-black py-20 text-center text-white">
      {/* Team Section Title */}
      <h1 className="text-4xl font-bold mb-4">The Team</h1>
      <p className="text-lg mb-10 italic text-gray-400">
        A Canvas of Creativity, Innovation, and Excellence. Checkout the team
        behind TEDxMEC.
      </p>

      {/* Member Cards */}
      <div className="flex flex-wrap justify-center">
        <MemberCard name="John Doe" position="Founder" />
        <MemberCard name="Jane Smith" position="CTO" />
        <MemberCard name="Alice Johnson" position="Lead Developer" />
        <MemberCard name="Bob Brown" position="Senior Designer" />
        <MemberCard name="Charlie Davis" position="Marketing Manager" />
        <MemberCard name="David Wilson" position="Product Manager" />
        <MemberCard name="Emily Thompson" position="Content Writer" />
        <MemberCard name="Frank Miller" position="Marketing Strategist" />
        <MemberCard name="Grace Wilson" position="Public Relations" />
        <MemberCard name="Henry Williams" position="Community Manager" />
        <MemberCard name="Irene Johnson" position="Event Coordinator" />
      </div>
    </div>
  );
};

export default Team;
