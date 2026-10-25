import { useEffect, useState } from 'react'
import {
  ArrowDown, ArrowDownRight, ArrowRight, ArrowUpRight, BrainCircuit, BriefcaseBusiness,
  Check, Code2, Cpu, Github, Layers3, Mail, Menu, Network, ScanEye, Workflow, X,
} from 'lucide-react'

const GITHUB_URL = 'https://github.com/Alisabir4'
const EMAIL = 'm.alisabir00@gmail.com'
const DISCUSS_SUBJECT = 'Project Discussion - AI/ML Solutions'
const DISCUSS_BODY = `Hello Ali,\n\nI would like to discuss a potential project with you.\n\nProject details:\n\n- Project type:\n- Requirements:\n- Expected outcome:\n\nPlease let me know how we can proceed.\n\nThank you.`
const DISCUSS_EMAIL_URL = `mailto:${EMAIL}?subject=${encodeURIComponent(DISCUSS_SUBJECT)}&body=${encodeURIComponent(DISCUSS_BODY)}`
const GMAIL_COMPOSE_URL = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(EMAIL)}&su=${encodeURIComponent(DISCUSS_SUBJECT)}&body=${encodeURIComponent(DISCUSS_BODY)}`
// Add a verified profile URL here when one is available.
const LINKEDIN_URL = ''

const navItems = [
  ['Home', 'home'], ['About', 'about'], ['Skills', 'skills'], ['Experience', 'experience'],
  ['Projects', 'projects'], ['Services', 'services'], ['Contact', 'contact'],
]

const groups = [
  { title: 'Programming languages', icon: Code2, items: ['Python', 'C', 'C++', 'Java', 'C#'] },
  { title: 'AI & machine learning', icon: BrainCircuit, items: ['Machine Learning', 'Generative AI', 'LLM Integration', 'RAG', 'Embeddings', 'Semantic Search', 'AI Chatbots', 'AI Agents'] },
  { title: 'Computer vision', icon: ScanEye, items: ['YOLO', 'Object Detection', 'OpenCV', 'Image Analysis', 'Video Analysis'] },
  { title: 'Backend development', icon: Workflow, items: ['FastAPI', 'REST APIs', 'JWT Authentication', 'SQL', 'MongoDB'] },
  { title: 'Automation & tools', icon: Layers3, items: ['n8n', 'Docker', 'Git', 'GitHub', 'Streamlit'] },
]

const projects = [
  { n: '01', status: 'PROJECT', title: 'Ops Copilot', text: 'An AI-powered operations assistant combining a FastAPI backend, Streamlit interface, database-backed operational data, RAG, role-based access control, audit logs, and approval workflows.', tags: ['Python', 'FastAPI', 'Streamlit', 'RAG', 'SQL', 'JWT / RBAC'], icon: BrainCircuit },
  { n: '02', status: 'PROJECT', title: 'DocuMind AI', text: 'A document intelligence application designed for document understanding, semantic search, and question answering over uploaded documents.', tags: ['Python', 'Streamlit', 'PyMuPDF', 'Sentence Transformers', 'FAISS'], icon: Layers3 },
  { n: '03', status: 'PROJECT', title: 'AI Chatbot', text: 'A conversational AI application integrating a language model to answer user questions through a simple chat interface.', tags: ['Python', 'Streamlit', 'LLM APIs'], icon: BrainCircuit },
  { n: '04', status: 'PROJECT', title: 'Computer Vision Systems', text: 'Computer-vision experiments and applications involving YOLO-based object detection, image analysis, and video processing.', tags: ['Python', 'YOLO', 'OpenCV'], icon: ScanEye },
  { n: '05', status: 'FOCUS AREA', title: 'Custom AI Solutions', text: 'Custom AI applications and automation workflows shaped around specific requirements, including RAG systems, chatbot integrations, APIs, and intelligent workflows.', tags: ['Python', 'FastAPI', 'RAG', 'AI Agents', 'n8n'], icon: Workflow },
]

const services = [
  { title: 'Custom AI/ML applications', text: 'Practical AI and machine-learning applications designed around real requirements.', icon: BrainCircuit },
  { title: 'RAG & document Q&A', text: 'Document understanding, retrieval, and question-answering workflows.', icon: Layers3 },
  { title: 'Chatbots & LLM integrations', text: 'Conversational interfaces connected to language models and useful tools.', icon: Network },
  { title: 'Computer vision prototypes', text: 'Object-detection applications and image or video analysis prototypes.', icon: ScanEye },
  { title: 'Backend APIs', text: 'REST APIs and backend systems for AI-enabled applications.', icon: Code2 },
  { title: 'Agents & workflow automation', text: 'AI-agent workflows and n8n automations for connected processes.', icon: Workflow },
]

function IconMark({ children, className = '' }) {
  return <span className={`icon-mark ${className}`}>{children}</span>
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [active, setActive] = useState('home')

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0]
      if (visible) setActive(visible.target.id)
    }, { rootMargin: '-25% 0px -60% 0px', threshold: [0, 0.2, 0.5] })
    navItems.forEach(([, id]) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })
    return () => observer.disconnect()
  }, [])

  const goTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="nav-shell">
          <a className="brand" href="#home" onClick={(e) => { e.preventDefault(); goTo('home') }} aria-label="Ali Sabir, home">
            <span className="brand-icon">AS</span><span>ALI SABIR<span className="brand-dot">.</span></span>
          </a>
          <nav className={`desktop-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Main navigation">
            {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className={active === id ? 'active' : ''} onClick={(e) => { e.preventDefault(); goTo(id) }}>{label}</a>)}
          </nav>
          <a className="nav-contact" href={`mailto:${EMAIL}`}>Let’s talk <ArrowUpRight size={14} /></a>
          <button className="menu-toggle" type="button" aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'} aria-expanded={menuOpen} aria-controls="mobile-navigation" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
        </div>
        <nav id="mobile-navigation" className={`mobile-nav ${menuOpen ? 'is-open' : ''}`} aria-label="Mobile navigation" aria-hidden={!menuOpen}>
          {navItems.map(([label, id]) => <a key={id} href={`#${id}`} tabIndex={menuOpen ? 0 : -1} onClick={(e) => { e.preventDefault(); goTo(id) }}>{label}<ArrowUpRight size={16} /></a>)}
          <a className="mobile-email" href={`mailto:${EMAIL}`} tabIndex={menuOpen ? 0 : -1}>Start a conversation <ArrowUpRight size={16} /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> AI/ML ENGINEER &amp; AI BUILDER <span className="eyebrow-index">PORTFOLIO</span></div>
            <h1 className="hero-name">ALI<br /><span className="title-accent">SABIR</span></h1>
            <p className="hero-role">AI/ML Engineer <i>·</i> Computer Vision <i>·</i> Generative AI &amp; AI Agents</p>
            <p className="hero-intro">I build intelligent applications, RAG-powered systems, AI chatbots, computer-vision solutions, and custom software that solve practical problems.</p>
            <div className="hero-actions">
              <button className="button button-primary" onClick={() => goTo('projects')}>View projects <ArrowRight size={16} /></button>
              <button className="button button-outline" onClick={() => goTo('contact')}>Contact me <ArrowUpRight size={16} /></button>
            </div>
            <div className="hero-socials"><a className="github-link" href={GITHUB_URL} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a></div>
          </div>
          <div className="portrait-frame"><div className="portrait-accent" /><img className="hero-portrait" src="/profile.jpg" alt="Ali Sabir, AI/ML engineer" /><span className="portrait-caption"><span className="tiny-dot" /> ALI SABIR · AI/ML ENGINEER</span></div>
          <div className="hero-foot"><span>01 / INTRODUCTION</span><a href="#about" onClick={(e) => { e.preventDefault(); goTo('about') }}>SCROLL TO EXPLORE <ArrowDown size={13} /></a><span>PAKISTAN · OPEN TO COLLABORATION</span></div>
        </section>

        <section className="about section-wrap section-block" id="about">
          <div className="section-heading"><span className="section-kicker">01 — ABOUT</span><h2>Curiosity, translated<br />into <span>working systems.</span></h2></div>
          <div className="about-grid">
            <div className="about-main"><p className="lead">I’m a Computer Science graduate with a strong interest in Artificial Intelligence, Machine Learning, and Computer Vision. I work on practical AI projects and build applications that turn ideas into functional software.</p><p>In my contract-based junior-engineering role at <strong>ML Bench</strong>, I contribute to AI/ML and Computer Vision projects. Alongside this professional work, I build personal projects involving Generative AI, Retrieval-Augmented Generation (RAG), AI chatbots, document intelligence, backend APIs, and automation.</p><p>I enjoy learning by building, experimenting with different approaches, and developing useful solutions to real-world problems. My goal is to continue growing as an AI/ML Engineer while creating reliable, practical, and well-designed AI applications.</p></div>
            <div className="about-facts"><div className="fact-card"><span className="fact-label">EDUCATION</span><span className="fact-value">BS Computer Science</span><span className="fact-detail">CGPA <b>3.46</b></span></div><div className="fact-card"><span className="fact-label">CURRENT WORK</span><span className="fact-value">AI/ML & Computer Vision</span><span className="fact-detail">Contract-based · ML Bench</span></div><div className="fact-card"><span className="fact-label">FOCUS</span><span className="fact-value">Applied AI</span><span className="fact-detail">From model to working product</span></div></div>
          </div>
        </section>

        <section className="skills section-wrap section-block" id="skills">
          <div className="section-heading heading-row"><div><span className="section-kicker">02 — TOOLKIT</span><h2>Tools for the <span>whole stack.</span></h2></div><p>Technologies I work with across AI applications, backend systems, and automation.</p></div>
          <div className="skills-grid">{groups.map(({ title, icon: Icon, items }, index) => <article className={`skill-card skill-card-${index + 1}`} key={title}><div className="skill-card-top"><IconMark><Icon size={18} /></IconMark><span>0{index + 1}</span></div><h3>{title}</h3><div className="skill-pills">{items.map((item) => <span key={item}>{item}</span>)}</div></article>)}</div>
        </section>

        <section className="experience section-wrap section-block" id="experience">
          <div className="section-heading heading-row"><div><span className="section-kicker">03 — EXPERIENCE</span><h2>Where I’m <span>contributing.</span></h2></div><p>Current professional experience</p></div>
          <article className="experience-card"><div className="experience-mark"><BriefcaseBusiness size={22} /></div><div className="experience-content"><div className="experience-meta"><span className="work-type"><span className="tiny-dot" /> CURRENT ROLE</span><span className="mono">CONTRACT-BASED</span></div><h3>Junior AI/ML &amp; Computer Vision Engineer</h3><p className="company">ML Bench · Contract</p><p className="experience-description">I work on AI/ML and Computer Vision projects, contributing to implementation, experimentation, testing, and analysis as part of my engineering role.</p><ul className="experience-duties"><li>Contribute to the development and implementation of AI/ML and Computer Vision projects.</li><li>Work on experiments, testing, and analysis of project results.</li><li>Help develop and refine computer-vision solutions and machine-learning workflows.</li><li>Apply Python and relevant AI/ML tools to practical engineering tasks.</li></ul></div><span className="experience-arrow"><ArrowUpRight size={18} /></span></article>
        </section>

        <section className="projects section-wrap section-block" id="projects">
          <div className="section-heading heading-row"><div><span className="section-kicker">04 — PROJECTS</span><h2>Selected <span>projects.</span></h2></div><p>Practical applications and experiments across AI, documents, and computer vision.</p></div>
          <div className="project-grid">{projects.map(({ n, status, title, text, tags, icon: Icon }) => <article className="project-card" key={n}><div className="project-card-top"><span className="project-number">{n} / {status}</span><IconMark><Icon size={19} /></IconMark></div><h3>{title}</h3><p>{text}</p><div className="project-tags">{tags.map((tag) => <span key={tag}>{tag}</span>)}</div><span className="project-link project-link-muted">Link coming soon</span><div className="project-watermark">{n}</div></article>)}</div>
          <div className="project-note"><span className="note-marker"><Check size={13} /></span><p>Project links will be added when public repositories or demos are available.</p></div>
        </section>

        <section className="services section-wrap section-block" id="services">
          <div className="section-heading heading-row"><div><span className="section-kicker">05 — SERVICES</span><h2>What I can <span>build.</span></h2></div><p>Practical development support for AI-enabled products and workflows.</p></div>
          <div className="service-grid">{services.map(({ title, text, icon: Icon }, i) => <article className="service-card" key={title}><span className="service-index">0{i + 1}</span><IconMark><Icon size={19} /></IconMark><h3>{title}</h3><p>{text}</p><ArrowDownRight className="service-arrow" size={18} /></article>)}</div>
          <div className="discuss-actions"><a className="button button-primary discuss-button" href={DISCUSS_EMAIL_URL}>Discuss a Project <ArrowUpRight size={16} /></a><a className="gmail-fallback" href={GMAIL_COMPOSE_URL} target="_blank" rel="noreferrer">Prefer Gmail? Open a prefilled draft <ArrowUpRight size={13} /></a></div>
        </section>

        <section className="contact section-wrap" id="contact">
          <div className="contact-inner"><div className="contact-copy"><span className="section-kicker">06 — CONTACT</span><h2>Have a good<br />problem to <span>solve?</span></h2><p>Tell me what you’re working on. I’m open to conversations about AI engineering roles, collaborations, and practical AI projects.</p><div className="contact-links"><a className="button button-primary" href={`mailto:${EMAIL}`}>Email me <ArrowUpRight size={16} /></a><a className="contact-github" href={GITHUB_URL} target="_blank" rel="noreferrer"><Github size={16} /> GitHub <ArrowUpRight size={13} /></a>{LINKEDIN_URL && <a className="contact-github" href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={13} /></a>}</div></div><div className="contact-card"><span className="contact-card-label">DIRECT CONTACT</span><Mail size={22} strokeWidth={1.5} /><a href={`mailto:${EMAIL}`}>{EMAIL}</a><span className="contact-card-rule" /><span className="contact-card-label">CODE & NOTES</span><Github size={22} strokeWidth={1.5} /><a href={GITHUB_URL} target="_blank" rel="noreferrer">github.com/Alisabir4 <ArrowUpRight size={13} /></a><div className="contact-card-stamp">AS<span>.</span></div></div></div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><a className="brand footer-brand" href="#home" onClick={(e) => { e.preventDefault(); goTo('home') }}><span className="brand-icon">AS</span><span>ALI SABIR<span className="brand-dot">.</span></span></a><span>AI ENGINEER · BUILDING WITH INTENTION</span><a href="#home" onClick={(e) => { e.preventDefault(); goTo('home') }}>BACK TO TOP ↑</a><span>© {new Date().getFullYear()} ALI SABIR</span></footer>
    </>
  )
}

export default App
