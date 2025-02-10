import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";

interface FooterProps {
  backgroundImage: string;
}
const languages: string[] = [
  "EN",
  "SK",
  "CZ",
  "ES",
  "IT",
  "DE",
  "PL",
  "FR",
  "NL",
];

const Footer: React.FC<FooterProps> = ({ backgroundImage }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>("EN");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);

  const handleLanguageSelect = (lang: string): void => {
    setSelectedLanguage(lang);
    setIsDropdownOpen(false);
  };

  return (
    <footer
      className="text-white px-8 py-8 md:px-16 md:py-16 relative z-[999]"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <span className="absolute top-0 left-1/2 w-[92%] border-t-[1px] opacity-10 -translate-x-1/2"></span>
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="hidden md:flex flex-row items-center mb-4 md:mb-0">
          <img src="/images/Logo_png.png" alt="" className="w-8" />
          <span className="bg-gray-500 opacity-30 h-6 w-0.5 ml-5 mr-5"></span>
          <p className="text-sm text-gold_primary">
            2025 © All rights reserved
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-center items-center gap-8 mb-10 mt-4 md:mb-0">
          {/* HOME link for mobile */}
          <div className="">
            <Link to="/">
              <h2 className="uppercase font-semibold text-center">Home</h2>
            </Link>
          </div>

          <div className="flex flex-row justify-center items-center lg:flex-row gap-8">
            <Link to="/services">
              <h2 className="uppercase font-semibold">Services</h2>
            </Link>
            <Link to="/players">
              <h2 className="uppercase font-semibold">Players</h2>
            </Link>
          </div>

          <div className="flex flex-row justify-center items-center lg:flex-row gap-8">
            <Link to="/transfers">
              <h2 className="uppercase font-semibold">Transfers</h2>
            </Link>
            <Link to="/about">
              <h2 className="uppercase font-semibold">About Us</h2>
            </Link>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center relative">
          <Link to="/contact">
            <ButtonComponent variant="secondary" size="small">
              Contact
            </ButtonComponent>
          </Link>
          <div
            className="flex flex-row items-center gap-2 cursor-pointer"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <CiGlobe size={24} />
            <h2>{selectedLanguage}</h2>
          </div>
          {isDropdownOpen && (
            <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-[#0A2125] shadow-md rounded-md border border-gray-200 border-opacity-20 z-10 flex flex-row">
              {languages
                .filter((lang) => lang !== selectedLanguage)
                .map((lang) => (
                  <div
                    key={lang}
                    className="px-2 py-2 hover:bg-[#11353b] cursor-pointer text-white border-r last:border-r-0 border-gray-300 border-opacity-20"
                    onClick={() => handleLanguageSelect(lang)}
                  >
                    {lang}
                  </div>
                ))}
            </div>
          )}
        </div>
      </div>

      <div className="flex justify-center my-24 md:my-16 pb-20">
        <div className="hidden md:flex flex-row items-center mb-4 md:mb-0 px-6 py-[14px] rounded-lg border-2 bg-[#0d2a30] border-white border-opacity-10">
          <img src="/images/fifa_logo.png" alt="" className="w-[76px]" />
          <span className="bg-gray-500 opacity-30 h-6 w-0.5 ml-6 mr-6"></span>
          <p className="text-[14px] text-gold_primary">Certified agents</p>
        </div>
        <div className="flex md:hidden flex-row items-center mb-4 md:mb-0 p-4 ">
          <img src="/images/Logo_png.png" alt="" className="w-10 mr-2" />
          <span className="bg-gray-500 opacity-30 h-[40%] w-0.5 ml-2 mr-4"></span>
          <p className="text-sm text-gold_primary">
            2025 © All rights reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
