import React from "react";
import FeatureItem from "../components/FeatureItem";

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

const StepsComp: React.FC<StepsCompProps> = ({
  heading,
  features,
  imageSrc,
  imageAlt,
}) => {
  return (
    <div className="bg-blue_primary text-white px-8 py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:space-x-12">
        <div className="flex-1 mb-12">
          <h1 className="flex justify-start max-w-96 text-5xl font-bold mb-12 text-heading">
            {heading}
          </h1>

          <div className="space-y-64 ml-80 mt-32 max-w-[490px]">
            {features.slice(1, 3).map((feature, index) => (
              <FeatureItem
                key={index}
                number={feature.number}
                title={feature.title}
                text={feature.text}
              />
            ))}
          </div>
        </div>

        <div className="flex-1 space-y-64 max-w-[700px] mt-16">
          {features
            .filter((_, index) => index % 2 === 0)
            .map((feature, index) => (
              <FeatureItem
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
        className="absolute top-[60%] left-[15%] w-20 h-20 transform -translate-y-1/2"
      />
    </div>
  );
};

export default StepsComp;