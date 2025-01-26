import React, { useState } from 'react';
import PlayerCard from '../components/PlayerCard';

export const players = [
  {
    name: "Lionel Messi",
    team: "Inter Miami",
    image: "/images/messi.png",
    nationality: "Argentina",
    league: "MLS",
    height: 170,
    weight: 72,
    preferredFoot: "Left",
    position: "Forward",
    age: 36,
  },
  {
    name: "Cristiano Ronaldo",
    team: "Al-Nassr",
    image: "/images/ronaldo.png",
    nationality: "Portugal",
    league: "Saudi Pro League",
    height: 187,
    weight: 83,
    preferredFoot: "Right",
    position: "Forward",
    age: 38,
  },
  {
    name: "Kylian Mbappé",
    team: "Paris Saint-Germain",
    image: "/images/mbape.png",
    nationality: "France",
    league: "Ligue 1",
    height: 178,
    weight: 73,
    preferredFoot: "Right",
    position: "Forward",
    age: 25,
  },
  {
    name: "Erling Haaland",
    team: "Manchester City",
    image: "/images/haaland.png",
    nationality: "Norway",
    league: "Premier League",
    height: 195,
    weight: 88,
    preferredFoot: "Left",
    position: "Forward",
    age: 23,
  },
  {
    name: "Robert Lewandowski",
    team: "FC Barcelona",
    image: "/images/mbape.png",
    nationality: "Poland",
    league: "La Liga",
    height: 185,
    weight: 81,
    preferredFoot: "Right",
    position: "Forward",
    age: 35,
  },
  {
    name: "Kevin De Bruyne",
    team: "Manchester City",
    image: "/images/haaland.png",
    nationality: "Belgium",
    league: "Premier League",
    height: 181,
    weight: 68,
    preferredFoot: "Right",
    position: "Midfielder",
    age: 32,
  },
  {
    name: "Neymar Jr",
    team: "Al-Hilal",
    image: "/images/messi.png",
    nationality: "Brazil",
    league: "Saudi Pro League",
    height: 175,
    weight: 68,
    preferredFoot: "Right",
    position: "Forward",
    age: 31,
  },
  {
    name: "Luka Modrić",
    team: "Real Madrid",
    image: "/images/ronaldo.png",
    nationality: "Croatia",
    league: "La Liga",
    height: 172,
    weight: 66,
    preferredFoot: "Right",
    position: "Midfielder",
    age: 38,
  },
  {
    name: "Mohamed Salah",
    team: "Liverpool",
    image: "/images/messi.png",
    nationality: "Egypt",
    league: "Premier League",
    height: 175,
    weight: 71,
    preferredFoot: "Left",
    position: "Forward",
    age: 31,
  },
  {
    name: "Harry Kane",
    team: "Bayern Munich",
    image: "/images/messi.png",
    nationality: "England",
    league: "Bundesliga",
    height: 188,
    weight: 86,
    preferredFoot: "Right",
    position: "Forward",
    age: 30,
  },
];

const Players: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 8;

  const totalPages = Math.ceil(players.length / postsPerPage);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const displayedPosts = players.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  const startPostIndex = (currentPage - 1) * postsPerPage + 1;
  const endPostIndex = Math.min(currentPage * postsPerPage, players.length);
 
  return (
    <div>
      <section className="bg-blue_primary py-8">
  <div className="max-w-[1600px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 gap-y-20">
    {displayedPosts.map((post, index) => (
      <PlayerCard
        key={index} // Pridanie unikátneho kľúča pre každý prvok v zozname
        name={post.name}
        team={post.team}
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
        <div className="text-sm text-gray-500">
          {`${startPostIndex}-${endPostIndex} from ${players.length} total`}
        </div>
        <div className="flex items-center gap-2">
          <button
            className={`w-10 h-10 flex items-center justify-center border rounded ${
              currentPage === 1
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
          >
            &lsaquo;
          </button>
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (page) => (
              <button
                key={page}
                className={`w-10 h-10 flex items-center justify-center border rounded ${
                  currentPage === page
                    ? "border-[#1C2820] text-[#1C2820]"
                    : "hover:bg-gray-200"
                }`}
                onClick={() => handlePageChange(page)}
              >
                {page}
              </button>
            )
          )}
          <button
            className={`w-10 h-10 flex items-center justify-center border rounded ${
              currentPage === totalPages
                ? "text-gray-400 cursor-not-allowed"
                : "hover:bg-gray-200"
            }`}
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
          >
            &rsaquo;
          </button>
        </div>
      </section>
    </div>
  );
};

export default Players;