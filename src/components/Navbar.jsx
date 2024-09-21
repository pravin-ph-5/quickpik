/* eslint-disable no-unused-vars */
// HAH OM SAI RAM OM BHASKARAAYA NAMAHA OM NAMAHA SIVAAYA 

import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-tertiary py-4 shadow-lg bg-tertiary border-none">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="text-azure font-bold text-[28px] font-montserrat">
          Quickpik
        </div>

        {/* Navigation Links */}
        <ul className="flex space-x-6">
          <li>
            <a
              href="#home"
              className="text-azure text-[20px] font-semibold font-montserrat hover:text-saffron"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#products"
              className="text-azure text-[20px] font-semibold font-montserrat hover:text-saffron"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="text-azure text-[20px] font-semibold font-montserrat hover:text-saffron"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="text-azure text-[20px] font-semibold font-montserrat hover:text-saffron"
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
