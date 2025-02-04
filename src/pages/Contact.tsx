import React from "react";
import Form from "../components/Form";
import FeatureItem from "../components/FeatureItem";
import {
  BsEnvelope,
  BsFlag,
  BsInstagram,
  BsFacebook,
  BsYoutube,
  BsLinkedin,
} from "react-icons/bs";
import { TbPhoneCall } from "react-icons/tb";
import { AiFillTikTok } from "react-icons/ai";

import RotateLinks from "../components/rotateLinks";
import ImageWavyBanner from "../components/ImageWavyBanner";

const Contact: React.FC = () => {
  return (
    <div className="bg-[#0A2125] pt-40">
      <section className="bg-[#0A2125] text-white py-16 px-16 pr-24">
        <div className="flex flex-col lg:flex-row items-start gap-32 max-w-[1600px] mx-auto">
          <div className="lg:w-1/2">
            <h1 className="md:text-[80px] md:leading-[80px] text-[38px] leading-[40px] mb-4 text-gold_primary font-bold">
              LET’S BUILD YOUR FOOTBALL LEGACY
            </h1>
            <p className="md:mb-12 mb:2 md:text-[18px] md:leading-[24px] text-[16px] leading-[24px] max-w-[480px]">
              At Top Players Agency, we’re here to help you achieve greatness.
              Whether you’re a professional player, a young talent, or the
              parent of an aspiring football star, we’re ready to provide the
              support you need.
            </p>
            <div className="space-y-8 hidden lg:block lg:w-1/2">
              <div>
                <h3 className="text-[24px] leading-[24px] font-bold text-white md:mb-2">
                  JAKUB FILIP
                </h3>
                <p className="text-gray-300 text-[14px] leading-[20px]">
                  CEO and Certified Fifa Agent
                </p>
                <div className="flex items-center gap-4 mt-2 text-[18px] leading-[24px]">
                  <TbPhoneCall size={24}  />
                  <p>00421 911 212 482</p>
                </div>
                <div className="flex items-center gap-4 mt-2 text-[18px] leading-[24px]">
                  <BsEnvelope size={24} />
                  <p>JakubFilip@topplayersagency.com</p>
                </div>
              </div>
              <div>
                <h3 className="text-[24px] leading-[24px] font-bold text-white md:mb-2">
                  RADOVAN KOLLAR
                </h3>
                <p className="text-gray-300 text-[14px] leading-[20px]">
                  Head Scout
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <TbPhoneCall size={24} />
                  <p>00421 905 366 031</p>
                </div>
                <div className="flex items-center gap-4 mt-2 text-[18px] leading-[24px] md:mb-32">
                  <BsEnvelope size={24} />
                  <p>RadovanKollar@topplayersagency.com</p>
                </div>
              </div>
              <div className="border-t border-gray-500 my-8 max-w-[480px]"></div>
              <div>
                <h3 className="text-[24px] leading-[24px] font-bold text-white md:mt-32">
                  TOP PLAYERS AGENCY
                </h3>
                <div className="flex items-center gap-4 mt-2">
                  <TbPhoneCall size={24} />
                  <p>00421 911 212 482</p>
                </div>
                <div className="flex items-center gap-4 mt-2 text-[18px] leading-[24px]">
                  <BsEnvelope size={24} />
                  <p>info@topplayersagency.com</p>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <BsFlag size={24} />
                  <p>Landererova 7743/8, Bratislava, Slovakia</p>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="md:text-[40px] md:leading-[40px] text-[38px] leading-[40px]  mb-10 md:mt-4 mt-0 font-bold">
              I AM LOOKING FOR AN AGENT!
            </h2>
            <Form />
          </div>

          <div className="space-y-8 block lg:hidden">
            <div>
              <h3 className="text-[24px] leading-[24px] font-bold text-white pb-2">
                JAKUB FILIP
              </h3>
              <p className="text-gray-300 text-[14px] leading-[20px] pb-2">
                CEO and Certified Fifa Agent
              </p>
              <div className="flex items-center gap-4 mt-2 md:text-[18px] leading-[24px] text-[16px]">
                <TbPhoneCall size={24} />
                <p>00421 911 212 482</p>
              </div>
              <div className="flex items-center gap-4 mt-2 md:text-[18px] leading-[24px] text-[16px]">
                <BsEnvelope size={24} />
                <p>JakubFilip@topplayersagency.com</p>
              </div>
            </div>
            <div>
              <h3 className="text-[24px] leading-[24px] font-bold text-white pb-2">
                RADOVAN KOLLAR
              </h3>
              <p className="text-gray-300 text-[14px] leading-[20px] pb-2">
                Head Scout
              </p>
              <div className="flex items-center gap-4 mt-2">
                <TbPhoneCall size={24} />
                <p>00421 905 366 031</p>
              </div>
              <div className="flex items-center gap-4 mt-2 text-[18px] leading-[24px] ">
                <BsEnvelope size={24} />
                <p>RadovanKollar@topplayersagency.com</p>
              </div>
            </div>
            <div className="border-t border-gray-500 my-8 max-w-[480px]"></div>
            <div>
              <h3 className="text-[24px] leading-[24px] font-bold text-white pb-3">
                TOP PLAYERS AGENCY
              </h3>
              <div className="flex items-center gap-4 mt-2">
                <TbPhoneCall size={24} />
                <p>00421 911 212 482</p>
              </div>
              <div className="flex items-center gap-4 mt-2 text-[18px] leading-[24px]">
                <BsEnvelope size={24} />
                <p>info@topplayersagency.com</p>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <BsFlag size={24}/>
                <p>Landererova 7743/8, <br />
                     Bratislava, Slovakia</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A2125] text-white pb-10 pt-10 pl-8 pr-8 md:p-40">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-8">
          <FeatureItem
            number="01"
            title="EXPERIENCE AND EXPERTISE"
            text="A track record of success representing world-class players."
          />
          <FeatureItem
            number="02"
            title="HOLISTIC APPROACH"
            text="Career, health, legal, and branding support under one roof."
          />
          <FeatureItem
            number="03"
            title="PLAYER-FIRST PHILOSOPHY"
            text="Your aspirations are at the heart of everything we do."
          />
        </div>
      </section>

<section className="relative text-white pt-8">
  <div className="w-full bg-[#0A2125]">
   <RotateLinks/>
   <ImageWavyBanner/>
  </div>

  <div className="grid grid-cols-2 gap-4 lg:hidden pl-8 pr-8">
    <div className="flex items-center gap-2 bg-[#112A2F] p-4 rounded-lg">
      <BsInstagram size={24} />
      <span className="border-l border-gray-400 h-5 mx-2"></span>
      <h3 className="text-gold_primary">Instagram</h3>
    </div>
    <div className="flex items-center gap-2 bg-[#112A2F] p-4 rounded-lg">
      <BsFacebook size={24} />
      <span className="border-l border-gray-400 h-5 mx-2"></span>
      <h3 className="text-gold_primary">Facebook</h3>
    </div>
    <div className="flex items-center gap-2 bg-[#112A2F] p-4 rounded-lg">
      <BsYoutube size={24} />
      <span className="border-l border-gray-400 h-5 mx-2"></span>
      <h3 className="text-gold_primary">YouTube</h3>
    </div>
    <div className="flex items-center gap-2 bg-[#112A2F] p-4 rounded-lg">
      <BsLinkedin size={24} />
      <span className="border-l border-gray-400 h-5 mx-2"></span>
      <h3 className="text-gold_primary">LinkedIn</h3>
    </div>
    <div className="flex items-center gap-2 bg-[#112A2F] p-4 rounded-lg">
      <AiFillTikTok size={28} />
      <span className="border-l border-gray-400 h-5 mx-2"></span>
      <h3 className="text-gold_primary">TikTok</h3>
    </div>
    <div className="flex items-center gap-2 bg-[#112A2F] p-4 rounded-lg">
      <AiFillTikTok size={28} />
      <span className="border-l border-gray-400 h-5 mx-2"></span>
      <h3 className="text-gold_primary">TikTok</h3>
    </div>
  </div>
</section>
</div>
  );
};

export default Contact;