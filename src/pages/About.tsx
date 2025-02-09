import React from 'react';
import AboutComp from '../components/aboutUs';
import AboutCompMobile from '../components/aboutUsMobile';
import FooterBanner from '../components/FooterBanner';
import ImageWavyBanner from '../components/ImageWavyBanner';
import HeadingA from '../components/HeadingAbout';

const About: React.FC = () => {
  return (
    <div>
      <HeadingA mainHeading={'Top Players Agency: Shaping the Future of Football'} backgroundVideo="/videos/Aboutus.mp4"
        gradientOverlay="/images/gradient.png" rotateClass='-rotate-2'/>
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
        maxWidth="max-w-5xl"
        buttonText="Contact us"
        backgroundImage="/images/footerBanner.png"
      />

      <ImageWavyBanner/>
    </div>
  );
};

export default About;