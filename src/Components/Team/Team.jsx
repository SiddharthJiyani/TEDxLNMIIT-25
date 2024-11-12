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
        <MemberCard
          name="Abhey Raheja"
          link="https://www.linkedin.com/in/abhey-raheja"
        />
        <MemberCard
          name="Abhinav Singh"
          link="https://www.linkedin.com/in/abhinav-singh"
        />
        <MemberCard
          name="Krishna Rohira"
          link="https://www.linkedin.com/in/krishna-rohira"
        />
        <MemberCard
          name="Suhani Gupta"
          link="https://www.linkedin.com/in/suhani-gupta"
        />
      </div>

      <div className="flex flex-wrap justify-between">
        {/* Website Development Head */}
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-2xl font-semibold mt-10 mb-6">
            Web Development Head
          </h2>
          <div className="flex justify-center gap-6">
            <MemberCard
              name="Siddharth Jiyani"
              link="https://www.linkedin.com/in/siddharth-jiyani"
            />
          </div>
        </div>

        {/* Content Writing Head */}
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-2xl font-semibold mt-10 mb-6">
            Content Writing Head
          </h2>
          <div className="flex justify-center gap-6">
            <MemberCard
              name="Sahil Gaur"
              link="https://www.linkedin.com/in/sahil-gaur"
            />
          </div>
        </div>

        {/* Sponsorship Head */}
        <div className="w-full md:w-1/3 px-4">
          <h2 className="text-2xl font-semibold mt-10 mb-6">
            Sponsorship Head
          </h2>
          <div className="flex justify-center gap-6">
            <MemberCard
              name="Shreyansh Badoni"
              link="https://www.linkedin.com/in/shreyansh-badoni"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
        {/* Creative Head */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mt-10 mb-6">Creative Head</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MemberCard
              name="Krishna Manchanda"
              link="https://www.linkedin.com/in/krishna-manchanda"
            />
            <MemberCard
              name="Divay Yadav"
              link="https://www.linkedin.com/in/divay-yadav"
            />
          </div>
        </div>

        {/* Event Management Head */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mt-10 mb-6">
            Event Management Head
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MemberCard
              name="Nemil Kamdar"
              link="https://www.linkedin.com/in/nemil-kamdar"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between">
        {/* Web Development */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mt-10 mb-6">Web Development</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MemberCard
              name="Saanvi Chabaque"
              link="https://www.linkedin.com/in/saanvi-chabaque"
            />
            <MemberCard
              name="Manav Desai"
              link="https://www.linkedin.com/in/manav-desai"
            />
          </div>
        </div>

        {/* Content Writing */}
        <div className="w-full md:w-1/2 px-4">
          <h2 className="text-2xl font-semibold mt-10 mb-6">Content Writing</h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MemberCard
              name="Aryan Jadhav"
              link="https://www.linkedin.com/in/aryan-jadhav"
            />
            <MemberCard
              name="Alisha Malhotra"
              link="https://www.linkedin.com/in/alisha-malhotra"
            />
            <MemberCard
              name="Abdul Hadi"
              link="https://www.linkedin.com/in/abdul-hadi"
            />
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-between p-6">
        {/* Speaker Outreach */}
        <div className="w-full md:w-1/2 px-4 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Speaker Outreach
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MemberCard
              name="Anshika Agrawal"
              link="https://www.linkedin.com/in/anshika-agrawal"
            />
            <MemberCard
              name="Sakash Srivastava"
              link="https://www.linkedin.com/in/sakash-srivastava"
            />
            <MemberCard
              name="Priyal Maheshwari"
              link="https://www.linkedin.com/in/priyal-maheshwari"
            />
          </div>
        </div>

        {/* Graphic Designing */}
        <div className="w-full md:w-1/2 px-4 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Graphic Designing
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MemberCard
              name="Sanskriti Arora"
              link="https://www.linkedin.com/in/sanskriti-arora"
            />
            <MemberCard
              name="Akshat Gupta"
              link="https://www.linkedin.com/in/akshat-gupta"
            />
            <MemberCard
              name="Hussain Haidary"
              link="https://www.linkedin.com/in/hussain-haidary"
            />
          </div>
        </div>
      </div>

      {/* Event Management */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Event Management</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <MemberCard name="Nancy" link="https://www.linkedin.com/in/nancy" />
        <MemberCard
          name="Rahul Sharma"
          link="https://www.linkedin.com/in/rahul-sharma"
        />
        <MemberCard
          name="Naman Agarwal"
          link="https://www.linkedin.com/in/naman-agarwal"
        />
        <MemberCard
          name="Anmol Adwani"
          link="https://www.linkedin.com/in/anmol-adwani"
        />
      </div>

      {/* Sponsorship */}
      <h2 className="text-2xl font-semibold mt-10 mb-6">Sponsorship</h2>
      <div className="flex flex-wrap justify-center gap-6">
        <MemberCard
          name="Vihaan Malik"
          link="https://www.linkedin.com/in/vihaan-malik"
        />
        <MemberCard
          name="Parv Khandelwal"
          link="https://www.linkedin.com/in/parv-khandelwal"
        />
        <MemberCard
          name="Pratham Gupta"
          link="https://www.linkedin.com/in/pratham-gupta"
        />
        <MemberCard
          name="Nirmal Patel"
          link="https://www.linkedin.com/in/nirmal-patel"
        />
      </div>

      <div className="flex flex-wrap justify-between p-6">
        {/* Social Media */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Social Media
          </h2>
          <div className="flex justify-center gap-6">
            <MemberCard
              name="Kanishq Malhotra"
              link="https://www.linkedin.com/in/kanishq-malhotra"
            />
          </div>
        </div>

        {/* Video Editing */}
        <div className="w-full md:w-1/2 lg:w-2/3 px-4 mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-center">
            Video Editing
          </h2>
          <div className="flex flex-wrap justify-center gap-6">
            <MemberCard
              name="Kunal Sharma"
              link="https://www.linkedin.com/in/kunal-sharma"
            />
            <MemberCard
              name="Chirag Mehta"
              link="https://www.linkedin.com/in/chirag-mehta"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
