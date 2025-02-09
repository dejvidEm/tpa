import React from 'react';
import ButtonComponent from './ButtonComponent';
import { Link } from 'react-router-dom';

interface Props {
  cardName?: string;
  title?: string;
  background?: string; // Pozadie obrázok (voliteľné)
  backgroundVideo?: string; // Pozadie video (voliteľné)
  icon?: string;
  link:string;
}

const Card: React.FC<Props> = ({ 
  cardName = 'Card Name', 
  title = 'Nadpis karty', 
  background, 
  backgroundVideo, 
  icon = "/images/icons/Representation.png",
  link 
}) => {
  return (
    <div className="relative w-[] lg:w-[440px] h-[560px] lg:h-[640px] flex flex-col justify-between p-7 mr-4 rounded overflow-hidden">
      {/* Video pozadie */}
      {backgroundVideo ? (
        <video 
          className="absolute top-0 left-0 w-full h-full opacity-70 object-cover z-0" 
          autoPlay 
          loop 
          muted 
          playsInline
        >
          <source src={backgroundVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      ) : (
        // Fallback na statický obrázok
        background && (
          <div 
            className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
            style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.4)), url(${background})` }}
          ></div>
        )
      )}

      {/* Obsah karty */}
      <div className="relative z-10 flex flex-col h-full justify-between">
        {/* Horná časť karty s ikonou */}
        <div className="flex flex-row w-fit items-center bg-blue_primary rounded px-5 py-3">
          <img src={icon} alt="card icon" className='w-6 md:w-8'/>
          <span className="h-[90%] bg-gray-400 w-0.5 mx-2 md:mx-4"></span>
          <p className="text-gold_primary text-sm md:text-md">{cardName}</p>
        </div>
        {/* Obsah karty */}
        <div className="flex flex-col gap-6 md:gap-5 items-start">
          <h1 className="text-2xl md:text-3xl font-bold text-white uppercase leading-6">{title}</h1>
          <Link to={link}>
          <ButtonComponent size="small" variant="primary">
            FIND OUT MORE
          </ButtonComponent>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Card;