import {
    BsInstagram,
    BsFacebook,
    BsYoutube,
    BsLinkedin,
  } from "react-icons/bs";

  import { AiFillTikTok } from "react-icons/ai";

const RotateLinks = () => {
  return (
    <div className=" w-[100%] inset-x-0 -bottom-8 h-16 bg-[#0E2A2F] hidden lg:block z-[999]">
        <div className="relative z-10 max-w-[1400px] mx-auto pt-4">
          <div className="hidden lg:flex justify-around items-center gap-24">
          <a
            href="https://www.instagram.com/topplayersagency
"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2">
              <BsInstagram size={24} className="text-white"/>
              <span className="border-l border-gray-400 h-5 mx-2"></span>
              <h3 className="text-heading text-gold_primary">Instagram</h3>
            </div>
            </a>
            <a
            href="https://www.facebook.com/topplayersagency/
"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2">
              <BsFacebook size={24} className="text-white"/>
              <span className="border-l border-gray-400 h-5 mx-2"></span>
              <h3 className="text-heading text-gold_primary">Facebook</h3>
            </div>
            </a>
            <a
            href="https://www.youtube.com/@TopPlayersAgency
"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2">
              <BsYoutube size={24} className="text-white"/>
              <span className="border-l border-gray-400 h-5 mx-2"></span>
              <h3 className="text-heading text-gold_primary">YouTube</h3>
            </div>
            </a>
            <a
            href="https://www.linkedin.com/company/topplayersagency"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2">
              <BsLinkedin size={24} className="text-white"/>
              <span className="border-l border-gray-400 h-5 mx-2"></span>
              <h3 className="text-heading text-gold_primary">LinkedIn</h3>
            </div>
            </a>
            <a
            href="https://www.tiktok.com/@topplayersagency?_t=ZN-8tk6i5kbbYk&_r=1
"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="flex items-center gap-2">
              <AiFillTikTok size={28} className="text-white"/>
              <span className="border-l border-gray-400 h-5 mx-2"></span>
              <h3 className="text-heading text-gold_primary">TikTok</h3>
            </div>
            </a>
          </div>
        </div>
      </div>
  )
}

export default RotateLinks