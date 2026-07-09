// ============================================================
//  components/Skills/Skills.jsx
// ============================================================
import { useEffect, useRef, useState } from "react";
import { skillCategories, skillBars } from "../../data/portfolioData";
import "./Skills.css";

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !animated) {
          setAnimated(true);
        }
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, [animated]);

  return (
    <section id="skills" ref={sectionRef}>
      <p className="section-eyebrow">What I work with</p>
      <h2 className="section-title">Skills &<br /><em>tech stack</em></h2>

      <div className="skills-layout">

        {/* Left: tag groups */}
        <div className="fade-up">
          {skillCategories.map((cat) => (
            <div key={cat.title} className="skill-category">
              <h3>{cat.title}</h3>
              <div className="skill-tags">
                {cat.skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`skill-tag ${skill.accent ? "accent" : ""}`}
                  >
                    {skill.accent && <span className="skill-dot" />}
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right: animated bars */}
        <div className="skill-bars fade-up" style={{ transitionDelay: "0.12s" }}>
          {skillBars.map((bar) => (
            <div key={bar.name} className="skill-bar-item">
              <div className="skill-bar-header">
                <span className="skill-bar-name">{bar.name}</span>
                <span className="skill-bar-pct">{bar.pct}%</span>
              </div>
              <div className="skill-bar-track">
                <div
                  className="skill-bar-fill"
                  style={{ width: animated ? `${bar.pct}%` : "0%" }}
                />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
