import { BsLinkedin } from "react-icons/bs";
import { FC } from "react";

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
  icon?: React.ElementType;
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
  icon: Icon = BsLinkedin,
}) => {
  return (
    <div className="bg-blue_primary text-white px-4 py-16 md:py-24 lg:py-32 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-12 w-full">
        <div className="flex flex-col items-center text-center space-y-4">
          <p className="text-gray-300">{prvyText}</p>
          <h3 className="text-gold_primary pb-6 pt-2 uppercase">Scroll to explore</h3>
        </div>

        <div className="flex items-center gap-4 bg-[#112A2F] border border-gray-500 p-4 rounded-lg">
          <Icon size={24} />
          <span className="border-l border-gray-400 h-5 mx-2"></span>
          <h3 className="text-gold_primary">{nadpisStranky}</h3>
        </div>

        <div className="text-center">
          <p className="text-gray-300">{druhyText}</p>
        </div>

        <div className="text-left max-w-full">
          <h2 className="text-lg font-light text-gray-300">
            {prednadpis}
            <span className="text-gold_primary text-3xl font-bold ml-2 uppercase">
              {zltyNadpis}
            </span>
          </h2>
          <p className="text-lg text-gray-300 mt-4">{podnadpisZltehoTextu}</p>
        </div>

        <div className="relative">
          <img
            src={playerImage}
            alt="Player Holding Trophy"
            className="w-[1200px] -mt-10 rounded-lg"
          />
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-4 bg-[#0c2327] p-4 rounded-lg">
            <Icon size={24} />
            <span className="border-l border-gray-400 h-5 mx-2"></span>
            <h3 className="text-gold_primary">{prvyBadge}</h3>
          </div>

          <div className="flex items-center gap-4 bg-[#0c2327] p-4 rounded-lg">
            <Icon size={24} />
            <span className="border-l border-gray-400 h-5 mx-2"></span>
            <h3 className="text-heading">{druhyBadge}</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainCompMobile;