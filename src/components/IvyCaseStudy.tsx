import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Dialog, DialogContent, DialogTitle, DialogDescription } from '@/components/ui/dialog'
import logoBefore from '@/assets/ivy/logo-before.jpg'
import logoAfter from '@/assets/ivy/logo-after.jpg'
import poster1Before from '@/assets/ivy/poster1-before.jpg'
import poster1After from '@/assets/ivy/poster1-after.jpg'
import poster2Before from '@/assets/ivy/poster2-before.jpg'
import poster2After from '@/assets/ivy/poster2-after.jpg'
import poster3Before from '@/assets/ivy/poster3-before.jpg'
import poster3After from '@/assets/ivy/poster3-after.jpg'
import businessCards from '@/assets/ivy-business-cards.jpg'
import businessCard2 from '@/assets/ivy/business-card-2.jpg'

const facts: [string, string][] = [
  ['Client', 'IVY BEAUTIES'],
  ['Role', 'Brand redesign & campaign design'],
  ['Origin', 'Discovered live on Facebook'],
  ['Deliverables', 'Logo · Posters · Stationery'],
]

const palette = ['oklch(.62 .22 350)', 'oklch(.35 .12 350)', 'oklch(.9 .04 350)', 'oklch(.98 .01 350)', 'oklch(.25 .06 350)']

function Figure({ src, alt, caption, tag, wide }: { src: string; alt: string; caption: string; tag?: 'Before' | 'After'; wide?: boolean }) {
  return (
    <figure className={wide ? 'cs-figure cs-figure--wide' : 'cs-figure'}>
      {tag && <span className={tag === 'Before' ? 'cs-tag cs-tag--before' : 'cs-tag cs-tag--after'}>{tag}</span>}
      <img src={src} alt={alt} loading="lazy" width={1600} height={1200} />
      <figcaption>{caption}</figcaption>
    </figure>
  )
}

export function IvyCaseStudy({ open, onOpenChange, onContact }: { open: boolean; onOpenChange: (o: boolean) => void; onContact: () => void }) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="project-dialog case-study-dialog">
        <header className="cs-hero">
          <p className="dialog-category">Case study · Brand redesign</p>
          <DialogTitle className="cs-title">IVY BEAUTIES — <em>The beauty within.</em></DialogTitle>
          <DialogDescription className="cs-lead">
            A beauty brand we discovered live on Facebook — and, with their permission, reimagined from the ground up.
          </DialogDescription>
        </header>

        <dl className="cs-facts">{facts.map(([k, v]) => <div key={k}><dt>{k}</dt><dd>{v}</dd></div>)}</dl>

        <section className="cs-block">
          <span className="cs-num">01</span>
          <div><h3>The discovery</h3><p>We came across Ivy Beauties trading live on Facebook — a talented makeup, lashes and nails studio whose skills deserved a brand to match. We reached out, asked for permission and set out to show what their identity could become.</p></div>
        </section>

        <section className="cs-block">
          <span className="cs-num">02</span>
          <div><h3>The original brand</h3><p>The existing flyers were built in a free flyer app: harsh green backgrounds, crowded price lists, low-contrast text and no clear hierarchy. The work was good — the presentation wasn’t doing it justice.</p></div>
        </section>

        <Figure wide src={logoBefore} alt="Original Ivy Beauties logo on a black swing tag" caption="01 — Original logo: green line-art mark on black" />
        <div className="cs-grid">
          <Figure tag="Before" src={poster1Before} alt="Original Ivy Beauties price-list flyer" caption="02 — Original price-list flyer" />
          <Figure tag="Before" src={poster2Before} alt="Original Ivy Beauties Saturday promo flyer" caption="03 — Original promo flyer" />
        </div>
        <Figure wide tag="Before" src={poster3Before} alt="Original Ivy Beauties services flyer" caption="04 — Original services flyer" />

        <section className="cs-block">
          <span className="cs-num">03</span>
          <div><h3>The redesign</h3><p>We rebuilt the identity around an elegant lotus mark — growth, care and femininity — set in a confident magenta-and-plum palette with refined typography. Every layout now leads the eye: headline first, services second, booking details always within reach.</p>
            <div className="cs-palette" aria-label="Brand colour palette">{palette.map(c => <span key={c} style={{ background: c }} />)}</div>
          </div>
        </section>

        <Figure wide src={logoAfter} alt="Redesigned Ivy Beauties lotus logo on a white swing tag" caption="05 — Redesigned logo: the lotus mark in magenta" />

        <section className="cs-block">
          <span className="cs-num">04</span>
          <div><h3>Before &amp; after</h3><p>The same messages, transformed. Premium photography, generous whitespace and a consistent voice turn quick Facebook flyers into brand-building campaigns.</p></div>
        </section>

        <div className="cs-grid">
          <Figure tag="Before" src={poster1Before} alt="Price-list flyer before redesign" caption="06 — Price list, before" />
          <Figure tag="After" src={poster1After} alt="Redesigned “Beauty that speaks before you do” poster" caption="07 — “Beauty that speaks before you do”, after" />
        </div>
        <div className="cs-grid">
          <Figure tag="Before" src={poster2Before} alt="Saturday promo flyer before redesign" caption="08 — Saturday promo, before" />
          <Figure tag="After" src={poster2After} alt="Redesigned “The Beauty Within” services poster" caption="09 — “The Beauty Within” services poster, after" />
        </div>
        <div className="cs-grid">
          <Figure tag="Before" src={poster3Before} alt="Services flyer before redesign" caption="10 — Services flyer, before" />
          <Figure tag="After" src={poster3After} alt="Redesigned “Get the Glam” poster" caption="11 — “Get the Glam”, after" />
        </div>

        <section className="cs-block">
          <span className="cs-num">05</span>
          <div><h3>Stationery</h3><p>The new identity extends to print: business cards that pair the lotus mark with bold pink panels, a makeup-artist portrait and clear contact details — memorable long after the first appointment.</p></div>
        </section>

        <div className="cs-grid">
          <Figure src={businessCards} alt="Ivy Beauties business card mockup, front and back" caption="12 — Business cards, front &amp; back" />
          <Figure src={businessCard2} alt="Ivy Beauties makeup artist business cards" caption="13 — Makeup artist card pair" />
        </div>

        <section className="cs-outcome">
          <h3>The outcome</h3>
          <p>A cohesive, premium identity that finally matches the quality of the work — proof of what a considered redesign can do for a growing beauty brand.</p>
          <Button variant="portfolio" onClick={onContact}>Let’s elevate your brand <ArrowRight /></Button>
        </section>
      </DialogContent>
    </Dialog>
  )
}
