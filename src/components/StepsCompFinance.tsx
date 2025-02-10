import React from "react";
import FeatureItemF from "./FeatureItemF";

type Feature = {
  number: string;
  title: string;
  text: string;
};

type StepsCompProps = {
  heading: string;
  features: Feature[];
  imageSrc: string;
  imageAlt: string;
};

const StepsCompF: React.FC<StepsCompProps> = ({
  features,
  imageSrc,
  imageAlt,
}) => {

  return (
    <div className="bg-[#0A2125] text-white px-8 py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:space-x-12">
        {/* Ľavý stĺpec */}
        <div className="flex-1 mb-12">
        <h1 className="text-4xl md:text-6xl relative font-extrabold uppercase mx-4 md:max-w-2xl break-words bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text ">
        <span className="">Financial</span> professionals specialize in
      </h1>

          <div className="space-y-64 ml-80 mt-32 max-w-[490px]">
            {features
              .filter((_, index) => index % 2 === 1) // Nepárne indexy
              .map((feature, index) => (
                <FeatureItemF
                  key={index}
                  number={feature.number}
                  title={feature.title}
                  text={feature.text}
                />
              ))}
          </div>
        </div>

        {/* Pravý stĺpec */}
        <div className="flex-1 space-y-64 max-w-[700px] mt-16">
          {features
            .filter((_, index) => index % 2 === 0) // Párne indexy
            .map((feature, index) => (
              <FeatureItemF
                key={index}
                number={feature.number}
                title={feature.title}
                text={feature.text}
              />
            ))}
        </div>
      </div>

      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute top-[60%] left-[5vw] transform -translate-y-1/2"
      />
    </div>
  );
};

export default StepsCompF;
