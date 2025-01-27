import FeatureItem from "../components/FeatureItem";

const SportsLawProfessionals = () => {
  return (
    <div className="bg-[#0D1B2A] text-white px-8 py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:space-x-12">
        <div className="flex-1 mb-12">
          <h1 className="flex justify-start max-w-96 text-5xl font-bold mb-12 text-heading">
            SPORTS LAW PROFESSIONALS <br /> SPECIALIZES IN
          </h1>

          <div className="space-y-64 ml-80 mt-32 max-w-[490px]">
            <FeatureItem
              number="02"
              title="DISPUTE RESOLUTION"
              text="Should conflicts arise, we provide expert advice and representation to protect your rights and reputation."
            />

            <FeatureItem
              number="04"
              title="COMPLIANCE AND REGULATIONS"
              text="We ensure you remain compliant with league, federation, and governing body rules, including those specific to transfers, employment, and eligibility."
            />
          </div>
        </div>

        <div className="flex-1 space-y-64 max-w-[700px] mt-16">
          <FeatureItem
            number="01"
            title="CONTRACT REVIEW AND NEGOTIATION"
            text="We meticulously negotiate and review contracts to ensure they reflect your best interests and safeguard your future."
          />
          <FeatureItem
            number="03"
            title="INTELLECTUAL PROPERTY"
            text="We help you secure and manage your personal brand, including image rights, trademarks, and digital presence."
          />
        </div>
      </div>

      <img
        src="/src/photos/ball.png"
        alt="Football"
        className="absolute top-[60%] left-[15%] w-20 h-20 transform -translate-y-1/2"
      />
    </div>
  );
};

export default SportsLawProfessionals;