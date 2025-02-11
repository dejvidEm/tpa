import React from 'react';

type Player = {
  name: string;
  position: string;
  team: string;
  photo: string;
};

const players: Player[] = [
  { name: 'Richard Grexa', position: 'Central Defender, Right Back Defender', team: 'FK Železiarne Podbrezová', photo: "/images/realFotka.png" },
];

const MobileTransfer: React.FC = () => {
  const highlightedIndex = players.findIndex(player => player.name === 'Lionel Messi'); // Prvý Messi

  return (
    <div className="bg-[#0A2125] text-white px-4 py-8 relative">
      <h1 className='text-4xl md:text-6xl ml-3 font-extrabold bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text mb-10 uppercase leading-8'>
        From Players <br />
        <span className='ml-16'>to transfers</span>
      </h1>
      <div className="gap-8 relative">
        {/* VEĽKÁ fotka úplne prekryje podčiarknutie */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 top-1/2 -translate-y-1/2 z-20 bg-[#0A2125]">
          <img src="/images/messi.png" alt="Player" className="w-72 h-72" />
        </div>
        
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <div className="flex justify-between text-xl font-semibold mb-8">
            <span className="text-[26px] bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text font-bold">
              13 PLAYERS
            </span>
            <span className="text-[26px] font-bold">12 TRANSFERS</span>
          </div>
          <div className="space-y-4 relative">
            {players.map((player, index) => (
              <div
                key={index}
                className={`flex justify-between hover:text-gold_primary ${
                  index === highlightedIndex ? '' : ''
                }`}
              >
                <div className="flex flex-row gap-5">
                  <img src={player.photo} className="w-6 h-6 md:hidden" />
                  <span>{player.name}</span>
                </div>
                <span>{player.team}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileTransfer;