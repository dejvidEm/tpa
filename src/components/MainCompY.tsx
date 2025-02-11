import { FaArrowDown } from "react-icons/fa6";
import { Link } from "react-router-dom";
import ButtonComponent from "./ButtonComponent";

interface MainCompProps {
  nadpisStranky: string;
  prvyText: string;
  lavyBadge: string;
  careerMessage: string;
  pravyBadge: string;
  zltyNadpis: string;
  pravText: string;
  image: string;
  icon1: string;
  icon2: string;
  icon3: string;
  buttonText: string;
  predNadpis: string;
}

const MainCompY: React.FC<MainCompProps> = ({
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
  predNadpis,
}) => {
  return (
    <div className="bg-[#0A2125] font-barlow text-white px-8 pb-16 md:pb-24 lg:pb-32 flex flex-col items-center relative">
      <div className="flex justify-between items-center w-full max-w-[1400px] gap-8">
        <div className="flex flex-col items-start space-y-8 w-1/3">
          <div className="text-left">
            <div className="flex items-center space-x-4 mb-4">
            <div className="flex items-center justify-center gap-2 border border-gray-500 border-opacity-40 px-7 py-3 rounded-lg mb-4">
                <img src={icon1} alt="icon1" className="w-8" />
                <span className="border-l border-gray-400 h-5 mx-2 opacity-40"></span>
                <h3 className="text-gold_primary text-[14px]">
                  {nadpisStranky}
                </h3>
              </div>
            </div>
            <p className="text-gray-300 mb-80 mr-20 text-[18px] leading-[22px] font-light">{prvyText}</p>
          </div>
          <div className="flex justify-end space-x-4 mb-4 w-max ml-44">
            <div className="flex items-center justify-center gap-2 px-7 py-3 rounded-lg mb-4 bg-[#0d272c]">
                <img src={icon2} alt="icon1" className="w-8" />
                <span className="border-l border-gray-400 h-5 mx-2 opacity-40"></span>
                <h3 className="text-gold_primary text-[14px]">
                  {lavyBadge}
                </h3>
              </div>
          </div>
        </div>
        <div className=" z-10 -ml-32 -mr-32 mt-16 w-2/3">
          <img
            src={image}
            alt="Player Holding Trophy"
            className="absolute top-1/2 left-1/2 w-[1000px] -translate-x-1/2 -translate-y-1/2 -ml-20"
          />
        </div>
        <div className="flex flex-col items-end space-y-8 w-[57%]">
          <div className="text-left">
            <div className="flex flex-col space-x-4 mb-4">
              <p className="mb-6 max-w-96 text-[18px] text-gray-300 leading-[22px] font-light">{careerMessage}</p>
              <div className="flex flex-row gap-3">
                <FaArrowDown className="mt-1 -ml-4 text-gold_primary" size={20}/>
                <h3 className="text-gold_primary mb-28 uppercase font-bold text-[17px] scale-x-90">
                  Scroll to explore
                </h3>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex justify-center items-center gap-2 border-gray-400 bg-[#0d272c] px-7 py-3  rounded-lg w-max mb-40">
                  <img src={icon3} alt="icon3" className="w-8 h-auto" />
                  <span className="border-l border-gray-400 h-5 mx-2"></span>
                  <h3 className="text-gold_primary text-[14px]">
                    {pravyBadge}
                  </h3>
                </div>
              </div>
              <div className="text-left max-w-max mb-16">
                <h2 className="font-light text-gray-300 font-barlow text-[18px]">
                  {predNadpis}{" "}
                  <span className="text-gold_primary ml-6 text-4xl md:text-[50px] font-extrabold uppercase leading-[50px] bg-gradient-to-r from-gold_secondary to-gold_primary text-transparent bg-clip-text">
                    {zltyNadpis}
                  </span>
                </h2>
                <div className="flex flex-col gap-6">
                  <p className=" text-gray-300 text-[18px] leading-[22px] font-light mt-8 mb-2">{pravText}</p>
                  <Link to="/contact" className="z-[999999]">
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
  );
};

export default MainCompY;
