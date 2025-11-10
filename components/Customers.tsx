import React from "react";

import {
  PiAlien,
  PiPersonSimpleThrowBold
} from "react-icons/pi";

import { 
  GiAlienStare 
} from "react-icons/gi";

import { 
  MdOutlineEmojiPeople 
} from "react-icons/md";

import { 
  FaPeopleRobbery,
  FaPersonMilitaryRifle,
  FaPersonCircleQuestion
} from "react-icons/fa6";

const icons = [
  { Icon: PiAlien },
  { Icon: MdOutlineEmojiPeople },
  { Icon: FaPersonMilitaryRifle },
  { Icon: GiAlienStare },
  { Icon: FaPeopleRobbery },
  { Icon: PiPersonSimpleThrowBold },
  { Icon: FaPersonCircleQuestion },
];

const Customers: React.FC = () => {
  return (
    <div className="w-full py-12 bg-black">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row w-full">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-6 md:mb-0 text-white text-center md:text-left md:w-1/3">
              Over 50 trillion people (and non-people) rely on our app for their daily needs
            </h2>
            <div className="flex flex-wrap justify-center md:justify-end gap-6 md:w-2/3">
              {icons.map(({ Icon }, index) => (
                <div key={index} className="flex flex-col items-center justify-center">
                  <Icon className="text-3xl md:text-4xl text-white" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customers;
