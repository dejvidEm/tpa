import React, { useEffect, useState } from 'react';
import TransferCard from '../components/TransferCard';
import FooterBanner from '../components/FooterBanner';
import Heading from '../components/HeadingPT';
import ImageWavyBanner from '../components/ImageWavyBanner';
import { IoArrowBackSharp, IoArrowForwardSharp } from 'react-icons/io5';

// eslint-disable-next-line react-refresh/only-export-components
export const players = [
  {
    name: "Richard Grexa",
    team: "RSC Hamšík Academy",
    transferTeam: "FK Železiarne Podbrezová",
    transferDate: "January 2025",
    transferInfo: "From contract negotiation and legal protection to financial planning and personal brand development, we take care of every detail so you can focus on the game. With a team of FIFA-certified professionals and a global network of connections",
    image: "/images/realFotka.png",
    nationality: "Slovak",
    league: "First Youth Leage Slovakia (U17 - U19)",
    height: 181,
    weight: 75,
    preferredFoot: "Right",
    position: "Central Defender, Right Back Defender",
    age: 17,
  }
];

const Transfers: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage, setPostsPerPage] = useState(8);
  
  const updatePostsPerPage = () => {
    if (window.innerWidth < 768) {
      setPostsPerPage(2); // Mobilné zariadenia
    } else {
      setPostsPerPage(8); // Desktop
    }
  };

  useEffect(() => {
    // Nastavenie postsPerPage pri prvom načítaní
    updatePostsPerPage();

    // Pridanie listenera na zmenu veľkosti okna
    window.addEventListener('resize', updatePostsPerPage);

    // Vyčistenie event listeneru pri odmontovaní komponentu
    return () => {
      window.removeEventListener('resize', updatePostsPerPage);
    };
  }, []);

  const totalPages = Math.ceil(players.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const displayedPosts = players.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );
 
  return (
    <div className='bg-[#0A2125]'>
      <div className='mx-10'>
      <Heading mainHeading={'Successful transfers facilitated by our expertise'} maxWidth='max-w-[1200px]' rotateClass='-rotate-2'/>
      </div>


      <section className="bg-[#0A2125] py-8 px-8">
  <div className="max-w-[1500px] md:mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 gap-y-20">
    {displayedPosts.map((post, index) => (
      <TransferCard
        key={index} // Pridanie unikátneho kľúča pre každý prvok v zozname
        name={post.name}
        team={post.team}
        transferTeam={post.transferTeam}
        transferDate={post.transferDate}
        transferInfo={post.transferInfo}
        image={post.image}
        nationality={post.nationality}
        league={post.league}
        height={post.height.toString()}
        weight={post.weight.toString()}
        preferredFoot={post.preferredFoot}
        position={post.position}
        age={post.age}
      />
    ))}
  </div>
</section>

      {/* Pagination Section */}
            <section className="max-w-[1400px] mx-auto px-4 sm:px-20 py-8 flex flex-row justify-between items-center gap-4">
              <div className="flex mx-auto items-center justify-center gap-2">
                <button
                  className={`w-10 h-10 text-white flex items-center justify-center ${
                    currentPage === 1
                      ? "opacity-50 cursor-not-allowed"
                      : "hover:bg-gray-200"
                  }`}
                  disabled={currentPage === 1}
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <IoArrowBackSharp className="" size={18}/>
                </button>
                {Array.from({ length: totalPages }, (_, index) => index + 1).map(
        (page) => (
          <button
            key={page}
            className={`w-10 h-10 flex text-xl font-bold items-center justify-center rounded ${
              currentPage === page
                ? " text-gold_primary" // Aktuálna stránka svieti na žlto s čiernym textom
                : "hover:text-gold_primary text-white"
            }`}
            onClick={() => handlePageChange(page)}
          >
            {page}
          </button>
        )
      )}
                <button
                  className={`w-10 h-10 text-white flex items-center justify-center ${
                    currentPage === totalPages
                      ? "text-gray-400 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={currentPage === totalPages}
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <IoArrowForwardSharp className="hover:text-gold_primary" size={18}/>
                </button>
              </div>
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
        height="h-[860px]"
        bgOpacity="opacity-0"
        buttonText="Contact us"
        backgroundImage="/images/footerBanner.png"
      />

      {/* Wavy nadpis, ktory zatial nie je wavy*/}
      <ImageWavyBanner/>
    </div>
  );
};

export default Transfers;