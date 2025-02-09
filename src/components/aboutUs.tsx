import FeatureItem from "../components/FeatureItem";

const AboutComp = () => {
  return (
    <div className="bg-[#0A2125] text-white px-8 py-16 md:py-24 lg:py-32 flex flex-col items-center">
      <div className="flex justify-between items-center w-full max-w-[1700px]">
        <div className="flex flex-col items-start space-y-8">
        <div className="space-y-20">
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
          </div>
        <div className="relative z-10 -ml-72 -mr-32 ">
          <img
            src="/images/figures/ballB.png"
            alt="Ball"
            className="w-[1400px] h-auto object-cover"
          />
        </div>
        <div className="flex flex-col items-end space-y-8 max-w-[500px]">
          <div className="text-left">
            <div className="flex flex-col space-x-4 mb-4">
              <p className="mb-6">
              At Top Players Agency, we represent and nurture elite football talent. Our goal is to empower players at every stage of their careers by offering comprehensive support that goes beyond the pitch.
              </p>
              <h3 className="text-gold_primary mb-28">↓ SCROLL TO EXPLORE</h3>
              <div className="flex items-center space-x-4 mb-4">
                <div className="flex items-center justify-start gap-2 border-gray-400 bg-[#0f2c31] p-4 rounded-lg w-max mb-40">
                  <img src="/images/icons/target.png" alt="" />
                  <span className="border-l border-gray-400 h-5 mx-2"></span>
                  <h3 className="text-gold_primary">Player focused approach</h3>
                </div>
              </div>

              <div className="text-left max-w-3xl mb-16">
                <h2 className="text-lg font-light text-gray-300">
                We're committed to building{" "}
                  <span className="text-gold_primary text-4xl md:text-5xl font-bold max-w-92 ml-6">
                  LEGACIES THAT LAST BEYOND FOOTBALL
                  </span>
                </h2>
                <p className="text-lg md:text-xl text-gray-300 mt-4">
                From contract negotiation and legal protection to financial planning and personal brand development,
                we take care of every detail so you can focus on the game. With a team of FIFA-certified professionals and a global network of connections
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutComp;