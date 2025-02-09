import React from "react";

type HeadingProps = {
  mainHeading: string;
  backgroundVideo?: string; // Prop pre video pozadie
  maxWidth?: string;
  rotateClass?: string;
  gradientOverlay?: string; // Prop pre gradient overlay
  icon:string;
};

const HeadingS: React.FC<HeadingProps> = ({
  mainHeading,
  backgroundVideo,
  maxWidth,
  rotateClass,
  gradientOverlay,
  icon
}) => {
  return (
    <div
      className="bg-[#0A2125] text-white py-20 pt-40 flex flex-col items-center justify-center text-center relative overflow-hidden w-full h-full"
    >
      {/* Video pozadie */}
      {backgroundVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        />
      )}

      {/* Gradient overlay */}
      {gradientOverlay && (
        <img
          src={gradientOverlay}
          alt="gradient overlay"
          className="absolute bottom-0 lg:-bottom-20 left-0 w-full h-auto z-[99] pointer-events-none"
        />
      )}

      {/* Overlay pre lepšiu čitateľnosť textu */}

      <div className="relative flex flex-row items-center z-[100]">
        <img src={icon} alt="ikona nadpisu" className="w-16 rotate-2"/>
      </div>
      <h1
        className={`text-3xl md:text-6xl font-extrabold uppercase mt-4 my-16 ${maxWidth} ${rotateClass} break-words font-barlow bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text relative  z-[100]`}
      >
        {mainHeading}
      </h1>
    </div>
  );
};

export default HeadingS;