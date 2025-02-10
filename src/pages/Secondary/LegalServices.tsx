import React from 'react';

import { pageContent4 } from '../../components/data';
import Heading from '../../components/Heading';
import MainComp from '../../components/MainComp';
import MainCompMobile from '../../components/MainCompMobile';
import StepsCompMobile from '../../components/StepsCompMobile';
import FooterBanner from '../../components/FooterBanner';
import StepsCompL from '../../components/StepsCompL';

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

const LegalServices: React.FC = () => {
  return (
    <div>
      {/* Nadpis podnadpis a button */}
      <Heading
        mainHeading={"Defending Your Rights, Protecting Your Career"}
        maxWidth="max-w-[950px]"
        rotateClass="-rotate-2"
        backgroundVideo="/videos/hc2AndLegal1.mp4"
        gradientOverlay="/images/gradient.png"
        icon="/images/icons/retaz.png"
      />

      <section className="hidden md:block">
      <MainComp
      nadpisStranky={pageContent4.nadpisStranky}
      prvyText={pageContent4.prvyText}
      lavyBadge={pageContent4.lavyBadge}
      careerMessage={pageContent4.careerMessage}
      pravyBadge={pageContent4.pravyBadge}
      zltyNadpis={pageContent4.zltyNadpis}
      pravText={pageContent4.pravText}
      predNadpis={pageContent4.predNadpis}
      image="/images/figures/legal.png"
      icon1="/images/icons/retaz.png"
      icon2="/images/icons/otlacok.png"
      icon3="/images/icons/shield.png"
      buttonText="CONTACT US"
    />
    </section>

    <section className="block md:hidden">
    <MainCompMobile
    buttonText="CONTACT US"
    icon1="/images/icons/retaz.png"
    icon2="/images/icons/otlacok.png"
    icon3="/images/icons/shield.png"
  zltyNadpis={pageContent4.zltyNadpis}
    prvyText={pageContent4.careerMessage}
    nadpisStranky={pageContent4.nadpisStranky}
    prvyBadge={pageContent4.pravyBadge}
    druhyBadge={pageContent4.lavyBadge}
    druhyText={pageContent4.prvyText}
    prednadpis={pageContent4.predNadpis}
    podnadpisZltehoTextu={pageContent4.pravText}
  playerImage="/images/figures/legal.png"
/>
      </section>

      <section className="hidden md:block">
        <StepsCompL
          heading="SPORTS LAW PROFESSIONALS SPECIALIZES IN"
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
        height="h-[860px]"
        bgOpacity="opacity-0"
        buttonText="Contact us"
        backgroundImage="/images/footerBanner.png"
      />

<FooterBanner
        mainHeading={
          "Where Financial Goals Meet Football Dreams"
        }
        smallHeading={
          "See What´s Next"
        }
        smallFirst={true}
        maxWidth="max-w-5xl"
        height='h-[500px]'
        buttonText="FIND OUT MORE"
        backgroundVideo='/videos/vilaVideo.mp4'
        rotateClass='-rotate-2'
        link='/services/financial-management'
      />

    </div>
  );
};

export default LegalServices;