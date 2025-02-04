import React from "react";
import ButtonComponent from "./ButtonComponent";
import { CiGlobe } from "react-icons/ci";
import { Link } from "react-router-dom";

interface FooterProps {
  backgroundImage: string;
}

const Footer: React.FC<FooterProps> = ({ backgroundImage }) => {
  return (
    <footer
      className="text-white px-8 py-8 md:px-16 md:py-16 relative"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="hidden md:flex flex-row items-center mb-4 md:mb-0">
          <img src="/images/logo-footer.png" alt="" className="w-12" />
          <span className="bg-gray-500 opacity-30 h-[40%] w-0.5 ml-2 mr-4"></span>
          <p className="text-sm text-gold_primary">2025 © All rights reserved</p>
        </div>

        <div className="flex flex-row gap-8 mb-10 mt-4 md:mb-0">
          <div className="flex flex-col lg:flex-row gap-8">
            <h2 className="uppercase font-semibold">Services</h2>
            <h2 className="uppercase font-semibold">Players</h2>
          </div>
          <div className="flex flex-col lg:flex-row gap-8">
            <h2 className="uppercase font-semibold">Transfers</h2>
            <h2 className="uppercase font-semibold">About Us</h2>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-6 items-center">
          <Link to="/contact">
            <ButtonComponent variant="secondary" size="small">Contact</ButtonComponent>
          </Link>
          <div className="flex flex-row items-center gap-2">
            <CiGlobe size={24} />
            <h2>EN</h2>
          </div>
        </div>
      </div>

      <div className="flex justify-center my-16 md:my-24">
        <div className="flex flex-row items-center px-8 py-2 rounded-md border-2 border-gray-500 border-opacity-30">
          <img src="/images/fifa_logo.png" alt="" className="w-16" />
          <span className="bg-gray-500 opacity-30 h-[60%] w-0.5 ml-4 mr-6"></span>
          <p className="text-gold_primary">Certified agents</p>
        </div>
        <div className="flex md:hidden flex-row items-center mb-4 md:mb-0">
          <img src="/images/fifa_logo.png" alt="" className="w-12" />
          <span className="bg-gray-500 opacity-30 h-[40%] w-0.5 ml-2 mr-4"></span>
          <p className="text-sm text-gold_primary">2025 © All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;