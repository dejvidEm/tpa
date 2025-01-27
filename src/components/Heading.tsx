import React from "react";
import { CiGlobe } from "react-icons/ci";

type HeadingProps = {
  mainHeading: string;
  maxWidth?: string;
  rotateClass?: string;
};

const Heading: React.FC<HeadingProps> = ({
  mainHeading,
  maxWidth,
  rotateClass,
}) => {
  return (
    <div className="bg-blue_primary text-white py-20 flex flex-col items-center justify-center text-center">
      <div className="relative flex flex-row items-center">
        <CiGlobe size={64} className="z-40 relative" />
        <img
          src="/images/ball.png"
          alt="ball_icon"
          className="absolute w-16 opacity-90 z-50"
          style={{ right: "50%" }}
        />
      </div>
      <h1
        className={`text-3xl md:text-6xl font-bold uppercase mt-4 my-16 ${maxWidth} ${rotateClass} break-words bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text`}
      >
        {mainHeading}
      </h1>
    </div>
  );
};

export default Heading;
