import React from "react";
import FeatureItem from "../components/FeatureItem";

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
  return (
    <div className="bg-blue_primary text-white px-8 py-16 md:py-24 lg:py-32 relative">
      <div className="mx-auto flex flex-col ">
        <div className="flex-1 mb-12">
          <h1 className="text-left text-[38px] leading-[38px] font-bold mb-12 text-heading">
            {heading}
          </h1>
          <div className="space-y-6">
            {features.map((feature, index) => (
              <FeatureItem
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