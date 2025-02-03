import React from "react";

import { IoArrowForwardSharp } from "react-icons/io5";


interface PlayerCardProps {
  name: string;
  team: string;
  transferTeam?:string;
  transferDate?:string;
  transferInfo?:string;
  image: string;
  nationality: string;
  league: string;
  height: string;
  weight: string;
  preferredFoot: string;
  position: string;
  age: number;
}

const TransferCard: React.FC<PlayerCardProps> = ({
  name,
  team,
  transferTeam,
  transferDate,
  transferInfo,
  image,
}) => {
  return (
    <div className="text-white rounded-lg overflow-hidden">
      <h2 className="text-xl font-bold uppercase">{name}</h2>
      <p className="text-white opacity-50 font-light text-xl">{team}</p>
      <span className="flex flex-row gap-2 items-center">
      <IoArrowForwardSharp className="text-gold_primary" size={24}/>
      <p className="font-light text-lg">{transferTeam}</p>
      </span>
      <div className="my-4">
        <img
          src={image}
          alt={`${name} photo`}
          className="w-full h-96 object-cover rounded"
        />
      </div>
      <div className="text-sm flex flex-col gap-2">
        <p className="flex justify-between text-xl font-light">
          <span>{transferDate}</span>
        </p>
        <p className="flex justify-between font-light pr-4">
          <span>{transferInfo}</span>
        </p>
      </div>
    </div>
  );
};

export default TransferCard;