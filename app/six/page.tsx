'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  EYEWEAR_PRODUCTS,
  EyewearProduct,
  CartItem,
  calculateCartSummary,
} from '@/lib/eyewear-catalog';
import { ResilientEyewearImage } from '@/components/ResilientEyewearImage';
import { Dialog } from '@/components/ui/dialog';
import { Ruler, Zap, ShoppingBag, Plus, Minus, Check } from 'lucide-react';

export default function NeobrutalismPage() {
  const [goldBogoActive, setGoldBogoActive] = useState<boolean>(true);
  const [activeTooltipId, setActiveTooltipId] = useState<string | null>('dd-opt-06');
  const [cart, setCart] = useState<CartItem[]>([
    { product: EYEWEAR_PRODUCTS[5], quantity: 1 }, // Metro Line Chunky 06
    { product: EYEWEAR_PRODUCTS[1], quantity: 1 }, // Cantonment Crystal Acetate
  ]);
  const [stashModalOpen, setStashModalOpen] = useState<boolean>(false);
  const [bogoOrderConfirmed, setBogoOrderConfirmed] = useState<string | null>(null);

  const cartSummary = useMemo(
    () => calculateCartSummary(cart, goldBogoActive),
    [cart, goldBogoActive]
  );

  const handleGrabPair = (product: EyewearProduct) => {
    setBogoOrderConfirmed(null);
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
  };

  const handleAdjustQty = (productId: string, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: Math.max(0, item.quantity + delta) }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const handleCheckoutBogo = () => {
    if (cart.length === 0) return;
    setBogoOrderConfirmed(`BRUTAL-${Math.floor(1000 + Math.random() * 9000)}`);
    setCart([]);
  };

  return (
    <div
      style={{ fontFamily: 'var(--font-ibm-plex-mono), monospace' }}
      className="min-h-screen bg-[#FFF176] text-[#000000] selection:bg-[#FF4081] selection:text-white"
    >
      {/* 3-Zone Top Bar Contract */}
      <header className="flex items-center justify-between gap-8 px-6 md:px-12 py-5 bg-[#FFFFFF] border-b-4 border-[#000000]">
        <Link
          href="/six"
          style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
          className="text-xl font-bold tracking-tight text-[#000000] whitespace-nowrap shrink-0"
        >
          K-STREET OPTICS · DUM DUM
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-xs font-bold text-[#000000]">
          <a
            href="#chunky-cards"
            className="hover:bg-[#FF4081] hover:text-white px-2 py-1 transition-colors whitespace-nowrap shrink-0"
          >
            CHUNKY DROP
          </a>
          <a
            href="#bogo-gold-pass"
            className="hover:bg-[#FF4081] hover:text-white px-2 py-1 transition-colors whitespace-nowrap shrink-0"
          >
            1+1 GOLD PASS
          </a>
          <Link
            href="/"
            className="hover:bg-[#FF4081] hover:text-white px-2 py-1 transition-colors whitespace-nowrap shrink-0"
          >
            ALL 6 THEMES
          </Link>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => setStashModalOpen(true)}
            className="px-5 py-2.5 bg-[#FF4081] text-white text-xs font-bold border-4 border-[#000000] shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all whitespace-nowrap shrink-0 tabular-nums"
          >
            STASH ({cartSummary.totalItems}) · ₹{cartSummary.finalTotalInr.toLocaleString('en-IN')}
          </button>
        </div>
      </header>

      {/* UI Component: MarqueeTicker */}
      <div
        aria-label="Promotional Ticker"
        className="bg-[#000000] text-[#FFF176] border-b-4 border-[#000000] py-3 overflow-x-hidden whitespace-nowrap"
      >
        <div className="inline-block font-bold text-sm tracking-widest">
          <span>
            FREE EYE EXAM • DUM DUM STATION • 1 YR WARRANTY • ZERO SCRATCH •{' '}
          </span>
          <span>
            FREE EYE EXAM • DUM DUM STATION • 1 YR WARRANTY • ZERO SCRATCH •{' '}
          </span>
          <span>
            FREE EYE EXAM • DUM DUM STATION • 1 YR WARRANTY • ZERO SCRATCH •{' '}
          </span>
        </div>
      </div>

      <main className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 space-y-16">
        {/* Hero Section: Thick 4px solid black border with 8px solid offset shadow */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
          <div className="lg:col-span-7 bg-[#FFFFFF] border-4 border-[#000000] shadow-[8px_8px_0px_0px_#000000] p-8 md:p-12 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#FF4081]">
                PLATFORM NO. 1 · DUM DUM JUNCTION DROP
              </p>
              <h1
                style={{
                  fontFamily: 'var(--font-space-grotesk), sans-serif',
                  fontSize: 'clamp(2.5rem, 4.8vw, 4.25rem)',
                }}
                className="mt-6 font-bold leading-[1.02] tracking-tight text-[#000000] text-balance"
              >
                NOT YOUR DAD&apos;S GLASSES.
              </h1>
              <p className="mt-5 text-base md:text-lg text-[#000000] font-medium leading-relaxed max-w-[48ch]">
                Durable. Stylish. Built for the streets of Kolkata. Heavy-gauge
                acetate, zero-glare coding lenses, and student-friendly BOGO
                drops right outside Dum Dum Metro.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t-4 border-[#000000] flex flex-wrap items-center justify-between gap-6">
              <a
                href="#chunky-cards"
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                className="inline-flex items-center gap-3 px-8 py-4 bg-[#FF4081] text-white text-base font-bold border-4 border-[#000000] shadow-[6px_6px_0px_0px_#000000] hover:translate-x-1.5 hover:translate-y-1.5 hover:shadow-none transition-all whitespace-nowrap shrink-0"
              >
                <span>GRAB A PAIR</span>
                <Zap className="h-5 w-5" />
              </a>

              <div className="text-xs font-bold tabular-nums">
                <p>BUY 1 GET 1 FREE ACTIVE</p>
                <p className="text-[#FF4081]">STUDENT ID = FREE BLUE-CUT UPGRADE</p>
              </div>
            </div>
          </div>

          {/* Right Hero Image: 4px solid black border + 8px solid offset shadow */}
          <div className="lg:col-span-5 bg-[#FFFFFF] border-4 border-[#000000] shadow-[8px_8px_0px_0px_#000000] flex flex-col justify-between overflow-hidden min-h-[380px]">
            <div className="relative flex-1 min-h-[320px]">
              <ResilientEyewearImage
                src="https://images.unsplash.com/photo-1589718539308-16982e057375?auto=format&fit=crop&w=1200&q=80"
                alt="Person in streetwear wearing thick black optical frames"
                className="h-full w-full"
                fallbackTone="brutal"
              />
            </div>
            <div className="p-4 bg-[#000000] text-[#FFF176] text-xs font-bold flex items-center justify-between tabular-nums">
              <span>MODEL: METRO LINE CHUNKY 06</span>
              <span>55 □ 19 — 150MM</span>
            </div>
          </div>
        </section>

        {/* Lenskart Gold Membership / BOGO Aggressive Promotional Bar Translated to Gen-Z UI */}
        <section
          id="bogo-gold-pass"
          className="bg-[#FFFFFF] border-4 border-[#000000] shadow-[8px_8px_0px_0px_#000000] p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
        >
          <div className="space-y-1">
            <p className="text-xs font-bold text-[#FF4081]">
              GOLD MEMBERSHIP BOGO ENGINE
            </p>
            <h2
              style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
              className="text-2xl md:text-3xl font-bold text-[#000000]"
            >
              1+1 STREET PASS: SECOND PAIR ₹0
            </h2>
            <p className="text-xs text-[#000000]/80 max-w-xl">
              Toggle the Gold BOGO switch to split 2 pairs with your roommate or
              pair optical frames with polarized shades. Cheaper frame is
              automatically 100% free in your Stash.
            </p>
          </div>

          <div className="flex items-center gap-4 shrink-0">
            <button
              type="button"
              onClick={() => setGoldBogoActive((prev) => !prev)}
              className={`px-6 py-3.5 text-xs font-bold border-4 border-[#000000] shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all whitespace-nowrap ${
                goldBogoActive
                  ? 'bg-[#00E676] text-[#000000]'
                  : 'bg-[#FFFFFF] text-[#000000]'
              }`}
            >
              {goldBogoActive ? '✓ BOGO 1+1 ENABLED (SAVING ₹' + cartSummary.bogoDiscountInr + ')' : 'ENABLE BOGO 1+1 PASS'}
            </button>
          </div>
        </section>

        {/* UI Component: ChunkyProductCards with Brutalist Tooltips */}
        <section id="chunky-cards" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <h2
                style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                className="text-3xl md:text-4xl font-bold text-[#000000]"
              >
                CHUNKY PRODUCT CARDS
              </h2>
              <p className="mt-1 text-xs font-bold text-[#000000]/80">
                Click or hover the [SPEC TOOLTIP] button on any frame to inspect
                exact lens widths and bridge sizes.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setStashModalOpen(true)}
              className="px-4 py-2 bg-[#FFFFFF] border-4 border-[#000000] text-xs font-bold shadow-[4px_4px_0px_0px_#000000] self-start md:self-auto"
            >
              OPEN BOGO STASH ({cartSummary.totalItems} ITEMS)
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EYEWEAR_PRODUCTS.slice(0, 6).map((product) => {
              const isTooltipOpen = activeTooltipId === product.id;
              return (
                <article
                  key={product.id}
                  className="bg-[#FFFFFF] border-4 border-[#000000] shadow-[8px_8px_0px_0px_#000000] flex flex-col justify-between relative"
                >
                  {/* Top Bar of Card */}
                  <div className="px-4 py-2.5 border-b-4 border-[#000000] bg-[#FFF176] flex items-center justify-between text-xs font-bold tabular-nums">
                    <span>{product.sku}</span>
                    <span>{product.category.toUpperCase()}</span>
                  </div>

                  {/* Massive Product Image */}
                  <div className="aspect-[4/3] w-full border-b-4 border-[#000000] relative">
                    <ResilientEyewearImage
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      className="h-full w-full"
                      fallbackTone="brutal"
                    />

                    {/* Brutalist Spec Tooltip Trigger */}
                    <button
                      type="button"
                      onClick={() =>
                        setActiveTooltipId(isTooltipOpen ? null : product.id)
                      }
                      onMouseEnter={() => setActiveTooltipId(product.id)}
                      className="absolute top-3 right-3 px-3 py-1.5 bg-[#FFFFFF] border-3 border-[#000000] shadow-[3px_3px_0px_0px_#000000] text-[11px] font-bold flex items-center gap-1.5 hover:bg-[#FF4081] hover:text-white transition-colors"
                    >
                      <Ruler className="h-3.5 w-3.5" />
                      <span>SPEC TOOLTIP</span>
                    </button>

                    {/* Brutalist Tooltip Showing Exact Lens Widths & Bridge Sizes */}
                    {isTooltipOpen && (
                      <div
                        role="tooltip"
                        className="absolute bottom-3 inset-x-3 p-3.5 bg-[#000000] text-[#FFF176] border-2 border-[#FFFFFF] shadow-[4px_4px_0px_0px_#FF4081] text-xs space-y-1 tabular-nums z-10"
                      >
                        <p className="font-bold text-white uppercase">
                          EXACT CALIPER SPECS ({product.sku})
                        </p>
                        <div className="flex justify-between">
                          <span>LENS WIDTH:</span>
                          <span className="font-bold">{product.lensWidthMm} MM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>BRIDGE SIZE:</span>
                          <span className="font-bold">{product.bridgeWidthMm} MM</span>
                        </div>
                        <div className="flex justify-between">
                          <span>TEMPLE ARM:</span>
                          <span className="font-bold">{product.templeLengthMm} MM</span>
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Card Body */}
                  <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
                    <div>
                      <div className="flex items-baseline justify-between gap-2">
                        <h3
                          style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                          className="text-xl font-bold text-[#000000]"
                        >
                          {product.name.toUpperCase()}
                        </h3>
                        <span className="text-lg font-bold text-[#FF4081] tabular-nums shrink-0">
                          ₹{product.priceInr.toLocaleString('en-IN')}
                        </span>
                      </div>
                      <p className="mt-2 text-xs text-[#000000]/80 leading-relaxed">
                        {product.tagline}
                      </p>
                    </div>

                    <button
                      type="button"
                      onClick={() => handleGrabPair(product)}
                      style={{ fontFamily: 'var(--font-space-grotesk), sans-serif' }}
                      className="w-full py-3.5 px-4 bg-[#FF4081] text-white text-sm font-bold border-4 border-[#000000] shadow-[4px_4px_0px_0px_#000000] hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all flex items-center justify-center gap-2"
                    >
                      <ShoppingBag className="h-4 w-4" />
                      <span>GRAB A PAIR · +STASH</span>
                    </button>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      </main>

      {/* Brutalist BOGO Stash Dialog */}
      <Dialog
        open={stashModalOpen}
        onOpenChange={setStashModalOpen}
        variant="brutal"
        title="DUM DUM STREET STASH (1+1 BOGO CALCULATOR)"
        description="Every 2nd frame is ₹0 when Gold BOGO Pass is active."
      >
        <div className="space-y-5">
          {bogoOrderConfirmed ? (
            <div className="p-5 bg-[#00E676] border-4 border-[#000000] shadow-[4px_4px_0px_0px_#000000] text-xs font-bold space-y-1">
              <div className="flex items-center gap-2 text-sm">
                <Check className="h-5 w-5" />
                <span>DROP LOCKED IN · #{bogoOrderConfirmed}</span>
              </div>
              <p>
                Show this code at our Dum Dum Station Road counter for your free
                eye exam and instant lens fit!
              </p>
            </div>
          ) : cart.length === 0 ? (
            <p className="py-8 text-center text-xs font-bold">
              YOUR STASH IS EMPTY. GRAB A PAIR FROM THE GRID!
            </p>
          ) : (
            <ul className="divide-y-2 divide-[#000000] border-2 border-[#000000]">
              {cart.map((item) => (
                <li
                  key={item.product.id}
                  className="p-3.5 flex items-center justify-between gap-4 bg-[#FFF176]/30"
                >
                  <div>
                    <p className="text-xs font-bold">{item.product.name.toUpperCase()}</p>
                    <p className="text-[11px] tabular-nums">
                      {item.product.lensWidthMm}□{item.product.bridgeWidthMm}mm · ₹
                      {item.product.priceInr.toLocaleString('en-IN')}
                    </p>
                  </div>

                  <div className="flex items-center border-2 border-[#000000] bg-white">
                    <button
                      type="button"
                      aria-label={`Remove one ${item.product.name}`}
                      onClick={() => handleAdjustQty(item.product.id, -1)}
                      className="p-1.5 hover:bg-[#FF4081] hover:text-white"
                    >
                      <Minus className="h-3 w-3" />
                    </button>
                    <span className="px-3 text-xs font-bold tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      type="button"
                      aria-label={`Add one ${item.product.name}`}
                      onClick={() => handleAdjustQty(item.product.id, 1)}
                      className="p-1.5 hover:bg-[#FF4081] hover:text-white"
                    >
                      <Plus className="h-3 w-3" />
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}

          <div className="p-4 bg-[#FFF176] border-2 border-[#000000] text-xs font-bold space-y-1.5 tabular-nums">
            <div className="flex justify-between">
              <span>RAW SUBTOTAL:</span>
              <span>₹{cartSummary.subtotalInr.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-[#FF4081]">
              <span>GOLD 1+1 BOGO DISCOUNT:</span>
              <span>-₹{cartSummary.bogoDiscountInr.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between">
              <span>OPTICAL GST (12%):</span>
              <span>₹{cartSummary.gstAmountInr.toLocaleString('en-IN')}</span>
            </div>
            <div className="flex justify-between text-sm pt-2 border-t-2 border-[#000000]">
              <span>FINAL STREET TOTAL:</span>
              <span>₹{cartSummary.finalTotalInr.toLocaleString('en-IN')}</span>
            </div>
          </div>

          <button
            type="button"
            disabled={cart.length === 0}
            onClick={handleCheckoutBogo}
            className="w-full py-3.5 bg-[#FF4081] text-white text-xs font-bold border-4 border-[#000000] shadow-[4px_4px_0px_0px_#000000] disabled:opacity-40 hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all"
          >
            LOCK IN BOGO ORDER AT DUM DUM STATION
          </button>
        </div>
      </Dialog>

      <footer className="mt-16 border-t-4 border-[#000000] bg-[#FFFFFF] py-8 px-6 md:px-12 text-xs font-bold">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>K-STREET OPTICS · DUM DUM METRO GATE 1, KOLKATA 700028</p>
          <div className="flex items-center gap-6">
            <Link href="/five" className="hover:text-[#FF4081] underline">
              ← PREV: HAND-DRAWN
            </Link>
            <Link href="/" className="hover:text-[#FF4081] underline">
              MANIFEST INDEX
            </Link>
            <Link href="/one" className="hover:text-[#FF4081] underline">
              BACK TO /ONE →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
