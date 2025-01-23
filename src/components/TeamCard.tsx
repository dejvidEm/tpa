import React from "react";

interface TeamCardProps {
  logo: string; // URL k logu
  altText?: string; // Alternatívny text pre logo
}

const TeamCard: React.FC<TeamCardProps> = ({ logo, altText = "Logo" }) => {
  return (
    <div className="flex items-center justify-center w-56 h-56 border border-gray-500 rounded-lg bg-transparent">
      <img src={logo} alt={altText} className="h-16" />
    </div>
  );
};

export default TeamCard;