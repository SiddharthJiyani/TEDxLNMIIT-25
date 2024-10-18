const About = () => {
  return (
    <section className="bg-black text-white py-16 px-8">
      <div className="container mx-auto">
        {/* About TEDx Heading */}
        <h1 className="text-5xl font-bold text-gray-200 mb-12">About TEDx</h1>

        {/* First Card */}
        <div className="bg-gray-900 p-6 rounded-lg mb-8 shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-white rounded-full mr-4 flex items-center justify-center">
              <span className="text-black font-bold text-lg">⦿</span>
            </div>
            <h2 className="text-xl font-semibold text-red-500">WHAT IS TEDx</h2>
          </div>
          <p className="text-gray-300">
            In the spirit of ideas worth spreading, TED has created a program
            called TEDx. TEDx is a program of local, self-organized events that
            bring people together to share a TED-like experience. Our event is
            called TEDxMEC, where x = independently organized TED event. At our
            TEDxMEC event, TED Talks video and live speakers will combine to
            spark deep discussion and connection in a small group.
          </p>
        </div>

        {/* Second Card */}
        <div className="bg-gray-900 p-6 rounded-lg shadow-lg">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-white rounded-full mr-4 flex items-center justify-center">
              <span className="text-black font-bold text-lg">⦿</span>
            </div>
            <h2 className="text-xl font-semibold text-red-500">
              x = independently organized event
            </h2>
          </div>
          <p className="text-gray-300">
            TEDxMEC stands for the mission of TED - to propagate ideas potent
            enough to change the mindsets, inspire youth at large and equip them
            to crave a better living, beneficial for themselves and the society
            they dwell in. TEDxMEC features engaging talks inspiring people
            ranging from veteran performers and social reformers to young
            innovators. It serves as a stage for promoting fresh thoughts and
            inspiring innovation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
