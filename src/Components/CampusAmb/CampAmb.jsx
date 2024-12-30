import React from "react";
import Button from "../Footer/Button.jsx";
import Title from "../utility/Title";
import { Link } from "react-router-dom";
const CampAmb = () => {
  return (
    <div className="min-h-[60%] bg-black-900 text-white px-8 flex flex-col justify-center items-center gap-14">
       <h2 className="text-4xl font-bold mb-8 my-20 text-center text-gray-200">
          <Title text={"Campus"} red={"Ambassador"} className="block text-[40px] md:text-6xl" />
        </h2>
      <p className="text-lg mb-6 text-center w-[60%]">
        TEDxLNMIIT is giving you a chance to not only create meaningful
        connections through this program but much more than that! TEDxLNMIIT
        will be giving certificates to all the campus ambassadors! Adding up to
        this, out of all the campus ambassadors, the top performing ambassadors
        will be given a FREE TICKET to the event. And at the end, you'd be
        gaining experience, the experience of interactions, negotiations, and
        most importantly, teamwork.
      </p>
      <Link to="/campus-amb">
          {/* <Button buttonLabel=" Book Tickets Now! " /> */}
          <Button buttonLabel="Know More" />
        </Link>
    </div>
  );
};

export default CampAmb;
