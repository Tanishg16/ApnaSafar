import React, { useEffect, useState } from "react";
// import BuildIcon from "@mui/icons-material/Build";
import logo from "../images/headerlogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
        setIsDropdownOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isOpen]);

  return (
    <nav className="navbar">
      <div className="container">
        {/* Navbar Brand */}
        <a className="navbar-brand" href="#home">
          <img src={logo} alt="Apna Safar Logo" className="logo" />
          <span className="brand-text">Apna Safar</span>
        </a>
        {/* Mobile Menu Button */}
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>

        {/* Navbar Items */}
        <ul className={`nav-menu ${isOpen ? "active" : ""}`}>
          <li>
            <a href="#home" className="nav-link">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#services" className="nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="#fleet" className="nav-link">
              Our Fleet
            </a>
          </li>
          <li>
            <a href="#TrustSection" className="nav-link">
              Review
            </a>
          </li>
          <li>
            <a href="#contact" className="nav-link">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
