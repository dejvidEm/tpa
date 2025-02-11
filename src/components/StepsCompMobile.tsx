import React from "react";
import FeatureItemM from "./FeatureItemM";

type Feature = {
  number: string;
  title: string;
  text: string;
};

type StepsCompMobileProps = {
  heading: string;
  features: Feature[];
};

const StepsCompMobile: React.FC<StepsCompMobileProps> = ({ heading, features }) => {
  const [firstWord, ...rest] = heading.split(' ');

  return (
    <div className="bg-[#0A2125] text-white px-8 py-16 md:py-24 lg:py-32 relative">
      <div className="mx-auto flex flex-col ">
        <div className="flex-1 mb-12">
          <h1 className="text-left text-[35px] leading-[38px] font-extrabold mb-12 bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text">
          <span className="ml-20">{firstWord}</span>
          {rest.join(' ')}
          </h1>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <FeatureItemM
                key={index}
                number={feature.number}
                title={feature.title}
                text={feature.text}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepsCompMobile;