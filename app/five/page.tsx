'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { EYEWEAR_PRODUCTS } from '@/lib/eyewear-catalog';
import { ResilientEyewearImage } from '@/components/ResilientEyewearImage';
import {
  Coffee,
  Eye,
  Wrench,
  Glasses,
  MoveDownRight,
  CornerDownRight,
  Check,
} from 'lucide-react';

const CRAFTSMANSHIP_STEPS = [
  {
    stepNumber: 'Step 01',
    title: 'Warm Filter Coffee & Unhurried Eye Check',
    annotation: 'Circled in studio notebook: 25 mins, zero rush!',
    description:
      'Before we touch a single trial lens, we sit down over hot South Indian filter coffee at our Jessore Road counter to understand how you read, commute, and work.',
    imageUrl:
      'https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Optometrist trial frame and precision lenses on workbench',
    highlightTag: 'Free 20-step vision check',
  },
  {
    stepNumber: 'Step 02',
    title: 'Hand-Measuring Your Bridge & Temple Curve',
    annotation: 'Custom bent behind the ear so it never slips in July humidity',
    description:
      'Every human ear sits at a slightly different height. Our master optician warms the acetate temples over a gentle salt-bed heater and shapes them by hand to your exact contour.',
    imageUrl:
      'https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Close up of wireframe glasses on an open book',
    highlightTag: 'Artisanal salt-bed temple shaping',
  },
  {
    stepNumber: 'Step 03',
    title: 'Bevel-Edging & Hand-Polishing in Our Backroom Lab',
    annotation: 'Checked 3x under polarized cross-light before handover',
    description:
      'We grind your prescription lenses right here in Dum Dum, hand-chamfering the sharp inner edges with a diamond file so your frames feel like an old friend from day one.',
    imageUrl:
      'https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1200&q=80',
    imageAlt: 'Finished tortoise shell eyeglasses ready for pickup',
    highlightTag: 'Signed off by Master Optician',
  },
] as const;

export default function HandDrawnStylesPage() {
  const [selectedSketchFrame, setSelectedSketchFrame] = useState(EYEWEAR_PRODUCTS[4]); // Gorabazar Scholar Wireframe
  const [coffeeRsvpName, setCoffeeRsvpName] = useState<string>('');
  const [coffeeRoastPref, setCoffeeRoastPref] = useState<'Filter Coffee' | 'Darjeeling Tea'>('Filter Coffee');
  const [coffeeConfirmed, setCoffeeConfirmed] = useState<string | null>(null);

  const handleCoffeeRsvp = (e: React.FormEvent) => {
    e.preventDefault();
    if (coffeeRsvpName.trim().length < 2) return;
    setCoffeeConfirmed(
      `Note pinned to our Jessore Road corkboard for ${coffeeRsvpName.trim()} (${coffeeRoastPref} + Free Eye Test)!`
    );
  };

  return (
    <div
      style={{
        fontFamily: 'var(--font-patrick), cursive, sans-serif',
        backgroundImage:
          'radial-gradient(#4A5568 0.55px, transparent 0.55px)',
        backgroundSize: '24px 24px',
      }}
      className="min-h-screen bg-[#FDFBF7] text-[#2D3748] selection:bg-[#FFD700]/60 selection:text-[#2D3748]"
    >
      {/* 3-Zone Top Bar Contract */}
      <header className="flex items-center justify-between gap-8 px-6 md:px-12 py-5 border-b-2 border-dashed border-[#4A5568] bg-[#FDFBF7]/95">
        <Link
          href="/five"
          style={{ fontFamily: 'var(--font-caveat), cursive' }}
          className="text-3xl font-bold tracking-wide text-[#2D3748] whitespace-nowrap shrink-0"
        >
          Chashma Ghar · Jessore Rd
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-lg text-[#2D3748]">
          <a
            href="#craftsmanship-timeline"
            className="hover:underline decoration-wavy decoration-[#4A5568] underline-offset-4 whitespace-nowrap shrink-0"
          >
            Our Craft
          </a>
          <a
            href="#handpicked-shelf"
            className="hover:underline decoration-wavy decoration-[#4A5568] underline-offset-4 whitespace-nowrap shrink-0"
          >
            Hand-Picked Frames
          </a>
          <a
            href="#coffee-visit"
            className="hover:underline decoration-wavy decoration-[#4A5568] underline-offset-4 whitespace-nowrap shrink-0"
          >
            Drop By for Coffee
          </a>
          <Link
            href="/"
            className="hover:underline decoration-wavy decoration-[#4A5568] underline-offset-4 whitespace-nowrap shrink-0"
          >
            All 6 Themes
          </Link>
        </nav>

        <div className="flex items-center shrink-0">
          <a
            href="#handpicked-shelf"
            style={{
              fontFamily: 'var(--font-caveat), cursive',
              clipPath:
                'polygon(3% 0%, 98% 2%, 100% 93%, 96% 100%, 2% 98%, 0% 8%)',
            }}
            className="px-5 py-2 text-xl font-bold bg-[#F3E5AB] text-[#2D3748] border border-[#4A5568]/60 -rotate-1 hover:rotate-0 transition-transform whitespace-nowrap shrink-0"
          >
            See our collection
          </a>
        </div>
      </header>

      <main className="max-w-[1200px] mx-auto px-6 md:px-12 py-12 md:py-16 space-y-24">
        {/* Hero Section with Ragged Torn-Paper Image Mask and Masking-Tape Sharpie Button */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-base text-[#4A5568]">
              <Coffee className="h-4 w-4" />
              <span>Independent Family Opticians Since 1984 · Dum Dum</span>
            </div>

            <h1
              style={{
                fontFamily: 'var(--font-caveat), cursive',
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
              }}
              className="font-bold leading-[1.05] text-[#2D3748] text-balance"
            >
              <span
                style={{ backgroundColor: 'rgba(255, 215, 0, 0.4)' }}
                className="px-2 rounded-sm"
              >
                Hand-picked frames
              </span>{' '}
              just for you!
            </h1>

            <p className="text-xl text-[#2D3748]/90 leading-relaxed max-w-[48ch]">
              Swing by our Jessore Road store for a coffee and a free eye test.
              No pushy sales targets, no factory conveyor belts—just honest
              advice and frames fitted by hand.
            </p>

            {/* Masking Tape Button with Sharpie Text */}
            <div className="pt-4 flex flex-wrap items-center gap-6">
              <a
                href="#handpicked-shelf"
                style={{
                  fontFamily: 'var(--font-caveat), cursive',
                  clipPath:
                    'polygon(2% 4%, 97% 0%, 100% 89%, 98% 100%, 4% 96%, 0% 14%)',
                }}
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-[#EFE2BA] text-[#1A202C] text-2xl font-bold border-2 border-dashed border-[#4A5568] -rotate-2 hover:rotate-0 transition-transform whitespace-nowrap shrink-0"
              >
                <span>See our collection</span>
                <MoveDownRight className="h-5 w-5" />
              </a>

              <div className="text-base text-[#4A5568] -rotate-1">
                <span>Opposite Nagerbazar Bazar · Open 10am–8:30pm</span>
              </div>
            </div>
          </div>

          {/* Right Column: Torn-Paper Masked Image with Hand-Drawn Circular Highlight */}
          <div className="lg:col-span-6 relative">
            <div
              style={{
                clipPath:
                  'polygon(1% 2%, 14% 0%, 28% 3%, 44% 1%, 61% 3%, 78% 0%, 92% 2%, 99% 1%, 98% 19%, 100% 38%, 97% 57%, 100% 76%, 98% 96%, 85% 99%, 69% 97%, 52% 100%, 34% 98%, 17% 100%, 2% 97%, 0% 79%, 2% 58%, 0% 37%, 2% 18%)',
              }}
              className="aspect-[4/3] w-full bg-[#4A5568] p-1.5 rotate-1"
            >
              <div
                style={{
                  clipPath:
                    'polygon(1% 2%, 14% 0%, 28% 3%, 44% 1%, 61% 3%, 78% 0%, 92% 2%, 99% 1%, 98% 19%, 100% 38%, 97% 57%, 100% 76%, 98% 96%, 85% 99%, 69% 97%, 52% 100%, 34% 98%, 17% 100%, 2% 97%, 0% 79%, 2% 58%, 0% 37%, 2% 18%)',
                }}
                className="h-full w-full overflow-hidden bg-[#FDFBF7]"
              >
                <ResilientEyewearImage
                  src="https://images.unsplash.com/photo-1591076482161-42ce6da69f67?auto=format&fit=crop&w=1200&q=80"
                  alt="Close up of wireframe glasses on an open book"
                  className="h-full w-full"
                  fallbackTone="warm"
                />
              </div>
            </div>

            {/* Hand-Drawn Circular Highlight Annotation Badge */}
            <div className="mt-4 md:mt-0 md:absolute md:-bottom-5 md:right-6 bg-[#FDFBF7] border-2 border-[#4A5568] rounded-[55%_45%_52%_48%] px-6 py-4 -rotate-3 max-w-xs">
              <p
                style={{
                  fontFamily: 'var(--font-caveat), cursive',
                  backgroundColor: 'rgba(255, 215, 0, 0.4)',
                }}
                className="text-xl font-bold text-[#2D3748] inline-block px-2"
              >
                Gorabazar Scholar Wireframe
              </p>
              <p className="mt-1 text-sm text-[#4A5568] tabular-nums">
                Hand-bent phosphor bronze · 47 □ 21mm · ₹2,200
              </p>
            </div>
          </div>
        </section>

        {/* UI Component: CraftsmanshipProcess - Vertical Timeline Connected by Hand-Drawn Squiggly Line */}
        <section id="craftsmanship-timeline" className="space-y-12">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-base text-[#4A5568] uppercase tracking-wider">
              From Sketchbook to Your Bridge
            </p>
            <h2
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
              className="mt-1 text-4xl md:text-5xl font-bold text-[#2D3748]"
            >
              How We Craft Your Pair on Jessore Road
            </h2>
          </div>

          <div className="relative pl-6 md:pl-12 border-l-4 border-dashed border-[#4A5568] space-y-16">
            {CRAFTSMANSHIP_STEPS.map((step, index) => (
              <div
                key={step.stepNumber}
                className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
              >
                {/* Hand-Drawn Circular Node on the Timeline */}
                <div
                  aria-hidden="true"
                  className="absolute -left-[38px] md:-left-[62px] top-4 h-10 w-10 rounded-[52%_48%_45%_55%] bg-[#FDFBF7] border-2 border-[#4A5568] flex items-center justify-center font-bold text-sm text-[#2D3748]"
                >
                  {index + 1}
                </div>

                <div className="lg:col-span-6 p-6 md:p-8 bg-[#FDFBF7] border-2 border-[#4A5568] rounded-[24px_8px_20px_12px] space-y-4">
                  <div className="flex items-center justify-between text-sm text-[#4A5568]">
                    <span
                      style={{ backgroundColor: 'rgba(255, 215, 0, 0.4)' }}
                      className="px-2 py-0.5 font-bold text-[#2D3748]"
                    >
                      {step.stepNumber} · {step.highlightTag}
                    </span>
                    {index === 0 ? (
                      <Eye className="h-5 w-5 text-[#4A5568]" />
                    ) : index === 1 ? (
                      <Glasses className="h-5 w-5 text-[#4A5568]" />
                    ) : (
                      <Wrench className="h-5 w-5 text-[#4A5568]" />
                    )}
                  </div>

                  <h3
                    style={{ fontFamily: 'var(--font-caveat), cursive' }}
                    className="text-3xl font-bold text-[#2D3748]"
                  >
                    {step.title}
                  </h3>

                  <p className="text-lg text-[#2D3748]/90 leading-relaxed">
                    {step.description}
                  </p>

                  <div className="pt-2 flex items-center gap-2 text-base text-[#4A5568] italic">
                    <CornerDownRight className="h-4 w-4 shrink-0" />
                    <span>{step.annotation}</span>
                  </div>
                </div>

                <div className="lg:col-span-6">
                  <div className="relative aspect-[16/10] p-2 bg-white border-2 border-[#4A5568] rounded-[12px_28px_14px_22px] rotate-1">
                    <ResilientEyewearImage
                      src={step.imageUrl}
                      alt={step.imageAlt}
                      className="h-full w-full rounded-[8px_22px_10px_18px]"
                      fallbackTone="warm"
                    />
                    {/* Hand-Drawn Circular Highlight Overlay */}
                    <div className="absolute top-3 right-3 px-4 py-1.5 rounded-[55%_45%_50%_50%] border-2 border-[#4A5568] bg-[#FDFBF7]/95 text-sm font-bold text-[#2D3748] -rotate-6">
                      ✓ Inspected by Hand
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Hand-Picked Artisanal Shelf */}
        <section id="handpicked-shelf" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b-2 border-dashed border-[#4A5568] pb-6">
            <div>
              <h2
                style={{ fontFamily: 'var(--font-caveat), cursive' }}
                className="text-4xl font-bold text-[#2D3748]"
              >
                Frames on Our Wooden Counter This Week
              </h2>
              <p className="text-lg text-[#4A5568]">
                Click any frame card to read our optician&apos;s handwritten fit note.
              </p>
            </div>
            <span
              style={{ backgroundColor: 'rgba(255, 215, 0, 0.4)' }}
              className="px-3 py-1 text-base font-bold text-[#2D3748] self-start md:self-auto"
            >
              Selected: {selectedSketchFrame.name} (₹{selectedSketchFrame.priceInr.toLocaleString('en-IN')})
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[EYEWEAR_PRODUCTS[4], EYEWEAR_PRODUCTS[2], EYEWEAR_PRODUCTS[0]].map(
              (frame, i) => {
                const isPicked = selectedSketchFrame.id === frame.id;
                return (
                  <div
                    key={frame.id}
                    onClick={() => setSelectedSketchFrame(frame)}
                    className={`cursor-pointer p-6 bg-[#FDFBF7] border-2 transition-transform flex flex-col justify-between rounded-[18px_6px_22px_8px] ${
                      isPicked
                        ? 'border-[#2D3748] -rotate-1 ring-4 ring-[#FFD700]/40'
                        : 'border-[#4A5568] hover:-rotate-1'
                    }`}
                  >
                    <div>
                      <div className="aspect-[4/3] mb-4 border border-[#4A5568] overflow-hidden rounded-lg">
                        <ResilientEyewearImage
                          src={frame.imageUrl}
                          alt={frame.imageAlt}
                          className="h-full w-full"
                          fallbackTone="warm"
                        />
                      </div>
                      <p className="text-sm text-[#4A5568] tabular-nums">
                        Tray #{i + 1} · {frame.sku} · {frame.lensWidthMm} □ {frame.bridgeWidthMm}mm
                      </p>
                      <h3
                        style={{ fontFamily: 'var(--font-caveat), cursive' }}
                        className="mt-1 text-2xl font-bold text-[#2D3748]"
                      >
                        {frame.name}
                      </h3>
                      <p className="mt-1 text-base text-[#2D3748]/85">{frame.tagline}</p>
                    </div>

                    <div className="mt-6 pt-4 border-t border-dashed border-[#4A5568] flex items-center justify-between tabular-nums">
                      <span
                        style={{ backgroundColor: 'rgba(255, 215, 0, 0.4)' }}
                        className="px-2 py-0.5 text-lg font-bold text-[#2D3748]"
                      >
                        ₹{frame.priceInr.toLocaleString('en-IN')}
                      </span>
                      <button
                        type="button"
                        onClick={() => setSelectedSketchFrame(frame)}
                        className="text-base underline text-[#2D3748] font-bold"
                      >
                        {isPicked ? '✓ On Your Tray' : 'Put on Trial Tray'}
                      </button>
                    </div>
                  </div>
                );
              }
            )}
          </div>
        </section>

        {/* Swing By for a Coffee & Free Eye Test Card */}
        <section
          id="coffee-visit"
          className="p-8 md:p-12 bg-[#FDFBF7] border-2 border-[#4A5568] rounded-[28px_10px_24px_12px] grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7 space-y-3">
            <h2
              style={{ fontFamily: 'var(--font-caveat), cursive' }}
              className="text-4xl font-bold text-[#2D3748]"
            >
              Let Us Put the Kettle On Before You Arrive!
            </h2>
            <p className="text-lg text-[#4A5568]">
              Write your name below and we&apos;ll set aside{' '}
              <span
                style={{ backgroundColor: 'rgba(255, 215, 0, 0.4)' }}
                className="px-1.5 font-bold text-[#2D3748]"
              >
                {selectedSketchFrame.name}
              </span>{' '}
              at our Jessore Road table along with your choice of brew.
            </p>
          </div>

          <div className="lg:col-span-5">
            <form onSubmit={handleCoffeeRsvp} className="space-y-4">
              <div>
                <label htmlFor="coffee-name" className="block text-base text-[#2D3748]">
                  Your First Name:
                </label>
                <input
                  id="coffee-name"
                  type="text"
                  required
                  value={coffeeRsvpName}
                  onChange={(e) => setCoffeeRsvpName(e.target.value)}
                  placeholder="e.g. Soumya"
                  className="mt-1 w-full px-4 py-2.5 bg-white border-2 border-[#4A5568] rounded-lg text-lg text-[#2D3748] focus:outline-none"
                />
              </div>

              <div className="flex gap-3">
                {(['Filter Coffee', 'Darjeeling Tea'] as const).map((brew) => (
                  <button
                    key={brew}
                    type="button"
                    onClick={() => setCoffeeRoastPref(brew)}
                    className={`flex-1 py-2 px-3 border-2 rounded-lg text-base transition-colors ${
                      coffeeRoastPref === brew
                        ? 'bg-[#FFD700]/40 border-[#2D3748] font-bold'
                        : 'bg-white border-[#4A5568]'
                    }`}
                  >
                    ☕ {brew}
                  </button>
                ))}
              </div>

              <button
                type="submit"
                style={{
                  fontFamily: 'var(--font-caveat), cursive',
                  clipPath:
                    'polygon(2% 4%, 98% 0%, 100% 92%, 97% 100%, 3% 97%, 0% 10%)',
                }}
                className="w-full py-3 bg-[#EFE2BA] border-2 border-dashed border-[#4A5568] text-2xl font-bold text-[#2D3748] hover:bg-[#FFD700]/50 transition-colors"
              >
                Pin My Visit Note!
              </button>
            </form>

            {coffeeConfirmed && (
              <div className="mt-4 p-3 bg-[#FFD700]/30 border-2 border-[#4A5568] rounded-lg text-base text-[#2D3748] flex items-center gap-2">
                <Check className="h-5 w-5 shrink-0" />
                <span>{coffeeConfirmed}</span>
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="border-t-2 border-dashed border-[#4A5568] py-10 px-6 md:px-12 text-base text-[#4A5568]">
        <div className="max-w-[1200px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>Chashma Ghar · 88/B Jessore Road, Dum Dum, Kolkata 700028</p>
          <div className="flex items-center gap-6">
            <Link href="/four" className="hover:text-[#2D3748] underline">
              ← Prev: Editorial
            </Link>
            <Link href="/" className="hover:text-[#2D3748] underline">
              Manifest Index
            </Link>
            <Link href="/six" className="hover:text-[#2D3748] underline">
              Next: Neobrutalism →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
