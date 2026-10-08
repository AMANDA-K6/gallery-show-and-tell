import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'
import { ArrowRight, ArrowUpRight, Menu, X, Fingerprint, Globe, PenTool, Layers, Mail, Instagram, MapPin, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import portraitAsset from '@/assets/amanda-portrait.png.asset.json'
import coneloAsset from '@/assets/conelo-logo.jpg.asset.json'
import envy from '@/assets/envy.jpg'
import platinum from '@/assets/platinum.jpg'
import mandy from '@/assets/mandy.jpg'
import noire from '@/assets/noire-cosmetics.jpg'
import aurea from '@/assets/aurea-wellness.jpg'

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Amanda Design Studio — Graphic Design & Branding' },
    { name: 'description', content: 'Amanda Kanjanda’s creative portfolio. Strategic branding, graphic design, web design and marketing in Harare, Zimbabwe.' },
    { property: 'og:title', content: 'Amanda Design Studio — Strategy meets creativity' },
    { property: 'og:description', content: 'Explore Amanda’s visual identities, editorial design and brand stories.' },
    { property: 'og:type', content: 'website' },
    { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: Index,
})

const projects = [
  { name: 'CONELO', category: 'Branding · Visual identity', image: coneloAsset.url, description: 'A playful identity built around two cone-shaped characters — scoops that double as location pins — sitting above a rounded wordmark topped with melting cream.', fit: 'contain' },
  { name: 'ENVY BEAUTY', category: 'Campaign · Art Direction', image: envy, description: 'A bold fragrance campaign built around confidence and individuality. Rich pinks and elegant editorial typography create an unmistakable visual presence.', fit: 'cover' },
  { name: 'PLATINUM FEMININITY', category: 'Publication · Editorial', image: platinum, description: 'A celebration of contemporary African style. Vibrant art direction and a considered editorial system unite fashion, culture and powerful storytelling.', fit: 'cover' },
  { name: 'MANDY DESIGN', category: 'Digital Design · Advertising', image: mandy, description: 'An expressive beauty editorial with a striking red-and-black visual language. Confident imagery and dramatic type put individuality at the center.', fit: 'cover' },
]
const cases = [
  { name: 'NOIRE COSMETICS', category: 'Brand identity · Art direction', image: noire, description: 'A bold beauty brand with timeless elegance. A refined monochrome identity, premium packaging and editorial storytelling create a confident, cohesive brand world.' },
  { name: 'AUREA WELLNESS', category: 'Brand strategy · Packaging', image: aurea, description: 'A sophisticated wellness brand: calm, natural and radiant. Organic textures, considered typography and a gentle palette connect daily rituals with a sense of balance.' },
]
const skills = [
  { title: 'Branding', subtitle: 'Visual identity & positioning', icon: Fingerprint, copy: 'Distinctive brand identities, comprehensive style guidelines, and memorable visual languages designed to stand out.' },
  { title: 'Social Media Marketing', subtitle: 'Campaigns & strategy', icon: Layers, copy: 'Strategic multi-platform campaigns that cultivate loyal brand communities and drive high-value engagement.' },
  { title: 'Web Design', subtitle: 'UI/UX & interactive experiences', icon: Globe, copy: 'Responsive, high-converting digital interfaces and immersive websites crafted with modern aesthetics and seamless UX.' },
  { title: 'Content Creation', subtitle: 'Editorial & creative direction', icon: PenTool, copy: 'Compelling visual storytelling, editorial copy, and bespoke multimedia assets tailored for luxury and lifestyle brands.' },
]
const steps: [string, string][] = [
  ['Discover', 'I learn about your brand, goals, and audience.'],
  ['Strategize', 'I create a clear plan and visual direction tailored to your brand.'],
  ['Design', 'I bring your concepts to life with intentional and impactful design.'],
  ['Refine', 'We collaborate and refine until every detail feels perfect.'],
  ['Deliver', 'You receive polished assets that elevate your brand and business.'],
]
type Project = (typeof projects)[number]

function Index() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [selected, setSelected] = useState<Project | null>(null)
  const [contactOpen, setContactOpen] = useState(false)
  const [sent, setSent] = useState(false)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const openContact = () => { setSent(false); setContactOpen(true) }
  return (
    <>
      <header className="site-header">
        <div className="container header-top">
          <a href="#home" className="wordmark" aria-label="Amanda Design Studio home">AMANDA<span>DESIGN STUDIO</span></a>
          <div className="header-actions">
            <span className="desktop-note"><span className="availability-dot" /> OPEN FOR COLLABORATIONS</span>
            <Button variant="studio" onClick={openContact}>LET’S TALK <ArrowRight size={13} /></Button>
            <Button className="mobile-menu-button" variant="ghost" size="icon" aria-label={menuOpen ? 'Close menu' : 'Open menu'} onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</Button>
          </div>
        </div>
        <nav className="container nav-row" aria-label="Main navigation">
          <a className="active" href="#home">HOME</a><a href="#skills">SKILLS</a><a href="#work">CV</a><a href="#contact">CONTACTS</a>
        </nav>
        {menuOpen && <nav className="container menu-panel" aria-label="More navigation">{[['About me', '#about'], ['Capabilities', '#skills'], ['Selected work', '#work'], ['My process', '#process'], ['Case studies', '#cases'], ['Contact', '#contact']].map(([text, href]) => <a key={href} href={href} onClick={() => setMenuOpen(false)}>{text}</a>)}</nav>}
      </header>
      <main>
        <section id="home" className="hero">
          <div className="container hero-grid">
            <div>
              <div className="eyebrow">Independent designer · Harare, Zimbabwe</div>
              <h1>Hi, I’m <em>Amanda.</em></h1>
              <p className="hero-specialty">WEB DESIGNER, GRAPHIC DESIGNER & MARKETING CREATIVE</p>
              <p className="intro-copy">I craft premium visual identities for ambitious brands — clean, considered, and unforgettable.</p>
              <div className="hero-buttons"><Button variant="portfolio" asChild><a href="#work">View Portfolio <ArrowRight /></a></Button><Button variant="studio" onClick={openContact}><Mail size={13} /> Contact Me</Button></div>
            </div>
            <figure className="portrait-frame">
              <img src={portraitAsset.url} alt="Amanda Kanjanda at her desk in a sunlit Harare studio" width={1536} height={1024} fetchPriority="high" />
              <figcaption className="portrait-caption"><span>AMANDA · CREATIVE LEAD & DESIGNER</span><em>Harare, ZW</em></figcaption>
            </figure>
          </div>
        </section>
        <section id="about" className="about">
          <div className="container about-grid">
            <div><div className="eyebrow">About me</div><h2 className="section-title">Strategy meets<br /><em>creativity.</em></h2></div>
            <div className="about-copy"><p>I’m Amanda, a web designer, graphic designer, and marketing creative passionate about crafting compelling brand identities and high-performing digital experiences. I help businesses turn ideas into identities that connect and convert.</p><Button variant="studio" asChild><a href="#contact">MORE ABOUT ME <ArrowUpRight /></a></Button></div>
          </div>
        </section>
        <section id="skills" className="skills-section">
          <div className="container"><div className="eyebrow">Capabilities</div><h2 className="section-title">Core Skills & <em>Expertise</em></h2><p className="section-subtitle">Strategic creative services tailored to elevate brand presence and drive impact.</p>
            <div className="skills-grid">{skills.map((skill, i) => <article className="skill-card" key={skill.title}><div className="skill-icon"><skill.icon size={17} /></div><span className="skill-number">SKILL 0{i + 1}</span><h3>{skill.title}</h3><p className="skill-specialty">{skill.subtitle}</p><p className="skill-copy">{skill.copy}</p></article>)}</div>
          </div>
        </section>
        <section id="work" className="work-section">
          <div className="container"><div className="section-heading"><div className="eyebrow">Featured work</div><a className="text-link" href="#cases">VIEW ALL PROJECTS <ArrowRight size={13} /></a></div>
            <div className="project-grid">{projects.map(project => <Button key={project.name} variant="ghost" className="project-button" onClick={() => setSelected(project)} aria-label={`View ${project.name} project`}><span className={project.fit === 'contain' ? 'project-image project-image--logo' : 'project-image'}><img src={project.image} alt={project.name + (project.fit === 'contain' ? ' logo' : ' design artwork')} width={512} height={512} loading="lazy" /><span className="project-open"><ArrowUpRight size={17} /></span></span><span className="project-title">{project.name}</span><span className="project-category">{project.category}</span></Button>)}</div>
          </div>
        </section>
        <section id="process" className="process-section"><div className="container"><div className="eyebrow">My design process</div><div className="process-grid">{steps.map(([title, copy], i) => <article className="process-step" key={title}><span className="step-number">0{i + 1}</span><h3>{title.toUpperCase()}</h3><p>{copy}</p></article>)}</div></div></section>
        <section id="cases" className="case-section"><div className="container"><div className="section-heading"><div className="eyebrow">Selected case studies</div><a className="text-link" href="#work">VIEW CASE STORIES <ArrowRight size={13} /></a></div><div className="case-grid">{cases.map(project => <article className="case-card" key={project.name}><div className="case-content"><h3>{project.name}</h3><p>{project.name === 'NOIRE COSMETICS' ? 'A bold beauty brand with timeless elegance.' : 'A sophisticated wellness brand: calm, natural, and radiant.'}</p><Button variant="link" className="text-link h-auto p-0" onClick={() => setSelected(project)}>VIEW PROJECT <ArrowRight size={13} /></Button></div><div className="case-image"><img src={project.image} alt={project.name + ' brand identity and packaging'} width={1152} height={768} loading="lazy" /></div></article>)}</div></div></section>
        <section id="contact" className="contact-section"><div className="container contact-grid"><div><div className="eyebrow">Let’s connect</div><h2 className="contact-title">Ready to elevate<br /><em>your brand?</em></h2><p className="contact-copy">Let’s create something beautiful, strategic, and unforgettable.</p><Button variant="portfolio" onClick={openContact}>LET’S WORK TOGETHER <ArrowRight /></Button></div><div className="contact-links"><a href="mailto:mandykanjanda21@gmail.com"><span className="contact-icon"><Mail size={15} /></span>mandykanjanda21@gmail.com<ArrowUpRight size={13} /></a><a href="https://www.instagram.com/mandygraphicdesigner21/" target="_blank" rel="noreferrer"><span className="contact-icon"><Instagram size={15} /></span>@mandygraphicdesigner21<ArrowUpRight size={13} /></a><div className="contact-location"><span className="contact-icon"><MapPin size={15} /></span>Harare, Zimbabwe</div></div></div></section>
      </main>
      <footer className="footer"><div className="container footer-content"><a href="#home" className="wordmark">AMANDA<span>DESIGN STUDIO</span></a><p>© {new Date().getFullYear()} Amanda Design Studio. All rights reserved.</p><div className="footer-links"><a href="#work">PRIVACY IN DESIGN</a><a href="#contact">LET’S CONNECT</a><a href="#home" aria-label="Back to top"><ArrowUpRight size={15} /></a></div></div></footer>
      <Dialog open={selected !== null} onOpenChange={open => { if (!open) setSelected(null) }}><DialogContent className="project-dialog">{selected && <><DialogTitle className="dialog-title">{selected.name}</DialogTitle><p className="dialog-category">{selected.category}</p><img className="dialog-image" src={selected.image} alt={selected.name + ' project detail'} /><DialogDescription className="dialog-description">{selected.description}</DialogDescription><Button variant="portfolio" onClick={() => { setSelected(null); openContact() }}>Let’s create your brand <ArrowRight /></Button></>}</DialogContent></Dialog>
      <Dialog open={contactOpen} onOpenChange={setContactOpen}><DialogContent className="project-dialog"><DialogTitle className="dialog-title">Let’s create <em>something meaningful.</em></DialogTitle><DialogDescription className="dialog-description">Tell me a little about your brand and what you have in mind.</DialogDescription><form className="contact-form" onSubmit={event => { event.preventDefault(); const subject = encodeURIComponent(`Project enquiry from ${name}`); const body = encodeURIComponent(`Hi Amanda,\n\n${message}\n\n${name}\n${email}`); window.location.href = `mailto:mandykanjanda21@gmail.com?subject=${subject}&body=${body}`; setSent(true) }}><label>Your name<input value={name} onChange={e => setName(e.target.value)} autoComplete="name" required placeholder="Full name" /></label><label>Email address<input type="email" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" required placeholder="you@example.com" /></label><label>Your project<textarea value={message} onChange={e => setMessage(e.target.value)} required rows={4} placeholder="A little about your brand, goals and timeline…" /></label><div className="form-actions"><Button variant="portfolio" type="submit">{sent ? <><Check /> Email prepared</> : <>Start the conversation <ArrowRight /></>}</Button><span className="form-note">Opens in your email app.</span></div></form></DialogContent></Dialog>
    </>
  )
}
