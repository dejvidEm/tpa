import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";
import HeadingHome from "./HeadingHome";

interface MainCompProps {
  nadpisStranky: string;
  prvyText: string;
  lavyBadge: string;
  careerMessage: string;
  pravyBadge: string;
  zltyNadpis: string;
  pravText: string;
  image: string;
  icon1:string;
  icon2:string;
  icon3:string;
  buttonText:string;
  predNadpis:string;
}

const MainCompHome: React.FC<MainCompProps> = ({
  nadpisStranky,
  prvyText,
  lavyBadge,
  careerMessage,
  pravyBadge,
  zltyNadpis,
  pravText,
  image,
  icon1,
  icon2,
  icon3,
  buttonText,
  predNadpis
}) => {
  return (
    <div className="relative">
    <HeadingHome
            mainHeading={"Where Top Talent Meets Global Opportunities"}
            HeadingOpaciy="opacity-0"
            maxWidth="max-w-[800px]"
            rotateClass="-rotate-2"
            backgroundVideo="/videos/hpnovy.mp4"
            gradientOverlay="/images/gradient.png"
            icon="/images/icons/Global.png"
          />
    <div className="bg-[#0A2125] text-white px-8 -mt-28 pb-16 md:pb-24 lg:pb-32 flex flex-col items-center">
      <div className="flex justify-between items-center w-full max-w-[1600px] gap-8 z-[999]">
        <div className="flex flex-col items-start space-y-8 w-1/3">
          <div className="text-left">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center justify-center gap-2 bg-[#112A2F] border border-gray-500 p-4 rounded-lg mb-4">
                <img src={icon1} alt="icon1" className="w-7"/>
                <span className="border-l border-gray-400 h-5 mx-2"></span>
                <h3 className="font-barlow text-gold_primary text-[14px]">{nadpisStranky}</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-40 mr-20 text-[18px]">{prvyText}</p>
          </div>
          <div className="flex justify-end space-x-4 mb-4 w-max ml-44">
            <div className="flex flex-row gap-2 bg-[#0f2c31] items-center justify-center p-4 rounded-lg w-max">
            <img src={icon2} alt="icon2" className="w-7 h-auto"/>
              <span className="border-l border-gray-400 h-5 mx-2"></span>
              <h3 className="text-gold_primary text-[14px]">{lavyBadge}</h3>
            </div>
          </div>
        </div>
        <div className="relative z-10 -ml-32 -mr-32 mt-16 w-full">
          <img
            src={image}
            alt="Player Holding Trophy"
            className="h-auto w-[2000px] -ml-10 -mt-20 object-cover"
          />
        </div>
        <div className="flex flex-col items-end space-y-8 w-3/6">
          <div className="text-left">
            <div className="flex flex-col space-x-4 mb-4">
              <p className="mb-6 max-w-96 text-[18px]">{careerMessage}</p>
              <div className="flex flex-row gap-3">
                <FaArrowDown className="mt-1 -ml-4 text-gold_primary" />
                <h3 className="text-gold_primary mb-28 uppercase font-bold text-[16px]">Scroll to explore</h3>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex justify-center items-center gap-2 border-gray-400 bg-[#0f2c31] p-4 rounded-lg w-max mb-40">
                <img src={icon3} alt="icon3" className="w-7 h-auto"/>
                  <span className="border-l border-gray-400 h-5 mx-2"></span>
                  <h3 className="text-gold_primary text-[14px]">{pravyBadge}</h3>
                </div>
              </div>
              <div className="text-left max-w-xl mb-16">
              <h2 className="text-[18px] font-light text-gray-300 font-barlow">
                  {predNadpis}{" "}
                  <span className="text-gold_primary max-w-92 ml-6 text-4xl md:text-[64px] font-extrabold uppercase max-w-lg leading-tight">
                    {zltyNadpis}
                  </span>
                </h2>
                <div className="flex flex-col gap-6">
                <p className="text-[18px] md:text-lg text-gray-300 mt-4">
                  {pravText}
                </p>
                <Link to="/contact">
          <ButtonComponent variant="primary" size="small">
            {buttonText}
          </ButtonComponent>
          </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default MainCompHome;