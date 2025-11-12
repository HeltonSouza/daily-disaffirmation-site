import React from "react";
import FeatureCard from "./FeatureCard";
import { SlMagicWand, SlCamera, SlGhost, SlTarget, SlBriefcase, SlPresent } from "react-icons/sl";

const Features = () => {
  const features = [
    {
      icon: SlMagicWand,
      title: "Comforting?",
      description: "One brutally dry, oddly comforting quote each day.",
    },
    {
      icon: SlCamera,
      title: "Stunning",
      description: "Beautiful backgrounds so the sting goes down smooth.",
    },
    {
      icon: SlGhost,
      title: "Enough",
      description: "Tired of toxic positivity? We are here for ALL of it!",
    },
    {
      icon: SlTarget,
      title: "Handy",
      description: "The anti-affirmation app you'll actually use.",
    },
    {
      icon: SlBriefcase,
      title: "Trusted",
      description: "Get your daily dose of dry humor from professional pranksters.",
    },
    {
      icon: SlPresent,
      title: "Share",
      description: "Yes, you can gift this amazing fountain of knowledge to your \"best\" people!",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 bg-[rgba(255,225,195,1)] transition-colors duration-200 rounded-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-gray-900 mb-4">You better believe</h2>
          <p className="mt-8 text-xl text-gray-600 font-light">
            Finally, a dis-affirmation app that tells it like it isn't.
          </p>
        </div>
        <div className="mt-10">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <FeatureCard key={index} {...feature} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
