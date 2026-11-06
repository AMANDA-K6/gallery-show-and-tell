import { ArrowRight, Facebook } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import logo from '@/assets/mandy/logo.jpg'
import cardFront from '@/assets/mandy/card-front.jpg'
import cardBack from '@/assets/mandy/card-back.jpg'
import posterServices from '@/assets/mandy-poster.jpg'
import posterBusiness from '@/assets/mandy/poster-business.jpg'
import posterCertificates from '@/assets/mandy/poster-certificates.jpg'

export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61594328972551'

const facts: [string, string][] = [
  ['Client', 'Myself — Mandy Graphic Designer'],
  ['Role', 'Self-initiated brand, built from scratch'],
  ['Focus', 'Self-discovery & visual voice'],
  ['Deliverables', 'Logo · Business cards · Posters · Banners'],
]
const palette = ['oklch(.32 .1 350)', 'oklch(.55 .22 355)', 'oklch(.72 .16 355)', 'oklch(.96 .02 60)', 'oklch(.2 .03 350)']

function Figure({ src, alt, caption, wide }: { src: string; alt: string; caption: string; wide?: boolean }) {
  return (
    <figure className={wide ? 'cs-figure cs-figure--wide' : 'cs-figure'}>
      <img src={src} alt={alt} loading="lazy" width={1600} height={1200} />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export function MandyCaseStudy({ open, onOpenChange, onContact }: { open: boolean; onOpenChange: (o: boolean) => void; onContact: () => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="project-dialog case-study-dialog">
        <header className="cs-hero">
          <p className="dialog-category">Case study · Personal branding</p>
          <DialogTitle className="cs-title">MANDY GRAPHIC DESIGNER — <em>Finding my own voice.</em></DialogTitle>
          <DialogDescription className="cs-lead">A self-discovery journey: the brand I designed from scratch, for myself.</DialogDescription>
        </header>

        <dl className="cs-facts">{facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>

        <section className="cs-block">
          <span className="cs-num">01</span>
          <div><h3>The hardest client</h3><p>Designing for others starts with a brief. Designing for yourself starts with a question: who am I as a designer? This project was about answering that honestly — and turning the answer into a brand I could stand behind.</p></div>
        </section>

        <section className="cs-block">
          <span className="cs-num">02</span>
          <div><h3>The logo</h3><p>I built the Mandy mark myself — confident, feminine and bold — with a plum-and-magenta palette that feels warm, creative and professional at the same time.</p>
            <div className="cs-palette" aria-label="Brand colour palette">{palette.map(c => <span key={c} style={{ background: c }} />)}</div>
          </div>
        </section>
        <Figure wide src={logo} alt="Mandy Graphic Designer logo" caption="01 — The Mandy logo" />

        <section className="cs-block">
          <span className="cs-num">03</span>
          <div><h3>Business cards</h3><p>A card that carries the brand into every meeting: the bold logo on one side, clear contact details on the other.</p></div>
        </section>
        <div className="cs-grid">
          <Figure src={cardFront} alt="Mandy business card front" caption="02 — Business card, front" />
          <Figure src={cardBack} alt="Amanda Kanjanda business card back with contact details" caption="03 — Business card, back" />
        </div>

        <section className="cs-block">
          <span className="cs-num">04</span>
          <div><h3>Posters &amp; banners</h3><p>Promotional pieces that present my services with one consistent voice — from brand identity and social media to printing for schools and businesses.</p></div>
        </section>
        <div className="cs-grid">
          <Figure src={posterServices} alt="“We got you covered” design services poster" caption="04 — “We got you covered” services poster" />
          <Figure src={posterBusiness} alt="“Make your business stand out” poster" caption="05 — “Make your business stand out” poster" />
        </div>
        <Figure wide src={posterCertificates} alt="Graduation and achievement certificates printing poster" caption="06 — Certificates printing poster" />

        <section className="cs-outcome">
          <h3>The outcome</h3>
          <p>A brand that feels like me — and a studio that now helps other businesses find their own voice.</p>
          <div className="hero-buttons">
            <Button variant="portfolio" onClick={onContact}>Let’s build your brand <ArrowRight /></Button>
            <Button variant="studio" asChild><a href={FACEBOOK_URL} target="_blank" rel="noreferrer"><Facebook size={14} /> Visit my Facebook page</a></Button>
          </div>
        </section>
      </DialogContent>
    </Dialog>
  )
}
