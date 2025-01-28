import React from 'react';
import { BsAsterisk } from 'react-icons/bs';
import ButtonComponent from './ButtonComponent';

interface Props {
  cardName?: string; // Názov karty/link
  title?: string; // Nadpis karty
  background?: string; // Pozadie karty (voliteľné)
  icon?: React.ReactNode; // Ikona karty
}

const Card: React.FC<Props> = ({ 
  cardName = 'Card Name', 
  title = 'Nadpis karty', 
  background, 
  icon = <BsAsterisk size={20} className="text-white" /> 
}) => {
  return (
    <div 
      className="w-[300px] h-[460px] md:h-[440px] bg-gray-300 flex flex-col justify-between p-4 mr-4 rounded" 
      style={{
        backgroundImage: background ? 
          `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${background})` : 
          'none', // Pridaj stmavenie pozadia
        backgroundSize: 'cover', // Pokryje celú kartu
        backgroundPosition: 'center', // Umiestni pozadie do stredu
      }}
    >
      {/* Horná časť karty s ikonou */}
      <div className="flex flex-row w-fit items-center bg-blue_primary rounded px-4 py-2">
        {icon}
        <span className="h-[90%] bg-gray-400 w-0.5 mx-2 md:mx-4"></span>
        <p className="text-gold_primary text-sm md:text-md">{cardName}</p>
      </div>
      {/* Obsah karty */}
      <div className="flex flex-col gap-3 md:gap-4 items-start">
        <h1 className="text-xl md:text-2xl font-bold text-white uppercase leading-none">{title}</h1>
        <ButtonComponent size="small" variant="primary">
          FIND OUT MORE
        </ButtonComponent>
      </div>
    </div>
  );
};

export default Card;