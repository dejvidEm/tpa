import React from 'react';

import { mainCompMobileContent, pageContent } from '../../components/data';
import Heading from '../../components/Heading';
import MainComp from '../../components/MainComp';
import MainCompMobile from '../../components/MainCompMobile';
import StepsComp from '../../components/StepsComp';
import StepsCompMobile from '../../components/StepsCompMobile';
import FooterBanner from '../../components/FooterBanner';

const features = [
  {
    number: "01",
    title: "CONTRACT REVIEW AND NEGOTIATION",
    text: "We meticulously negotiate and review contracts to ensure they reflect your best interests and safeguard your future.",
  },
  {
    number: "02",
    title: "DISPUTE RESOLUTION",
    text: "Should conflicts arise, we provide expert advice and representation to protect your rights and reputation.",
  },
  {
    number: "03",
    title: "INTELLECTUAL PROPERTY",
    text: "We help you secure and manage your personal brand, including image rights, trademarks, and digital presence.",
  },
  {
    number: "04",
    title: "COMPLIANCE AND REGULATIONS",
    text: "We ensure you remain compliant with league, federation, and governing body rules, including those specific to transfers, employment, and eligibility.",
  },
];

const PlayerRepresentation: React.FC = () => {
  return (
    <div>
      {/* Nadpis podnadpis a button */}
      <Heading
        mainHeading={"Dedicated to the Details That Define Greatness"}
        maxWidth="max-w-[800px]"
        rotateClass="-rotate-2"
        backgroundVideo="/videos/playerRepresentation.mp4"
        gradientOverlay="/images/gradient.png"
        icon='/images/icons/Representation.png'
      />

      <section className="hidden md:block">
      <MainComp
      nadpisStranky={pageContent.nadpisStranky}
      prvyText={pageContent.prvyText}
      lavyBadge={pageContent.lavyBadge}
      careerMessage={pageContent.careerMessage}
      pravyBadge={pageContent.pravyBadge}
      zltyNadpis={pageContent.zltyNadpis}
      pravText={pageContent.pravText}
      image="/images/figures/representation.png"
      icon1='/images/icons/Representation.png'
      icon2='/images/icons/sipka_hore.png'
      icon3='/images/icons/Global.png'
      buttonText="CONTACT US"
    />
    </section>

    <section className="block md:hidden">
    <MainCompMobile
    buttonText="CONTACT US"
  zltyNadpis={mainCompMobileContent.zltyNadpis}
  prvyText={mainCompMobileContent.prvyText}
  nadpisStranky={mainCompMobileContent.nadpisStranky}
  prvyBadge={mainCompMobileContent.prvyBadge}
  druhyBadge={mainCompMobileContent.druhyBadge}
  druhyText={mainCompMobileContent.druhyText}
  prednadpis={mainCompMobileContent.prednadpis}
  podnadpisZltehoTextu={mainCompMobileContent.podnadpisZltehoTextu}
  playerImage="/images/figures/representation.png"
/>
      </section>

      <section className="hidden md:block">
        <StepsComp
          heading="SPORTS LAW PROFESSIONALS SPECIALIZES IN"
          features={features}
          imageSrc="/images/ball.png"
          imageAlt="Football"
        />
      </section>
      <section className="block md:hidden">
        <StepsCompMobile
          heading="SPORTS LAW PROFESSIONALS SPECIALIZES IN"
          features={features}
        />
      </section>

      {/* Nadpis podnadpis a button */}
      <FooterBanner
        mainHeading={
          "Your journey to greatness starts here. Lets make it happen."
        }
        smallHeading={
          "Step into the future with Top Players Agency, where we turn ambition into achievement."
        }
        smallFirst={false}
        maxWidth="max-w-3xl"
        buttonText="Contact us"
        backgroundImage="/images/footerBanner.png"
      />

    </div>
  );
};

export default PlayerRepresentation;