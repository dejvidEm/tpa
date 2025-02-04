import React from "react";
import TeamCard from "../components/TeamCard";

type PartnersProps = {
  logos: string[]; // Array of image URLs
  title: string; // The heading of the component
};

const Partners: React.FC<PartnersProps> = ({ logos, title }) => {
  return (
    <div className="relative w-full bg-[#0A2125] flex flex-col items-center justify-center py-48">
      <span className="absolute top-1/5 left-1/4 -z-3">
      <img src="/images/blur.png" className="w-[80%]" alt="" />
      </span>
      <h2 className="text-3xl md:text-6xl font-bold px-10 md:px-0 mb-10 md:mb-16 md:max-w-[750px] bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text uppercase text-center z-10">
        {title}
      </h2>
      <div className="flex justify-center items-center space-x-8 z-10">
        {logos.map((logo, index) => (
          <TeamCard key={index} logo={logo} altText={`Logo ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default Partners;