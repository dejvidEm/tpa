import React, { useRef, useState } from "react";
import FooterBanner from "../components/FooterBanner";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ResponsiveSlider from "../components/Slider";
import Card from "../components/Card";
import PlayerTransfers from "../components/PlayerTransfers";
import ImageStrip from "../components/ImageStrip";

import { pageContent } from "../components/data";
import ImageWavyBanner from "../components/ImageWavyBanner";
import MobileTransfer from "../components/PlayerTransfersMobile";
import { BsFacebook, BsInstagram, BsLinkedin, BsYoutube } from "react-icons/bs";
import { AiFillTikTok } from "react-icons/ai";
import MainCompHome from "../components/MainCompHome";
import MainCompMobileHome from "../components/MainCompMobileHome";
import ImageCarousel from "../components/ImageCarousel";

// data kariet s podsránkami
const cardData = [
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

const Homepage: React.FC = () => {

  const stripData = [
    "/images/messi.png",
    "/images/ronaldo.png",
    "/images/mbape.png",
    "/images/haaland.png",
    "/images/kane.png",
    "/images/messi.png",
    "/images/ronaldo.png",
    "/images/mbape.png",
    "/images/haaland.png",
    "/images/kane.png",
  ];

  // Referencie pre oba slidery
  const coursesSliderRef = useRef<{
    handleNext: () => void;
    handlePrev: () => void;
  } | null>(null);

  const handleCoursesPrev = () => coursesSliderRef.current?.handlePrev();
  const handleCoursesNext = () => coursesSliderRef.current?.handleNext();

  const [activeKurzSlide, setActiveKurzSlide] = useState(0);
  const kurzSliderRef = useRef<HTMLDivElement | null>(null); // Rozlišujeme referenciu

  const handleKurzScroll = () => {
    if (kurzSliderRef.current) {
      const scrollLeft = kurzSliderRef.current.scrollLeft;
      const cardWidth = kurzSliderRef.current.offsetWidth;
      const index = Math.round(scrollLeft / cardWidth);
      setActiveKurzSlide(index);
    }
  };

  // Funkcia na presun na predchádzajúci slide
  const handleCoursesPrevMobile = () => {
    if (kurzSliderRef.current) {
      const newIndex =
        activeKurzSlide === 0 ? cardData.length - 1 : activeKurzSlide - 1;
      setActiveKurzSlide(newIndex);
      const newOffset = newIndex * (kurzSliderRef.current.offsetWidth * 0.85);
      kurzSliderRef.current.scrollTo({
        left: newOffset,
        behavior: "smooth",
      });
    }
  };

  // Funkcia na presun na ďalší slide
  const handleCoursesNextMobile = () => {
    if (kurzSliderRef.current) {
      const newIndex =
        activeKurzSlide === cardData.length - 1 ? 0 : activeKurzSlide + 1;
      setActiveKurzSlide(newIndex); // Aktualizuj stav aktívneho slidu
      const newOffset = newIndex * (kurzSliderRef.current.offsetWidth * 0.85);
      kurzSliderRef.current.scrollTo({
        left: newOffset,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="flex flex-col relative gap-0 bg-[#0A2125]">
      {/* Nadpis podnadpis a button */}
      <section className="hidden md:block">
        <MainCompHome
          nadpisStranky={pageContent.nadpisStranky}
          prvyText={pageContent.prvyText}
          lavyBadge={pageContent.lavyBadge}
          careerMessage={pageContent.careerMessage}
          pravyBadge={pageContent.pravyBadge}
          zltyNadpis={pageContent.zltyNadpis}
          pravText={pageContent.pravText}
          predNadpis={pageContent.predNadpis}
          image="/images/figures/homepage.png"
          icon1="/images/fifa_logo.png"
          icon2="/images/icons/check.png"
          icon3="/images/icons/target.png"
          buttonText="GET TO KNOW US"
        />
      </section>
      <section className="block md:hidden">
        <MainCompMobileHome
          buttonText="GET TO KNOW US"
          icon1="/images/fifa_logo.png"
          icon2="/images/icons/check.png"
          icon3="/images/icons/target.png"
          zltyNadpis={"a rising star or an established professional"}
          prvyText={
            "Top Players Agency is your trusted partner in football player representation. Our mission is simple: to unlock your potential and guide you toward a legacy of success both on and off the pitch."
          }
          nadpisStranky={"Certified agents"}
          prvyBadge={"Player focused approach"}
          druhyBadge={"Carreer Management"}
          druhyText="As a profesional football agency,
we specialize in comprehensive support, including career management, legal services, financial planning, and personal brand development."
          prednadpis={"Whether you´re"}
          podnadpisZltehoTextu={
            "Our team is dedicated to elevating your career with seamless, world-class representation."
          }
          playerImage={"/images/figures/homepage.png"}
        />
      </section>

      {/* Sekcia s kartami podstránok */}
      <section className="w-full mx-auto slider bg-[#0A2125] py-16 mb-32 px-8 hidden md:flex flex-col gap-12">
        <div className="flex max-w-[1500px] flex-col justify-between items-start px-4 md:px-8 lg:px-12">
          <div className="w-full flex flex-row pb-8 justify-between items-end">
            <div className="flex flex-col gap-2 w-3/5">
              <h1 className="text-3xl md:text-5xl font-extrabold mb-4 max-w-[600px] uppercase text-gold_primary bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text">
                <span className="ml-20">Comprehensive</span> services tailored
                to your needs
              </h1>
            </div>
            <div className="flex flex-col max-w-[400px] w-full gap-4">
              <p className="text-slate-100 text-xl">
                At Top Players Agency, we provide <br />
                end-to-end services designed to help you succeed on and off the
                pitch.
              </p>
              <div className="arrows flex flex-row gap-4 -ml-2">
                <div
                  className="text-gray-400 hover:text-gold_primary transition-all duration-300 rounded-lg p-2 cursor-pointer"
                  onClick={handleCoursesPrev}
                >
                  <FaArrowLeft size={24} />
                </div>
                <div
                  className="text-gray-400 hover:text-gold_primary transition-all duration-300 rounded-lg p-2 cursor-pointer"
                  onClick={handleCoursesNext}
                >
                  <FaArrowRight size={24} />
                </div>
              </div>
            </div>
          </div>
          {/* Slider s kartami podstránok */}
          <ResponsiveSlider
            ref={coursesSliderRef}
            items={cardData.map((data, index) => (
              <Card
                key={index}
                cardName={data.cardName}
                title={data.title}
                icon={data.icon}
                background={data.background} // Fallback na obrázok
                backgroundVideo={data.backgroundVideo} // Ak existuje, video má prednosť
                link={data.link}
              />
            ))}
            visibleItems={2}
            showPartialNext={true}
          />
        </div>
      </section>

      {/* Sekcia pre mobilné zariadenia s kartami podstránok */}
      <section className="bg-[#0A2125] w-full mx-auto py-16 block md:hidden">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold text-slate-100 pb-4 uppercase bg-gradient-to-r from-gold_secondary to-gold_primary inline-block text-transparent bg-clip-text">
            <span className="ml-16">Comprehensive</span> services tailored to
            your needs
          </h2>
          <div className="flex flex-row items-end">
            <p className="text-slate-100 md:pb-8">
              At Top Players Agency, we provide end-to-end services designed to
              help you succeed on and off the pitch.
            </p>

            <div className="arrows flex flex-row h-min">
              <div
                className="text-gray-500 hover:text-gold_primary pt-4 pl-4 pr-4 cursor-pointer transition"
                onClick={handleCoursesPrevMobile}
              >
                <FaArrowLeft size={24} />
              </div>
              <div
                className="text-gray-500 hover:text-gold_primary pt-4 pl-4 pr-4 cursor-pointer transition"
                onClick={handleCoursesNextMobile}
              >
                <FaArrowRight size={24} />
              </div>
            </div>
          </div>

          {/* Slider pre mobilné zariadenia */}
          <div
            ref={kurzSliderRef}
            className="mt-10 flex overflow-x-auto snap-x snap-mandatory space-x-4 scrollbar-hide md:hidden"
            style={{
              scrollSnapType: "x mandatory",
              WebkitOverflowScrolling: "touch",
              display: "flex",
            }}
            onScroll={handleKurzScroll}
          >
            {cardData.map((data, index) => (
              <div
                key={index}
                className="w-[85%] flex-shrink-0 snap-center"
                style={{ scrollSnapAlign: "center" }}
              >
                <Card
                  key={index}
                  cardName={data.cardName}
                  title={data.title}
                  icon={data.icon}
                  background={data.background}
                  backgroundVideo={data.backgroundVideo}
                  link={data.link}
                />
              </div>
            ))}
          </div>

          {/* Indikátory (pásiky) pre mobil  zatial skryty*/}
          <div className="hidden justify-center items-center mt-6 space-x-1 md:hidden">
            {cardData.map((_, index) => (
              <div
                key={index}
                className={`h-2 rounded transition-all duration-300 ${
                  activeKurzSlide === index
                    ? "bg-gray-300 w-10" // Aktívny pásik: tmavší a dlhší
                    : "bg-[#38412b] w-4" // Neaktívne pásiky: kratšie a svetlejšie
                }`}
              ></div>
            ))}
          </div>
        </div>
      </section>

      <section className=" hidden md:block">
        <PlayerTransfers />
      </section>

      <section className="block md:hidden">
        <MobileTransfer />
      </section>

      {/* Posuvny pas s partnermi */}
      <ImageCarousel/>

      <ImageStrip
        title={"Follow the Journey, Frame by Frame"}
        images={stripData}
      />

      <div className="grid grid-cols-2 gap-4 lg:hidden text-white pl-8 pr-8 mt-12">
                <a
                  href="https://www.instagram.com/topplayersagency"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2 bg-[#112A2F] p-4 rounded-lg">
                    <BsInstagram size={24} />
                    <span className="border-l border-gray-400 h-5 mx-2"></span>
                    <h3 className="text-gold_primary">Instagram</h3>
                  </div>
                </a>
      
                <a
                  href="https://www.facebook.com/topplayersagency/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2 bg-[#112A2F] p-4 rounded-lg">
                    <BsFacebook size={24} />
                    <span className="border-l border-gray-400 h-5 mx-2"></span>
                    <h3 className="text-gold_primary">Facebook</h3>
                  </div>
                </a>
      
                <a
                  href="https://www.youtube.com/@TopPlayersAgency"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2 bg-[#112A2F] p-4 rounded-lg">
                    <BsYoutube size={24} />
                    <span className="border-l border-gray-400 h-5 mx-2"></span>
                    <h3 className="text-gold_primary">YouTube</h3>
                  </div>
                </a>
      
                <a
                  href="https://www.linkedin.com/company/topplayersagency"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="flex items-center gap-2 bg-[#112A2F] p-4 rounded-lg">
                    <BsLinkedin size={24} />
                    <span className="border-l border-gray-400 h-5 mx-2"></span>
                    <h3 className="text-gold_primary">LinkedIn</h3>
                  </div>
                </a>
      
                <a
                  href="https://www.tiktok.com/@topplayersagency?_t=ZN-8tk6i5kbbYk&_r=1"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-span-2"
                >
                  <div className="flex items-center justify-center gap-2 bg-[#112A2F] p-4 rounded-lg">
                    <AiFillTikTok size={28} />
                    <span className="border-l border-gray-400 h-5 mx-2"></span>
                    <h3 className="text-gold_primary">TikTok</h3>
                  </div>
                </a>
              </div>

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

      {/* Wavy nadpis*/}
      <ImageWavyBanner />
    </div>
  );
};

export default Homepage;
