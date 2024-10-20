const About = () => {
  return (
    <section className="bg-black text-white py-10 px-8">
      <div className="container mx-auto">
        {/* About TEDx Heading */}
        <h1 className="text-5xl font-bold text-gray-200 mb-12 text-center">
          About TEDx
        </h1>

        {/* First Card */}
        <div className="bg-black p-6 rounded-lg mb-8 shadow-lg border border-bordorColor max-w-4xl  mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-white rounded-full mr-4 flex items-center justify-center">
              <span className="text-black font-bold text-lg">⦿</span>
            </div>
            <h2 className="text-xl font-semibold text-red-500">WHAT IS TEDx</h2>
          </div>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            nec venenatis nisi. Phasellus sit amet purus vel metus dignissim
            tincidunt. Sed ut augue scelerisque, ultrices urna ut, dignissim
            elit. Nulla facilisi.
          </p>
        </div>

        {/* Second Card */}
        <div className="bg-black p-6 rounded-lg shadow-lg border border-bordorColor max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-white rounded-full mr-4 flex items-center justify-center">
              <span className="text-black font-bold text-lg">⦿</span>
            </div>
            <h2 className="text-xl font-semibold text-red-500">
              x = independently organized event
            </h2>
          </div>
          <p className="text-gray-300">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            bibendum libero non felis dignissim, eu viverra ligula sollicitudin.
            Proin quis faucibus ligula. Integer pharetra felis a tincidunt
            sagittis. Donec eleifend semper magna, nec varius nunc volutpat at.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
