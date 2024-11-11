const About = () => {
  return (
    <section className="bg-black text-white py-10 px-8">
      <div className="mt-14 container mx-auto">
        {/* About TEDx Heading */}
        <h1 className="text-5xl font-bold text-gray-200 mb-12 text-center">
          About TEDx
        </h1>

        {/* First Card */}
        <div className="bg-customDark p-10 rounded-xl mb-8 shadow-lg border border-bordorColor max-w-5xl  mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-white rounded-full mr-4 flex items-center justify-center">
              <span className="text-black font-bold text-lg">⦿</span>
            </div>
            <h2 className="text-xl font-semibold text-red-500">WHAT IS TEDx</h2>
          </div>
          <p className="text-gray-300">
            TEDx is a series of independently organized events under a license
            from TED, the globally recognized platform dedicated to sharing
            ideas that matter. While TED is renowned for its flagship annual
            conferences, where influential voices from all fields come together,
            TEDx allows local communities to create their own events inspired by
            TED's mission of "Ideas Worth Spreading." These events unite
            individuals to ignite discussions, foster creativity, and promote a
            culture of curiosity and openness. TEDx showcases live speakers,
            performances, and pre-recorded TED Talks, providing a platform for
            passionate thinkers to present their insights and innovations to
            a wider audience.
          </p>
        </div>

        {/* Second Card */}
        <div className="bg-customDark p-10 rounded-xl shadow-lg border border-bordorColor max-w-5xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-white rounded-full mr-4 flex items-center justify-center">
              <span className="text-black font-bold text-lg">⦿</span>
            </div>
            <h2 className="text-xl font-semibold text-red-500">
              x = independently organized event
            </h2>
          </div>
          <p className="text-gray-300">
            TEDxLnmiit stands for the mission of TED - to propagate ideas potent
            enough to change mindsets, inspire youth at large, and equip them to
            crave a better living, beneficial for themselves and the society
            they dwell in. TEDxLnmiit features engaging talks inspiring people
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
