import React from 'react';

type Player = {
  name: string;
  position: string;
  team: string;
  photo: string;
};

const players: Player[] = [
  { name: 'Kylian Mbappé', position: 'Forward (LW)', team: 'Real Madrid', photo: "/images/messi.png" },
  { name: 'Erling Haaland', position: 'Forward (ST)', team: 'Manchester City', photo: "/images/messi.png" },
  { name: 'Lionel Messi', position: 'Forward (RW)', team: 'Inter Miami', photo: "/images/messi.png" },
  { name: 'Harry Kane', position: 'Forward (ST)', team: 'Bayern Munich', photo: "/images/messi.png" },
  { name: 'Kevin De Bruyne', position: 'Midfielder (CAM)', team: 'Manchester City', photo: "/images/messi.png" },
  { name: 'Lionel Messi', position: 'Forward (RW)', team: 'Inter Miami', photo: "/images/messi.png" },
  { name: 'Kylian Mbappé', position: 'Forward (LW)', team: 'Real Madrid', photo: "/images/messi.png" },
  { name: 'Erling Haaland', position: 'Forward (ST)', team: 'Manchester City', photo: "/images/messi.png" },
  { name: 'Lionel Messi', position: 'Forward (RW)', team: 'Inter Miami', photo: "/images/messi.png" },
  { name: 'Lionel Messi', position: 'Forward (RW)', team: 'Inter Miami', photo: "/images/messi.png" },
  { name: 'Kylian Mbappé', position: 'Forward (LW)', team: 'Real Madrid', photo: "/images/messi.png" },
  { name: 'Erling Haaland', position: 'Forward (ST)', team: 'Manchester City', photo: "/images/messi.png" },
  { name: 'Lionel Messi', position: 'Forward (RW)', team: 'Inter Miami', photo: "/images/messi.png" },
];

const PlayerTransfers: React.FC = () => {
  const highlightedIndex = 2; // Index riadku, ktorý chceme zvýrazniť (tu napr. tretí hráč)

  return (
    <div className="bg-blue_primary text-white px-6 py-8">
        <h1 className='text-3xl md:text-6xl bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text mb-10 uppercase font-bold leading-8'>From Players <br />
        <span className='ml-16'>to transfers</span></h1>
      <div className="gap-8">
        <div className="text-center">
          <div className="w-full max-w-md mx-auto hidden md:block">
            <img src="/images/messi.png" alt="Player" className="mx-auto mb-4" />
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <div className="flex justify-between text-xl font-semibold mb-8">
            <span className="text-2xl bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text font-bold">13 PLAYERS</span>
            <span className="text-2xl font-bold">12 TRANSFERS</span>
          </div>
          <div className="space-y-2">
            {players.map((player, index) => (
              <div
                key={index}
                className={`flex justify-between text-lg ${
                  index === highlightedIndex ? 'text-gold_primary' : ''
                }`}
              >
                <div className="flex flex-row gap-6">
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

export default PlayerTransfers;