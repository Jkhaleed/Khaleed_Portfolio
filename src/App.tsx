import { useEffect, useState } from "react";
import { HashRouter, Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import { experiences, projects } from "./data";

const asset = (path: string) => `${import.meta.env.BASE_URL}${path}`;

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
  }, [pathname]);

  return null;
}

function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  return <header className="site-header">
    <Link to="/" className="brand" onClick={close}><span className="brand-mark">KJ</span><span>Khaleed Jimoh</span></Link>
    <button className="menu-button" type="button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle navigation"><span/><span/><span/></button>
    <nav className={open ? "open" : ""}>
      <Link to="/" onClick={close}>Home</Link><Link to="/?section=projects" onClick={close}>Projects</Link><Link to="/?section=experience" onClick={close}>Experience</Link><a href="mailto:khaleedjimoh05@gmail.com" className="nav-cta" onClick={close}>Contact</a>
    </nav>
  </header>;
}

function HomePage() {
  const { search } = useLocation();
  useEffect(() => {
    const section = new URLSearchParams(search).get("section");
    if (section) {
      window.setTimeout(() => document.getElementById(section)?.scrollIntoView({ behavior: "smooth" }), 0);
    }
  }, [search]);
  return <main>
    <section className="hero section" id="home">
      <div className="hero-copy">
        <p className="eyebrow">Computer Engineering · University of Guelph</p>
        <h1>I build practical systems across software, hardware and IT.</h1>
        <p className="hero-lede">I’m Khaleed Jimoh, a Computer Engineering student who turns complex problems into reliable, useful technology, from full-stack applications to technical support and engineered systems.</p>
        <div className="actions"><Link className="primary-button" to="/?section=projects">Explore my work <span>→</span></Link><a className="secondary-button" href={asset("Khaleed_Jimoh_Engineering_Resume.pdf")} target="_blank" rel="noreferrer">View Resume</a></div>
        <div className="hero-links"><a href="https://github.com/Jkhaleed" target="_blank" rel="noreferrer">GitHub ↗</a><a href="https://www.linkedin.com/in/khaleed-jimoh-960bab336/" target="_blank" rel="noreferrer">LinkedIn ↗</a></div>
      </div>
      <div className="hero-visual"><div className="portrait-frame"><img src={asset("imgs/khaleed.jpg")} alt="Khaleed Jimoh"/></div><div className="status-card"><span className="status-dot"/><div><strong>Open to opportunities</strong><small>Software · ML · Embedded · IT</small></div></div></div>
    </section>

    <section className="proof-strip" aria-label="Professional focus">
      <div><strong>Computer Engineering</strong><span>Third-year co-op student</span></div><div><strong>Full-stack Development</strong><span>React, TypeScript, Python, Django</span></div><div><strong>Enterprise IT</strong><span>ServiceNow, Windows, AD, Intune</span></div>
    </section>

    <section className="section projects-section" id="projects">
      <div className="section-heading"><div><p className="eyebrow">Selected work</p><h2>Engineering through building</h2></div><p>Each project has its own case-study page covering the problem, technical approach and result.</p></div>
      <div className="project-grid">{projects.map((project, index) => <Link className={`project-card ${index < 2 ? "featured" : ""}`} to={`/projects/${project.slug}`} key={project.slug}>
        <div className="project-image"><img src={asset(project.image)} alt=""/></div><div className="project-card-copy"><p className="card-eyebrow">{project.eyebrow}</p><h3>{project.title}</h3><p>{project.summary}</p><div className="tag-list">{project.technologies.slice(0, 4).map(tech => <span key={tech}>{tech}</span>)}</div><span className="case-study-link">View case study →</span></div>
      </Link>)}</div>
    </section>

    <section className="section experience-section" id="experience">
      <div className="section-heading"><div><p className="eyebrow">Experience</p><h2>Learning in real environments</h2></div><p>Technical work supported by clear communication, documentation and collaboration.</p></div>
      <div className="experience-list">{experiences.map(job => <article className="experience-row" key={`${job.company}-${job.role}`}><div className="company-logo"><img src={asset(job.image)} alt=""/></div><div className="experience-title"><h3>{job.role}</h3><p>{job.company}</p><span>{job.period} · {job.location}</span></div><ul>{job.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul></article>)}</div>
    </section>

    <section className="section capabilities-section" id="skills">
      <div><p className="eyebrow">Capabilities</p><h2>A cross-disciplinary toolkit</h2><p>I’m most effective where software, systems and hands-on engineering overlap.</p></div>
      <div className="capability-grid"><article><span>01</span><h3>Software</h3><p>React, Next.js, TypeScript, JavaScript, HTML and CSS</p></article><article><span>02</span><h3>Backend & Data</h3><p>Python, Django REST Framework, SQL, ETL and APIs</p></article><article><span>03</span><h3>Systems & IT</h3><p>Windows, ServiceNow, Active Directory, Intune and device support</p></article><article><span>04</span><h3>Engineering</h3><p>Hardware integration, CAD, embedded systems, testing and documentation</p></article></div>
    </section>

    <section className="contact-section section"><p className="eyebrow">Let’s connect</p><h2>Have an engineering problem worth solving?</h2><p>I’m interested in co-op, internship and collaborative project opportunities.</p><a className="primary-button light" href="mailto:khaleedjimoh05@gmail.com">Send me an email →</a></section>
  </main>;
}

function ProjectPage() {
  const { slug } = useParams();
  const project = projects.find(item => item.slug === slug);
  if (!project) return <main className="section not-found"><p className="eyebrow">404</p><h1>Project not found</h1><Link to="/">Return home</Link></main>;
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  return <main className="project-page">
    <section className="project-hero section"><Link className="back-link" to="/">← Back to portfolio</Link><p className="eyebrow">{project.eyebrow}</p><h1>{project.title}</h1><p className="project-intro">{project.summary}</p><div className="tag-list large">{project.technologies.map(tech => <span key={tech}>{tech}</span>)}</div></section>
    <section className="project-media section">{project.video ? <video controls preload="metadata" poster={asset(project.poster ?? project.image)}><source src={asset(project.video)} type="video/mp4"/>Your browser does not support video playback.</video> : <img src={asset(project.image)} alt={`${project.title} interface`}/>}</section>
    {project.gallery && <section className="project-gallery section" aria-label={`${project.title} gallery`}>{project.gallery.map((image, index) => <img src={asset(image)} alt={`${project.title} view ${index + 1}`} key={image}/>)}</section>}
    <section className="case-study section"><aside><p className="eyebrow">Project overview</p>{project.repository && <a className="primary-button" href={project.repository} target="_blank" rel="noreferrer">View repository ↗</a>}</aside><div className="case-study-content"><article><span>01</span><div><h2>The challenge</h2><p>{project.challenge}</p></div></article><article><span>02</span><div><h2>The approach</h2><p>{project.solution}</p></div></article><article><span>03</span><div><h2>The result</h2><p>{project.outcome}</p></div></article></div></section>
    <section className="project-highlights section"><p className="eyebrow">Highlights</p><div>{project.highlights.map((item, index) => <article key={item}><span>0{index + 1}</span><p>{item}</p></article>)}</div></section>
    <section className="next-project section"><p>Continue exploring</p><Link to={`/projects/${next.slug}`}>{next.title} →</Link></section>
  </main>;
}

export default function App() {
  return <HashRouter><ScrollToTop/><Header/><Routes><Route path="/" element={<HomePage/>}/><Route path="/projects/:slug" element={<ProjectPage/>}/><Route path="*" element={<HomePage/>}/></Routes><footer><span>© {new Date().getFullYear()} Khaleed Jimoh</span><span>Computer Engineering · Guelph, Ontario</span></footer></HashRouter>;
}
