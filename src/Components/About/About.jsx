import Title from "../utility/Title";

const About = () => {
  return (
    <section className="bg-black text-white py-10 px-8">
      <div className="mt-14 container mx-auto">
        {/* About TEDx Heading */}
        <h1 className="text-5xl font-bold text-gray-200 mb-12 text-center">
          <Title text={"About"} red={"TEDx"}/>
        </h1>

        {/* First Card */}
        <div className="bg-customDark p-10 rounded-xl mb-8 shadow-lg border border-bordorColor max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-8 h-8 bg-white rounded-full mr-4 flex items-center justify-center">
              <img
                src="https://static.thenounproject.com/png/4411728-200.png"
                alt="TEDx Icon"
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-xl font-semibold bg-gradient-to-r from-red-800 to-red-400 text-transparent bg-clip-text">
              WHAT IS TEDx
            </h2>
          </div>
          <p className="text-white text-justify">
            Inspired by the spirit of “Ideas worth Spreading”, TED created a program called TEDx. TEDx is a
            series of locally organized events that bring people together to share a TED-like experience.
            Our event is called TEDxLNMIIT, where "x" signifies an independently organized TED event. At TEDxLNMIIT, 
            TED Talk videos and live speakers come together to ignite meaningful discussions and foster connections within an intimate setting.
           
          </p>
        </div>

        {/* Second Card */}
        <div className="bg-customDark p-10 rounded-xl shadow-lg border border-bordorColor max-w-4xl mx-auto">
          <div className="flex items-center mb-4">
            <div className="w-[35px] h-8 bg-white rounded-full mr-4 flex items-center justify-center">
              <img
                src="https://static.thenounproject.com/png/4411728-200.png"
                alt="TEDx Icon"
                className="w-6 h-6"
              />
            </div>
            <h2 className="text-xl font-bold bg-gradient-to-r from-red-900 to-red-500 text-transparent bg-clip-text">
              X = independently organized event
            </h2>
          </div>
          <p className="text-white text-justify">
            TEDxLNMIIT embodies TED’s mission to spread powerful ideas that can transform perspectives, 
            inspire young minds, and drive a collective vision for a better future for individuals and society.
            TEDxLNMIIT features inspiring talks from a diverse lineup of thought leaders, from seasoned professionals 
            and social change-makers to emerging innovators. It provides a platform for bold ideas, sparking new ways 
            of thinking and encouraging creativity and positive change.

          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
