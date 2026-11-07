'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  EYEWEAR_PRODUCTS,
  EyewearProduct,
  CartItem,
  filterProductsByCategory,
  calculateCartSummary,
  recommendFrameSizeByPupillaryDistance,
} from '@/lib/eyewear-catalog';
import { ResilientEyewearImage } from '@/components/ResilientEyewearImage';
import { Plus, Minus, Check, SlidersHorizontal, ArrowUpRight } from 'lucide-react';

const CATEGORIES = ['All', 'Titanium', 'Optical', 'Acetate', 'Sunglasses', 'Blue-Cut'] as const;

export default function MinimalistFlatPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [pdMm, setPdMm] = useState<number>(62);
  const [cart, setCart] = useState<CartItem[]>([
    { product: EYEWEAR_PRODUCTS[0], quantity: 1 },
  ]);
  const [isBagOpen, setIsBagOpen] = useState<boolean>(false);
  const [orderPlacedId, setOrderPlacedId] = useState<string | null>(null);
  const [activeProductSpec, setActiveProductSpec] = useState<EyewearProduct | null>(null);

  const filteredProducts = useMemo(
    () => filterProductsByCategory(EYEWEAR_PRODUCTS, selectedCategory, searchQuery),
    [selectedCategory, searchQuery]
  );

  const cartSummary = useMemo(() => calculateCartSummary(cart, false), [cart]);
  const pdRecommendation = useMemo(
    () => recommendFrameSizeByPupillaryDistance(pdMm),
    [pdMm]
  );

  const handleAddToCart = (product: EyewearProduct) => {
    setOrderPlacedId(null);
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

  const handleUpdateQuantity = (productId: string, delta: number) => {
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

  const handlePlaceClinicalOrder = () => {
    if (cart.length === 0) return;
    const code = `DD-FLAT-${Math.floor(1000 + Math.random() * 9000)}`;
    setOrderPlacedId(code);
    setCart([]);
  };

  return (
    <div
      style={{ fontFamily: 'var(--font-inter), sans-serif' }}
      className="min-h-screen bg-[#FFFFFF] text-[#000000] selection:bg-[#0F0F0F] selection:text-[#FFFFFF]"
    >
      {/* 3-Zone Top Bar Contract: Zero drop shadows, 1px solid #E0E0E0 border */}
      <header className="flex items-center justify-between gap-8 px-6 md:px-12 py-5 border-b border-[#E0E0E0]">
        <Link
          href="/one"
          className="text-lg font-semibold tracking-tight text-[#000000] whitespace-nowrap shrink-0"
        >
          DUM DUM OPTICAL LAB
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-normal text-[#757575]">
          <a
            href="#frames-grid"
            className="hover:text-[#000000] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Frames
          </a>
          <a
            href="#pd-calibration"
            className="hover:text-[#000000] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            PD Sizing
          </a>
          <a
            href="#lab-standards"
            className="hover:text-[#000000] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Clinical Spec
          </a>
          <Link
            href="/"
            className="hover:text-[#000000] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            All 6 Themes
          </Link>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => setIsBagOpen((prev) => !prev)}
            className="px-5 py-2.5 text-xs font-semibold bg-[#0F0F0F] text-[#FFFFFF] border border-[#0F0F0F] hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors whitespace-nowrap shrink-0 tabular-nums"
          >
            Bag ({cartSummary.totalItems}) · ₹{cartSummary.finalTotalInr.toLocaleString('en-IN')}
          </button>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 md:px-12">
        {/* Hero Section: Strict 2-column flat architectural grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 border-x border-b border-[#E0E0E0] items-stretch">
          <div className="lg:col-span-6 p-8 md:p-16 flex flex-col justify-between border-b lg:border-b-0 lg:border-r border-[#E0E0E0]">
            <div>
              <p className="text-xs text-[#757575] tracking-widest uppercase mb-6">
                01 · Dum Dum, Kolkata · Clinical Precision
              </p>
              <h1
                style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)' }}
                className="font-semibold tracking-tight leading-[1.08] text-[#000000] text-balance"
              >
                Vision, simplified.
              </h1>
              <p className="mt-6 text-base md:text-lg text-[#757575] font-normal leading-relaxed max-w-[54ch]">
                Precision lenses cut at our Dum Dum laboratory. Zero distortion
                aspheric optics mounted in medical-grade Japanese beta-titanium
                and cured cellulose acetate.
              </p>
            </div>

            <div className="mt-12 pt-8 border-t border-[#E0E0E0] flex flex-wrap items-center justify-between gap-4">
              <a
                href="#frames-grid"
                className="inline-flex items-center gap-3 px-7 py-3.5 bg-[#0F0F0F] text-[#FFFFFF] text-sm font-semibold border border-[#0F0F0F] hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors whitespace-nowrap shrink-0"
              >
                <span>Shop Frames</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
              <div className="text-xs text-[#757575] tabular-nums">
                <span>ISO 13485 Certified Lab</span>
                <span aria-hidden="true"> · </span>
                <span>45-Min Express Grinding</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 min-h-[380px] lg:min-h-[540px] relative bg-[#FAFAFA]">
            <ResilientEyewearImage
              src="https://images.unsplash.com/photo-1511499767150-a48a237f0083?auto=format&fit=crop&w=1200&q=80"
              alt="Clear eyeglasses resting on a clean white surface"
              className="h-full w-full"
              fallbackTone="light"
            />
            <div className="absolute bottom-0 inset-x-0 bg-[#FFFFFF] border-t border-[#E0E0E0] px-6 py-3 flex items-center justify-between text-xs text-[#757575] tabular-nums">
              <span>Ref. DD-TI-4919 · Raw Brushed Silver</span>
              <span>49 □ 19 — 142 mm · 11.4g</span>
            </div>
          </div>
        </section>

        {/* Specsmakers-Inspired Simple Frame Categorization Bar */}
        <section id="frames-grid" className="pt-16 pb-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-[#E0E0E0]">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-[#000000]">
                02. Frame Categorization
              </h2>
              <p className="mt-1 text-sm text-[#757575]">
                2-column flat architectural grid · Standardized single-vision & progressive ready
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {CATEGORIES.map((category) => {
                const isActive = selectedCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 text-xs font-semibold border transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'bg-[#0F0F0F] text-[#FFFFFF] border-[#0F0F0F]'
                        : 'bg-[#FFFFFF] text-[#757575] border-[#E0E0E0] hover:text-[#000000] hover:border-[#000000]'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="py-4 border-b border-[#E0E0E0] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-1">
              <label htmlFor="flat-search" className="text-xs font-semibold text-[#757575] whitespace-nowrap">
                Filter by SKU or Material:
              </label>
              <input
                id="flat-search"
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="e.g. Titanium, Tortoise, DD-TI..."
                className="w-full max-w-xs px-3 py-1.5 text-sm border border-[#E0E0E0] bg-[#FFFFFF] text-[#000000] placeholder:text-[#757575] focus:outline-none focus:border-[#000000]"
              />
            </div>
            <p className="text-xs text-[#757575] tabular-nums">
              Showing {filteredProducts.length} of {EYEWEAR_PRODUCTS.length} clinical frames
            </p>
          </div>

          {/* 2-Column Flat Grid with 1px solid #E0E0E0 borders */}
          {filteredProducts.length === 0 ? (
            <div className="border-x border-b border-[#E0E0E0] p-16 text-center">
              <p className="text-base font-semibold text-[#000000]">
                No frames match your current filter.
              </p>
              <button
                type="button"
                onClick={() => {
                  setSelectedCategory('All');
                  setSearchQuery('');
                }}
                className="mt-4 px-5 py-2 text-xs font-semibold bg-[#0F0F0F] text-[#FFFFFF]"
              >
                Reset Categorization
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 border-l border-t border-[#E0E0E0] mt-6">
              {filteredProducts.map((product) => (
                <article
                  key={product.id}
                  className="border-r border-b border-[#E0E0E0] bg-[#FFFFFF] flex flex-col justify-between"
                >
                  <div className="aspect-[4/3] w-full border-b border-[#E0E0E0] bg-[#FAFAFA]">
                    <ResilientEyewearImage
                      src={product.imageUrl}
                      alt={product.imageAlt}
                      className="h-full w-full"
                      fallbackTone="light"
                    />
                  </div>

                  <div className="p-8 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between gap-2 text-xs text-[#757575] tabular-nums">
                        <span>
                          {product.category} · {product.sku}
                        </span>
                        <span>
                          {product.lensWidthMm} □ {product.bridgeWidthMm} — {product.templeLengthMm}mm
                        </span>
                      </div>

                      <div className="mt-2 flex items-baseline justify-between gap-4">
                        <h3 className="text-lg font-semibold text-[#000000]">
                          {product.name}
                        </h3>
                        <span className="text-base font-semibold text-[#000000] tabular-nums shrink-0">
                          ₹{product.priceInr.toLocaleString('en-IN')}
                        </span>
                      </div>

                      <p className="mt-2 text-sm text-[#757575] leading-relaxed">
                        {product.tagline}
                      </p>

                      <div className="mt-4 pt-4 border-t border-[#E0E0E0] text-xs text-[#757575] flex items-center justify-between tabular-nums">
                        <span>Material: {product.material}</span>
                        <span>Chassis Weight: {product.weightGrams}g</span>
                      </div>
                    </div>

                    <div className="mt-6 flex items-center gap-3">
                      <button
                        type="button"
                        onClick={() => handleAddToCart(product)}
                        className="flex-1 py-3 px-4 bg-[#0F0F0F] text-[#FFFFFF] text-xs font-semibold border border-[#0F0F0F] hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors whitespace-nowrap"
                      >
                        Add to Bag · ₹{product.priceInr.toLocaleString('en-IN')}
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setActiveProductSpec(
                            activeProductSpec?.id === product.id ? null : product
                          )
                        }
                        className="py-3 px-4 bg-[#FFFFFF] text-[#000000] text-xs font-semibold border border-[#E0E0E0] hover:border-[#000000] transition-colors whitespace-nowrap"
                      >
                        {activeProductSpec?.id === product.id ? 'Hide Spec' : 'Lab Spec'}
                      </button>
                    </div>

                    {activeProductSpec?.id === product.id && (
                      <div className="mt-4 p-4 border border-[#E0E0E0] bg-[#FAFAFA] text-xs text-[#000000] space-y-1.5 tabular-nums">
                        <p className="font-semibold">
                          Dum Dum Optical Bench Calibration ({product.sku})
                        </p>
                        <p className="text-[#757575]">
                          Colorway: {product.colorway} · In Stock: {product.inStockCount} units at Nagerbazar Lab
                        </p>
                        <p className="text-[#757575]">
                          Compatible Rx Range: -10.00D to +6.00D (Cyl up to ±4.00D)
                        </p>
                      </div>
                    )}
                  </div>
                </article>
              ))}
            </div>
          )}
        </section>

        {/* Clinical Pupillary Distance (PD) Sizing Tool */}
        <section
          id="pd-calibration"
          className="my-16 border border-[#E0E0E0] p-8 md:p-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
        >
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 text-xs text-[#757575] uppercase tracking-widest">
              <SlidersHorizontal className="h-3.5 w-3.5" />
              <span>03 · Clinical Anthropometry</span>
            </div>
            <h2 className="mt-2 text-2xl font-semibold text-[#000000]">
              Pupillary Distance (PD) Frame Calibrator
            </h2>
            <p className="mt-2 text-sm text-[#757575] max-w-[60ch]">
              Slide to match your optometrist&apos;s PD measurement (in millimeters).
              Our laboratory aligns the optical center of every lens within 0.25mm
              of your visual axis.
            </p>

            <div className="mt-6 max-w-md">
              <div className="flex items-center justify-between text-xs font-semibold text-[#000000] mb-2 tabular-nums">
                <label htmlFor="pd-slider">Measured Pupillary Distance</label>
                <span>{pdMm} mm</span>
              </div>
              <input
                id="pd-slider"
                type="range"
                min={52}
                max={74}
                value={pdMm}
                onChange={(e) => setPdMm(Number(e.target.value))}
                className="w-full accent-[#0F0F0F] cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#757575] mt-1 tabular-nums">
                <span>52mm (Narrow)</span>
                <span>63mm (Standard)</span>
                <span>74mm (Wide)</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 border border-[#E0E0E0] p-6 bg-[#FAFAFA] tabular-nums">
            <p className="text-xs text-[#757575] uppercase tracking-wider">
              Recommended Geometry
            </p>
            <p className="mt-1 text-xl font-semibold text-[#000000]">
              {pdRecommendation.sizeLabel}
            </p>
            <div className="mt-4 pt-4 border-t border-[#E0E0E0] space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-[#757575]">Ideal Lens Width:</span>
                <span className="font-semibold text-[#000000]">
                  {pdRecommendation.recommendedLensWidthMm}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#757575]">Ideal Nose Bridge:</span>
                <span className="font-semibold text-[#000000]">
                  {pdRecommendation.recommendedBridgeMm}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#757575]">Matched Lab SKUs:</span>
                <span className="font-semibold text-[#000000]">
                  {pdRecommendation.matchingSkus.join(' · ')}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Clinical Laboratory Standards Section */}
        <section
          id="lab-standards"
          className="mb-20 border-t border-[#E0E0E0] pt-12 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div>
            <p className="text-xs text-[#757575] tabular-nums">01 / GRINDING</p>
            <h3 className="mt-2 text-base font-semibold text-[#000000]">
              Digital Freeform Surfacing
            </h3>
            <p className="mt-2 text-sm text-[#757575] leading-relaxed">
              Every prescription is diamond-turned at our Jessore Road facility
              with 0.01 diopter tolerance and ultrasonic clean-room sealing.
            </p>
          </div>
          <div>
            <p className="text-xs text-[#757575] tabular-nums">02 / MATERIALS</p>
            <h3 className="mt-2 text-base font-semibold text-[#000000]">
              Hypoallergenic Nickel-Free Alloy
            </h3>
            <p className="mt-2 text-sm text-[#757575] leading-relaxed">
              Tested for Kolkata&apos;s monsoon humidity. Zero green oxidation on
              nose pads or temple tips over 5 years of daily wear.
            </p>
          </div>
          <div>
            <p className="text-xs text-[#757575] tabular-nums">03 / TRANSPARENCY</p>
            <h3 className="mt-2 text-base font-semibold text-[#000000]">
              Flat Clinical Pricing
            </h3>
            <p className="mt-2 text-sm text-[#757575] leading-relaxed">
              No artificial inflated MRP or spinning discount wheels. Direct
              optical laboratory pricing inclusive of anti-scratch hard coating.
            </p>
          </div>
        </section>
      </main>

      {/* Flat 1px Bordered Shopping Bag Modal / Drawer */}
      {isBagOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/40 flex justify-end"
          role="dialog"
          aria-modal="true"
          aria-label="Shopping Bag"
        >
          <div className="w-full max-w-md bg-[#FFFFFF] h-full border-l border-[#E0E0E0] p-8 flex flex-col justify-between overflow-y-auto">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#E0E0E0]">
                <h2 className="text-lg font-semibold text-[#000000]">
                  Clinical Dispersion Bag
                </h2>
                <button
                  type="button"
                  onClick={() => setIsBagOpen(false)}
                  className="px-3 py-1 text-xs font-semibold border border-[#E0E0E0] text-[#000000] hover:border-[#000000]"
                >
                  Close
                </button>
              </div>

              {orderPlacedId ? (
                <div className="my-8 p-6 border border-[#000000] bg-[#FAFAFA]">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#000000]">
                    <Check className="h-4 w-4" />
                    <span>Order Confirmed · {orderPlacedId}</span>
                  </div>
                  <p className="mt-2 text-xs text-[#757575] leading-relaxed">
                    Your frame reservation has been transmitted to Dum Dum Optical
                    Lab (Nagerbazar Crossing). Bring your current prescription or
                    complete a complimentary 20-step eye exam upon pickup.
                  </p>
                </div>
              ) : cart.length === 0 ? (
                <p className="py-12 text-sm text-[#757575] text-center">
                  Your optical bag is currently empty.
                </p>
              ) : (
                <ul className="divide-y divide-[#E0E0E0]">
                  {cart.map((item) => (
                    <li key={item.product.id} className="py-5 flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-[#000000]">
                          {item.product.name}
                        </p>
                        <p className="text-xs text-[#757575] tabular-nums">
                          {item.product.sku} · ₹{item.product.priceInr.toLocaleString('en-IN')}
                        </p>
                      </div>
                      <div className="flex items-center border border-[#E0E0E0]">
                        <button
                          type="button"
                          aria-label={`Decrease quantity of ${item.product.name}`}
                          onClick={() => handleUpdateQuantity(item.product.id, -1)}
                          className="p-2 text-[#000000] hover:bg-[#FAFAFA]"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="px-3 text-xs font-semibold tabular-nums">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          aria-label={`Increase quantity of ${item.product.name}`}
                          onClick={() => handleUpdateQuantity(item.product.id, 1)}
                          className="p-2 text-[#000000] hover:bg-[#FAFAFA]"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              )}
            </div>

            <div className="pt-6 border-t border-[#E0E0E0] space-y-3 tabular-nums">
              <div className="flex justify-between text-xs text-[#757575]">
                <span>Subtotal</span>
                <span>₹{cartSummary.subtotalInr.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-xs text-[#757575]">
                <span>Medical Optical GST (12%)</span>
                <span>₹{cartSummary.gstAmountInr.toLocaleString('en-IN')}</span>
              </div>
              <div className="flex justify-between text-sm font-semibold text-[#000000] pt-2 border-t border-[#E0E0E0]">
                <span>Total Payable</span>
                <span>₹{cartSummary.finalTotalInr.toLocaleString('en-IN')}</span>
              </div>

              <button
                type="button"
                disabled={cart.length === 0}
                onClick={handlePlaceClinicalOrder}
                className="w-full py-3.5 bg-[#0F0F0F] text-[#FFFFFF] text-xs font-semibold border border-[#0F0F0F] disabled:opacity-40 hover:bg-[#FFFFFF] hover:text-[#000000] transition-colors"
              >
                Confirm Lab Reservation
              </button>
            </div>
          </div>
        </div>
      )}

      <footer className="border-t border-[#E0E0E0] py-10 px-6 md:px-12 text-xs text-[#757575]">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>Dum Dum Optical Lab · 142 Jessore Road, Nagerbazar, Kolkata 700028</p>
          <div className="flex items-center gap-6">
            <Link href="/" className="hover:text-[#000000] underline">
              Manifest Index
            </Link>
            <Link href="/two" className="hover:text-[#000000] underline">
              Next: Glassmorphism →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
