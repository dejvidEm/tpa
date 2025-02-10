import React from "react";
import ButtonComponent from "./ButtonComponent";
import { Link, useNavigate } from "react-router-dom";

type BannerProps = {
  smallHeading?: string; // Malý nadpis je voliteľný
  mainHeading: string; // Veľký nadpis je povinný
  buttonText?: string; // Tlačidlo je voliteľné
  maxWidth?: string; // Možnosť nastaviť max-width pre h1
  rotateClass?: string; // Možnosť nastaviť rotáciu pre h1
  smallFirst?: boolean; // Určuje, či sa malý nadpis zobrazuje pred veľkým
  backgroundImage?: string; // URL pozadia
  backgroundVideo?: string; // URL videa na pozadie
  link?: string; // link na ktory odkazuje button
};

const Banner: React.FC<BannerProps> = ({
  mainHeading,
  smallHeading,
  buttonText,
  maxWidth = "max-w-2xl",
  rotateClass = "",
  smallFirst = false,
  backgroundImage,
  backgroundVideo,
  link="/"
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/contact");
    window.scrollTo(0, 0); // Posunie stránku na vrch
  };

  return (
    <div
      className="relative h-[700px] bg-blue_primary text-white flex flex-col items-center justify-center text-center"
      style={{
        backgroundImage: backgroundImage && !backgroundVideo ? `url(${backgroundImage})` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        width: "100%",
        height: "", // Zabezpečenie výšky na celú obrazovku
      }}
    >
      {backgroundVideo && (
        <video
          className="absolute top-0 left-0 w-full h-full object-cover z-0"
          src={backgroundVideo}
          autoPlay
          loop
          muted
          playsInline
        ></video>
      )}

      <img
        src="/images/gradient.png"
        alt="Gradient Overlay"
        className="absolute left-0 w-full opacity-0 h-full object-cover z-10"
      />

      <div className="relative z-20 flex flex-col items-center">
        {smallFirst && smallHeading && (
          <h4 className="text-sm text-gray-400 mb-8">{smallHeading}</h4>
        )}

        <h1
          style={{
            fontFamily: "'Barlow Semi Condensed', sans-serif",
            fontWeight: 800,
          }}
          className={`text-3xl sm:text-4xl md:text-6xl font-bold uppercase mt-4 mx-8 md:mx-0 my-4 ${maxWidth} ${rotateClass} break-words bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text`}
        >
          {mainHeading}
        </h1>

        {!smallFirst && smallHeading && (
          <h4 className="text px-14 md:px-0 text-gray-400 mb-2 mt-10 max-w-[400px]">{smallHeading}</h4>
        )}

        {buttonText && (
          <div className="mt-4">
            <Link to={link}>
            <ButtonComponent variant="primary" size="large" onClick={handleClick}>
              {buttonText}
            </ButtonComponent>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner; 
