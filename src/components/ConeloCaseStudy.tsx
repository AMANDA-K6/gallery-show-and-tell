import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import moodboard from '@/assets/conelo/moodboard.jpg'
import logoTag from '@/assets/conelo/logo-tag.jpg'
import businessCard from '@/assets/conelo/business-card.jpg'
import posterSpecial from '@/assets/conelo/poster-special.jpg'
import posterFeast from '@/assets/conelo/poster-feast.jpg'
import carousel from '@/assets/conelo/instagram-carousel.jpg'
import brochureFront from '@/assets/conelo/brochure-front.jpg'
import brochureInside from '@/assets/conelo/brochure-inside.jpg'
import magazine from '@/assets/conelo/magazine.jpg'

const facts: [string, string][] = [
  ['Client', 'CONELO Ice Cream'],
  ['Role', 'Brand identity & campaign design'],
  ['Audience', 'Families & kids, 4–12'],
  ['Deliverables', 'Logo · Print · Social · Editorial'],
]

const palette = ['oklch(.68 .2 0)', 'oklch(.55 .2 300)', 'oklch(.82 .16 85)', 'oklch(.75 .13 200)', 'oklch(.6 .2 25)']

function Figure({ src, alt, caption, wide }: { src: string; alt: string; caption: string; wide?: boolean }) {
  return (
    <figure className={wide ? 'cs-figure cs-figure--wide' : 'cs-figure'}>
      <img src={src} alt={alt} loading="lazy" width={1600} height={1200} />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export function ConeloCaseStudy({ open, onOpenChange, onContact }: { open: boolean; onOpenChange: (o: boolean) => void; onContact: () => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="project-dialog case-study-dialog">
        <header className="cs-hero">
          <p className="dialog-category">Case study · Branding & visual identity</p>
          <DialogTitle className="cs-title">CONELO — <em>Every cone, every smile.</em></DialogTitle>
          <DialogDescription className="cs-lead">
            A playful, joyful ice cream brand built to turn every visit into a happy family moment.
          </DialogDescription>
        </header>

        <dl className="cs-facts">{facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>

        <Figure wide src={moodboard} alt="CONELO brand moodboard on a tablet" caption="01 — Brand moodboard: audience, values, palette, typography and voice" />

        <section className="cs-block">
          <span className="cs-num">01</span>
          <div><h3>The challenge</h3><p>CONELO needed an identity that felt sweet, joyful and indulgent — instantly loved by children, yet trusted by the parents buying the cones. It had to stay consistent from a tiny swing tag to a full magazine spread.</p></div>
        </section>

        <section className="cs-block">
          <span className="cs-num">02</span>
          <div><h3>The concept</h3><p>Two smiling cone characters whose scoops double as location pins — “find your happy place” — sit above a rounded wordmark dripping with melted cream. Friendly, chunky type and a candy palette carry the same energy across every touchpoint.</p>
            <div className="cs-palette" aria-label="Brand colour palette">{palette.map(c => <span key={c} style={{ background: c }} />)}</div>
          </div>
        </section>

        <div className="cs-grid">
          <Figure src={logoTag} alt="CONELO logo on a swing tag" caption="02 — Primary mark on swing tag" />
          <Figure src={businessCard} alt="CONELO business cards" caption="03 — Business cards" />
        </div>

        <section className="cs-block">
          <span className="cs-num">03</span>
          <div><h3>Campaign & promotion</h3><p>Bold, appetite-driven posters announce daily specials and events, while a five-slide Instagram carousel teases curiosity — the secret, the flavour, the ingredients — before revealing where to find CONELO.</p></div>
        </section>

        <div className="cs-grid">
          <Figure src={posterSpecial} alt="CONELO Today Special poster" caption="04 — “Today Special” poster" />
          <Figure src={posterFeast} alt="CONELO Ice Cream Feast event poster" caption="05 — “The Ice Cream Feast” event poster" />
        </div>
        <Figure wide src={carousel} alt="CONELO Instagram carousel" caption="06 — Instagram carousel" />

        <section className="cs-block">
          <span className="cs-num">04</span>
          <div><h3>Print & editorial</h3><p>A tri-fold brochure introduces the flavour menu and store details and a magazine feature tells the CONELO story — extending the brand voice into longer-form storytelling.</p></div>
        </section>

        <div className="cs-grid">
          <Figure src={brochureFront} alt="CONELO brochure front" caption="07 — Brochure, outside" />
          <Figure src={brochureInside} alt="CONELO brochure inside" caption="08 — Brochure, inside" />
        </div>
        <Figure wide src={magazine} alt="CONELO magazine spread" caption="09 — Magazine feature spread" />

        <section className="cs-outcome">
          <h3>The outcome</h3>
          <p>A cohesive, instantly recognisable brand system that feels as fun as the product itself — ready to grow from a single shop into a family favourite.</p>
          <Button variant="portfolio" onClick={onContact}>Let’s create your brand <ArrowRight /></Button>
        </section>
      </DialogContent>
    </Dialog>
  )
}
