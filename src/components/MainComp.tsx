import { BsLinkedin } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa6";

interface MainCompProps {
  nadpisStranky: string;
  prvyText: string;
  lavyBadge: string;
  careerMessage: string;
  pravyBadge: string;
  zltyNadpis: string;
  pravText: string;
  image: string;
}

const MainComp: React.FC<MainCompProps> = ({
  nadpisStranky,
  prvyText,
  lavyBadge,
  careerMessage,
  pravyBadge,
  zltyNadpis,
  pravText,
  image
}) => {
  return (
    <div className="bg-[#0A2125] text-white px-8 py-16 md:py-24 lg:py-32 flex flex-col items-center">
      <div className="flex justify-between items-center w-full max-w-[1400px]">
        <div className="flex flex-col items-start space-y-8">
          <div className="text-left">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex justify-center gap-2 bg-[#112A2F] border border-gray-500 p-4 rounded-lg mb-4">
                <img src="/images/fifa_logo.png" className="w-16"></img>
                <span className="border-l border-gray-400 h-5 mx-2"></span>
                <h3 className="text-gold_primary">{nadpisStranky}</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-40 mr-20">{prvyText}</p>
          </div>
          <div className="flex justify-end space-x-4 mb-4 w-max ml-44">
            <div className="flex flex-row gap-2 bg-[#0c2327] p-4 rounded-lg w-max">
              <BsLinkedin size={24} />
              <span className="border-l border-gray-400 h-5 mx-2"></span>
              <h3 className="text-gold_primary">{lavyBadge}</h3>
            </div>
          </div>
        </div>
        <div className="relative z-10 -ml-32 -mr-32 mt-16">
          <div className="absolute w-[200px] h-[200px] bg-[#1cad9a] rounded-full opacity-60 blur-[100px] -top-30 left-[30%] -z-10"></div>
          <img
            src={image}
            alt="Player Holding Trophy"
            className="h-auto w-[2000px] -ml-10 -mt-20 object-cover"
          />
        </div>
        <div className="flex flex-col items-end space-y-8">
          <div className="text-left">
            <div className="flex flex-col space-x-4 mb-4">
              <p className="mb-6 max-w-96">{careerMessage}</p>
              <div className="flex flex-row gap-3">
                <FaArrowDown className="mt-1 -ml-4 text-gold_primary" />
                <h3 className="text-gold_primary mb-28 uppercase font-bold">Scroll to explore</h3>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex justify-start gap-2 border-gray-400 bg-[#0c2327] p-4 rounded-lg w-max mb-40">
                  <BsLinkedin size={24} />
                  <span className="border-l border-gray-400 h-5 mx-2"></span>
                  <h3 className="text-gold_primary">{pravyBadge}</h3>
                </div>
              </div>

              <div className="text-left max-w-3xl mb-16">
                <h2 className="text-lg font-light text-gray-300">
                  Our strategies help
                  <span className="text-gold_primary text-4xl md:text-4xl font-extrabold uppercase">
                    {zltyNadpis}
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mt-4">
                  {pravText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainComp;