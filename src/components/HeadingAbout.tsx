import React from "react";

type HeadingProps = {
  mainHeading: string;
  backgroundVideo?: string; // Prop pre video pozadie
  maxWidth?: string;
  rotateClass?: string;
  gradientOverlay?: string; // Prop pre gradient overlay
};

const HeadingA: React.FC<HeadingProps> = ({
  mainHeading,
  backgroundVideo,
  maxWidth,
  rotateClass,
  gradientOverlay,
}) => {
  return (
    <div
      className="bg-[#0A2125] text-white py-20 pt-40 flex flex-col items-center justify-center text-center relative overflow-hidden w-full h-full"
    >
      {/* Video pozadie */}
      {backgroundVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover opacity-30"
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
          className="absolute bottom-0 lg:-bottom-32 left-0 w-full h-auto z-[99] pointer-events-none"
        />
      )}

      {/* Overlay pre lepšiu čitateľnosť textu */}

      <div className="relative flex flex-row items-center z-[100]">
      <div className="flex items-center gap-4 bg-[#112A2F] -rotate-2 p-4 rounded-lg">
        <img src="images/fifa_logo.png" alt="icon1" className="w-16"/>
          <span className="border-l border-gray-400 h-5 mx-2 opacity-30"></span>
          <h3 className="text-gold_primary">certified agents</h3>
        </div>
      </div>
      <div className="mx-4">
      <h1
        className={`text-4xl md:text-6xl font-extrabold uppercase mt-10 my-16 ${maxWidth} ${rotateClass} break-words font-barlow bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text relative  z-[100]`}
      >
        {mainHeading}
      </h1>
      </div>
    </div>
  );
};

export default HeadingA;