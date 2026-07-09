// ============================================================
//  App.jsx  —  Root component
//  Manages theme state, mounts all section components
// ============================================================
import { useState, useEffect } from "react";

import Navbar    from "./components/Navbar/Navbar";
import Hero      from "./components/Hero/Hero";
import About     from "./components/About/About";
import Skills    from "./components/Skills/Skills";
import Projects  from "./components/Projects/Projects";
import Education from "./components/Education/Education";
import Contact   from "./components/Contact/Contact";

import { useFadeUp } from "./hooks/useFadeUp";

import "./styles/globals.css";

export default function App() {
  // ── Theme ──────────────────────────────────────────────────
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem("theme") || "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((t) => (t === "light" ? "dark" : "light"));

  // ── Fade-up scroll animations (runs once on mount) ─────────
  useFadeUp();

  // ──────────────────────────────────────────────────────────
  return (
    <>
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
    </>
  );
}
