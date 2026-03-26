// ============================================================
//  components/Projects/Projects.jsx
// ============================================================
import { projects } from "../../data/portfolioData";
import "./Projects.css";

export default function Projects() {
  return (
    <section id="projects">
      <p className="section-eyebrow">What I've built</p>
      <h2 className="section-title">Featured<br /><em>projects</em></h2>

      <div className="projects-grid">
        {projects.map((proj, i) => (
          <div
            key={proj.id}
            className="project-card fade-up"
            style={{ transitionDelay: `${i * 0.1}s` }}
          >
            {/* Banner */}
            <div className={`project-img ${proj.colorClass}`}>
              <span className="project-img-icon">{proj.icon}</span>
            </div>

            {/* Content */}
            <div className="project-body">
              <div className="project-type">{proj.type}</div>
              <h3 className="project-title">{proj.title}</h3>
              <p className="project-desc">{proj.desc}</p>

              <div className="project-stack">
                {proj.stack.map((tag) => (
                  <span key={tag} className="stack-tag">{tag}</span>
                ))}
              </div>

              <div className="project-links">
                {proj.liveUrl && (
                  <a href={proj.liveUrl} target="_blank" rel="noreferrer" className="proj-link primary">
                    Live demo →
                  </a>
                )}
                {proj.githubUrl && (
                  <a href={proj.githubUrl} target="_blank" rel="noreferrer" className="proj-link primary">
                    GitHub →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
