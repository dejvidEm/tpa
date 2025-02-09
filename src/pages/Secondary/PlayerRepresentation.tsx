import React from 'react';

import { pageContent2 } from '../../components/data';
import Heading from '../../components/Heading';
import MainComp from '../../components/MainComp';
import MainCompMobile from '../../components/MainCompMobile';
import StepsComp from '../../components/StepsComp';
import StepsCompMobile from '../../components/StepsCompMobile';
import FooterBanner from '../../components/FooterBanner';

const features = [
  {
    number: "01",
    title: "CONTRACT NEGOTIATION",
    text: "We secure the best possible terms, ensuring your contracts reflect your true value and safeguard your future.",
  },
  {
    number: "02",
    title: "CAREER PLANNING",
    text: "With a strategic approach, we guide your journey, helping you achieve long-term goals in football and beyond.",
  },
  {
    number: "03",
    title: "GLOBAL OPORTUNITIES",
    text: "Leveraging our extensive network, we connect you with elite clubs, sponsorships, and partnerships worldwide.",
  },
  {
    number: "04",
    title: "PERSONALIZED SUPPORT",
    text: "From day-to-day logistics to career-defining decisions, we provide tailored solutions to meet your needs.",
  },
];

const PlayerRepresentation: React.FC = () => {
  return (
    <div>
      {/* Nadpis podnadpis a button */}
      <Heading
        mainHeading={"Dedicated to the Details That Define Greatness"}
        maxWidth="max-w-[1000px]"
        rotateClass="-rotate-2"
        backgroundVideo="/videos/repre.mp4"
        gradientOverlay="/images/gradient.png"
        icon='/images/icons/Representation.png'
      />

      <section className="hidden md:block">
      <MainComp
      nadpisStranky={pageContent2.nadpisStranky}
      prvyText={pageContent2.prvyText}
      lavyBadge={pageContent2.lavyBadge}
      careerMessage={pageContent2.careerMessage}
      pravyBadge={pageContent2.pravyBadge}
      zltyNadpis={pageContent2.zltyNadpis}
      pravText={pageContent2.pravText}
      predNadpis={pageContent2.predNadpis}
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
    icon1='/images/icons/Representation.png'
    icon2='/images/icons/sipka_hore.png'
    icon3='/images/icons/Global.png'
zltyNadpis={pageContent2.zltyNadpis}
  prvyText={pageContent2.careerMessage}
  nadpisStranky={pageContent2.nadpisStranky}
  prvyBadge={pageContent2.pravyBadge}
  druhyBadge={pageContent2.lavyBadge}
  druhyText={pageContent2.prvyText}
  prednadpis={pageContent2.predNadpis}
  podnadpisZltehoTextu={pageContent2.pravText}
  playerImage="/images/figures/representation.png"
/>
      </section>

      <section className="hidden md:block">
        <StepsComp
          heading="Our player representation services"
          features={features}
          imageSrc="/images/novaLopta.png"
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
        maxWidth="max-w-5xl"
        buttonText="Contact us"
        backgroundImage="/images/footerBanner.png"
      />

<FooterBanner
        mainHeading={
          "Empowering Your Game Through Optimal Health"
        }
        smallHeading={
          "See What's Next"
        }
        smallFirst={true}
        maxWidth="max-w-5xl"
        buttonText="Find out more"
        backgroundVideo='/videos/hc.mp4'
        rotateClass='-rotate-2'
      />

    </div>
  );
};

export default PlayerRepresentation;