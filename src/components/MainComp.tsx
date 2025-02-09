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
  icon1:string;
  icon2:string;
  icon3:string;
  buttonText:string;
  predNadpis:string;
}

const MainComp: React.FC<MainCompProps> = ({
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
    <div className="bg-[#0A2125] font-barlow text-white px-8 pb-16 md:pb-24 lg:pb-32 flex flex-col items-center">
      <div className="flex justify-between items-center w-full max-w-[1400px] gap-8">
        <div className="flex flex-col items-start space-y-8 w-1/3">
          <div className="text-left">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex items-center justify-center gap-2 bg-[#112A2F] border border-gray-500 p-4 rounded-lg mb-4">
                <img src={icon1} alt="icon1" className="w-7"/>
                <span className="border-l border-gray-400 h-5 mx-2"></span>
                <h3 className="text-gold_primary font-barlow">{nadpisStranky}</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-40 mr-20">{prvyText}</p>
          </div>
          <div className="flex justify-end space-x-4 mb-4 w-max ml-44">
            <div className="flex flex-row gap-2 bg-[#0f2c31] items-center justify-center p-4 rounded-lg w-max">
            <img src={icon2} alt="icon2" className="w-7 h-auto"/>
              <span className="border-l border-gray-400 h-5 mx-2"></span>
              <h3 className="text-gold_primary">{lavyBadge}</h3>
            </div>
          </div>
        </div>
        <div className="relative z-10 -ml-32 -mr-32 mt-16 w-2/3">
          <div className="absolute w-[200px] h-[200px] bg-[#1cad9a] rounded-full opacity-60 blur-[100px] -top-30 left-[30%] -z-10"></div>
          <img
            src={image}
            alt="Player Holding Trophy"
            className="h-auto w-[2000px] -ml-10 -mt-20 object-cover"
          />
        </div>
        <div className="flex flex-col items-end space-y-8 w-3/6">
          <div className="text-left">
            <div className="flex flex-col space-x-4 mb-4">
              <p className="mb-6 max-w-96">{careerMessage}</p>
              <div className="flex flex-row gap-3">
                <FaArrowDown className="mt-1 -ml-4 text-gold_primary" />
                <h3 className="text-gold_primary mb-28 uppercase font-bold">Scroll to explore</h3>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex justify-center items-center gap-2 border-gray-400 bg-[#0f2c31] p-4 rounded-lg w-max mb-40">
                <img src={icon3} alt="icon3" className="w-7 h-auto"/>
                  <span className="border-l border-gray-400 h-5 mx-2"></span>
                  <h3 className="text-gold_primary">{pravyBadge}</h3>
                </div>
              </div>
              <div className="text-left max-w-xl mb-16">
              <h2 className="text-lg font-light text-gray-300 font-barlow">
                  {predNadpis}{" "}
                  <span className="text-gold_primary max-w-92 ml-6 text-4xl md:text-[36px] font-extrabold uppercase max-w-lg leading-tight">
                    {zltyNadpis}
                  </span>
                </h2>
                <div className="flex flex-col gap-6">
                <p className="text-lg md:text-lg text-gray-300 mt-4">
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
  );
};

export default MainComp;