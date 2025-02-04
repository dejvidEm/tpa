import React from 'react';

import { mainCompMobileContent, pageContent } from '../../components/data';
import Heading from '../../components/Heading';
import MainComp from '../../components/MainComp';
import MainCompMobile from '../../components/MainCompMobile';
import FooterBanner from '../../components/FooterBanner';

const HealthCare: React.FC = () => {
  return (
    <div>
      {/* Nadpis podnadpis a button */}
      <Heading
        mainHeading={"Empowering Your Game Through Optimal Health"}
        maxWidth="max-w-[800px]"
        rotateClass="-rotate-2"
        backgroundVideo="/videos/healthCare.mp4"
        gradientOverlay="/images/gradient.png"
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
      image="/images/figures/healthcare.png"
    />
    </section>

    <section className="block md:hidden">
    <MainCompMobile
  zltyNadpis={mainCompMobileContent.zltyNadpis}
  prvyText={mainCompMobileContent.prvyText}
  nadpisStranky={mainCompMobileContent.nadpisStranky}
  prvyBadge={mainCompMobileContent.prvyBadge}
  druhyBadge={mainCompMobileContent.druhyBadge}
  druhyText={mainCompMobileContent.druhyText}
  prednadpis={mainCompMobileContent.prednadpis}
  podnadpisZltehoTextu={mainCompMobileContent.podnadpisZltehoTextu}
  playerImage="/images/figures/healthcare.png"
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

export default HealthCare;