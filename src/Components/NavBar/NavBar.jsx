import React, { useState } from "react";

function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const NavBarItems = [
    { content: "Home", src: "/home" },
    { content: "Videos", src: "/videos" },
    { content: "Contact", src: "/contact" },
    { content: "About", src: "/aboutme" },
    { content: "Projects", src: "/projects" }
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <nav className="navbar">
        <a href="#" className="nav-logo" color="purple">
          Ty Carlton's Blog
        </a>
        <ul className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          {NavBarItems.map((obj, index) => (
            <li className="nav-item" key={index}>
              <a href={obj.src} className="nav-link" onClick={closeMobileMenu}>
                {obj.content}
              </a>
            </li>
          ))}
        </ul>
        <div className={`hamburger ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMobileMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
          
        </div>
      </nav>
    </header>
  );
}

export default NavBar;
