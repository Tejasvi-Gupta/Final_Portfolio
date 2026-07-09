// ============================================================
//  components/Hero/Hero.jsx
// ============================================================
import { personal } from "../../data/portfolioData";
import "./Hero.css";

const heroPills = [
  "AI / ML Enthusiast", "AWS Cloud", "DevOps",
  "Web Developer", "Competitive Coder",
];

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-blob" />
      <div className="hero-blob2" />

      {/* Left: text content */}
      <div className="hero-content fade-up">
        <div className="hero-tag">
          <span className="tag-dot" />
          {personal.tagline}
        </div>

        <h1 className="hero-name">
          Hi, I'm<br />
          <em>{personal.name}</em>
        </h1>

        <p className="hero-sub">{personal.subtitle}</p>

        <div className="hero-pills">
          {heroPills.map((pill) => (
            <span key={pill} className="hero-pill">{pill}</span>
          ))}
        </div>

        <div className="hero-actions">
          <a href="#projects" className="btn-primary">View my projects</a>
          <a href="#contact"  className="btn-outline">Get in touch</a>
        </div>
      </div>

      {/* Right: photo */}
      <div className="hero-photo-wrap fade-up" style={{ transitionDelay: "0.15s" }}>
        <div className="photo-icon">
          <img src={personal.photo} alt={personal.name} />
        </div>
        <div className="photo-badge">
          <div className="badge-dot" />
          <span className="badge-text">{personal.status}</span>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="scroll-hint">
        <span>Scroll</span>
        <div className="scroll-line" />
      </div>
    </section>
  );
}
