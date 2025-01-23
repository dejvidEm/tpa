import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import ButtonComponent from './ButtonComponent';

const Navbar = () => {
  // State to manage the navbar's visibility
  const [nav, setNav] = useState(false);

  // Toggle function to handle the navbar's display
  const handleNav = () => {
    setNav(!nav);
  };

  // Array containing navigation items
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'Company' },
    { id: 3, text: 'Resources' },
    { id: 4, text: 'About' },
    { id: 5, text: 'Contact' },
  ];

  return (
    <div className='w-full bg-[#0A2125] flex justify-between items-center h-24 mx-auto px-4 text-white'>
      {/* Logo */}
      <div className='flex items-center'>
        <img src="/images/logo.png" alt="company logo" className='w-32'/>
      </div>

      {/* Desktop Navigation */}
      <ul className='hidden md:flex absolute left-1/2 transform -translate-x-1/2'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 hover:bg-[#00df9a] rounded-xl m-2 cursor-pointer duration-300 hover:text-black'
          >
            {item.text}
          </li>
        ))}
      </ul>

      {/* Right Side Buttons */}
      <div className='hidden md:flex items-center space-x-4'>
        <ButtonComponent variant='secondary' size='small'>Contact</ButtonComponent>
        <span className='text-xl font-bold cursor-pointer'>SK</span>
      </div>

      {/* Mobile Navigation Icon */}
      <div onClick={handleNav} className='block md:hidden cursor-pointer'>
        {!nav && <AiOutlineMenu size={20} />}
      </div>

      {/* Mobile Navigation Menu */}
      <ul
        className={
          nav
            ? 'fixed md:hidden right-0 top-0 w-[60%] h-full border-l border-l-gray-900 bg-[#000300] ease-in-out duration-500'
            : 'ease-in-out w-[60%] duration-500 fixed top-0 bottom-0 right-[-100%]'
        }
      >
        {/* Close Button */}
        <div className='flex justify-end p-4'>
          <AiOutlineClose size={20} className='cursor-pointer' onClick={handleNav} />
        </div>

        {/* Mobile Navigation Items */}
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 border-b rounded-xl hover:bg-[#00df9a] duration-300 hover:text-black cursor-pointer border-gray-600'
          >
            {item.text}
          </li>
        ))}

        {/* Mobile Right Side Buttons */}
        <div className='p-4 flex flex-col items-start space-y-4'>
          <button className='bg-[#00df9a] text-black px-4 py-2 rounded-xl hover:bg-[#00bf8a] duration-300 w-full text-left'>
            Contact
          </button>
          <span className='text-xl font-bold cursor-pointer'>SK</span>
        </div>
      </ul>
    </div>
  );
};

export default Navbar;