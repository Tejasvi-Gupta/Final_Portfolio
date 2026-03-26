// ============================================================
//  components/Contact/Contact.jsx
// ============================================================
import { useState } from "react";
import { personal } from "../../data/portfolioData";
import "./Contact.css";

// SVG icons as small inline components
const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);
const GithubIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" />
  </svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
    <path d="M19 3a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14m-.5 15.5v-5.3a3.26 3.26 0 00-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 011.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 001.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 00-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Connect this to Formspree / EmailJS in production
  const handleSubmit = () => {
    console.log("Form submitted:", form);
    setSent(true);
    setForm({ name: "", email: "", subject: "", message: "" });
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <>
      <section id="contact">
        <div className="contact-grid">

          {/* Left */}
          <div>
            <p className="section-eyebrow">Let's connect</p>
            <h2 className="section-title">Get in<br /><em>touch</em></h2>
            <p className="contact-blurb">
              Open to internship opportunities, collaboration on interesting projects,
              or just a good conversation about tech. My inbox is always open.
            </p>

            <div className="contact-links">
              <a href={`mailto:${personal.email}`} className="contact-link">
                <div className="cl-icon"><EmailIcon /></div>
                <div className="cl-label">
                  <strong>Email</strong>
                  <span>{personal.email}</span>
                </div>
              </a>

              <a href={personal.github} target="_blank" rel="noreferrer" className="contact-link">
                <div className="cl-icon"><GithubIcon /></div>
                <div className="cl-label">
                  <strong>GitHub</strong>
                  <span>github.com/Tejasvi-Gupta</span>
                </div>
              </a>

              <a href={personal.linkedin} target="_blank" rel="noreferrer" className="contact-link">
                <div className="cl-icon"><LinkedinIcon /></div>
                <div className="cl-label">
                  <strong>LinkedIn</strong>
                  <span>tejasvi-gupta08</span>
                </div>
              </a>
            </div>
          </div>

          {/* Right: form */}
          <div>
            <div className="contact-form">
              <div className="form-row">
                <div className="form-field">
                  <label>Your name</label>
                  <input
                    type="text" name="name" placeholder="Jane Doe"
                    value={form.name} onChange={handleChange}
                  />
                </div>
                <div className="form-field">
                  <label>Email</label>
                  <input
                    type="email" name="email" placeholder="jane@email.com"
                    value={form.email} onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-field">
                <label>Subject</label>
                <input
                  type="text" name="subject" placeholder="Internship / Collaboration"
                  value={form.subject} onChange={handleChange}
                />
              </div>
              <div className="form-field">
                <label>Message</label>
                <textarea
                  rows={5} name="message" placeholder="Hi Tejasvi, I'd like to..."
                  value={form.message} onChange={handleChange}
                />
              </div>
              <button className="btn-send" onClick={handleSubmit}>
                {sent ? "Message sent! ✓" : "Send message →"}
              </button>
            </div>
          </div>

        </div>
      </section>

      <footer>
        <p>Designed & built by <strong>Tejasvi Gupta</strong> · 2026</p>
      </footer>
    </>
  );
}
