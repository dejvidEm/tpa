import React from 'react';
import FooterBanner from '../components/FooterBanner';

const Homepage: React.FC = () => {
  return (
    <div className='flex flex-col gap-0'>
        {/* Nadpis podnadpis a button */}
        <FooterBanner mainHeading={'Your journey to greatness starts here. Lets make it happen.'} smallHeading={'Step into the future with Top Players Agency, where we turn ambition into achievement.'} smallFirst={false} maxWidth='max-w-3xl' buttonText='Contact us'/>
        {/* Podnadpis potom Nadpis a button */}
        <FooterBanner mainHeading={'Transforming Players into Global brands'} smallHeading={'See Whats Next'} smallFirst={true} buttonText='Find out more' rotateClass='-rotate-2' maxWidth='max-w-3xl'/>
        {/* Wavy nadpis, ktory zatial nie je wavy*/}
        <FooterBanner mainHeading={'Fifa certified to represent minors'} maxWidth='w-full'/>
    </div>
  );
};

export default Homepage;