import React from "react";
import ButtonComponent from "./ButtonComponent";
import { CiGlobe } from "react-icons/ci";


const Footer: React.FC = () => {
  return (
    <footer className="text-white px-16 py-16">
        <div className="flex flex-row justify-between items-center">

            <div className="flex flex-row items-center">
                <img src="/images/logo-footer.png" alt="" className="w-12"/>
                <span className="bg-gray-500 opacity-30 h-[40%] w-0.5 ml-2 mr-4"></span>
                <p className="text-sm text-gold_primary">2025 © All rights reserved</p>
            </div>

            <div className="flex flex-row gap-16">
                <div className="flex flex-col md:flex-row gap-16">
                    <h2 className="uppercase">Services</h2>
                    <h2 className="uppercase">Players</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-16">
                    <h2 className="uppercase">Transfers</h2>
                    <h2 className="uppercase">About Us</h2>
                </div>
            </div>

            <div className="flex flex-row gap-6">
                <ButtonComponent variant="secondary" size="small">Contact</ButtonComponent>
                <div className="flex flex-row items-center gap-2">
                <CiGlobe size={24}/>
                <h2>EN</h2>
                </div>
            </div>
        </div>

        <div className="flex justify-center mt-32">
            <div className="flex flex-row items-center px-8 py-2 rounded-md border-2 border-gray-500 border-opacity-30">
                <img src="/images/image.png" alt="" className="w-32"/>
                <span className="bg-gray-500 opacity-30 h-[60%] w-0.5 ml-4 mr-6"></span>
                <p className="text-gold_primary">Certified agents</p>
            </div>
        </div>
    </footer>
  );
};

export default Footer;