import React from "react";

interface TeamCardProps {
  logo: string; // URL k logu
  altText?: string; // Alternatívny text pre logo
}

const TeamCard: React.FC<TeamCardProps> = ({ logo, altText = "Logo" }) => {
  return (
    <div className="flex items-center justify-center w-56 h-56 border border-gray-500 rounded-lg bg-transparent flex-shrink-0">
      <img
        src={logo}
        alt={altText}
        className="w-28 h-28 object-contain"
      />
    </div>
  );
};

export default TeamCard;