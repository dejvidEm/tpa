import React from "react";
import ButtonComponent from "./ButtonComponent";

type BannerProps = {
  smallHeading: string;
  mainHeading: string;
  buttonText: string;
};

const Banner: React.FC<BannerProps> = ({ mainHeading, smallHeading, buttonText }) => {
  return (
    <div className="bg-gray-700 text-white py-20 flex flex-col items-center justify-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold uppercase mt-4 my-16 max-w-2xl break-words text-gold_primary">{mainHeading}</h1>
        <h4 className="text-sm text-gray-400 mb-8">{smallHeading}</h4>
        <ButtonComponent variant="primary" size="small">
            {buttonText}
        </ButtonComponent>
    </div>
  );
};

export default Banner;