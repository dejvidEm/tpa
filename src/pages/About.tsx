import React from 'react';
import Heading from '../components/Heading';
import MainComp from '../components/MainComp';
import { pageContent } from '../components/data';

const About: React.FC = () => {
  return (
    <div>
      <Heading mainHeading={'Top Players Agency: Shaping the Future of Football'} backgroundImage='/images/hero8.png'/>

      <section className="hidden md:block">
      <MainComp
      nadpisStranky={pageContent.nadpisStranky}
      prvyText={pageContent.prvyText}
      lavyBadge={pageContent.lavyBadge}
      careerMessage={pageContent.careerMessage}
      pravyBadge={pageContent.pravyBadge}
      zltyNadpis={pageContent.zltyNadpis}
      pravText={pageContent.pravText}
      image="/images/figures/ballB.png"
    />
      </section>
    </div>
  );
};

export default About;