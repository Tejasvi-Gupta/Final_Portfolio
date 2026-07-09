// ============================================================
//  components/About/About.jsx
// ============================================================
import { stats, aboutParagraphs, focusTags, personal } from "../../data/portfolioData";
import "./About.css";

export default function About() {
  return (
    <section id="about">
      <div className="about-grid">

        {/* Left: title + stat cards */}
        <div>
          <p className="section-eyebrow">Who I am</p>
          <h2 className="section-title">
            A little<br /><em>about me</em>
          </h2>

          <div className="about-stats">
            {stats.map((s) => (
              <div key={s.label} className="stat-card">
                <div className="stat-num">{s.num}</div>
                <div className="stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: paragraphs + focus tags + resume button */}
        <div className="about-body fade-up">
          {aboutParagraphs.map((para, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: para }} />
          ))}

          <div className="focus-tags">
            {focusTags.map((tag) => (
              <span key={tag} className="focus-tag">{tag}</span>
            ))}
          </div>

          <a href={personal.resumeUrl} className="btn-primary" style={{ fontSize: 13, padding: "10px 22px" }}>
            Download Resume
          </a>
        </div>

      </div>
    </section>
  );
}
