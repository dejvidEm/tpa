import React from 'react';

import { pageContent7 } from '../../components/data';
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
        maxWidth="max-w-[1300px]"
        rotateClass="-rotate-2"
        backgroundVideo="/videos/mladez.mp4"
        gradientOverlay="/images/gradient.png"
        icon='/images/icons/Youth.png'
      />

      <section className="hidden md:block">
      <MainComp
      nadpisStranky={pageContent7.nadpisStranky}
      prvyText={pageContent7.prvyText}
      lavyBadge={pageContent7.lavyBadge}
      careerMessage={pageContent7.careerMessage}
      pravyBadge={pageContent7.pravyBadge}
      zltyNadpis={pageContent7.zltyNadpis}
      pravText={pageContent7.pravText}
      predNadpis={pageContent7.predNadpis}
      image="/images/figures/youth.png"
      icon1='/images/icons/Youth.png'
      icon2='/images/icons/home_smile.png'
      icon3='/images/icons/uniciapka.png'
      buttonText="CONTACT US"
    />
    </section>

    <section className="block md:hidden">
    <MainCompMobile
    buttonText="CONTACT US"
    icon1='/images/icons/Youth.png'
    icon2='/images/icons/home_smile.png'
    icon3='/images/icons/uniciapka.png'
zltyNadpis={pageContent7.zltyNadpis}
  prvyText={pageContent7.careerMessage}
  nadpisStranky={pageContent7.nadpisStranky}
  prvyBadge={pageContent7.pravyBadge}
  druhyBadge={pageContent7.lavyBadge}
  druhyText={pageContent7.prvyText}
  prednadpis={pageContent7.predNadpis}
  podnadpisZltehoTextu={pageContent7.pravText}
  playerImage="/images/figures/youth.png"
/>
      </section>

      <img src="/images/mladezSmile.png" alt="" className='absolute z-[0] -bottom-[500px] left-40 xl:left-80'/>
      
      <ImageWavyBanner/>

    </div>
  );
};

export default YouthRepre;