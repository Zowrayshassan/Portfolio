import { header } from 'framer-motion/client';
import React from 'react';
import 'boxicons/css/boxicons.min.css';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="z-10 flex flex-wrap justify-between items-center gap-4 pt-5 px-4">
      {/* Logo */}
      <div className="lg:text-5xl font-extrabold text-2xl hover:cursor-pointer">
        <Link to="/">
          Portfolio
        </Link>
      </div>

      {/* Social Icons */}
      <div className="flex gap-5">
        <a
          className="text-2xl hover:text-gray-500 duration-300"
          href="https://www.linkedin.com/in/zowrays-hassan-05a23b293/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-linkedin"></i>
        </a>
        <a
          className="text-2xl hover:text-gray-500 duration-300"
          href="https://github.com/Zowrayshassan"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-github"></i>
        </a>
        <a
          className="text-2xl hover:text-gray-500 duration-300"
          href="https://www.instagram.com/zowrays_hassan/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-instagram"></i>
        </a>
        <a
          className="text-2xl hover:text-gray-500 duration-300"
          href="https://www.youtube.com/@ZowraysHassan439"
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className="bx bxl-youtube"></i>
        </a>
      </div>
    </header>
  );
};

export default Header;
