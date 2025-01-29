import React, { useRef, useState } from "react";
import FooterBanner from "../components/FooterBanner";
import Heading from "../components/Heading";
import Partners from "../components/Partnership";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import ResponsiveSlider from "../components/Slider";
import Card from "../components/Card";
import { BsAsterisk } from "react-icons/bs";
import PlayerTransfers from "../components/PlayerTransfers";
import ImageStrip from "../components/ImageStrip";
import MainComp from "../components/MainComp";
import MainCompMobile from "../components/MainCompMobile";

import { pageContent } from "../components/data";
import ImageWavyBanner from "../components/ImageWavyBanner";

// data kariet s podsránkami
const cardData = [
  {
    cardName: "Player Representation",
    title: "Dedicated to the Details That Define Greatness",
    icon: <BsAsterisk size={20} className="text-white" />,
    background: "/images/cards1.png",
  },
  {
    cardName: "Healthcare & Well-Being",
    title: "Empowering Your Game Through Optimal Health",
    icon: <BsAsterisk size={20} className="text-white" />,
    background: "/images/cards2.png",
  },
  {
    cardName: "Legal Services for Players",
    title: "Defending Your Rights, Protecting Your Career",
    icon: <BsAsterisk size={20} className="text-white" />,
    background: "/images/cards3.png",
  },
  {
    cardName: "Financial Management",
    title: "Where Financial Goals Meet Football Dreams",
    icon: <BsAsterisk size={20} className="text-white" />,
    background: "/images/cards4.png",
  },
  {
    cardName: "Marketing & Brand Development",
    title: "Transforming Players into Global brands",
    icon: <BsAsterisk size={20} className="text-white" />,
    background: "/images/cards5.png",
  },
  {
    cardName: "Youth Football Representation",
    title: "We support young athletes with integrity and care",
    icon: <BsAsterisk size={20} className="text-white" />,
    background: "/images/cards6.png",
  },
];

const Homepage: React.FC = () => {
  const logos = [
    "/images/fifa_logo.png",
    "/images/sfz_logo.png",
    "/images/fifa_logo.png",
    "/images/sfz_logo.png",
    "/images/fifa_logo.png",
    "/images/sfz_logo.png",
    "/images/fifa_logo.png",
    "/images/sfz_logo.png",
    "/images/fifa_logo.png",
    "/images/sfz_logo.png",
    "/images/fifa_logo.png",
  ];

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
    <div className="flex flex-col gap-0 bg-[#0A2125]">
      {/* Nadpis podnadpis a button */}
      <Heading
        mainHeading={"Where Top Talent Meets Global Opportunities"}
        maxWidth="max-w-[800px]"
        rotateClass="-rotate-2"
        backgroundImage="/images/hero1.png"
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
      image="/images/figures/homepage.png"
    />
      </section>
      <section className="block md:hidden">
        <MainCompMobile
          zltyNadpis={"a rising star or an established professional"}
          prvyText={"Top Players Agency is your trusted partner in football player representation. Our mission is simple: to unlock your potential and guide you toward a legacy of success both on and off the pitch."}
          nadpisStranky={"Certified agents"}
          prvyBadge={"Player focused approach"}
          druhyBadge={"Carreer Management"}
          druhyText="As a profesional football agency,
we specialize in comprehensive support, including career management, legal services, financial planning, and personal brand development."
          prednadpis={"Whether youre"}
          podnadpisZltehoTextu={"Our team is dedicated to elevating your career with seamless, world-class representation."}
          playerImage={"/images/figures/homepage.png"}
        />
      </section>

      {/* Sekcia s kartami podstránok */}
      <section className="w-full mx-auto slider bg-[#0A2125] py-16 px-8 hidden md:flex flex-col gap-12">
  <div className="flex max-w-[1500px] mx-auto flex-col justify-between items-start px-4 md:px-8 lg:px-12">
    <div className="w-full flex flex-row pb-8 justify-between items-end">
      <div className="flex flex-col gap-2 w-3/5">
        <h1 className="text-3xl md:text-6xl font-bold mb-4 max-w-[600px] uppercase text-gold_primary">
          <span className="ml-20">Comprehensive</span> services tailored to your needs
        </h1>
      </div>
      <div className="flex flex-col max-w-[400px] w-full gap-4">
        <p className="text-slate-100 text-xl">
          At Top Players Agency, we provide <br />
          end-to-end services designed to help you succeed on and off the pitch.
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
          background={data.background}
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
          <h2 className="text-3xl md:text-6xl font-bold text-slate-100 pb-4 uppercase">
            Comprehensive services tailored to your needs
          </h2>
          <div className="flex flex-row items-end">
            <p className="text-slate-100  md:pb-8">
              At Top Players Agency, we provide end-to-end services designed to
              help you succeed on and off the pitch.
            </p>

            <div className="arrows flex flex-row gap-4 h-min">
              <div
                className="bg-slate-100 rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition"
                onClick={handleCoursesPrevMobile}
              >
                <FaArrowLeft />
              </div>
              <div
                className="bg-slate-100 rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition"
                onClick={handleCoursesNextMobile}
              >
                <FaArrowRight />
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
                />
              </div>
            ))}
          </div>

          {/* Indikátory (pásiky) pre mobil */}
          <div className="flex justify-center items-center mt-6 space-x-1 md:hidden">
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

      <PlayerTransfers />

      {/* Posuvny pas s partnermi */}
      <Partners logos={logos} title={"Built on Trust, Driven by Partnership"} />

      <ImageStrip
        title={"Follow the Journey, Frame by Frame"}
        images={stripData}
      />

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

      {/* Wavy nadpis, ktory zatial nie je wavy*/}
      <ImageWavyBanner/>
    </div>
  );
};

export default Homepage;
