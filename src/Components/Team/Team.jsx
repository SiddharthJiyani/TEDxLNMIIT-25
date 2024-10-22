import Title from "../utility/Title";
import MemberCard from "./MemberCard";

const Team = () => {
  return (
    <div className="bg-black py-20 text-center text-white">
      {/* Team Section Title */}
      <Title text="Our Team" />
      {/* <hr className="border-t-2 border-gray-400 my-8" /> */}
      {/* <h2 className="text-lg mb-10 italic text-gray-400">Y-22 & Y-23</h2> */}

      {/* Organizer */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Organizer</h2>
      <div className="flex flex-wrap justify-center">
        <MemberCard name="Abhey Raheja" />
        <MemberCard name="Abhinav Singh" />
        <MemberCard name="Krishna Rohira" />
        <MemberCard name="Suhani Gupta" />
      </div>

      {/* Website Development Head */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">
        Web Development Head
      </h2>
      <div className="flex flex-wrap justify-center ">
        <MemberCard name="Siddharth Jiyani" />
      </div>

      {/* Content Writing Head */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">
        Content Writing Head
      </h2>
      <div className="flex flex-wrap justify-center">
        <MemberCard name="Sahil Gaur" />
      </div>

      {/* Sponsorship Head */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Sponsorship Head</h2>
      <div className="flex flex-wrap justify-center">
        <MemberCard name="Shreyansh Badoni" />
      </div>

      {/* Creative Head */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Creative Head</h2>
      <div className="flex flex-wrap justify-center">
        <MemberCard name="Krishna Manchanda" />
        <MemberCard name="Divay Yadav" />
      </div>

      {/* Event Management Head */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">
        Event Management Head
      </h2>
      <div className="flex flex-wrap justify-center">
        <MemberCard name="Nemil Kamdar" />
      </div>

      {/* Website Development */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Web Development</h2>
      <div className="flex flex-wrap justify-center">
        <MemberCard name="Saanvi Chabaque" />
        <MemberCard name="Manav Desai" />
      </div>

      {/* Content Writing */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Content Writing</h2>
      <div className="flex flex-wrap justify-center">
        <MemberCard name="Aryan Jadhav" />
        <MemberCard name="Alisha Malhotra" />
        <MemberCard name="Abdul Hadi" />
      </div>

      {/* Speaker Outreach */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Speaker Outreach</h2>
      <div className="flex flex-wrap justify-center">
        <MemberCard name="Anshika Agrawal" />
        <MemberCard name="Sakash Srivastava" />
        <MemberCard name="Priyal Maheshwari" />
      </div>

      {/* Event Management */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Event Management</h2>
      <div className="flex flex-wrap justify-center">
        <MemberCard name="Nancy" />
        <MemberCard name="Rahul Sharma" />
        <MemberCard name="Naman Agarwal" />
        <MemberCard name="Anmol Adwani" />
      </div>

      {/* Sponsorship */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Sponsorship</h2>
      <div className="flex flex-wrap justify-center">
        <MemberCard name="Vihaan Malik" />
        <MemberCard name="Parv Khandelwal" />
        <MemberCard name="Pratham Gupta" />
        <MemberCard name="Nirmal Patel" />
      </div>

      {/* Social Media */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Social Media</h2>
      <div className="flex flex-wrap justify-center">
        <MemberCard name="Kanishq Malhotra" />
      </div>

      {/* Video Editing */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Video Editing</h2>
      <div className="flex flex-wrap justify-center">
        <MemberCard name="Kunal Sharma" />
        <MemberCard name="Chirag Mehta" />
        <MemberCard name="Yash Jain" />
      </div>

      {/* Graphic Designing */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Graphic Designing</h2>
      <div className="flex flex-wrap justify-center">
        <MemberCard name="Sanskriti Arora" />
        <MemberCard name="Akshat Gupta" />
        <MemberCard name="Hussain Haidary" />
      </div>
    </div>
  );
};

export default Team;
