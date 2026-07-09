// ============================================================
//  components/Navbar/Navbar.jsx
// ============================================================
import { useState, useEffect, useRef } from "react";
import { navLinks, personal } from "../../data/portfolioData";
import "./Navbar.css";

export default function Navbar({ theme, onToggleTheme }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const hamRef = useRef(null);
  const mobileNavRef = useRef(null);

  // Close mobile menu on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (
        hamRef.current && !hamRef.current.contains(e.target) &&
        mobileNavRef.current && !mobileNavRef.current.contains(e.target)
      ) {
        setMenuOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  // Lock scroll when menu open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <nav className="navbar">
        <a href="#hero" className="nav-logo">{personal.name}</a>

        <div className="nav-right">
          {/* Desktop links */}
          <ul className="nav-links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>

          {/* Theme toggle */}
          <button
            className="theme-toggle"
            onClick={onToggleTheme}
            aria-label="Toggle dark mode"
          >
            <div className="toggle-knob">
              <span className="toggle-icon">{theme === "dark" ? "🌙" : "☀️"}</span>
            </div>
          </button>

          {/* Hamburger (mobile) */}
          <button
            ref={hamRef}
            className={`hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Open menu"
          >
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <nav
        ref={mobileNavRef}
        className={`mobile-nav ${menuOpen ? "open" : ""}`}
      >
        {navLinks.map((link) => (
          <a key={link.href} href={link.href} onClick={closeMenu}>
            {link.label}
          </a>
        ))}
      </nav>
    </>
  );
}
