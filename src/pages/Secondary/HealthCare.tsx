import React from 'react';

import { pageContent3 } from '../../components/data';
import Heading from '../../components/Heading';
import MainCompMobile from '../../components/MainCompMobile';
import FooterBanner from '../../components/FooterBanner';
import HealthSectionMobile from '../../components/HealthSectionMobile';
import MainCompH from '../../components/MainCompHealth';
import HealthSectionDesktop from '../../components/HealthSectionDesktop';

const HealthCare: React.FC = () => {
  return (
    <div>
      {/* Nadpis podnadpis a button */}
      <Heading
        mainHeading={"Empowering Your Game Through Optimal Health"}
        maxWidth="max-w-[1000px]"
        rotateClass="-rotate-2"
        backgroundVideo="/videos/hc.mp4"
        gradientOverlay="/images/gradient.png"
        icon='/images/icons/Health.png'
      />

      <section className="hidden md:block">
      <MainCompH
      nadpisStranky={pageContent3.nadpisStranky}
      prvyText={pageContent3.prvyText}
      lavyBadge={pageContent3.lavyBadge}
      careerMessage={pageContent3.careerMessage}
      pravyBadge={pageContent3.pravyBadge}
      zltyNadpis={pageContent3.zltyNadpis}
      pravText={pageContent3.pravText}
      predNadpis={pageContent3.predNadpis}
      image="/images/figures/zdravickoNew.png"
      icon1='/images/icons/Health.png'
      icon2='/images/icons/Physio.png'
      icon3='/images/icons/srdce.png'
      buttonText="CONTACT US"
    />
    </section>

    <section className="block md:hidden">
    <MainCompMobile
    buttonText="CONTACT US"
    icon1='/images/icons/Health.png'
    icon2='/images/icons/Physio.png'
    icon3='/images/icons/srdce.png'
  zltyNadpis={pageContent3.zltyNadpis}
    prvyText={pageContent3.careerMessage}
    nadpisStranky={pageContent3.nadpisStranky}
    prvyBadge={pageContent3.pravyBadge}
    druhyBadge={pageContent3.lavyBadge}
    druhyText={pageContent3.prvyText}
    prednadpis={pageContent3.predNadpis}
    podnadpisZltehoTextu={pageContent3.pravText}
  playerImage="/images/figures/healthcare.png"
/>
      </section>

      <section className='hidden md:flex'>
      <HealthSectionDesktop/>
</section>

<section className='flex md:hidden'>
<HealthSectionMobile/>
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
          "Defending Your Rights, Protecting Your Career"
        }
        smallHeading={
          "See What's Next"
        }
        smallFirst={true}
        maxWidth="max-w-5xl"
        height='h-[500px]'
        buttonText="Find out more"
        backgroundVideo='/videos/hc2AndLegal1.mp4'
        rotateClass='-rotate-2'
        link='/services/legal-services-for-players'
      />

    </div>
  );
};

export default HealthCare;