import React from 'react';

import { mainCompMobileContent, pageContent } from '../../components/data';
import Heading from '../../components/Heading';
import MainComp from '../../components/MainComp';
import MainCompMobile from '../../components/MainCompMobile';
import ImageWavyBanner from '../../components/ImageWavyBanner';

const YouthRepre: React.FC = () => {
  return (
    <div>
      {/* Nadpis podnadpis a button */}
      <Heading
        mainHeading={"We support young athletes with integrity & care"}
        maxWidth="max-w-[800px]"
        rotateClass="-rotate-2"
        backgroundImage='/images/hero7.png'
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
      image="/images/figures/youth.png"
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
  playerImage="/images/figures/youth.png"
/>
      </section>
      
      <ImageWavyBanner/>

    </div>
  );
};

export default YouthRepre;