import { useState } from 'react';

const players = [
  { name: 'Kylian Mbappé', position: 'Forward (LW)', team: 'Real Madrid', photo: "/images/mbape.png" },
  { name: 'Erling Haaland', position: 'Forward (ST)', team: 'Manchester City', photo: "/images/haaland.png" },
  { name: 'Lionel Messi', position: 'Forward (RW)', team: 'Inter Miami', photo: "/images/messi.png" },
  { name: 'Harry Kane', position: 'Forward (ST)', team: 'Bayern Munich', photo: "/images/kane.png" },
  { name: 'Cristiano Ronaldo', position: 'Forward (ST)', team: 'Al-Nassr', photo: "/images/ronaldo.png" },
  { name: 'Kevin De Bruyne', position: 'Midfielder (CAM)', team: 'Manchester City', photo: "/images/debruyne.png" },
  { name: 'Jude Bellingham', position: 'Midfielder (CM)', team: 'Real Madrid', photo: "/images/beli.png" },
  { name: 'Vinícius Júnior', position: 'Forward (LW)', team: 'Real Madrid', photo: "/images/junior.png" },
  { name: 'Robert Lewandowski', position: 'Forward (ST)', team: 'Barcelona', photo: "/images/lew.png" },
  { name: 'Mohamed Salah', position: 'Forward (RW)', team: 'Liverpool', photo: "/images/salah.png" },
  { name: 'Bruno Fernandes', position: 'Midfielder (CAM)', team: 'Manchester United', photo: "/images/fer.png" },
];

const PlayerTransfers = () => {
  const [selectedPlayer, setSelectedPlayer] = useState(players[0]);

  return (
    <div className="bg-[#0A2125] text-white px-6 py-8 relative">
      <div className="flex lg:justify-end lg:-mb-20">
      <h1 className='text-3xl md:text-6xl bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text mb-10 uppercase font-bold leading-8'>
        From Players <br />
        <span className='ml-16'>to transfers</span>
      </h1>
      </div>
      
      <div className="flex justify-start gap-24 lg:gap-32 text-xl font-semibold mb-16">
        <span className="text-2xl bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text font-bold">
          {players.length} PLAYERS
        </span>
        <span className="text-2xl font-bold">12 TRANSFERS</span>
      </div>
      
      {/* Tabuľka hráčov */}
      <div className="w-full">
        {players.map((player, index) => (
          <div
            key={index}
            className={`grid grid-cols-4 text-lg py-2 cursor-pointer items-center relative ${
              selectedPlayer.name === player.name ? 'border-b-2 border-gold_primary' : 'border-b-2 border-[#0A2125]'
            }`}
            onClick={() => setSelectedPlayer(player)}
          >
            <span>{player.name}</span>
            <span className="hidden lg:flex justify-center relative h-0">
              {selectedPlayer.name === player.name && (
                <img src={player.photo} className="w-32 h-32 md:w-56 md:h-56 absolute -top-16 md:-left-10 lg:-left-28 z-[50] object-cover" alt={player.name} />
              )}
            </span>
            <span>{player.position}</span>
            <span className='text-right'>{player.team}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerTransfers;