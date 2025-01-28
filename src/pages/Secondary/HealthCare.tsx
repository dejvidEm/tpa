import React from 'react';

import { pageContent } from '../../components/data';
import Heading from '../../components/Heading';
import MainComp from '../../components/MainComp';

const HealthCare: React.FC = () => {
  return (
    <div>
      {/* Nadpis podnadpis a button */}
      <Heading
        mainHeading={"Empowering Your Game Through Optimal Health"}
        maxWidth="max-w-[800px]"
        rotateClass="-rotate-2"
        backgroundImage='/images/hero3.png'
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
    </div>
  );
};

export default HealthCare;