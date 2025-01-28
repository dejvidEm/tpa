import { useState } from 'react';
import ButtonComponent from './ButtonComponent';
import { LuStar, LuPenTool, LuCode } from 'react-icons/lu';
import { Link } from 'react-router-dom';
import { CiGlobe } from 'react-icons/ci';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [mobileDropdownVisible, setMobileDropdownVisible] = useState<number | null>(null);
  const [timeoutId, setTimeoutId] = useState<number | null>(null);

  const handleNav = () => {
    setNav(!nav);
  };

  const toggleMobileDropdown = (id: number) => {
    setMobileDropdownVisible(mobileDropdownVisible === id ? null : id);
  };

  const navItems = [
    {
      id: 1,
      text: 'Services',
      dropdown: [
        { text: 'Player Representation', icon: <LuStar size={24} />, link: '/services/player-representation' },
        { text: 'Healthcare & Well-Being', icon: <LuPenTool size={24} />, link: '/services/healthcare-and-well-being' },
        { text: 'Legal Services for Players', icon: <LuCode size={24} />, link: '/services/legal-services-for-players' },
        { text: 'Financial Management', icon: <LuCode size={24} />, link: '/services/financial-management' },
        { text: 'Marketing & Brand Development', icon: <LuCode size={24} />, link: '/services/marketing-and-brand-development' },
        { text: 'Youth Football Representation', icon: <LuCode size={24} />, link: '/services/youth-football-representation' },
      ],
    },
    { id: 2, text: 'Players', link: '/players' },
    { id: 3, text: 'Transfers', link: '/transfers' },
    { id: 4, text: 'About Us', link: '/contact' },
  ];

  const handleMouseLeaveWithDelay = () => {
    const id = setTimeout(() => {
      setDropdownVisible(false);
    }, 200);
    setTimeoutId(id);
  };

  const handleMouseEnter = () => {
    if (timeoutId !== null) {
      clearTimeout(timeoutId);
    }
    setDropdownVisible(true);
  };

  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center h-24 mx-auto px-4 text-white z-[9999]">
      {/* Logo */}
      <Link to="/">
      <div className="flex items-center">
        <img src="/images/g8.png" alt="company logo" className="w-32" />
      </div>
      </Link>

      {/* Desktop Navigation */}
      <ul className="hidden md:flex absolute left-1/2 transform -translate-x-1/2">
        {navItems.map((item) => (
          <li
            key={item.id}
            className="relative p-4 cursor-pointer transition-all duration-300 hover:text-gold_primary font-semibold uppercase"
            onMouseEnter={() => item.dropdown && handleMouseEnter()}
            onMouseLeave={() => item.dropdown && handleMouseLeaveWithDelay()}
          >
            {item.link ? (
              <Link to={item.link}>{item.text}</Link>
            ) : (
              item.text
            )}
            {item.dropdown && dropdownVisible && (
              <ul
                className="absolute top-full left-0 bg-blue_primary opacity-95 text-white mt-2 rounded shadow-lg p-4 w-max"
                onMouseEnter={() => handleMouseEnter()}
                onMouseLeave={() => handleMouseLeaveWithDelay()}
              >
                {item.dropdown.map((subItem, index) => (
                  <li
                    key={index}
                    className="flex items-center p-2 pb-5 cursor-pointer"
                  >
                    <Link to={subItem.link} className="flex items-center">
                      <span className="mr-2 border-r-2 pr-4 border-opacity-30 border-gray-500">
                        {subItem.icon}
                      </span>{' '}
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

      {/* Right Side Buttons */}
      <div className="hidden md:flex items-center space-x-4">
        <Link to="/contact">
        <ButtonComponent variant="secondary" size="small">
          Contact
        </ButtonComponent>
        </Link>
        <div className="flex flex-row items-center gap-2">
                    <CiGlobe size={24} />
                    <h2>EN</h2>
                  </div>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className="block md:hidden cursor-pointer">
        {!nav && (
          <ButtonComponent variant="secondary" size="small">
            Menu
          </ButtonComponent>
        )}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden right-0 top-0 w-[100%] h-full border-l border-l-gray-900 bg-[#0A2125] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%]'
        }
      >
        {/* Close Button */}
        <div onClick={handleNav} className="flex justify-between p-4">
          {/* Mobile navbar Logo */}
          <div className="flex items-center">
            <img src="/images/g8.png" alt="company logo" className="w-32" />
          </div>
          <div>
            <ButtonComponent variant="secondary" size="small">
              Close
            </ButtonComponent>
          </div>
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map((item) => (
          <li
            key={item.id}
            className="px-4 pb-2 transition-all duration-300 cursor-pointer border-gray-600 font-bold text-3xl uppercase"
            onClick={() => item.dropdown && toggleMobileDropdown(item.id)}
          >
            {item.link ? (
              <Link to={item.link} className="hover:text-gold_primary" onClick={handleNav}>
                {item.text}
              </Link>
            ) : (
              <span className="hover:text-gold_primary">{item.text}</span>
            )}
            {item.dropdown && mobileDropdownVisible === item.id && (
              <ul className="pl-4 mt-2 text-lg">
                {item.dropdown.map((subItem, index) => (
                  <li
                    key={index}
                    className="flex items-center p-2 cursor-pointer"
                  >
                    <Link to={subItem.link} className="flex items-center" onClick={handleNav}>
                      <span className="mr-2 border-r-2 pr-3 border-opacity-30 border-gray-500">
                        {subItem.icon}
                      </span>{' '}
                      <span className="ml-2 hover:text-gold_primary">{subItem.text}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;