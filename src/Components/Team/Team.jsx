import Title from "../utility/Title";
import MemberCard from "./MemberCard";

const Team = () => {
  return (
    <div className="bg-black py-20 text-center text-white">
      {/* Team Section Title */}
      <Title text="Our Team" />

      {/* Organizer */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Organizer</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <MemberCard name="Abhey Raheja" />
        <MemberCard name="Abhinav Singh" />
        <MemberCard name="Krishna Rohira" />
        <MemberCard name="Suhani Gupta" />
      </div>

      <div className="flex flex-wrap justify-between">
        {/* Website Development Head */}
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-2xl font-semibold mt-10 mb-6">
            Web Development Head
          </h2>
          <div className="flex justify-center gap-6">
            <MemberCard name="Siddharth Jiyani" />
          </div>
        </div>

        {/* Content Writing Head */}
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-2xl font-semibold mt-10 mb-6">
            Content Writing Head
          </h2>
          <div className="flex justify-center gap-6">
            <MemberCard name="Sahil Gaur" />
          </div>
        </div>

        {/* Sponsorship Head */}
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-2xl font-semibold mt-10 mb-6">
            Sponsorship Head
          </h2>
          <div className="flex justify-center gap-6">
            <MemberCard name="Shreyansh Badoni" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
        {/* Creative Head */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mt-10 mb-6">Creative Head</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MemberCard name="Krishna Manchanda" />
            <MemberCard name="Divay Yadav" />
          </div>
        </div>

        {/* Event Management Head */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mt-10 mb-6">
            Event Management Head
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MemberCard name="Nemil Kamdar" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
        {/* Web Development */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mt-10 mb-6">Web Development</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MemberCard name="Saanvi Chabaque" />
            <MemberCard name="Manav Desai" />
          </div>
        </div>

        {/* Content Writing */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mt-10 mb-6">Content Writing</h2>
          <div className="flex flex-wrap justify-center ">
            <MemberCard name="Aryan Jadhav" />
            <MemberCard name="Alisha Malhotra" />
            <MemberCard name="Abdul Hadi" />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between p-6">
        {/* Speaker Outreach */}
        <div className="w-full md:w-1/2 px-4 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Speaker Outreach
          </h2>
          <div className="flex flex-wrap justify-center ">
            <MemberCard name="Anshika Agrawal" />
            <MemberCard name="Sakash Srivastava" />
            <MemberCard name="Priyal Maheshwari" />
          </div>
        </div>

        {/* Graphic Designing */}
        <div className="w-full md:w-1/2 px-4 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Graphic Designing
          </h2>
          <div className="flex flex-wrap justify-center ">
            <MemberCard name="Sanskriti Arora" />
            <MemberCard name="Akshat Gupta" />
            <MemberCard name="Hussain Haidary" />
          </div>
        </div>
      </div>

      {/* Event Management */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Event Management</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <MemberCard name="Nancy" />
        <MemberCard name="Rahul Sharma" />
        <MemberCard name="Naman Agarwal" />
        <MemberCard name="Anmol Adwani" />
      </div>

      {/* Sponsorship */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Sponsorship</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <MemberCard name="Vihaan Malik" />
        <MemberCard name="Parv Khandelwal" />
        <MemberCard name="Pratham Gupta" />
        <MemberCard name="Nirmal Patel" />
      </div>

      <div className="flex flex-wrap justify-between p-6">
        {/* Social Media */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Social Media
          </h2>
          <div className="flex justify-center gap-6">
            <MemberCard name="Kanishq Malhotra" />
          </div>
        </div>

        {/* Video Editing */}
        <div className="w-full md:w-1/2 lg:w-2/3 px-4 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Video Editing
          </h2>
          <div className="flex flex-wrap justify-center space-x-4 gap-6">
            <MemberCard name="Kunal Sharma" />
            <MemberCard name="Chirag Mehta" />
            <MemberCard name="Yash Jain" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
