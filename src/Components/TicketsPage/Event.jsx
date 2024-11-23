import React from "react";

const Event = ({ title, price, discount }) => {
  return (
    <div className="relative h-[250px] w-[400px] m-[10px] inline-block">
      {/* Outer Container */}
      <div className="relative overflow-visible h-full w-full rounded-[15px] transition duration-300 hover:scale-105">
        {/* Background */}
        <div className="absolute w-full h-full bg-[#151515] rounded-[15px] overflow-hidden shadow-lg">
          {/* Blurred Glossy Layer */}
          <div className="relative w-full h-full p-[20px] bg-gradient-to-br backdrop-blur-[20px] shadow-[0_0_15px_5px_#00000088] rounded-[15px] border border-[#ffffff55] hover:border-[#ff5555]">
            {/* Content */}
            <div className="flex flex-col justify-between h-full text-white">
              {/* Title */}
              <p className="text-lg font-bold mb-2">{title}</p>
              {/* Features */}
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-4 text-sm">
                <li>Access to all TEDxLNMIIT talks and workshops</li>
                <li>Interaction sessions with speakers</li>
                <li>Delicious meals and refreshments</li>
                <li>Exclusive TEDxLNMIIT experiences</li>
              </ul>
              {/* Pricing */}
              <hr className="m-1"></hr>
              <div className="text-right">
                <p className="text-lg">{price}</p>
                {discount && <p className="text-red-400">{discount}</p>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Event;
