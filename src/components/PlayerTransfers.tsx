import React from 'react';

type Player = {
  name: string;
  position: string;
  team: string;
};

const players: Player[] = [
  { name: 'Kylian Mbappé', position: 'Forward (LW)', team: 'Real Madrid' },
  { name: 'Erling Haaland', position: 'Forward (ST)', team: 'Manchester City' },
  { name: 'Lionel Messi', position: 'Forward (RW)', team: 'Inter Miami' },
  { name: 'Harry Kane', position: 'Forward (ST)', team: 'Bayern Munich' },
  { name: 'Kevin De Bruyne', position: 'Midfielder (CAM)', team: 'Manchester City' },
  { name: 'Lionel Messi', position: 'Forward (RW)', team: 'Inter Miami' },
  // Add more players here
];

const PlayerTransfers: React.FC = () => {
  return (
    <div className="bg-gray-900 text-white px-6 py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div className="col-span-1 md:col-span-2 lg:col-span-1 text-center">
          <h1 className="text-3xl font-bold mb-4">FROM PLAYERS TO TRANSFERS</h1>
          <div className="w-full max-w-md mx-auto">
            <img src="https://your-image-url.com" alt="Player" className="rounded-full mx-auto mb-4" />
          </div>
        </div>
        <div className="col-span-1 md:col-span-2 lg:col-span-2">
          <div className="flex justify-between text-xl font-semibold mb-4">
            <span className="text-lg">13 PLAYERS</span>
            <span className="text-lg">12 TRANSFERS</span>
          </div>
          <div className="space-y-4">
            {players.map((player, index) => (
              <div key={index} className="flex justify-between text-lg">
                <span>{player.position}</span>
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