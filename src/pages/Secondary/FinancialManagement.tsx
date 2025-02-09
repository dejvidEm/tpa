import React from 'react';

import { pageContent5 } from '../../components/data';

import Heading from '../../components/Heading';
import MainComp from '../../components/MainComp';
import MainCompMobile from '../../components/MainCompMobile';
import StepsCompMobile from '../../components/StepsCompMobile';
import FooterBanner from '../../components/FooterBanner';
import StepsCompF from '../../components/StepsCompFinance';

const features = [
  {
    number: "01",
    title: "Financial Planning and Budgeting",
    text: "We meticulously negotiate and review contracts to ensure they reflect your best interests and safeguard your future.",
  },
  {
    number: "02",
    title: "Investment Strategies",
    text: "Our team works with trusted financial advisors to identify smart investment opportunities that grow your wealth responsibly.",
  },
  {
    number: "03",
    title: "TAX ADVISORY",
    text: "We ensure compliance with local and international tax regulations while optimizing your financial structure to protect your earnings.",
  },
  {
    number: "04",
    title: "Savings and Retirement Planning",
    text: "We guide you in building a financial safety net and preparing for life after football.",
  },
  {
    number: "05",
    title: "Debt Management and Protection",
    text: "We help safeguard your finances from unnecessary risks while ensuring your obligations are managed efficiently.",
  },
];

const FinancialManagement: React.FC = () => {
  return (
    <div>
      {/* Nadpis podnadpis a button */}
      <Heading
        mainHeading={"Where Financial Goals Meet Football Dreams"}
        maxWidth="max-w-[900px]"
        rotateClass="-rotate-2"
        backgroundVideo="/videos/vilaVideo.mp4"
        gradientOverlay="/images/gradient.png"
        icon="/images/icons/Finance.png"
      />

      <section className="hidden md:block">
      <MainComp
      nadpisStranky={pageContent5.nadpisStranky}
      prvyText={pageContent5.prvyText}
      lavyBadge={pageContent5.lavyBadge}
      careerMessage={pageContent5.careerMessage}
      pravyBadge={pageContent5.pravyBadge}
      zltyNadpis={pageContent5.zltyNadpis}
      pravText={pageContent5.pravText}
      predNadpis={pageContent5.predNadpis}
      image="/images/figures/financial.png"
      icon1="/images/icons/Finance.png"
      icon2="/images/icons/safe.png"
      icon3="/images/icons/graf_kolac.png"
      buttonText="CONTACT US"
    />
    </section>

    <section className="block md:hidden">
    <MainCompMobile
    buttonText="CONTACT US"
    icon1="/images/icons/Finance.png"
    icon2="/images/icons/safe.png"
    icon3="/images/icons/graf_kolac.png"
  zltyNadpis={pageContent5.zltyNadpis}
  prvyText={pageContent5.careerMessage}
  nadpisStranky={pageContent5.nadpisStranky}
  prvyBadge={pageContent5.pravyBadge}
  druhyBadge={pageContent5.lavyBadge}
  druhyText={pageContent5.prvyText}
  prednadpis={pageContent5.predNadpis}
  podnadpisZltehoTextu={pageContent5.pravText}
  playerImage="/images/figures/financial.png"
/>
      </section>

      <section className="hidden md:block">
        <StepsCompF
          heading="FINANCIAL PROFESSIONALS SPECIALIZES IN"
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
          "Transforming Players into Global brands"
        }
        smallHeading={
          "See What's Next"
        }
        smallFirst={true}
        maxWidth="max-w-5xl"
        buttonText="Find out more"
        backgroundVideo='/videos/mark.mp4'
        rotateClass='-rotate-2'
      />

    </div>
  );
};

export default FinancialManagement;