import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

const Header = () => {
 
  // State to manage mobile menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="flex items-center z-50 justify-between p-4 bg-white text-[#1e1e1e] fixed top-0 w-full">
      <h1 className="text-xl md:text-2xl font-bold">Xurya</h1>
      
      {/* Mobile Menu Button */}
      <div className="md:hidden flex items-center">
        <button onClick={toggleMenu} className="text-black">
          {isMenuOpen ? <CloseIcon/> : <MenuIcon/>} {/* Change button text based on menu state */}
        </button>
      </div>

      {/* Navigation Links */}
      <div className={`flex-col md:flex md:flex-row md:justify-start items-center gap-x-10 cursor-pointer ${isMenuOpen ? 'flex' : 'hidden md:flex'}`}>
        <NavLink 
          to="/" 
          className={({ isActive }) => isActive ? 'text-[#1e1e1e]' : 'text-[#8D959D]'} 
        >
          Home
        </NavLink>
        <NavLink 
          to="/about-us" 
          className={({ isActive }) => isActive ? 'text-[#1e1e1e]' : 'text-[#8D959D]'} 
        >
          About Us
        </NavLink>
        <NavLink 
          to="/features" 
          className={({ isActive }) => isActive ? 'text-[#1e1e1e]' : 'text-[#8D959D]'} 
        >
          Features
        </NavLink>
        <NavLink 
          to="/services" 
          className={({ isActive }) => isActive ? 'text-[#1e1e1e]' : 'text-[#8D959D]'} 
        >
          Services
        </NavLink>
        <NavLink 
          to="/contact" 
          className={({ isActive }) => isActive ? 'text-[#1e1e1e]' : 'text-[#8D959D]'} 
        >
          Contact
        </NavLink>
      </div>

      <div className='flex justify-start items-center gap-x-2 '>
        <button className='border-[1px] border-[#8D959D] rounded-3xl px-3 py-2 shadow-sm '>Log in</button>
        <button className='border-[1px] border-[#00d47e] bg-[#00d47e] text-white rounded-3xl px-3 py-2 shadow-sm '>Get in touch</button>
      </div>

      
    </div>
  );
};

export default Header;


