// ============================================================
//  components/Education/Education.jsx
// ============================================================
import { education, certifications } from "../../data/portfolioData";
import "./Education.css";

const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
  </svg>
);

export default function Education() {
  return (
    <section id="education">
      <p className="section-eyebrow">Academic background</p>
      <h2 className="section-title">Education &<br /><em>learning</em></h2>

      {/* Timeline */}
      <div className="edu-timeline fade-up">
        {education.map((item) => (
          <div key={item.years} className="edu-item">
            <div className="edu-year">{item.years}</div>
            <div className="edu-degree">{item.degree}</div>
            <div className="edu-school">{item.school}</div>
            <div className="edu-badge">{item.badge}</div>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div style={{ marginTop: "3rem" }}>
        <p className="section-eyebrow">Certifications</p>
        <div className="cert-grid">
          {certifications.map((cert) => (
            <div key={cert.name} className="cert-card">
              <div className="cert-icon"><ShieldIcon /></div>
              <div>
                <div className="cert-name">{cert.name}</div>
                <div className="cert-issuer">{cert.issuer}</div>
                <a
                  href={cert.verifyUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="cert-verify"
                >
                  {cert.verifyLabel}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
