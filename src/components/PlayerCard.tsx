import React from "react";

interface PlayerCardProps {
  name: string;
  team: string;
  image: string;
  nationality: string;
  league: string;
  height: string;
  weight: string;
  preferredFoot: string;
  position: string;
  age: string;
}

const PlayerCard: React.FC<PlayerCardProps> = ({
  name,
  team,
  image,
  nationality,
  league,
  height,
  weight,
  preferredFoot,
  position,
  age,
}) => {
  return (
    <div className="text-white rounded-lg overflow-hidden min-w-max">
      <h2 className="text-xl font-bold uppercase">{name}</h2>
      <p className="text-white">{team}</p>
      <div className="my-4">
        <img
          src={image}
          alt={`${name} photo`}
          className="w-full h-96 object-cover rounded"
        />
      </div>
      <div className="text-sm flex flex-col gap-2">
        <p className="flex justify-between">
          <span className="text-gray-400">Nationality</span>
          <span>{nationality}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-400">League</span>
          <span>{league}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-400">Height</span>
          <span>{height}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-400">Weight</span>
          <span>{weight}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-400">Preferred Foot</span>
          <span>{preferredFoot}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-400">Playing Position</span>
          <span>{position}</span>
        </p>
        <p className="flex justify-between">
          <span className="text-gray-400">Age</span>
          <span>{age}</span>
        </p>
      </div>
    </div>
  );
};

export default PlayerCard;