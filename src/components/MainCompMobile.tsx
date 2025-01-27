import FeatureItem from "../components/FeatureItem";

const SportsLawProfessionals = () => {
  return (
    <div className="bg-blue_primary text-white px-8 py-16 md:py-24 lg:py-32 relative">
      <div className="max-w-[1600px] mx-auto flex flex-col md:flex-row md:space-x-12">
        <div className="flex-1 mb-12">
          <h1 className="text-4xl sm:text-5xl font-bold mb-8 text-gold_primary">
            SPORTS LAW PROFESSIONALS <br /> SPECIALIZES IN
          </h1>

          {/* Feature Items */}
          <div className="space-y-16 md:space-y-20 lg:space-y-24">
            <FeatureItem
              number="01"
              title="CONTRACT REVIEW AND NEGOTIATION"
              text="We meticulously negotiate and review contracts to ensure they reflect your best interests and safeguard your future."
            />
            <FeatureItem
              number="02"
              title="DISPUTE RESOLUTION"
              text="Should conflicts arise, we provide expert advice and representation to protect your rights and reputation."
            />
            <FeatureItem
              number="03"
              title="INTELLECTUAL PROPERTY"
              text="We help you secure and manage your personal brand, including image rights, trademarks, and digital presence."
            />
            <FeatureItem
              number="04"
              title="COMPLIANCE AND REGULATIONS"
              text="We ensure you remain compliant with league, federation, and governing body rules, including those specific to transfers, employment, and eligibility."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SportsLawProfessionals;