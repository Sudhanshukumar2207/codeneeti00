import { ArrowUpRight, Menu, X } from "lucide-react";
import { useState } from "react";
import BrandMark from "./BrandMark.jsx";

const links = [
  { label: "Services", href: "#services" },
  { label: "Our work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="nav container" aria-label="Main navigation">
        <BrandMark />
        <button
          className="nav__toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>
        <div
          className={`nav__content${menuOpen ? " nav__content--open" : ""}`}
          id="primary-navigation"
        >
          <div className="nav__links">
            {links.map((link) => (
              <a href={link.href} key={link.href} onClick={closeMenu}>
                {link.label}
              </a>
            ))}
          </div>
          <a className="button button--small button--light" href="#contact" onClick={closeMenu}>
            Let&apos;s talk <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
      </nav>
    </header>
  );
}
