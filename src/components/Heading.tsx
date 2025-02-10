import React from "react";

type HeadingProps = {
  mainHeading: string;
  HeadingOpaciy?: string;
  backgroundVideo?: string; // Prop pre video pozadie
  maxWidth?: string;
  rotateClass?: string;
  gradientOverlay?: string; // Prop pre gradient overlay
  icon:string;
};

const Heading: React.FC<HeadingProps> = ({
  mainHeading,
  HeadingOpaciy,
  backgroundVideo,
  maxWidth,
  rotateClass,
  gradientOverlay,
  icon
}) => {
  return (
    <div
      className="bg-[#0A2125] text-white py-48 pt-40 flex flex-col items-center justify-center text-center relative overflow-hidden w-full h-full"
    >
      {/* Video pozadie */}
      {backgroundVideo && (
        <video
          className="absolute inset-0 w-full h-full object-cover"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
          preload="metadata"
        />
      )}

      {/* Gradient overlay */}
      {gradientOverlay && (
        <img
          src={gradientOverlay}
          alt="gradient overlay"
          className="absolute bottom-0 lg:-bottom-[140px] left-0 w-full h-auto z-[999] pointer-events-none"
        />
      )}

      {/* Overlay pre lepšiu čitateľnosť textu */}

      <div className="relative flex flex-row items-center z-[100]">
        <img src={icon} alt="ikona nadpisu" className="w-12"/>
        <img
          src="/images/ball.png"
          alt="/images/ball.png"
          className="absolute w-12 opacity-90 z-50"
          style={{ right: "50%" }}
        />
      </div>
      <h1
        className={`text-3xl md:text-[70px] font-extrabold uppercase mt-4 my-16 ${maxWidth} ${rotateClass} break-words font-barlow bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text relative ${HeadingOpaciy} z-[10000] leading-[64px] scale-x-90`}
      >
        {mainHeading}
      </h1>
    </div>
  );
};

export default Heading;