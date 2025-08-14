import React, { useEffect, useRef, useState } from "react";
import Scrollspy from "react-scrollspy";
import "./Header.css";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleMobileMenu = () => setMobileMenuOpen((prev) => !prev);
  const toggleDropdown = () => setDropdownOpen((prev) => !prev);

  const handleNavClick = (e, id) => {
    e.preventDefault();
    const section = document.getElementById(id);
    if (section) section.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  };

  // Close dropdown on outside click or Esc
  useEffect(() => {
    const onDocClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false);
      }
    };
    const onKey = (e) => {
      if (e.key === "Escape") {
        setDropdownOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener("click", onDocClick);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("click", onDocClick);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <header className={`header ${isMobileMenuOpen ? "mobile-nav-active" : ""}`}>
      <div className="header-container">
        {/* Logo */}
        <a href="/" className="logo" aria-label="Yachii home">
          <img src="/images/logo.png" alt="Yachii logo" />
          <span className="logo-text">Yachii</span>
        </a>

        {/* Navigation */}
        <nav
          className={`navmenu ${isMobileMenuOpen ? "active" : ""}`}
          role="navigation"
          aria-label="Main"
        >
          <Scrollspy
            items={["home", "about", "products", "career", "contact"]}
            currentClassName="active"
            componentTag="ul"
            offset={-100}
          >
            <li>
              <a href="#home" onClick={(e) => handleNavClick(e, "home")}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => handleNavClick(e, "about")}>
                About
              </a>
            </li>

            {/* Products dropdown */}
            <li
              className={`dropdown ${isDropdownOpen ? "open" : ""}`}
              ref={dropdownRef}
            >
              <button
                type="button"
                className="dropdown-toggle"
                aria-haspopup="true"
                aria-expanded={isDropdownOpen}
                aria-controls="products-menu"
                onClick={toggleDropdown}
              >
                Products
                <i
                  className={`bi ${
                    isDropdownOpen ? "bi-chevron-up" : "bi-chevron-down"
                  }`}
                ></i>
              </button>

              <ul id="products-menu" className="dropdown-menu" role="menu">
                <li>
                  <a
                    href="#products"
                    onClick={(e) => handleNavClick(e, "products")}
                  >
                    YChat
                  </a>
                </li>
                <li>
                  <a
                    href="#products"
                    onClick={(e) => handleNavClick(e, "products")}
                  >
                    YWork
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a href="#career" onClick={(e) => handleNavClick(e, "career")}>
                Career
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => handleNavClick(e, "contact")}>
                Contact
              </a>
            </li>
          </Scrollspy>
        </nav>

        {/* Hamburger Toggle (only on mobile) */}
        <button
          className="mobile-nav-toggle"
          onClick={toggleMobileMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMobileMenuOpen}
        >
          <i className={`bi ${isMobileMenuOpen ? "bi-x" : "bi-list"}`}></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
