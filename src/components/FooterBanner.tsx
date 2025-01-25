import React from "react";
import ButtonComponent from "./ButtonComponent";

type BannerProps = {
  smallHeading?: string; // Malý nadpis je voliteľný
  mainHeading: string; // Veľký nadpis je povinný
  buttonText?: string; // Tlačidlo je voliteľné
  maxWidth?: string; // Možnosť nastaviť max-width pre h1
  rotateClass?: string; // Možnosť nastaviť rotáciu pre h1
  smallFirst?: boolean; // Určuje, či sa malý nadpis zobrazuje pred veľkým
};

const Banner: React.FC<BannerProps> = ({
  mainHeading,
  smallHeading,
  buttonText,
  maxWidth = "max-w-2xl",
  rotateClass = "",
  smallFirst = false,
}) => {
  return (
    <div className="bg-blue_primary text-white py-20 flex flex-col items-center justify-center text-center">
      {/* Ak je smallFirst true, zobrazí sa najprv malý nadpis */}
      {smallFirst && smallHeading && (
        <h4 className="text-sm text-gray-400 mb-8">{smallHeading}</h4>
      )}

      {/* Veľký nadpis je vždy zobrazený, s dynamickým max-width a rotáciou */}
      <h1
        className={`text-3xl sm:text-4xl md:text-6xl font-bold uppercase mt-4 mx-8 md:mx-0 my-16 ${maxWidth} ${rotateClass} break-words`}
      >
        {mainHeading}
      </h1>

      {/* Ak smallFirst je false alebo smallHeading neexistuje, malý nadpis sa zobrazuje až po veľkom nadpise */}
      {!smallFirst && smallHeading && (
        <h4 className="text px-14 md:px-0 text-gray-400 mb-8">{smallHeading}</h4>
      )}

      {/* Tlačidlo sa zobrazí iba ak je definované */}
      {buttonText && (
        <ButtonComponent variant="primary" size="small">
          {buttonText}
        </ButtonComponent>
      )}
    </div>
  );
};

export default Banner;