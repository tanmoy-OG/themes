'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EYEWEAR_PRODUCTS } from '@/lib/eyewear-catalog';
import { ResilientEyewearImage } from '@/components/ResilientEyewearImage';
import { Dialog } from '@/components/ui/dialog';
import { ArrowDownRight, BookOpen, Check } from 'lucide-react';

const LOOKBOOK_CHAPTERS = [
  {
    issue: 'Chapter I · The Heritage Veranda',
    title: 'Shyambazar Atelier Oversized',
    sku: 'DD-ED-5417',
    priceInr: 4800,
    dimensions: '54 □ 17 — 148 mm',
    material: '8mm Heavy Italian Mazzucchelli Acetate',
    imageUrl:
      'https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Fashion editorial shot of woman wearing oversized optical frames',
    dropCapLetter: 'A',
    essayLead:
      'utumn light filters through the cast-iron louvers of North Kolkata mansions in sharp, honeyed bands. Our first volume celebrates that architectural permanence—sculpting 8-millimeter Italian cellulose acetate by hand until every bevel catches the late afternoon sun.',
    pullQuote:
      '“True optical luxury is never loud; it rests on the bridge with the quiet authority of a first-edition binding.”',
    quoteAttribution: '— A. Mukhopadhyay, Master Frame Artisan, Dum Dum Atelier',
  },
  {
    issue: 'Chapter II · The Amber Conservatory',
    title: 'Jessore Arch Tortoise',
    sku: 'DD-AC-5020',
    priceInr: 3900,
    dimensions: '50 □ 20 — 145 mm',
    material: 'Tumble-Polished Havana Bio-Acetate',
    imageUrl:
      'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Person wearing stylish tortoise shell glasses outdoors',
    dropCapLetter: 'B',
    essayLead:
      'eneath every tortoiseshell pattern lies seventy-two hours of beechwood barrel tumbling and hand-buffing with carnauba wax. The keyhole bridge honors mid-century Bengali cinema icons while accommodating modern progressive lenses effortlessly.',
    pullQuote:
      '“Every slab of cured tortoise cellulose carries a grain as singular as a fingerprint—no two frames leave Jessore Road identical.”',
    quoteAttribution: '— Editorial Notes, Vol. 1 Lookbook',
  },
  {
    issue: 'Chapter III · Pure Mineral Clarity',
    title: 'Nagerbazar Pure Titanium 01',
    sku: 'DD-TI-4919',
    priceInr: 3400,
    dimensions: '49 □ 19 — 142 mm',
    material: 'Japanese Beta-Titanium & Gold Ion Plating',
    imageUrl:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Clear eyeglasses resting on a clean white surface',
    dropCapLetter: 'W',
    essayLead:
      'hen ornament is stripped away, proportion becomes everything. Drawn from aerospace-grade beta-titanium wire weighing barely eleven grams, this silhouette pairs Fastrack-inspired contemporary restraint with timeless Titan craftsmanship.',
    pullQuote:
      '“Weightlessness is the highest form of bespoke tailoring for the human face.”',
    quoteAttribution: '— Dum Dum Optical Monograph, Issue 04',
  },
] as const;

export default function EditorialPage() {
  const [activeChapterIdx, setActiveChapterIdx] = useState<number>(0);
  const [lookbookModalOpen, setLookbookModalOpen] = useState<boolean>(false);
  const [salonPatronName, setSalonPatronName] = useState<string>('');
  const [salonReservedPiece, setSalonReservedPiece] = useState<string | null>(null);

  const currentChapter = LOOKBOOK_CHAPTERS[activeChapterIdx];

  const handleSalonReserve = (e: React.FormEvent) => {
    e.preventDefault();
    if (salonPatronName.trim().length < 2) return;
    setSalonReservedPiece(
      `ATELIER-${currentChapter.sku}-${salonPatronName.trim().slice(0, 3).toUpperCase()}`
    );
  };

  return (
    <div
      style={{ fontFamily: 'var(--font-lora), Georgia, serif' }}
      className="min-h-screen bg-[#FAF9F6] text-[#2C2C2C] selection:bg-[#8C7355] selection:text-[#FAF9F6]"
    >
      {/* 3-Zone Top Bar Contract */}
      <header className="flex items-center justify-between gap-8 px-6 md:px-14 py-6 border-b border-[#D3D3D3]">
        <Link
          href="/four"
          style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
          className="text-xl font-bold italic tracking-tight text-[#2C2C2C] whitespace-nowrap shrink-0"
        >
          Maison Dum Dum · Optique
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm text-[#2C2C2C]/80">
          <a
            href="#editorial-spread"
            className="hover:text-[#8C7355] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Editorial Spread
          </a>
          <a
            href="#curated-showcase"
            className="hover:text-[#8C7355] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Curated Pieces
          </a>
          <a
            href="#atelier-appointments"
            className="hover:text-[#8C7355] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Private Salon
          </a>
          <Link
            href="/"
            className="hover:text-[#8C7355] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            All 6 Themes
          </Link>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => {
              setSalonReservedPiece(null);
              setLookbookModalOpen(true);
            }}
            className="px-5 py-2.5 text-xs uppercase tracking-widest bg-[#2C2C2C] text-[#FAF9F6] hover:bg-[#8C7355] transition-colors whitespace-nowrap shrink-0"
          >
            Read the Lookbook
          </button>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 md:px-14">
        {/* Magazine Masthead & Hero Section with Overlapping Typography */}
        <section className="py-12 md:py-20 border-b border-[#D3D3D3]">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-8 border-b border-[#D3D3D3] text-xs uppercase tracking-[0.2em] text-[#8C7355]">
            <span>Autumn / Winter Monograph · Dum Dum, Kolkata</span>
            <span>Vol. 1 — Redefining elegance in North Kolkata.</span>
            <span className="tabular-nums">ISSN 2026-700028</span>
          </div>

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-6 z-10 lg:pr-6">
              <p className="text-xs uppercase tracking-[0.18em] text-[#8C7355]">
                Titan & Fastrack Bespoke Heritage Reference
              </p>
              <h1
                style={{
                  fontFamily: 'var(--font-playfair), Georgia, serif',
                  fontSize: 'clamp(2.5rem, 4.8vw, 4.25rem)',
                }}
                className="mt-4 font-bold italic leading-[1.06] text-[#2C2C2C] text-balance"
              >
                The Autumn Acetate Collection
              </h1>
              <p className="mt-6 text-base md:text-lg text-[#2C2C2C]/85 leading-relaxed max-w-[48ch]">
                Vol. 1 — Redefining elegance in North Kolkata. Hand-carved
                cellulose frames, warm bronze hinges, and high-definition Zeo
                ophthalmic glass curated for discerning collectors.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-6">
                <button
                  type="button"
                  onClick={() => {
                    setSalonReservedPiece(null);
                    setLookbookModalOpen(true);
                  }}
                  className="inline-flex items-center gap-3 px-7 py-4 bg-[#8C7355] text-[#FAF9F6] text-xs uppercase tracking-[0.16em] hover:bg-[#2C2C2C] transition-colors whitespace-nowrap shrink-0"
                >
                  <BookOpen className="h-4 w-4" />
                  <span>Read the Lookbook</span>
                </button>
                <a
                  href="#editorial-spread"
                  className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.16em] text-[#2C2C2C] hover:text-[#8C7355] underline underline-offset-8 whitespace-nowrap shrink-0"
                >
                  <span>Explore Spreads</span>
                  <ArrowDownRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="lg:col-span-6 relative">
              <div className="aspect-[4/5] w-full border border-[#D3D3D3] p-3 bg-[#FAF9F6]">
                <ResilientEyewearImage
                  src="https://images.unsplash.com/photo-1509695507497-903c140c43b0?auto=format&fit=crop&w=1200&q=80"
                  alt="Fashion editorial shot of woman wearing oversized optical frames"
                  className="h-full w-full"
                  fallbackTone="warm"
                />
              </div>
              <div className="mt-4 lg:mt-0 lg:absolute lg:-bottom-6 lg:-left-10 bg-[#FAF9F6] border border-[#D3D3D3] p-5 max-w-xs">
                <p className="text-[11px] uppercase tracking-widest text-[#8C7355] tabular-nums">
                  Plate 01 · Ref. DD-ED-5417
                </p>
                <p
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  className="mt-1 text-base font-bold italic text-[#2C2C2C]"
                >
                  Shyambazar Atelier Oversized in Espresso & Gold
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* UI Component: EditorialSpread - Alternating Text & Large Image Blocks with Drop Caps and Pull Quotes */}
        <section id="editorial-spread" className="py-16 md:py-24 border-b border-[#D3D3D3] space-y-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#D3D3D3]">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-[#8C7355]">
                Editorial Spread · Alternating Monograph
              </p>
              <h2
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                className="mt-2 text-3xl md:text-4xl font-bold text-[#2C2C2C]"
              >
                Three Essays in Optical Craft
              </h2>
            </div>

            {/* Interactive Chapter Switcher */}
            <div className="flex flex-wrap gap-2">
              {LOOKBOOK_CHAPTERS.map((chap, idx) => (
                <button
                  key={chap.sku}
                  type="button"
                  onClick={() => setActiveChapterIdx(idx)}
                  className={`px-4 py-2 text-xs uppercase tracking-wider border transition-colors whitespace-nowrap shrink-0 ${
                    activeChapterIdx === idx
                      ? 'bg-[#2C2C2C] text-[#FAF9F6] border-[#2C2C2C]'
                      : 'bg-transparent text-[#2C2C2C] border-[#D3D3D3] hover:border-[#8C7355]'
                  }`}
                >
                  Vol. 0{idx + 1} · {chap.title.split(' ')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Spread Block 1: Left Essay with Drop Cap, Right Portrait Plate */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="text-xs uppercase tracking-[0.18em] text-[#8C7355] tabular-nums">
                <span>{currentChapter.issue}</span>
                <span aria-hidden="true"> · </span>
                <span>{currentChapter.sku}</span>
              </div>

              <h3
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                className="text-3xl font-bold italic text-[#2C2C2C]"
              >
                {currentChapter.title}
              </h3>

              {/* Genuine Magazine Drop Cap */}
              <p className="text-base md:text-lg leading-[1.8] text-[#2C2C2C]/90">
                <span
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  className="float-left mr-4 mt-1 text-6xl font-bold leading-none text-[#8C7355]"
                >
                  {currentChapter.dropCapLetter}
                </span>
                {currentChapter.essayLead}
              </p>

              {/* Editorial Pull Quote using top/bottom hairline rules (no border-l-4) */}
              <blockquote className="my-8 py-6 border-y border-[#D3D3D3]">
                <p
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  className="text-xl md:text-2xl italic text-[#2C2C2C] leading-snug"
                >
                  {currentChapter.pullQuote}
                </p>
                <footer className="mt-3 text-xs uppercase tracking-widest text-[#8C7355]">
                  {currentChapter.quoteAttribution}
                </footer>
              </blockquote>

              <div className="pt-2 flex flex-wrap items-center justify-between gap-4 text-xs border-t border-[#D3D3D3] tabular-nums">
                <span>Material: {currentChapter.material}</span>
                <span>Proportions: {currentChapter.dimensions}</span>
                <span className="font-bold text-sm text-[#8C7355]">
                  ₹{currentChapter.priceInr.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="aspect-[4/3] border border-[#D3D3D3] p-4 bg-[#FAF9F6]">
                <ResilientEyewearImage
                  src={currentChapter.imageUrl}
                  alt={currentChapter.imageAlt}
                  className="h-full w-full"
                  fallbackTone="warm"
                />
              </div>
            </div>
          </div>

          {/* Spread Block 2 (Alternating): Left Large Plate, Right Archival Commentary */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-8 border-t border-[#D3D3D3]">
            <div className="lg:col-span-7 order-2 lg:order-1">
              <div className="aspect-[16/10] border border-[#D3D3D3] p-4 bg-[#FAF9F6]">
                <ResilientEyewearImage
                  src="https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1200&q=80"
                  alt="Artisanal tortoise shell optical frames in natural light"
                  className="h-full w-full"
                  fallbackTone="warm"
                />
              </div>
            </div>

            <div className="lg:col-span-5 order-1 lg:order-2 space-y-5">
              <p className="text-xs uppercase tracking-[0.2em] text-[#8C7355]">
                Plate 02 · Architectural Balance
              </p>
              <h3
                style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                className="text-2xl md:text-3xl font-bold italic text-[#2C2C2C]"
              >
                Tailored to the Nose Bridge of Bengal
              </h3>
              <p className="text-sm md:text-base leading-[1.8] text-[#2C2C2C]/85">
                Standard European optical imports often slip during Kolkata&apos;s
                monsoon months. Our Dum Dum atelier hand-carves higher-seated
                anatomical nose pads and counter-weighted temple tips so even
                bold 8mm acetate silhouettes stay poised from morning rabindra
                sangeet rehearsals to late evening adda.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSalonReservedPiece(null);
                  setLookbookModalOpen(true);
                }}
                className="px-6 py-3 border border-[#2C2C2C] text-xs uppercase tracking-widest text-[#2C2C2C] hover:bg-[#2C2C2C] hover:text-[#FAF9F6] transition-colors"
              >
                Inspect Full Lookbook Dossier
              </button>
            </div>
          </div>
        </section>

        {/* Curated Showcase & Private Salon Appointment */}
        <section id="atelier-appointments" className="py-16 md:py-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          <div id="curated-showcase" className="lg:col-span-7 space-y-6">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8C7355]">
              Index of Editions · Vol. 1
            </p>
            <h2
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              className="text-2xl md:text-3xl font-bold text-[#2C2C2C]"
            >
              Archive Specifications
            </h2>

            <div className="divide-y divide-[#D3D3D3] border-y border-[#D3D3D3]">
              {EYEWEAR_PRODUCTS.slice(0, 4).map((item, idx) => (
                <div
                  key={item.id}
                  className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4"
                >
                  <div>
                    <p className="text-xs text-[#8C7355] tabular-nums">
                      0{idx + 1} · {item.sku} · {item.colorway}
                    </p>
                    <h3
                      style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                      className="text-lg font-bold text-[#2C2C2C]"
                    >
                      {item.name}
                    </h3>
                    <p className="text-xs text-[#2C2C2C]/75">{item.material}</p>
                  </div>
                  <div className="flex items-center gap-6 tabular-nums">
                    <span className="text-xs text-[#2C2C2C]/70">
                      {item.lensWidthMm} □ {item.bridgeWidthMm} — {item.templeLengthMm}
                    </span>
                    <span className="text-sm font-bold text-[#2C2C2C]">
                      ₹{item.priceInr.toLocaleString('en-IN')}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 border border-[#D3D3D3] p-8 bg-[#FAF9F6] space-y-5">
            <p className="text-xs uppercase tracking-[0.2em] text-[#8C7355]">
              Private Fitting Salon
            </p>
            <h3
              style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
              className="text-2xl font-bold italic text-[#2C2C2C]"
            >
              Request a Bespoke Fitting at Nagerbazar
            </h3>
            <p className="text-xs leading-relaxed text-[#2C2C2C]/80">
              Reserve a private 45-minute styling and optometric consultation
              with Darjeeling first-flush tea service.
            </p>

            <form onSubmit={handleSalonReserve} className="space-y-4">
              <div>
                <label
                  htmlFor="patron-name"
                  className="block text-xs uppercase tracking-wider text-[#2C2C2C]"
                >
                  Patron Full Name
                </label>
                <input
                  id="patron-name"
                  type="text"
                  required
                  value={salonPatronName}
                  onChange={(e) => setSalonPatronName(e.target.value)}
                  placeholder="e.g. Debolina Roy"
                  className="mt-1.5 w-full px-3.5 py-2.5 border border-[#D3D3D3] bg-[#FAF9F6] text-sm text-[#2C2C2C] focus:outline-none focus:border-[#8C7355]"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 bg-[#2C2C2C] text-[#FAF9F6] text-xs uppercase tracking-[0.18em] hover:bg-[#8C7355] transition-colors"
              >
                Reserve {currentChapter.title}
              </button>
            </form>

            {salonReservedPiece && (
              <div className="p-4 border border-[#8C7355] bg-[#FAF9F6] text-xs text-[#2C2C2C] flex items-start gap-2.5">
                <Check className="h-4 w-4 text-[#8C7355] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold">
                    Private Salon Dossier Created · {salonReservedPiece}
                  </p>
                  <p className="mt-0.5 text-[#2C2C2C]/75">
                    Our head optician will prepare {currentChapter.title} for
                    your fitting.
                  </p>
                </div>
              </div>
            )}
          </div>
        </section>
      </main>

      {/* Interactive Lookbook Reader Dialog */}
      <Dialog
        open={lookbookModalOpen}
        onOpenChange={setLookbookModalOpen}
        title="The Autumn Acetate Collection — Vol. 1 Lookbook"
        description="North Kolkata Monograph · Complete Curated Plates & Measurements"
      >
        <div className="space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {LOOKBOOK_CHAPTERS.map((chapter, idx) => (
              <div
                key={chapter.sku}
                onClick={() => setActiveChapterIdx(idx)}
                className={`cursor-pointer border p-4 transition-colors ${
                  activeChapterIdx === idx
                    ? 'border-[#8C7355] bg-[#FAF9F6]'
                    : 'border-[#D3D3D3] hover:border-[#8C7355]'
                }`}
              >
                <p className="text-[11px] uppercase tracking-wider text-[#8C7355] tabular-nums">
                  Plate 0{idx + 1} · {chapter.sku}
                </p>
                <p
                  style={{ fontFamily: 'var(--font-playfair), Georgia, serif' }}
                  className="mt-1 font-bold italic text-[#2C2C2C]"
                >
                  {chapter.title}
                </p>
                <p className="mt-1 text-xs text-[#2C2C2C]/75 tabular-nums">
                  {chapter.dimensions} · ₹{chapter.priceInr.toLocaleString('en-IN')}
                </p>
              </div>
            ))}
          </div>

          <div className="p-4 border border-[#D3D3D3] bg-[#FAF9F6] text-xs leading-relaxed text-[#2C2C2C]">
            <p className="font-bold text-[#8C7355] uppercase tracking-wider">
              Selected Plate Notes — {currentChapter.title}
            </p>
            <p className="mt-1">
              {currentChapter.dropCapLetter}
              {currentChapter.essayLead}
            </p>
          </div>
        </div>
      </Dialog>

      <footer className="border-t border-[#D3D3D3] py-10 px-6 md:px-14 text-xs text-[#2C2C2C]/70">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>Maison Dum Dum Optique · Jessore Road Heritage Arcade, Kolkata</p>
          <div className="flex items-center gap-6">
            <Link href="/three" className="hover:text-[#8C7355] underline">
              ← Prev: Bento Grids
            </Link>
            <Link href="/" className="hover:text-[#8C7355] underline">
              Manifest Index
            </Link>
            <Link href="/five" className="hover:text-[#8C7355] underline">
              Next: Hand-Drawn Styles →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
