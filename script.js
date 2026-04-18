/* ============================================
   ALDRIC SHAUN RAJESH — PORTFOLIO STYLES
   ============================================ */

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

:root {
  --bg: #0a0a0b;
  --surface: #111114;
  --surface2: #18181d;
  --border: #2a2a35;
  --accent: #c8f230;
  --accent2: #7f6ef5;
  --text: #f0f0ee;
  --muted: #7a7a8a;
  --syne: 'Syne', sans-serif;
  --mono: 'IBM Plex Mono', monospace;
  --serif: 'Instrument Serif', serif;
}

html {
  scroll-behavior: smooth;
}

body {
  background: var(--bg);
  color: var(--text);
  font-family: var(--syne);
  line-height: 1.6;
  overflow-x: hidden;
}

::selection {
  background: var(--accent);
  color: #000;
}

/* ============================================
   NAVIGATION
   ============================================ */

nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1.25rem 3rem;
  border-bottom: 1px solid transparent;
  transition: all 0.3s;
  backdrop-filter: blur(0px);
}

nav.scrolled {
  border-bottom-color: var(--border);
  background: rgba(10, 10, 11, 0.85);
  backdrop-filter: blur(12px);
}

.nav-logo {
  font-size: 1rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  color: var(--accent);
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-links a {
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  color: var(--muted);
  text-decoration: none;
  transition: color 0.2s;
}

.nav-links a:hover {
  color: var(--text);
}

/* ============================================
   HERO
   ============================================ */

.hero {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 6rem 3rem 4rem;
  position: relative;
  overflow: hidden;
}

.hero-grid-bg {
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(200, 242, 48, 0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(200, 242, 48, 0.04) 1px, transparent 1px);
  background-size: 60px 60px;
  mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%);
  pointer-events: none;
}

.hero-tag {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.2em;
  color: var(--accent);
  margin-bottom: 1.5rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.hero-tag::before {
  content: '';
  width: 32px;
  height: 1px;
  background: var(--accent);
}

.hero h1 {
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 800;
  line-height: 0.95;
  letter-spacing: -0.03em;
  margin-bottom: 0.5rem;
}

.hero h1 span {
  display: block;
  font-family: var(--serif);
  font-style: italic;
  font-weight: 400;
  font-size: 0.55em;
  color: var(--muted);
  letter-spacing: normal;
  margin-top: 0.3rem;
}

.hero-roles {
  display: flex;
  gap: 1rem;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.role-pill {
  font-family: var(--mono);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  padding: 0.4rem 1rem;
  border: 1px solid var(--border);
  border-radius: 2px;
  color: var(--muted);
  transition: all 0.2s;
  cursor: default;
}

.role-pill:hover,
.role-pill.active {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(200, 242, 48, 0.06);
}

.hero-desc {
  max-width: 560px;
  font-size: 1.05rem;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 2.5rem;
}

.hero-cta {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn {
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 0.12em;
  padding: 0.75rem 1.75rem;
  text-decoration: none;
  border: 1px solid;
  cursor: pointer;
  transition: all 0.2s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  border-radius: 2px;
}

.btn-primary {
  background: var(--accent);
  color: #000;
  border-color: var(--accent);
}

.btn-primary:hover {
  background: #d8ff50;
  border-color: #d8ff50;
}

.btn-ghost {
  background: transparent;
  color: var(--text);
  border-color: var(--border);
}

.btn-ghost:hover {
  border-color: var(--text);
}

.hero-stats {
  position: absolute;
  bottom: 3rem;
  right: 3rem;
  display: flex;
  gap: 2.5rem;
}

.stat {
  text-align: right;
}

.stat-num {
  font-size: 2rem;
  font-weight: 700;
  color: var(--accent);
  line-height: 1;
}

.stat-label {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: var(--muted);
  margin-top: 0.3rem;
}

/* ============================================
   SHARED SECTION STYLES
   ============================================ */

section {
  padding: 5rem 3rem;
}

.section-label {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  color: var(--muted);
  margin-bottom: 3rem;
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.section-label::after {
  content: '';
  flex: 1;
  height: 1px;
  background: var(--border);
  max-width: 80px;
}

/* ============================================
   ABOUT
   ============================================ */

.about-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: start;
}

.about-text h2 {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -0.02em;
}

.about-text h2 em {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 400;
  color: var(--accent2);
}

.about-text p {
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 1rem;
}

.about-skills {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.skill-row {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 0.875rem 1.25rem;
  border: 1px solid var(--border);
  border-radius: 2px;
  transition: all 0.25s;
  cursor: default;
  background: var(--surface);
}

.skill-row:hover {
  border-color: var(--accent);
  background: var(--surface2);
}

.skill-row:hover .skill-bar-fill {
  background: var(--accent);
}

.skill-icon {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--accent);
  width: 24px;
  text-align: center;
  flex-shrink: 0;
}

.skill-name {
  font-size: 0.85rem;
  font-weight: 500;
  flex: 1;
}

.skill-bar {
  height: 2px;
  flex: 1;
  max-width: 80px;
  background: var(--border);
  border-radius: 1px;
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  background: var(--accent2);
  border-radius: 1px;
  transition: background 0.25s;
}

/* ============================================
   EXPERIENCE
   ============================================ */

.exp-section {
  background: var(--surface);
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.exp-item {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 0 2rem;
  padding: 2.5rem 0;
  border-bottom: 1px solid var(--border);
  position: relative;
}

.exp-item:last-child {
  border-bottom: none;
}

.exp-item::before {
  content: '';
  position: absolute;
  left: 160px;
  top: 0;
  bottom: 0;
  width: 1px;
  background: var(--border);
}

.exp-meta {
  padding-top: 0.2rem;
  font-family: var(--mono);
}

.exp-date {
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  color: var(--muted);
  line-height: 1.6;
}

.exp-dot {
  position: absolute;
  left: 160px;
  top: 2.6rem;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--surface);
  border: 2px solid var(--border);
  transform: translateX(-50%);
  transition: border-color 0.2s;
}

.exp-item:hover .exp-dot {
  border-color: var(--accent);
}

.exp-content {
  padding-left: 2rem;
}

.exp-company {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  color: var(--accent);
  margin-bottom: 0.4rem;
}

.exp-role {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
}

.exp-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-bottom: 1rem;
}

.tag {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.08em;
  padding: 0.25rem 0.6rem;
  background: rgba(127, 110, 245, 0.12);
  border: 1px solid rgba(127, 110, 245, 0.3);
  color: var(--accent2);
  border-radius: 2px;
}

.tag.green {
  background: rgba(200, 242, 48, 0.08);
  border-color: rgba(200, 242, 48, 0.25);
  color: var(--accent);
}

.exp-bullets {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.exp-bullets li {
  font-size: 0.9rem;
  color: var(--muted);
  padding-left: 1.25rem;
  position: relative;
  line-height: 1.6;
}

.exp-bullets li::before {
  content: '→';
  position: absolute;
  left: 0;
  color: var(--border);
}

/* ============================================
   PROJECTS
   ============================================ */

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 1px;
  background: var(--border);
  border: 1px solid var(--border);
}

.project-card {
  background: var(--bg);
  padding: 2rem;
  transition: background 0.2s;
  position: relative;
  overflow: hidden;
  cursor: default;
}

.project-card:hover {
  background: var(--surface);
}

.project-card::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 2px;
  background: linear-gradient(90deg, var(--accent2), var(--accent));
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s;
}

.project-card:hover::before {
  transform: scaleX(1);
}

.proj-num {
  font-family: var(--mono);
  font-size: 0.65rem;
  color: var(--border);
  margin-bottom: 1.5rem;
}

.proj-title {
  font-size: 1.2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
  line-height: 1.2;
  letter-spacing: -0.01em;
}

.proj-context {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.1em;
  color: var(--accent);
  margin-bottom: 1rem;
}

.proj-desc {
  font-size: 0.875rem;
  color: var(--muted);
  line-height: 1.7;
  margin-bottom: 1.5rem;
}

.proj-tech {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: auto;
}

.proj-tech span {
  font-family: var(--mono);
  font-size: 0.6rem;
  letter-spacing: 0.06em;
  padding: 0.2rem 0.5rem;
  border: 1px solid var(--border);
  color: var(--muted);
  border-radius: 2px;
}

/* ============================================
   CONTACT
   ============================================ */

.contact-section {
  background: var(--surface);
  text-align: center;
}

.contact-section h2 {
  font-size: clamp(2.5rem, 6vw, 5rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  margin-bottom: 1rem;
}

.contact-section h2 span {
  font-family: var(--serif);
  font-style: italic;
  font-weight: 400;
  color: var(--accent2);
}

.contact-section p {
  color: var(--muted);
  max-width: 480px;
  margin: 0 auto 2.5rem;
}

.contact-links {
  display: flex;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.contact-link {
  font-family: var(--mono);
  font-size: 0.75rem;
  letter-spacing: 0.1em;
  padding: 0.75rem 1.5rem;
  border: 1px solid var(--border);
  border-radius: 2px;
  color: var(--muted);
  text-decoration: none;
  transition: all 0.2s;
}

.contact-link:hover {
  border-color: var(--text);
  color: var(--text);
}

/* ============================================
   FOOTER
   ============================================ */

footer {
  padding: 2rem 3rem;
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: space-between;
  align-items: center;
}

footer p {
  font-family: var(--mono);
  font-size: 0.65rem;
  letter-spacing: 0.08em;
  color: var(--muted);
}

/* ============================================
   SCROLL REVEAL ANIMATION
   ============================================ */

.reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}

.reveal.visible {
  opacity: 1;
  transform: none;
}

/* ============================================
   RESPONSIVE / MOBILE
   ============================================ */

@media (max-width: 700px) {
  nav {
    padding: 1rem 1.5rem;
  }

  .nav-links {
    gap: 1.2rem;
  }

  .hero {
    padding: 5rem 1.5rem 3rem;
  }

  .hero-stats {
    position: static;
    margin-top: 3rem;
    justify-content: flex-start;
  }

  .stat {
    text-align: left;
  }

  section {
    padding: 4rem 1.5rem;
  }

  .about-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }

  .exp-item {
    grid-template-columns: 100px 1fr;
    gap: 0 1rem;
  }

  .exp-item::before {
    left: 100px;
  }

  .exp-dot {
    left: 100px;
  }

  footer {
    flex-direction: column;
    gap: 0.5rem;
    text-align: center;
  }
}
