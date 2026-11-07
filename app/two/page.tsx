'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import {
  EYEWEAR_PRODUCTS,
  LENS_TECH_OPTIONS,
  LensTechOption,
  calculateLensPackagePrice,
} from '@/lib/eyewear-catalog';
import { Dialog } from '@/components/ui/dialog';
import { ResilientEyewearImage } from '@/components/ResilientEyewearImage';
import { Shield, Sun, Eye, Sparkles, Check, Play, Pause } from 'lucide-react';

const FACE_PRESETS = [
  { id: 'oval', label: 'Oval Profile', pdMm: 62, fitNote: 'Balanced cheekbone ratio · Ideal with 50–52mm bridge' },
  { id: 'square', label: 'Angular Jawline', pdMm: 65, fitNote: 'Softened by panto & rounded translucent acetate rims' },
  { id: 'heart', label: 'Heart / Narrow Chin', pdMm: 59, fitNote: 'Best paired with rimless titanium or bottom-light frames' },
] as const;

export default function GlassmorphismPage() {
  const [selectedTechId, setSelectedTechId] = useState<LensTechOption['id']>('blue-cut');
  const [selectedFrame, setSelectedFrame] = useState(EYEWEAR_PRODUCTS[1]);
  const [highIndexUpgrade, setHighIndexUpgrade] = useState<boolean>(false);
  const [ambientUvLevel, setAmbientUvLevel] = useState<number>(65);
  const [tryOnOpen, setTryOnOpen] = useState<boolean>(false);
  const [selectedFace, setSelectedFace] = useState<(typeof FACE_PRESETS)[number]>(FACE_PRESETS[0]);
  const [tryOnReserved, setTryOnReserved] = useState<string | null>(null);
  const [videoPlaying, setVideoPlaying] = useState<boolean>(true);

  const activeTech = useMemo(
    () => LENS_TECH_OPTIONS.find((t) => t.id === selectedTechId) || LENS_TECH_OPTIONS[0],
    [selectedTechId]
  );

  const totalPackagePrice = useMemo(
    () => calculateLensPackagePrice(selectedFrame.priceInr, selectedTechId, highIndexUpgrade),
    [selectedFrame.priceInr, selectedTechId, highIndexUpgrade]
  );

  const handleReserveConfiguration = () => {
    const code = `NV-GLASS-${Math.floor(1000 + Math.random() * 9000)}`;
    setTryOnReserved(code);
  };

  return (
    <div
      style={{
        fontFamily: 'var(--font-outfit), sans-serif',
        background:
          'radial-gradient(circle at 15% 20%, #4C1D95 0%, transparent 45%), radial-gradient(circle at 85% 30%, #0F766E 0%, transparent 50%), radial-gradient(circle at 50% 85%, #4C1D95 0%, transparent 50%), #0F172A',
      }}
      className="min-h-screen text-[#FFFFFF] selection:bg-teal-400 selection:text-slate-950"
    >
      {/* 3-Zone Top Bar Contract */}
      <header className="flex items-center justify-between gap-8 px-6 md:px-12 py-5 border-b border-white/20 bg-white/5 backdrop-blur-md">
        <Link
          href="/two"
          className="text-xl font-bold tracking-tight text-white whitespace-nowrap shrink-0"
        >
          NOVA OPTICS · DUM DUM
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-light text-white/80">
          <a
            href="#lens-tech-selector"
            className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Lens Tech
          </a>
          <a
            href="#spectral-simulator"
            className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Blue-Cut Lab
          </a>
          <a
            href="#smart-frames"
            className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Smart Frames
          </a>
          <Link
            href="/"
            className="hover:text-white hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            All 6 Themes
          </Link>
        </nav>

        <div className="flex items-center shrink-0">
          <button
            type="button"
            onClick={() => {
              setTryOnReserved(null);
              setTryOnOpen(true);
            }}
            className="px-5 py-2.5 text-xs font-bold text-white bg-white/15 border border-white/25 rounded-xl backdrop-blur-md hover:bg-white/25 transition-all whitespace-nowrap shrink-0"
          >
            Virtual Try-On
          </button>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 md:px-12 py-12 md:py-16 space-y-20">
        {/* Hero Section with Real Video Placeholder + Frosted Glass Layers */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          <div className="lg:col-span-6 p-8 md:p-12 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl flex flex-col justify-between">
            <div>
              <p className="text-xs font-light tracking-widest uppercase text-teal-200">
                Nova Blue-Cut & Photochromic Range · Kolkata
              </p>
              <h1
                style={{ fontSize: 'clamp(2.5rem, 4.5vw, 3.75rem)' }}
                className="mt-4 font-bold tracking-tight leading-[1.08] text-white text-balance"
              >
                The Future of Clarity
              </h1>
              <p className="mt-5 text-base md:text-lg font-light text-white/85 leading-relaxed max-w-[52ch]">
                Smart lenses for the digital age, available right here in
                Kolkata. Multi-layer vacuum coatings engineered to filter HEV
                420nm blue light and adapt instantaneously to tropical UV.
              </p>
            </div>

            <div className="mt-10 pt-8 border-t border-white/20 space-y-6">
              <div className="flex flex-wrap items-center gap-4">
                <button
                  type="button"
                  onClick={() => {
                    setTryOnReserved(null);
                    setTryOnOpen(true);
                  }}
                  className="px-7 py-4 rounded-2xl bg-white/15 border border-white/30 backdrop-blur-md text-sm font-bold text-white hover:bg-white/25 transition-all whitespace-nowrap shrink-0"
                >
                  Virtual Try-On
                </button>
                <a
                  href="#lens-tech-selector"
                  className="px-6 py-4 rounded-2xl bg-slate-950/40 border border-white/15 text-sm font-light text-white/90 hover:text-white hover:border-white/30 transition-all whitespace-nowrap shrink-0"
                >
                  Explore Coatings
                </a>
              </div>

              <div className="grid grid-cols-3 gap-4 pt-2 text-xs font-light text-white/80 tabular-nums">
                <div>
                  <p className="text-lg font-bold text-white">92%</p>
                  <p>HEV Blue-Cut Block</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-white">18 sec</p>
                  <p>Photochromic Shift</p>
                </div>
                <div>
                  <p className="text-lg font-bold text-white">1.74</p>
                  <p>Ultra-Thin Index</p>
                </div>
              </div>
            </div>
          </div>

          {/* Cinematic Video Container with Frosted HUD */}
          <div className="lg:col-span-6 relative rounded-3xl overflow-hidden bg-white/10 border border-white/20 backdrop-blur-xl min-h-[400px] flex flex-col justify-between">
            <div className="absolute inset-0">
              <ResilientEyewearImage
                src="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=80"
                alt="Cinematic pan over modern transparent eyeglasses"
                className="h-full w-full opacity-75"
                fallbackTone="dark"
              />
            </div>
            <video
              aria-label="Cinematic pan over modern transparent eyeglasses"
              poster="https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=80"
              data-video-placeholder="https://cdn.pixabay.com/video/2021/08/04/83911-584795325_large.mp4"
              muted
              loop
              playsInline
              className="absolute inset-0 h-full w-full object-cover opacity-30 pointer-events-none"
            />
            <div
              style={{ backgroundColor: activeTech.tintHex }}
              className="absolute inset-0 transition-colors duration-300 pointer-events-none"
              aria-hidden="true"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/35 to-transparent"
              aria-hidden="true"
            />

            <div className="relative z-10 p-6 flex items-center justify-between">
              <span className="text-xs font-light text-white/90 bg-slate-950/50 border border-white/20 backdrop-blur-md px-3.5 py-1.5 rounded-lg">
                Live Optical Coating Preview · {activeTech.code}
              </span>
              <button
                type="button"
                onClick={() => setVideoPlaying((prev) => !prev)}
                aria-label={videoPlaying ? 'Pause background video' : 'Play background video'}
                className="p-2.5 rounded-xl bg-white/15 border border-white/25 backdrop-blur-md text-white hover:bg-white/25"
              >
                {videoPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
              </button>
            </div>

            <div className="relative z-10 m-6 p-6 rounded-2xl bg-white/10 border border-white/20 backdrop-blur-xl">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-light text-teal-200">
                    Active Coating Layer
                  </p>
                  <h2 className="text-lg font-bold text-white">{activeTech.name}</h2>
                </div>
                <span className="text-sm font-bold text-white tabular-nums">
                  +₹{activeTech.addonPriceInr.toLocaleString('en-IN')}
                </span>
              </div>
              <p className="mt-2 text-xs font-light text-white/80">
                {activeTech.subtitle}
              </p>
            </div>
          </div>
        </section>

        {/* UI Component: LensTechSelector - Floating Glass Panels */}
        <section id="lens-tech-selector" className="space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div>
              <p className="text-xs font-light uppercase tracking-widest text-teal-200">
                Lenskart 3D Try-On & Nova Coating Matrix
              </p>
              <h2 className="mt-1 text-3xl font-bold tracking-tight text-white">
                Interactive Lens Technology Selector
              </h2>
            </div>
            <p className="text-sm font-light text-white/80 max-w-md">
              Select a floating glass panel below to inspect spectral blocking
              efficiency and configure your custom prescription package.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {LENS_TECH_OPTIONS.map((tech) => {
              const isSelected = tech.id === selectedTechId;
              return (
                <button
                  key={tech.id}
                  type="button"
                  onClick={() => setSelectedTechId(tech.id)}
                  className={`text-left p-6 rounded-2xl backdrop-blur-xl transition-all flex flex-col justify-between ${
                    isSelected
                      ? 'bg-white/20 border-2 border-white shadow-2xl -translate-y-1'
                      : 'bg-white/10 border border-white/20 hover:bg-white/15'
                  }`}
                >
                  <div>
                    <div className="flex items-center justify-between text-xs font-light text-teal-200 tabular-nums">
                      <span>{tech.code}</span>
                      <span>+₹{tech.addonPriceInr}</span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-white">
                      {tech.name}
                    </h3>
                    <p className="mt-2 text-xs font-light text-white/80 leading-relaxed">
                      {tech.subtitle}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-white/15 space-y-2 text-xs font-light tabular-nums">
                    <div className="flex justify-between">
                      <span className="text-white/70">Blue-Light Cut:</span>
                      <span className="font-bold text-white">{tech.blueLightBlockPercent}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">UV400 Shield:</span>
                      <span className="font-bold text-white">{tech.uvProtectionPercent}%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-white/70">Hardness:</span>
                      <span className="font-bold text-white">{tech.scratchResistanceRating}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Spectral Simulator & Package Calculator Panel */}
          <div
            id="spectral-simulator"
            className="p-8 md:p-10 rounded-3xl bg-white/10 border border-white/20 backdrop-blur-xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center"
          >
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center gap-3 text-xs font-light text-teal-200">
                <Sparkles className="h-4 w-4" />
                <span>Real-Time Optical Transmission Simulator</span>
              </div>
              <h3 className="text-2xl font-bold text-white">
                {activeTech.name} — Spectral Profile
              </h3>
              <p className="text-sm font-light text-white/85 leading-relaxed">
                {activeTech.description}
              </p>

              <div className="pt-2 space-y-3">
                <div className="flex justify-between text-xs font-light tabular-nums">
                  <label htmlFor="uv-slider">
                    Simulated Kolkata Midday UV & Screen Glare Intensity
                  </label>
                  <span className="font-bold">{ambientUvLevel}% Irradiance</span>
                </div>
                <input
                  id="uv-slider"
                  type="range"
                  min={10}
                  max={100}
                  value={ambientUvLevel}
                  onChange={(e) => setAmbientUvLevel(Number(e.target.value))}
                  className="w-full accent-teal-300 cursor-pointer"
                />
              </div>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <label className="inline-flex items-center gap-2.5 text-xs font-light cursor-pointer">
                  <input
                    type="checkbox"
                    checked={highIndexUpgrade}
                    onChange={(e) => setHighIndexUpgrade(e.target.checked)}
                    className="h-4 w-4 rounded border-white/30 accent-teal-400"
                  />
                  <span>Add 1.67 Super-Thin Aspheric Upgrade (+₹850)</span>
                </label>
              </div>
            </div>

            <div className="lg:col-span-5 p-6 rounded-2xl bg-slate-950/45 border border-white/20 backdrop-blur-md space-y-5">
              {/* Simulated Lens Optic Circle */}
              <div className="flex items-center gap-5">
                <div
                  style={{
                    backgroundColor: activeTech.tintHex,
                    boxShadow: `inset 0 0 ${Math.round(ambientUvLevel / 2)}px rgba(255,255,255,0.45)`,
                  }}
                  className="h-24 w-24 rounded-full border-2 border-white/40 flex flex-col items-center justify-center text-center p-2 shrink-0 transition-all"
                >
                  <span className="text-xs font-bold tabular-nums">
                    {activeTech.lightTransmissionPercent}%
                  </span>
                  <span className="text-[10px] font-light text-white/80">Clarity</span>
                </div>
                <div className="space-y-1 text-xs font-light tabular-nums">
                  <p className="text-white/70">Selected Frame Chassis:</p>
                  <p className="text-base font-bold text-white">{selectedFrame.name}</p>
                  <p className="text-teal-200">
                    Complete Package: ₹{totalPackagePrice.toLocaleString('en-IN')}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  setTryOnReserved(null);
                  setTryOnOpen(true);
                }}
                className="w-full py-3.5 px-5 rounded-xl bg-white/20 border border-white/30 backdrop-blur-md text-xs font-bold text-white hover:bg-white/30 transition-all"
              >
                Launch 3D Virtual Try-On with {activeTech.code}
              </button>
            </div>
          </div>
        </section>

        {/* Smart Translucent Frames Showcase */}
        <section id="smart-frames" className="space-y-6">
          <h2 className="text-2xl font-bold text-white">
            Compatible Translucent & Titanium Chassis
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {EYEWEAR_PRODUCTS.slice(0, 3).map((frame) => {
              const isCurrent = selectedFrame.id === frame.id;
              return (
                <div
                  key={frame.id}
                  className={`p-5 rounded-2xl backdrop-blur-xl transition-all flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-white/20 border-2 border-teal-300'
                      : 'bg-white/10 border border-white/20'
                  }`}
                >
                  <div>
                    <div className="aspect-[4/3] rounded-xl overflow-hidden mb-4 border border-white/15">
                      <ResilientEyewearImage
                        src={frame.imageUrl}
                        alt={frame.imageAlt}
                        className="h-full w-full"
                        fallbackTone="dark"
                      />
                    </div>
                    <div className="flex items-center justify-between text-xs font-light text-white/75 tabular-nums">
                      <span>{frame.sku}</span>
                      <span>{frame.weightGrams}g</span>
                    </div>
                    <h3 className="mt-1 text-lg font-bold text-white">{frame.name}</h3>
                    <p className="mt-1 text-xs font-light text-white/80">{frame.tagline}</p>
                  </div>

                  <div className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between gap-3">
                    <span className="text-sm font-bold tabular-nums">
                      ₹{frame.priceInr.toLocaleString('en-IN')}
                    </span>
                    <button
                      type="button"
                      onClick={() => setSelectedFrame(frame)}
                      className="px-4 py-2 rounded-xl bg-white/15 border border-white/25 text-xs font-bold hover:bg-white/25 transition-colors"
                    >
                      {isCurrent ? 'Selected Chassis' : 'Select Chassis'}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>
      </main>

      {/* shadcn/ui Dialog for Virtual Try-On */}
      <Dialog
        open={tryOnOpen}
        onOpenChange={setTryOnOpen}
        variant="glass"
        title="Nova 3D Virtual Try-On & Optical Fit Studio"
        description="Calibrate frame geometry and preview spectral lens tinting for Dum Dum store pickup."
      >
        <div className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
            <div className="relative rounded-2xl overflow-hidden border border-white/25 aspect-[4/3] bg-slate-900">
              <ResilientEyewearImage
                src={selectedFrame.imageUrl}
                alt={selectedFrame.imageAlt}
                className="h-full w-full"
                fallbackTone="dark"
              />
              <div
                style={{ backgroundColor: activeTech.tintHex }}
                className="absolute inset-0 pointer-events-none transition-colors duration-300"
              />
              <div className="absolute bottom-3 inset-x-3 p-3 rounded-xl bg-slate-950/75 border border-white/20 backdrop-blur-md text-xs flex items-center justify-between tabular-nums">
                <span>{selectedFrame.name}</span>
                <span>PD: {selectedFace.pdMm}mm</span>
              </div>
            </div>

            <div className="space-y-4">
              <div>
                <p className="text-xs font-light text-teal-200 uppercase tracking-wider">
                  Step 1 · Select Face Geometry Preset
                </p>
                <div className="mt-2 space-y-2">
                  {FACE_PRESETS.map((preset) => (
                    <button
                      key={preset.id}
                      type="button"
                      onClick={() => setSelectedFace(preset)}
                      className={`w-full text-left p-3 rounded-xl border text-xs transition-all ${
                        selectedFace.id === preset.id
                          ? 'bg-white/20 border-teal-300 text-white'
                          : 'bg-white/5 border-white/15 text-white/80 hover:bg-white/10'
                      }`}
                    >
                      <div className="flex justify-between font-bold">
                        <span>{preset.label}</span>
                        <span className="tabular-nums">PD {preset.pdMm}mm</span>
                      </div>
                      <p className="mt-0.5 font-light text-white/75">{preset.fitNote}</p>
                    </button>
                  ))}
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-white/10 border border-white/20 text-xs space-y-1 tabular-nums">
                <div className="flex justify-between">
                  <span className="text-white/75">Selected Coating:</span>
                  <span className="font-bold">{activeTech.name}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-white/75">Complete Package Total:</span>
                  <span className="font-bold text-teal-200">
                    ₹{totalPackagePrice.toLocaleString('en-IN')}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {tryOnReserved ? (
            <div className="p-4 rounded-xl bg-teal-500/20 border border-teal-300/40 text-xs flex items-center gap-3">
              <Check className="h-5 w-5 text-teal-300 shrink-0" />
              <div>
                <p className="font-bold text-white">
                  3D Fit Profile Saved · Reservation #{tryOnReserved}
                </p>
                <p className="font-light text-white/85">
                  Ready for instant trial at our Dum Dum Cantonment & Jessore Road lounge.
                </p>
              </div>
            </div>
          ) : (
            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                type="button"
                onClick={() => setTryOnOpen(false)}
                className="px-4 py-2.5 rounded-xl border border-white/20 text-xs font-light hover:bg-white/10"
              >
                Close Preview
              </button>
              <button
                type="button"
                onClick={handleReserveConfiguration}
                className="px-6 py-2.5 rounded-xl bg-white/25 border border-white/40 backdrop-blur-md text-xs font-bold text-white hover:bg-white/35"
              >
                Reserve Smart Package (₹{totalPackagePrice.toLocaleString('en-IN')})
              </button>
            </div>
          )}
        </div>
      </Dialog>

      <footer className="border-t border-white/20 bg-slate-950/40 backdrop-blur-md py-10 px-6 md:px-12 text-xs font-light text-white/75">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>Nova Smart Opticals · Dum Dum Metro Gate 2, Kolkata 700030</p>
          <div className="flex items-center gap-6">
            <Link href="/one" className="hover:text-white underline">
              ← Prev: Minimalist
            </Link>
            <Link href="/" className="hover:text-white underline">
              Manifest Index
            </Link>
            <Link href="/three" className="hover:text-white underline">
              Next: Bento Grids →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
