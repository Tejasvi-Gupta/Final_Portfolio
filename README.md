# Tejasvi Gupta — Portfolio (React + Vite)

A fully component-based React portfolio converted from a single `index.html`.
Every section is its own isolated component — easy to update, reuse, or extend
into a Next.js, Node.js, or any other stack.

---

## 🗂️ Project Structure

```
portfolio/
├── index.html                   ← Vite HTML shell (just a mount point)
├── package.json
├── vite.config.js
└── src/
    ├── main.jsx                 ← React entry point
    ├── App.jsx                  ← Root: theme state + mounts all sections
    │
    ├── data/
    │   └── portfolioData.js     ← ✅ ALL your content lives here
    │                               (name, projects, skills, education…)
    │                               Edit this file to update the site.
    │
    ├── hooks/
    │   └── useFadeUp.js         ← Reusable scroll-fade animation hook
    │
    ├── styles/
    │   └── globals.css          ← CSS variables (design tokens) + base resets
    │                               (light/dark theme, shared buttons, typography)
    │
    └── components/
        ├── Navbar/
        │   ├── Navbar.jsx       ← Logo, nav links, theme toggle, hamburger
        │   └── Navbar.css
        ├── Hero/
        │   ├── Hero.jsx         ← Photo, name, pills, CTA buttons
        │   └── Hero.css
        ├── About/
        │   ├── About.jsx        ← Stat cards, paragraphs, focus tags, resume
        │   └── About.css
        ├── Skills/
        │   ├── Skills.jsx       ← Tag groups + animated skill bars
        │   └── Skills.css
        ├── Projects/
        │   ├── Projects.jsx     ← Project cards grid
        │   └── Projects.css
        ├── Education/
        │   ├── Education.jsx    ← Timeline + certifications
        │   └── Education.css
        └── Contact/
            ├── Contact.jsx      ← Social links + contact form + footer
            └── Contact.css
```

---

## 🚀 Getting Started

```bash
# 1. Install dependencies
npm install

# 2. Add your photo
#    Copy Portfoolio_image.jpeg into the /public folder

# 3. Start dev server
npm run dev

# 4. Build for production (deploy to Vercel)
npm run build
```

---

## ✏️ How to Update Content

**All your content is in one file: `src/data/portfolioData.js`**

| What you want to change     | Where to edit                  |
| --------------------------- | ------------------------------ |
| Name, photo, email, links   | `personal` object              |
| Hero pills                  | `heroPills` array in Hero.jsx  |
| About paragraphs            | `aboutParagraphs` array        |
| Stats (CGPA, projects…)     | `stats` array                  |
| Focus area tags             | `focusTags` array              |
| Skills & skill bars         | `skillCategories`, `skillBars` |
| Projects                    | `projects` array               |
| Education timeline          | `education` array              |
| Certifications              | `certifications` array         |
| Nav links                   | `navLinks` array               |

---

## 🔌 Wiring Up the Contact Form

The form is ready — just connect it to a service:

### Option A — Formspree (free, easiest)
```js
// In Contact.jsx, replace handleSubmit with:
const handleSubmit = async () => {
  await fetch("https://formspree.io/f/YOUR_FORM_ID", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(form),
  });
  setSent(true);
};
```

### Option B — EmailJS (free, no backend needed)
```bash
npm install @emailjs/browser
```
```js
import emailjs from "@emailjs/browser";
const handleSubmit = () => {
  emailjs.send("SERVICE_ID", "TEMPLATE_ID", form, "PUBLIC_KEY");
  setSent(true);
};
```

---

## 🌐 Deploy to Vercel

```bash
# Option 1: Vercel CLI
npm i -g vercel
vercel

# Option 2: Push to GitHub → import repo on vercel.com
# Build command: npm run build
# Output dir:    dist
```

---

## 🔮 Future Upgrades (Ready for These)

| Upgrade             | What to do                                              |
| ------------------- | ------------------------------------------------------- |
| **Next.js**         | Move each component to `app/` pages, keep same CSS/data |
| **TypeScript**      | Rename `.jsx` → `.tsx`, add types to portfolioData      |
| **Node.js backend** | Import `portfolioData.js` as an API route               |
| **CMS (Sanity)**    | Replace `portfolioData.js` with API fetches             |
| **Tailwind CSS**    | Replace `.css` files with Tailwind utility classes      |
| **Framer Motion**   | Replace CSS fade-up with `<motion.div>` components      |

---

## 📁 Public Assets

Place these in the `/public` folder (Vite serves them at `/`):
- `Portfoolio_image.jpeg` — your profile photo
- `favicon.ico` — browser tab icon (add this!)
- `resume.pdf` — link from the About section
