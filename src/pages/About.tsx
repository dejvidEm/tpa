import React from 'react';
import Heading from '../components/HeadingPT';
import AboutComp from '../components/aboutUs';
import AboutCompMobile from '../components/aboutUsMobile';
import FooterBanner from '../components/FooterBanner';
import ImageWavyBanner from '../components/ImageWavyBanner';

const About: React.FC = () => {
  return (
    <div>
      <Heading mainHeading={'Top Players Agency: Shaping the Future of Football'} backgroundVideo="/videos/homepage.mp4"
        gradientOverlay="/images/gradient.png" rotateClass='-rotate-2' icon='/images/icons/13.png'/>

      <section className="hidden md:block">
      <AboutComp/>
      </section>

      <section className="block md:hidden">
      <AboutCompMobile/>
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

      <ImageWavyBanner/>
    </div>
  );
};

export default About;