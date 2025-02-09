import { useState } from "react";
import ButtonComponent from "./ButtonComponent";
import { Link } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

interface NavItem {
  id: number;
  text: string;
  link: string;
  dropdown?: { text: string; icon: string; link: string }[];
}

const languages: string[] = [
  "EN",
  "SK",
  "CZ",
  "ES",
  "IT",
  "DE",
  "PL",
  "FR",
  "NL",
];

const Navbar = () => {
  const [nav, setNav] = useState<boolean>(false);
  const [servicesOpen, setServicesOpen] = useState<boolean>(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState<boolean>(false);
  const [selectedLanguage, setSelectedLanguage] = useState<string>("EN");
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [closeTimeout, setCloseTimeout] = useState<number | null>(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const handleMouseEnter = () => {
    if (closeTimeout) {
      clearTimeout(closeTimeout);
      setCloseTimeout(null);
    }
    setServicesOpen(true);
  };

  const handleMouseLeave = () => {
    const timeout = window.setTimeout(() => {
      setServicesOpen(false);
    }, 300); // Delay of 300ms before closing
    setCloseTimeout(timeout);
  };

  const handleLanguageSelect = (lang: string) => {
    setSelectedLanguage(lang);
    setIsDropdownOpen(false);
  };

  const navItems: NavItem[] = [
    { id: 0, text: "HOME", link: "/" },
    {
      id: 1,
      text: "SERVICES",
      link: "/services",
      dropdown: [
        {
          text: "Player Representation",
          icon: "/images/icons/Representation.png",
          link: "/services/player-representation",
        },
        {
          text: "Healthcare & Well-Being",
          icon: "/images/icons/Health.png",
          link: "/services/healthcare-and-well-being",
        },
        {
          text: "Legal Services for Players",
          icon: "/images/icons/retaz.png",
          link: "/services/legal-services-for-players",
        },
        {
          text: "Financial Management",
          icon: "/images/icons/Finance.png",
          link: "/services/financial-management",
        },
        {
          text: "Marketing & Brand Development",
          icon: "/images/icons/hviezda.png",
          link: "/services/marketing-and-brand-development",
        },
        {
          text: "Youth Football Representation",
          icon: "/images/icons/Youth.png",
          link: "/services/youth-football-representation",
        },
      ],
    },
    { id: 2, text: "PLAYERS", link: "/players" },
    { id: 3, text: "TRANSFERS", link: "/transfers" },
    { id: 4, text: "ABOUT US", link: "/about" },
  ];

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center h-24 mx-auto px-6 md:px-16 text-white z-[9999]">
      <Link to="/">
        <img src="/images/g8.png" alt="company logo" className="w-32" />
      </Link>

      <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="relative py-2 px-11 cursor-pointer transition-all duration-300 hover:text-gold_primary font-semibold uppercase"
            onMouseEnter={() => item.dropdown && handleMouseEnter()}
            onMouseLeave={() => item.dropdown && handleMouseLeave()}
          >
            <Link to={item.link}>{item.text}</Link>
            {item.dropdown && servicesOpen && (
              <ul className="absolute top-full left-0 bg-blue_primary opacity-95 text-white mt-2 rounded shadow-lg p-4 w-max">
                {item.dropdown.map((subItem, index) => (
                  <li
                    key={index}
                    className="flex items-center p-2 pb-5 cursor-pointer"
                  >
                    <Link to={subItem.link} className="flex items-center">
                      <span className="mr-2 border-r-2 pr-4 border-opacity-30 border-gray-500">
                        <img src={subItem.icon} alt=""/>
                      </span>
                      <span className="hover:text-gold_primary pl-2 normal-case font-light">
                        {subItem.text}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      <div className="hidden md:flex items-center space-x-4 relative">
        <Link to="/contact">
          <ButtonComponent variant="secondary" size="small">
            Contact
          </ButtonComponent>
        </Link>
        <div
          className="flex flex-row items-center gap-2 cursor-pointer"
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
        >
          <CiGlobe size={24} />
          <h2>{selectedLanguage}</h2>
        </div>
        {isDropdownOpen && (
          <div className="absolute top-10 right-0 bg-[#0A2125] shadow-md rounded-md border border-gray-200 z-10">
            {languages
              .filter((lang) => lang !== selectedLanguage)
              .map((lang) => (
                <div
                  key={lang}
                  className="px-4 m-1 py-2 hover:bg-[#11353b] cursor-pointer text-white"
                  onClick={() => handleLanguageSelect(lang)}
                >
                  {lang}
                </div>
              ))}
          </div>
        )}
      </div>

      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        <ButtonComponent variant="secondary" size="small">
          {nav ? "Close" : "Menu"}
        </ButtonComponent>
      </div>

      <ul
        className={`fixed md:hidden top-0 right-0 w-full h-full bg-[#0A2125] transform transition-transform duration-500 ease-in-out ${
          nav ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between p-4">
          <img src="/images/g8.png" alt="company logo" className="h-12" />
          <ButtonComponent variant="secondary" size="small" onClick={handleNav}>
            Close
          </ButtonComponent>
        </div>

        {navItems.map((item) => (
          <li key={item.id} className="px-4 py-2">
            <div className="flex justify-between items-center">
              <Link
                to={item.link}
                onClick={handleNav}
                className="text-xl font-bold hover:text-gold_primary"
              >
                {item.text}
              </Link>
              {item.dropdown && (
                <button
                  onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                  className="ml-2"
                >
                  {mobileServicesOpen ? <FaChevronUp /> : <FaChevronDown />}
                </button>
              )}
            </div>
            {item.dropdown && mobileServicesOpen && (
              <ul className="pl-1 mt-2">
                {item.dropdown.map((subItem, index) => (
                  <li key={index} className="py-1.5">
                    <Link
                      to={subItem.link}
                      onClick={handleNav}
                      className="flex items-center hover:text-gold_primary"
                    >
                      <span className="border-r-2 border-opacity-15 border-gray-200"><img src={subItem.icon} alt="icon" className="w-6 mr-3" /></span>
                      <span className="ml-3 font-extralight">{subItem.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}

<div className="absolute flex flex-row justify-between w-full items-center px-4 bottom-10">
      <li className="px-4 py-2 list-none">
        <Link to="/contact" onClick={handleNav}>
          <ButtonComponent variant="secondary" size="small">
            Contact
          </ButtonComponent>
        </Link>
      </li>

      <li className="px-4 py-2 list-none relative">
        <div
          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          className="flex items-center cursor-pointer gap-2"
        >
          <CiGlobe size={24} />
          <h2>{selectedLanguage}</h2>
        </div>
        {isDropdownOpen && (
          <div className="absolute bottom-10 right-0 bg-[#0A2125] shadow-md rounded-md border border-gray-200 z-10">
            {languages
              .filter((lang) => lang !== selectedLanguage)
              .map((lang) => (
                <div
                  key={lang}
                  onClick={() => handleLanguageSelect(lang)}
                  className="px-4 m-1 py-2 hover:bg-[#11353b] cursor-pointer text-white"
                >
                  {lang}
                </div>
              ))}
          </div>
        )}
      </li>
    </div>
      </ul>
    </div>
  );
};

export default Navbar;