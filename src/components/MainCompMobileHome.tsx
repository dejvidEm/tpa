import { FC } from "react";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import { FaArrowDown } from "react-icons/fa";
import HeadingHome from "./HeadingHome";

type MainCompMobileProps = {
  zltyNadpis: string;
  prvyText: string;
  nadpisStranky: string;
  prvyBadge: string;
  druhyBadge: string;
  druhyText: string;
  prednadpis: string;
  podnadpisZltehoTextu: string;
  playerImage: string;
  buttonText:string;
  icon1:string;
  icon2:string;
  icon3:string;
};

const MainCompMobile: FC<MainCompMobileProps> = ({
  zltyNadpis,
  prvyText,
  nadpisStranky,
  prvyBadge,
  druhyBadge,
  druhyText,
  prednadpis,
  podnadpisZltehoTextu,
  playerImage,
  buttonText,
  icon1,
  icon2,
  icon3
}) => {
  return (
    <div>
        <HeadingHome
            mainHeading={"Where Top Talent Meets Global Opportunities"}
            HeadingOpaciy="opacity-0"
            maxWidth="max-w-[800px]"
            rotateClass="-rotate-2"
            backgroundVideo="/videos/hpM.mp4"
            gradientOverlay="/images/gradient.png"
            icon="/images/icons/Global.png"
          />
    <div className="bg-[#0A2125] relative text-white -mt-16 px-4 pb-16 md:pb-24 lg:pb-32 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-12 w-full">
        <div className="flex flex-col items-center text-center space-y-4">
          <p className="text-gray-300">{prvyText}</p>
          <div className="flex flex-row gap-3 pt-2 pb-4">
            <FaArrowDown className="mt-1 -ml-4 text-gold_primary" />
          <h3 className="text-gold_primary uppercase">Scroll to explore</h3>
          </div>
        </div>

        <div className="flex items-center gap-4 bg-[#112A2F] border border-gray-500 p-4 rounded-lg">
        <img src={icon1} alt="icon1" className="w-16"/>
          <span className="border-l border-gray-400 h-5 mx-2"></span>
          <h3 className="text-gold_primary">{nadpisStranky}</h3>
        </div>

        <div className="text-center">
          <p className="text-gray-300">{druhyText}</p>
        </div>

        <div className="text-left max-w-full  z-[99999999]">
          <h2 className="text-lg font-light text-gray-300">
            {prednadpis}
            <span className="text-gold_primary text-3xl font-extrabold ml-2 uppercase">
              {zltyNadpis}
            </span>
          </h2>
          <p className="text-lg text-gray-300 my-4 mr-16">{podnadpisZltehoTextu}</p>
          <Link to="/about" className="z-[999999]">
          <ButtonComponent variant="primary" size="small">
            {buttonText}
          </ButtonComponent>
          </Link>
        </div>

        <div className="relative w-[180%] z-[0]">
          <img
            src={playerImage}
            alt="Player Holding Trophy"
            className="-my-28 rounded-lg pb-20"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 bg-[#0f2f35] p-4 px-5 rounded-lg">
            <img src={icon2} alt="icon1" className="w-7"/>
            <span className="border-l border-gray-400 h-5"></span>
            <h3 className="text-gold_primary">{prvyBadge}</h3>
          </div>

          <div className="flex items-center gap-4 bg-[#0f2f35] p-4 px-5 rounded-lg">
            <img src={icon3} alt="icon1" className="w-7"/>
            <span className="border-l border-gray-400 h-5"></span>
            <h3 className="text-gold_primary">{druhyBadge}</h3>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MainCompMobile;