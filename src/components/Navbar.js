import React, { useState, useEffect } from "react";
import "./navbar.css";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("#");

  const products = [
    { name: "أسمدة", link: "/fertilizers" },
    { name: "منظمات نمو", link: "/pgr" },
    { name: "مبيدات", link: "/pesticides" },
    { name: "بذور تقاوي", link: "/seeds" },
  ];

  const handleLinkClick = (link) => {
    setActiveLink(link);
    setMenuOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sections = [
        { id: "#", element: document.getElementById("home") || document.body },
        { id: "#about", element: document.getElementById("about") },
        { id: "#products", element: document.getElementById("products") },
        { id: "#FAQ", element: document.getElementById("FAQ") },
        { id: "#location", element: document.getElementById("location") },
      ];

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i].element;
        if (section && scrollPosition >= section.offsetTop) {
          setActiveLink(sections[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="nav-size"></div>
      <header className="navbar">
        <a href="/#" className="logo">
          <img src="/assets/Logo Green.png" alt="Ausrah-Logo" />
        </a>
        <div
          className={`menu-toggle ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
        <ul className={`nav-list ${menuOpen ? "active" : ""}`}>
          <li>
            <a
              href="/#"
              className={activeLink === "#" ? "active" : ""}
              onClick={() => handleLinkClick("#")}
            >
              الرئيسية
            </a>
          </li>
          <li>
            <a
              href="/#about"
              className={activeLink === "#about" ? "active" : ""}
              onClick={() => handleLinkClick("#about")}
            >
              من نحن
            </a>
          </li>
          <li className="has-mega-menu">
            <a
              href="/#products"
              className={activeLink === "#products"  ? "active" : ""}
              onClick={() => handleLinkClick("#products")}
            >
              منتجاتنا
              <i className="fa-solid fa-caret-down"></i>
            </a>
            {/* Mega Menu */}
            <div className="mega-menu">
              {products.map((product, index) => (
                <NavLink key={index} to={product.link} className="mega-menu-item">
                  {product.name}
                </NavLink>
              ))}
            </div>
          </li>
          <li>
            <a
              href="/#FAQ"
              className={activeLink === "#FAQ" ? "active" : ""}
              onClick={() => handleLinkClick("#FAQ")}
            >
              الأسئلة الشائعة
            </a>
          </li>
          <li>
            <a
              href="/#location"
              className={activeLink === "#location" ? "active" : ""}
              onClick={() => handleLinkClick("#location")}
            >
              موقعنا
            </a>
          </li>
        </ul>
        <a
          className="contact-us"
          href="tel:+201040031584"
          onClick={() => handleLinkClick("#contact")}
        >
          تواصل معنا <i className="fa-solid fa-phone-volume"></i>
        </a>
      </header>
    </>
  );
};

export default Navbar;
