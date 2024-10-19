import PrevBox from "./PartnerBox";

const Partner = () => {
  const partners = [
    {
      imgSrc: "https://via.placeholder.com/150",
      name: "Partner 1",
      link: "https://example.com/partner1",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      name: "Partner 2",
      link: "https://example.com/partner2",
    },
    {
      imgSrc: "https://via.placeholder.com/150",
      name: "Partner 3",
      link: "https://example.com/partner3",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-black text-white min-h-screen py-20">
      <h2 className="mt-5 text-2xl font-bold mb-5">Previous Partners</h2>
      <div className="flex flex-wrap justify-center mb-10">
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.link}
            target="_blank"
            rel="noopener noreferrer"
            className="m-4"
          >
            <PrevBox imgSrc={partner.imgSrc} name={partner.name} />
          </a>
        ))}
      </div>
      <div className="text-center max-w-2xl px-4">
        <h3 className="text-xl font-semibold mb-4">
          Interested in partnership?
        </h3>
        <p className="text-lg mb-4">
          Collaborating with TED×Lnmiit offers a rare chance to expand your
          organization&apos;s global network within the TED and TEDx community.
          Harness ideas, technology, and local investments to empower education,
          innovation, and the transformative power of ideas for a brighter
          future.
        </p>
        <p>
          <a href="#" className="text-blue-400 underline">
            Know more
          </a>
        </p>
      </div>
    </div>
  );
};

export default Partner;
