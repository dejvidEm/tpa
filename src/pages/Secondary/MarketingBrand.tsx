import React from 'react';

import { pageContent6 } from '../../components/data';
import Heading from '../../components/Heading';
import MainComp from '../../components/MainComp';
import MainCompMobile from '../../components/MainCompMobile';
import StepsCompMobile from '../../components/StepsCompMobile';
import FooterBanner from '../../components/FooterBanner';
import StepsCompM from '../../components/StepsCompM';

const features = [
  {
    number: "01",
    title: "Public Relations and Media Training",
    text: "Our team provides guidance on interacting with the media, handling interviews, and managing public appearances with confidence.",
  },
  {
    number: "02",
    title: "Personal Brand Strategy",
    text: "We craft a distinctive brand identity that reflects your values, personality, and career goals, ensuring your brand stands out.",
  },
  {
    number: "03",
    title: "Sponsorship And Endorsements",
    text: "We connect you with top-tier brands and secure lucrative endorsement deals that align with your image and aspirations.",
  },
  {
    number: "04",
    title: "Event and Campaign Management",
    text: "We organize events and campaigns that showcase your talents, build your profile, and deepen your connection with fans.",
  },
  {
    number: "04",
    title: "Social Media Management",
    text: "From content creation to audience engagement, we help you grow and manage your digital presence across platforms.",
  },
];

const MarketingBrand: React.FC = () => {
  return (
    <div>
      {/* Nadpis podnadpis a button */}
      <Heading
        mainHeading={"Transforming Players into Global brands"}
        maxWidth="max-w-[1100px]"
        rotateClass="-rotate-2"
        backgroundVideo="/videos/mark.mp4"
        gradientOverlay="/images/gradient.png"
        icon='/images/icons/hviezda.png'
      />

      <section className="hidden md:block">
      <MainComp
      nadpisStranky={pageContent6.nadpisStranky}
      prvyText={pageContent6.prvyText}
      lavyBadge={pageContent6.lavyBadge}
      careerMessage={pageContent6.careerMessage}
      pravyBadge={pageContent6.pravyBadge}
      zltyNadpis={pageContent6.zltyNadpis}
      pravText={pageContent6.pravText}
      predNadpis={pageContent6.predNadpis}
      image="/images/marketingNew.png"
      icon1='/images/icons/hviezda.png'
      icon2='/images/icons/zamok.png'
      icon3='/images/icons/oktagon.png'
      buttonText="CONTACT US"
    />
    </section>

    <section className="block md:hidden">
    <MainCompMobile
    buttonText="CONTACT US"
    icon1='/images/icons/hviezda.png'
    icon2='/images/icons/zamok.png'
    icon3='/images/icons/oktagon.png'
zltyNadpis={pageContent6.zltyNadpis}
  prvyText={pageContent6.careerMessage}
  nadpisStranky={pageContent6.nadpisStranky}
  prvyBadge={pageContent6.pravyBadge}
  druhyBadge={pageContent6.lavyBadge}
  druhyText={pageContent6.prvyText}
  prednadpis={pageContent6.predNadpis}
  podnadpisZltehoTextu={pageContent6.pravText}
  playerImage="/images/marketingNew.png"
/>
      </section>

      <section className="hidden md:block">
        <StepsCompM
          heading="   Our Marketing representation services"
          features={features}
          imageSrc="/images/novaLopta.png"
          imageAlt="Football"
        />
      </section>
      <section className="block md:hidden">
        <StepsCompMobile
          heading="OUR MARKETING REPRESENTATION SERVICES"
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
          "We support young athletes with integrity & care"
        }
        smallHeading={
          "See What's Next"
        }
        smallFirst={true}
        maxWidth="max-w-6xl"
        height='h-[700px]'
        buttonText="Find out more"
        backgroundVideo='/videos/mladez.mp4'
        rotateClass='-rotate-2'
        link='/services/youth-football-representation'
      />

    </div>
  );
};

export default MarketingBrand;