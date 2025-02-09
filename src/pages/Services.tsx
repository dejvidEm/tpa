import React from "react";
import Card from "../components/Card";
import HeadingS from "../components/HeadingServices";
import FooterBanner from "../components/FooterBanner";
import ImageWavyBanner from "../components/ImageWavyBanner";

interface CardData {
  cardName: string;
  title: string;
  icon: string;
  background?: string;
  backgroundVideo?: string;
  link: string;
}

const cardsData: CardData[] = [
  {
    cardName: "Player Representation",
    title: "Dedicated to the Details That Define Greatness",
    icon: "/images/icons/Representation.png",
    background: "/images/cards1.png",
    backgroundVideo: "videos/repre.mp4",
    link: "/services/player-representation",
  },
  {
    cardName: "Healthcare & Well-Being",
    title: "Empowering Your Game Through Optimal Health",
    icon: "/images/icons/Health.png",
    backgroundVideo: "videos/hc.mp4",
    link: "/services/healthcare-and-well-being",
  },
  {
    cardName: "Legal Services for Players",
    title: "Defending Your Rights, Protecting Your Career",
    icon: "/images/icons/retaz.png",
    backgroundVideo: "videos/hc2AndLegal1.mp4",
    link: "/services/legal-services-for-players",
  },
  {
    cardName: "Financial Management",
    title: "Where Financial Goals Meet Football Dreams",
    icon: "/images/icons/Finance.png",
    backgroundVideo: "videos/vilaVideo.mp4",
    link: "/services/financial-management",
  },
  {
    cardName: "Marketing & Brand Development",
    title: "Transforming Players into Global brands",
    icon: "/images/icons/hviezda.png",
    backgroundVideo: "videos/mark.mp4",
    link: "/services/marketing-and-brand-development",
  },
  {
    cardName: "Youth Football Representation",
    title: "We support young athletes with integrity and care",
    icon: "/images/icons/Youth.png",
    background: "/images/cards6.png",
    backgroundVideo: "videos/mladez.mp4",
    link: "/services/youth-football-representation",
  },
];

const ResponsiveCardsSection: React.FC = () => {
  return (
    <div className="bg-[#0A2125] pt-40">
    
    <HeadingS
        mainHeading={"Comprehensive services tailored to your needs"}
        maxWidth="max-w-[1200px]"
        rotateClass="-rotate-2"
        icon="/images/services.png"
      />

      <section className="grid items-center justify-center max-w-[1400px] mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 pl-4 md:pl-0 pt-16 pb-48">
        {cardsData.map((data, index) => (
          <Card
            key={index}
            cardName={data.cardName}
            title={data.title}
            icon={data.icon}
            background={data.background}
            backgroundVideo={data.backgroundVideo}
            link={data.link}
          />
        ))}
      </section>

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

      {/* Wavy nadpis*/}
      <ImageWavyBanner />
    </div>
  );
};

export default ResponsiveCardsSection;