import React from "react";
import ImageCarousel from "./ImageCarousel";

type PartnersProps = {
  logos: string[]; // Array of image URLs
  title: string; // The heading of the component
};

const Partners: React.FC<PartnersProps> = ({  title }) => {
  return (
    <div className="relative w-full bg-[#0A2125] flex flex-col items-center justify-center py-48">
      <span className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-1/2 -z-3 opacity-0 md:opacity-95">
  <img src="/images/blur.png" className="w-[80%]" alt="" />
</span>

      <h2 className="text-4xl md:text-6xl font-extrabold px-10 md:px-0 mb-10 md:mb-16 md:max-w-[750px] bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text uppercase text-center z-10">
        {title}
      </h2>
      <ImageCarousel/>
    </div>
  );
};

export default Partners;