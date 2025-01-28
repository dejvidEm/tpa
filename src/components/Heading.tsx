import React from "react";
import { CiGlobe } from "react-icons/ci";

type HeadingProps = {
  mainHeading: string;
  backgroundImage?: string; // Prop pre pozadie
  maxWidth?: string;
  rotateClass?: string;
};

const Heading: React.FC<HeadingProps> = ({
  mainHeading,
  backgroundImage,
  maxWidth,
  rotateClass,
}) => {
  return (
    <div
      className="bg-[#0A2125] text-white py-20 pt-40 flex flex-col items-center justify-center text-center relative overflow-hidden"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "100%",
      }}
    >
      {/* Pozadie ako pseudo-element pre úplnú kontrolu */}
      {backgroundImage && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            zIndex: 1,
            opacity: 0.5, // Nastav priehľadnosť podľa potreby
          }}
        ></div>
      )}

      <div className="relative flex flex-row items-center z-10">
        <CiGlobe size={64} className="z-40 relative" />
        <img
          src="/images/ball.png"
          alt="ball_icon"
          className="absolute w-16 opacity-90 z-50"
          style={{ right: "50%" }}
        />
      </div>
      <h1
        className={`text-3xl md:text-6xl font-bold uppercase mt-4 my-16 ${maxWidth} ${rotateClass} break-words bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text relative z-10`}
      >
        {mainHeading}
      </h1>
    </div>
  );
};

export default Heading;