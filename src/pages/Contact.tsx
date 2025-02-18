import React, { useRef, useState } from "react";
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
import FeatureItemM from "../components/FeatureItemM";
import InputField from "../components/InputField";
import Button from "../components/ButtonComponent";

const Contact: React.FC = () => {

  interface FormData {
    email: string;
    photo: File | null;
    name: string;
    nationality: string;
    club: string;
    height: string;
    weight: string;
    foot: string;
    position: string;
    birthdate: string;
    link1: string;
    link2: string;
    link3: string;
  }
  
  const [formData, setFormData] = useState<FormData>({
    email: '',
    photo: null,
    name: '',
    nationality: '',
    club: '',
    height: '',
    weight: '',
    foot: '',
    position: '',
    birthdate: '',
    link1: '',
    link2: '',
    link3: '',
  });

    const fileInputRef = useRef<HTMLInputElement>(null);
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files && e.target.files.length > 0) {
        setFormData({ ...formData, photo: e.target.files[0] });
      }
    };

    const handleUploadClick = () => {
      if (fileInputRef.current) {
        fileInputRef.current.click();
      }
    };

    console.log("Sending data:", formData); // Logovanie na kontrolu
  
    const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      console.log("Sending data:", formData);
  
      const formDataToSend = new FormData();
      formDataToSend.append("name", formData.name.trim());
      formDataToSend.append("email", formData.email.trim());
      formDataToSend.append("nationality", formData.nationality.trim());
      formDataToSend.append("club", formData.club.trim());
      formDataToSend.append("height", formData.height.trim());
      formDataToSend.append("weight", formData.weight.trim());
      formDataToSend.append("foot", formData.foot.trim());
      formDataToSend.append("position", formData.position.trim());
      formDataToSend.append("birthdate", formData.birthdate.trim());
      formDataToSend.append("link1", formData.link1.trim());
      formDataToSend.append("link2", formData.link2.trim());
      formDataToSend.append("link3", formData.link3.trim());
  
      if (formData.photo) {
        formDataToSend.append("photo", formData.photo);
      }
  
      try {
        const response = await fetch("https://topplayersagency.com/form.php", {
          method: "POST",
          body: formDataToSend,
        });
  
        const textResponse = await response.text();
        console.log("Raw response:", textResponse);
  
        try {
          const result = JSON.parse(textResponse);
          console.log("Parsed response:", result);
  
          if (response.ok) {
            alert("Email successfully sent!");
            setFormData({
              email: "",
              name: "",
              photo: null,
              nationality: "",
              club: "",
              height: "",
              weight: "",
              foot: "",
              position: "",
              birthdate: "",
              link1: "",
              link2: "",
              link3: "",
            });
          } else {
            alert(`Error: ${result.error}`);
          }
        } catch (jsonError) {
          console.error("Failed to parse JSON:", textResponse);
          alert("Invalid response from server.");
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("Failed to send message. Please try again.");
      }
    };
    

  return (
    <div className="bg-[#0A2125] pt-40 relative">
      <img
    src="/images/footerBanner.png"
    alt="Background"
    className="absolute bottom-[46%] md:top-0 left-[-10%] w-[100%] md:w-[80%] h-auto object-cover opacity-70 md:opacity-80 z-[99]"
  />
      <section className=" text-white md:py-16 mx-8 md:px-16 md:pr-16 z-[9999] relative">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-10 max-w-[1600px] mx-auto">
          <div className="lg:w-1/2">
            <h1 className="md:text-[68px] md:leading-[60px] text-[38px] leading-[40px] mb-8 text-gold_primary font-extrabold">
              LET’S BUILD YOUR FOOTBALL LEGACY
            </h1>
            <p className="md:mb-12 mb:2 md:text-[18px] md:leading-[24px] text-[16px] leading-[24px] max-w-[480px] font-light">
              At Top Players Agency, we’re here to help you achieve greatness.
              Whether you’re a professional player, a young talent, or the
              parent of an aspiring football star, we’re ready to provide the
              support you need.
            </p>
            <div className="space-y-16 hidden lg:block lg:w-1/2">
              <div>
                <h3 className="text-[24px] leading-[24px] font-bold text-white md:mt-32 pb-2">
                  TOP PLAYERS AGENCY
                </h3>
                <div className="flex items-center gap-4 mt-2">
                  <TbPhoneCall size={24} />
                  <a href="tel:+421911212482" className="text-white">
                    00421 911 212 482
                  </a>
                </div>
                <div className="flex items-center gap-4 mt-2 text-[18px] leading-[24px]">
                  <BsEnvelope size={24} />
                  <a
                    href="mailto:info@topplayersagency.com"
                    className="text-white"
                  >
                    info@topplayersagency.com
                  </a>
                </div>
                <div className="flex items-center gap-4 mt-2">
                  <BsFlag size={24} />
                  <p>Landererova 7743/8, Bratislava, Slovakia</p>
                </div>
              </div>

              <div className="border-t border-gray-500 my-8 max-w-[480px]"></div>

              <div>
                <h3 className="text-[24px] leading-[24px] font-bold text-white md:mb-2">
                  RADOVAN KOLLAR
                </h3>
                <p className="text-gray-300 text-[14px] leading-[20px] pb-2">
                  Head of Scouting
                </p>
                <div className="flex items-center gap-4 mt-2">
                  <TbPhoneCall size={24} />
                  <a href="tel:+421905366031" className="text-white">
                    00421 905 366 031
                  </a>
                </div>
                <div className="flex items-center gap-4 mt-2 text-[18px] leading-[24px] md:mb-32">
                  <BsEnvelope size={24} />
                  <a
                    href="mailto:RadovanKollar@topplayersagency.com"
                    className="text-white"
                  >
                    RadovanKollar@topplayersagency.com
                  </a>
                </div>
              </div>

              <div>
                <h3 className="text-[24px] leading-[24px] font-bold text-white md:mb-2">
                  JAKUB FILIP
                </h3>
                <p className="text-gray-300 text-[14px] leading-[20px] pb-2">
                  CEO and Certified Fifa Agent
                </p>
                <div className="flex items-center gap-4 mt-2 text-[18px] leading-[24px]">
                  <TbPhoneCall size={24} />
                  <a href="tel:+421911212482" className="text-white">
                    00421 911 212 482
                  </a>
                </div>
                <div className="flex flex-row items-center gap-4 mt-2 text-[18px] leading-[24px]">
                  <BsEnvelope size={24} />
                  <a
                    href="mailto:JakubFilip@topplayersagency.com"
                    className="text-white"
                  >
                    JakubFilip@topplayersagency.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-2/5">
            <h2 className="md:text-[40px] md:leading-[40px] text-[38px] leading-[40px]  mb-10 md:mt-4 mt-0 font-bold">
              I AM LOOKING FOR AN AGENT!
            </h2>
            <form className="space-y-6" onSubmit={handleSubmit}>
      <InputField placeholder="Player's email" name="email" value={formData.email} onChange={handleChange} />

      <div className="flex items-center border-b border-gray-500 p-2 overflow-hidden justify-between">
                <input
                  type="file"
                  name="photo"
                  accept="image/*"
                  onChange={handleFileChange}
                  ref={fileInputRef}
                  className="hidden"
                />
                <span className="ml-2 text-white">
                  {formData.photo ? formData.photo.name : "Import image"}
                </span>
                <button 
                  type="button" 
                  onClick={handleUploadClick} 
                  className="ml-4 px-4 py-2 bg-gold_primary text-black rounded-md hover:bg-gold_secondary transition-all">
                  Upload
                </button>
              </div>

      <InputField placeholder="Name & Surname" name="name" value={formData.name} onChange={handleChange} />
      <InputField placeholder="Nationality" name="nationality" value={formData.nationality} onChange={handleChange} />
      <InputField placeholder="Club" name="club" value={formData.club} onChange={handleChange} />
      <div className="flex space-x-4">
        <InputField placeholder="Height" name="height" value={formData.height} onChange={handleChange} />
        <InputField placeholder="Weight" name="weight" value={formData.weight} onChange={handleChange} />
      </div>
      <div className="flex space-x-4">
        <InputField placeholder="Preferred foot" name="foot" value={formData.foot} onChange={handleChange} />
        <InputField placeholder="Playing position" name="position" value={formData.position} onChange={handleChange} />
      </div>
      <InputField placeholder="Date of birth" name="birthdate" value={formData.birthdate} onChange={handleChange} />
      <InputField placeholder="Link to your video No.1" name="link1" value={formData.link1} onChange={handleChange} />
      <InputField placeholder="Link to your video No.2" name="link2" value={formData.link2} onChange={handleChange} />
      <InputField placeholder="Link to your video No.3" name="link3" value={formData.link3} onChange={handleChange} />
      <Button variant="primary" size='large'>Submit</Button>
    </form>
          </div>

          <div className="space-y-8 block lg:hidden mb-16">
            <div>
              <h3 className="text-[24px] leading-[24px] font-bold text-white pb-3">
                TOP PLAYERS AGENCY
              </h3>
              <div className="flex items-center gap-4 mt-2">
                <TbPhoneCall size={24} />
                <a href="tel:+421911212482" className="text-white">
                  00421 911 212 482
                </a>
              </div>
              <div className="flex items-center gap-4 mt-2 text-[18px] leading-[24px]">
                <BsEnvelope size={24} />
                <a
                  href="mailto:info@topplayersagency.com"
                  className="text-white"
                >
                  info@topplayersagency.com
                </a>
              </div>
              <div className="flex items-center gap-4 mt-2">
                <BsFlag size={24} />
                <p>
                  Landererova 7743/8, <br />
                  Bratislava, Slovakia
                </p>
              </div>
            </div>

            <div className="border-t border-gray-500 my-8 max-w-[480px]"></div>

            <div>
              <h3 className="text-[24px] leading-[24px] font-bold text-white pb-2">
                RADOVAN KOLLAR
              </h3>
              <p className="text-gray-300 text-[14px] leading-[20px] pb-2">
                Head of Scouting
              </p>
              <div className="flex items-center gap-4 mt-2">
                <TbPhoneCall size={24} />
                <a href="tel:+421905366031" className="text-white">
                  00421 905 366 031
                </a>
              </div>
              <div className="flex items-center gap-4 mt-2 text-[18px] leading-[24px]">
                <BsEnvelope size={24} />
                <a
                  href="mailto:RadovanKollar@topplayersagency.com"
                  className="text-white"
                >
                  RadovanKollar@topplayersagency.com
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-[24px] leading-[24px] font-bold text-white pb-2">
                JAKUB FILIP
              </h3>
              <p className="text-gray-300 text-[14px] leading-[20px] pb-2">
                CEO and Certified Fifa Agent
              </p>
              <div className="flex items-center gap-4 mt-2 md:text-[18px] leading-[24px] text-[16px]">
                <TbPhoneCall size={24} />
                <a href="tel:+421911212482" className="text-white">
                  00421 911 212 482
                </a>
              </div>
              <div className="flex items-center gap-4 mt-2 md:text-[18px] leading-[24px] text-[16px]">
                <BsEnvelope size={24} />
                <a
                  href="mailto:JakubFilip@topplayersagency.com"
                  className="text-white"
                >
                  JakubFilip@topplayersagency.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#0A2125] text-white pb-10 pt-10 pl-8 pr-8 md:p-40">
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-12 gap-8">
          <FeatureItemM
            number="01"
            title="EXPERIENCE AND EXPERTISE"
            text="A track record of success representing world-class players."
          />
          <FeatureItemM
            number="02"
            title="HOLISTIC APPROACH"
            text="Career, health, legal, and branding support under one roof."
          />
          <FeatureItemM
            number="03"
            title="PLAYER-FIRST PHILOSOPHY"
            text="Your aspirations are at the heart of everything we do."
          />
        </div>
      </section>

      <section className="relative text-white pt-8">
        <div className="w-full bg-[#0A2125]">
          <RotateLinks />
          <ImageWavyBanner />
        </div>

        <div className="grid grid-cols-2 gap-4 lg:hidden pl-8 pr-8 mt-12">
          <a
            href="https://www.instagram.com/topplayersagency"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 bg-[#112A2F] p-4 rounded-lg">
              <BsInstagram size={24} />
              <span className="border-l border-gray-400 h-5 mx-2"></span>
              <h3 className="text-gold_primary">Instagram</h3>
            </div>
          </a>

          <a
            href="https://www.facebook.com/topplayersagency/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 bg-[#112A2F] p-4 rounded-lg">
              <BsFacebook size={24} />
              <span className="border-l border-gray-400 h-5 mx-2"></span>
              <h3 className="text-gold_primary">Facebook</h3>
            </div>
          </a>

          <a
            href="https://www.youtube.com/@TopPlayersAgency"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 bg-[#112A2F] p-4 rounded-lg">
              <BsYoutube size={24} />
              <span className="border-l border-gray-400 h-5 mx-2"></span>
              <h3 className="text-gold_primary">YouTube</h3>
            </div>
          </a>

          <a
            href="https://www.linkedin.com/company/topplayersagency"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2 bg-[#112A2F] p-4 rounded-lg">
              <BsLinkedin size={24} />
              <span className="border-l border-gray-400 h-5 mx-2"></span>
              <h3 className="text-gold_primary">LinkedIn</h3>
            </div>
          </a>

          <a
            href="https://www.tiktok.com/@topplayersagency?_t=ZN-8tk6i5kbbYk&_r=1"
            target="_blank"
            rel="noopener noreferrer"
            className="col-span-2"
          >
            <div className="flex items-center justify-center gap-2 bg-[#112A2F] p-4 rounded-lg">
              <AiFillTikTok size={28} />
              <span className="border-l border-gray-400 h-5 mx-2"></span>
              <h3 className="text-gold_primary">TikTok</h3>
            </div>
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
