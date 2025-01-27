import { BsLinkedin } from "react-icons/bs";
import { FaArrowDown } from "react-icons/fa6";


const FinancialManagement = () => {
  return (
    <div className="bg-blue_primary text-white px-8 py-16 md:py-24 lg:py-32 flex flex-col items-center">
      <div className="flex justify-between items-center w-full max-w-[1400px]">
        <div className="flex flex-col items-start space-y-8">
          <div className="text-left">
            <div className="flex items-center space-x-4 mb-4">
              <div className="flex justify-start gap-2 bg-[#112A2F] border border-gray-500  p-4 rounded-lg mb-4">
                <BsLinkedin size={24} />
                <span className="border-l border-gray-400 h-5 mx-2"></span>
                <h3 className="text-gold_primary">Financial management</h3>
              </div>
            </div>
            <p className="text-gray-300 mb-10 ">
              With Top Players Agency, you gain a trusted partner dedicated to
              safeguarding your financial well-being, allowing you to focus on
              your game with confidence.
            </p>
            <p className="mb-44 ">
              We ensure your financial success through tailored budgeting, smart
              investments, retirement planning, and tax advisory services.
            </p>
          </div>
          <div className="flex justify-end space-x-4 mb-4 w-max ml-44">
            <div className="flex flex-row gap-2 bg-[#112A2F] p-4 rounded-lg w-max">
              <BsLinkedin size={24} />
              <span className="border-l border-gray-400 h-5 mx-2"></span>
              <h3 className="text-gold_primary">Wealth protection advisors</h3>
            </div>
          </div>
        </div>
        <div className="relative z-10 -ml-32 -mr-32 mt-16">
        <div className="absolute w-[200px] h-[200px] bg-[#1cad9a] rounded-full opacity-60 blur-[100px] -top-30 left-[30%] -z-10"></div>
          <img
            src="/images/player.png"
            alt="Player Holding Trophy"
            className="w-[1400px] h-auto object-cover"
          />
        </div>
        <div className="flex flex-col items-end space-y-8">
          <div className="text-left">
            <div className="flex flex-col space-x-4 mb-4">
              <p className="mb-6">
                We understand that financial security is key to a successful and
                sustainable football career. Your financial future starts here,
                let us help you build it.
              </p>
              <div className="flex flex-row gap-3">
                <FaArrowDown className="mt-1 text-gold_primary"/>
                <h3 className="text-gold_primary mb-28">SCROLL TO EXPLORE</h3>
              </div>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex justify-start gap-2 border-gray-400 bg-[#112A2F] p-4 rounded-lg w-max mb-40">
                  <BsLinkedin size={24} />
                  <span className="border-l border-gray-400 h-5 mx-2"></span>
                  <h3 className="text-gold_primary">Investment management</h3>
                </div>
              </div>

              <div className="text-left max-w-3xl mb-16">
                <h2 className="text-lg font-light text-gray-300">
                  Our strategies help{" "}
                  <span className="text-gold_primary text-4xl md:text-5xl font-bold max-w-92 ml-6">
                    SECURE YOUR FUTURE BEYOND THE GAME
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mt-4">
                  Our expert financial management services are designed to help
                  players maximize their earnings, plan their future, and
                  achieve lasting stability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinancialManagement;
