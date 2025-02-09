
import FeatureItem from "../components/FeatureItem";

const AboutCompMobile = () => {
  return (
    <div className="bg-[#0A2125] text-white px-8 py-16 md:py-24 lg:py-32 flex flex-col items-center">
      <div className="flex flex-col items-center space-y-12 w-full ">
        <div className="flex flex-col items-center text-center space-y-4">
          <p className="mb-3 text-[16px] leading-[24px]">
            At Top Players Agency, we represent and nurture elite football
            talent. Our goal is to empower players at every stage of their
            careers by offering comprehensive support that goes beyond the
            pitch.
          </p>
          <h3 className="text-gold_primary mb-28">↓ SCROLL TO EXPLORE</h3>
        </div>

        <div className="text-left max-w-full">
          <h2 className="text-[12px] leading-[12px] font-light text-gray-300">
            We’re committed to building{" "}
            <span className="text-gold_primary text-4xl font-bold max-w-92 ">
              LEGACIES THAT LAST BEYOND FOOTBALL
            </span>
          </h2>
          <p className="text-[16px] leading-[24px] text-gray-300 mt-4">
            We craft your unique identity, manage your digital presence, and
            connect you with sponsorship opportunities to amplify your influence
          </p>
        </div>

        <div className="relative">
          <img
            src="/images/figures/ballB.png"
            alt="Ball"
            className="w-[750px] h-[550px] object-cover rounded-lg mr-20 md:absolute z-10"
            style={{
              maxWidth: "unset",
              marginBottom: "-50px",
              marginTop: "-230px",
            }}
          />
        </div>

        <div className="flex items-center gap-4 bg-[#0d2a30] p-4 rounded-lg">
          <img src="/images/icons/target.png" alt="" />
          <span className="border-l border-gray-400 h-5 mx-2"></span>
          <h3 className="text-gold_primary">Player focused approach</h3>
        </div>

        <div className="space-y-10">
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
    </div>
  );
};

export default AboutCompMobile;