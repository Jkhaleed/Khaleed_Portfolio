import { useState } from "react";
import { experiences, projects } from "./data";
const asset=(path:string)=>`${import.meta.env.BASE_URL}${path}`;
function Header(){const[open,setOpen]=useState(false);const close=()=>setOpen(false);return <header><a href="#home" className="logo-holder" onClick={close}><div className="logo">KJ</div><div className="logo-text">Khaleed Jimoh</div></a><nav aria-label="Primary navigation"><ul id="menu" className={open?"active":""}><li><a href="#home" onClick={close}>Home</a></li><li><a href="#skills" onClick={close}>Skills</a></li><li><a href="#projects" onClick={close}>Projects</a></li><li><a href="#experience" onClick={close}>Experience</a></li><li><a href="mailto:khaleedjimoh05@gmail.com" className="button">Contact Me</a></li></ul><button className="mobile-toggle" type="button" aria-label="Toggle navigation" aria-expanded={open} onClick={()=>setOpen(v=>!v)}><svg aria-hidden="true" width="24" height="24" fill="none" viewBox="0 0 24 24"><path stroke="currentColor" strokeLinecap="round" strokeWidth="2" d="M5 7h14M5 12h14M5 17h10"/></svg></button></nav></header>}
export default function App(){return <><Header/><main>
<section id="home" className="hero container"><div className="hero-blue"><div><h1><small>Hi, I’m</small>Khaleed Jimoh — Computer Engineering Student</h1><p>I’m a University of Guelph Computer Engineering student passionate about solving hands-on and software problems. I build, test, and refine systems that improve performance, reliability, and real-world usability.</p><div className="call-to-action"><a href={asset("Khaleed_Jimoh_Engineering_Resume.pdf")} className="button black" target="_blank">View Resume</a><a href="mailto:khaleedjimoh05@gmail.com" className="button white">Contact Me</a></div><div className="social-links"><a href="https://github.com/Jkhaleed" target="_blank" rel="noreferrer"><img src={asset("imgs/github.png")} alt="GitHub" width="48"/></a><a href="https://www.linkedin.com/in/khaleed-jimoh-960bab336/" target="_blank" rel="noreferrer"><img src={asset("imgs/linkedin.png")} alt="LinkedIn" width="48"/></a></div></div></div><div className="hero-yellow"><img src={asset("imgs/khaleed.jpg")} alt="Khaleed Jimoh"/></div></section>
<section id="skills" className="skills container"><h2><small>About Me</small>Skills</h2><div className="holder-blue"><div className="left-column"><h3>Frontend</h3><ul>{["HTML","CSS","JavaScript","TypeScript","React","Next.js"].map(x=><li key={x}>{x}</li>)}</ul><h3>Backend</h3><ul>{["Python","Django REST Framework","SQL"].map(x=><li key={x}>{x}</li>)}</ul></div><div className="right-column"><h3>A Bit About Me</h3><p>I enjoy breaking down complex technical challenges and building practical systems through coding and automation.</p><p>I’m currently developing full-stack applications and engineering tools focused on automating workflows, improving performance, and solving real-world problems.</p></div></div></section>
<section id="projects" className="bento container"><h2><small>Recent</small>Projects</h2><div className="bento-grid">{projects.map(p=><a href={p.url} className="bento-item" target="_blank" rel="noreferrer" key={p.title}><img src={asset(p.image)} alt={`${p.title} project`}/><div className="bento-overlay"><h3>{p.title}</h3><p>{p.subtitle}</p><ul>{p.features.map(x=><li key={x}>{x}</li>)}</ul></div></a>)}</div></section>
<section id="experience" className="work-experience container">
  <h2>
    <small>Recent</small>
    Work Experience
  </h2>

  <div className="jobs">
    {experiences.map((job) => (
      <article key={`${job.company}-${job.role}`}>
        <figure>
          <img src={asset(job.image)} alt={job.company} />
          <figcaption>{job.caption}</figcaption>
        </figure>

        <h3>{job.role}</h3>
        <div>{job.company}</div>

        <ul>
          {job.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      </article>
    ))}
  </div>
</section>
</main><footer className="container"><p>© {new Date().getFullYear()} Khaleed Jimoh. All rights reserved.</p></footer></>}
