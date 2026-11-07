'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  EYEWEAR_PRODUCTS,
  EyeTestBookingInput,
  validateEyeTestBooking,
} from '@/lib/eyewear-catalog';
import { ResilientEyewearImage } from '@/components/ResilientEyewearImage';
import {
  Calendar,
  Clock,
  ShieldCheck,
  MapPin,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';

interface ClinicSlot {
  time: string;
  optometrist: string;
  availableChairs: number;
}

const INITIAL_SLOTS: ClinicSlot[] = [
  { time: '11:30 AM', optometrist: 'Dr. S. Sengupta (M.Optom)', availableChairs: 2 },
  { time: '02:00 PM', optometrist: 'Dr. R. Mukherjee (OD)', availableChairs: 3 },
  { time: '05:30 PM', optometrist: 'Dr. A. Banerjee (Senior Optom)', availableChairs: 1 },
  { time: '07:15 PM', optometrist: 'Dr. S. Sengupta (M.Optom)', availableChairs: 2 },
];

export default function BentoGridsPage() {
  const [slots, setSlots] = useState<ClinicSlot[]>(INITIAL_SLOTS);
  const [selectedBranch, setSelectedBranch] =
    useState<EyeTestBookingInput['branch']>('Jessore Road (Nagerbazar)');
  const [bookingForm, setBookingForm] = useState<EyeTestBookingInput>({
    patientName: '',
    phone: '',
    preferredDate: '2026-11-08',
    timeSlot: '11:30 AM',
    testType: '20-Step Precision Eye Exam',
    branch: 'Jessore Road (Nagerbazar)',
  });
  const [formErrors, setFormErrors] = useState<
    Partial<Record<keyof EyeTestBookingInput, string>>
  >({});
  const [confirmedBooking, setConfirmedBooking] = useState<{
    code: string;
    patientName: string;
    timeSlot: string;
    branch: string;
  } | null>(null);
  const [selectedAcetateIndex, setSelectedAcetateIndex] = useState<number>(2); // Jessore Arch Tortoise

  const featuredAcetate = EYEWEAR_PRODUCTS[selectedAcetateIndex] || EYEWEAR_PRODUCTS[2];

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validation = validateEyeTestBooking({
      ...bookingForm,
      branch: selectedBranch,
    });

    if (!validation.valid) {
      setFormErrors(validation.errors);
      setConfirmedBooking(null);
      return;
    }

    setFormErrors({});
    setConfirmedBooking({
      code: validation.confirmationCode || 'DD-2026-OK',
      patientName: bookingForm.patientName.trim(),
      timeSlot: bookingForm.timeSlot,
      branch: selectedBranch,
    });

    setSlots((prev) =>
      prev.map((slot) =>
        slot.time === bookingForm.timeSlot && slot.availableChairs > 0
          ? { ...slot, availableChairs: slot.availableChairs - 1 }
          : slot
      )
    );
  };

  const totalOpenChairs = slots.reduce((acc, s) => acc + s.availableChairs, 0);

  return (
    <div
      style={{
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", var(--font-inter), sans-serif',
      }}
      className="min-h-screen bg-[#F1F5F9] text-[#0F172A] selection:bg-[#2563EB] selection:text-white"
    >
      {/* 3-Zone Top Bar Contract */}
      <header className="flex items-center justify-between gap-8 px-6 md:px-12 py-4 bg-[#FFFFFF] border-b border-slate-200">
        <Link
          href="/three"
          className="text-lg font-bold tracking-tight text-[#0F172A] whitespace-nowrap shrink-0"
        >
          DUM DUM VISION EXPRESSIONS
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
          <a
            href="#bento-dashboard"
            className="hover:text-[#0F172A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            Bento Matrix
          </a>
          <a
            href="#clinic-booking-cell"
            className="hover:text-[#0F172A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            20-Step Eye Test
          </a>
          <a
            href="#warranty-cell"
            className="hover:text-[#0F172A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            1-Yr Warranty
          </a>
          <Link
            href="/"
            className="hover:text-[#0F172A] hover:underline underline-offset-4 transition-colors whitespace-nowrap shrink-0"
          >
            All 6 Themes
          </Link>
        </nav>

        <div className="flex items-center shrink-0">
          <a
            href="#clinic-booking-cell"
            className="px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-xs font-bold hover:bg-blue-700 transition-colors whitespace-nowrap shrink-0"
          >
            Book Eye Test
          </a>
        </div>
      </header>

      <main className="max-w-[1280px] mx-auto px-6 md:px-12 py-10 space-y-8">
        {/* Top-Heavy Bento Hero Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Main Hero Cell (8 cols) */}
          <div className="lg:col-span-8 rounded-3xl bg-[#FFFFFF] border border-slate-200 overflow-hidden grid grid-cols-1 md:grid-cols-12 items-stretch">
            <div className="md:col-span-6 p-8 md:p-10 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-[#2563EB] uppercase tracking-wider">
                  Dum Dum Clinic & Express Optical Hub
                </p>
                <h1
                  style={{ fontSize: 'clamp(2.25rem, 3.8vw, 3.5rem)' }}
                  className="mt-3 font-bold tracking-tight leading-[1.08] text-[#0F172A] text-balance"
                >
                  Crafted for Kolkata
                </h1>
                <p className="mt-4 text-sm md:text-base text-slate-600 leading-relaxed">
                  Modular prescription care combining Titan Eyeplus-grade 20-step
                  clinical optometry with Vision Express 60-minute lens dispatch
                  across North Kolkata.
                </p>
              </div>

              <div className="mt-8 pt-6 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
                <a
                  href="#clinic-booking-cell"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl bg-[#2563EB] text-white text-xs font-bold hover:bg-blue-700 transition-colors whitespace-nowrap shrink-0"
                >
                  <span>Book Eye Test</span>
                  <ArrowRight className="h-4 w-4" />
                </a>
                <div className="text-xs text-slate-500 tabular-nums">
                  <span>Open 10:00 AM – 9:00 PM</span>
                  <span aria-hidden="true"> · </span>
                  <span>7 Days</span>
                </div>
              </div>
            </div>

            <div className="md:col-span-6 min-h-[320px] relative">
              <ResilientEyewearImage
                src="https://images.unsplash.com/photo-1577803645773-f96470509666?auto=format&fit=crop&w=1200&q=80"
                alt="Person wearing stylish tortoise shell glasses outdoors"
                className="h-full w-full"
                fallbackTone="light"
              />
              <div className="absolute bottom-4 inset-x-4 p-4 rounded-2xl bg-slate-900/80 backdrop-blur-md text-white text-xs flex items-center justify-between tabular-nums">
                <span>Jessore Arch Tortoise · 50 □ 20</span>
                <span className="font-bold">₹3,900</span>
              </div>
            </div>
          </div>

          {/* Right Top Bento Summary Cell (4 cols) */}
          <div className="lg:col-span-4 rounded-3xl bg-[#FFFFFF] border border-slate-200 p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>EXPRESS DISPATCH METRICS</span>
                <Clock className="h-4 w-4 text-[#2563EB]" />
              </div>
              <p className="mt-4 text-4xl font-bold tracking-tight text-[#0F172A] tabular-nums">
                54 mins
              </p>
              <p className="mt-1 text-sm font-medium text-slate-700">
                Average Single-Vision Turnaround Today
              </p>
              <p className="mt-3 text-xs text-slate-500 leading-relaxed">
                Cut, edged, and mounted in-house at our Nagerbazar automated
                Briot CNC optical bench.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-100 space-y-3 text-xs tabular-nums">
              <div className="flex justify-between">
                <span className="text-slate-500">Autorefractor Accuracy</span>
                <span className="font-bold text-[#0F172A]">±0.01 Diopter</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Frames Ready for Trial</span>
                <span className="font-bold text-[#0F172A]">640+ Styles</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Home Delivery (Pin 700028–700081)</span>
                <span className="font-bold text-[#2563EB]">Same Evening</span>
              </div>
            </div>
          </div>
        </section>

        {/* UI Component: BentoDashboard (4 Modular Cells as Specified) */}
        <section
          id="bento-dashboard"
          aria-label="Bento Grid Dashboard"
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-fr"
        >
          {/* Cell 1: 1x2 Image card of premium acetate frames (row-span-2 on desktop) */}
          <div className="md:col-span-1 md:row-span-2 rounded-3xl bg-[#FFFFFF] border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500 tabular-nums">
                <span>CELL 01 · 1x2 ACETATE ARCHIVE</span>
                <span>{featuredAcetate.sku}</span>
              </div>
              <h2 className="mt-2 text-xl font-bold text-[#0F172A]">
                {featuredAcetate.name}
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                {featuredAcetate.material} · {featuredAcetate.colorway}
              </p>

              <div className="mt-5 aspect-[4/4] rounded-2xl overflow-hidden border border-slate-100">
                <ResilientEyewearImage
                  src={featuredAcetate.imageUrl}
                  alt={featuredAcetate.imageAlt}
                  className="h-full w-full"
                  fallbackTone="light"
                />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-2 text-center p-3 rounded-2xl bg-[#F1F5F9] text-xs tabular-nums">
                <div>
                  <p className="text-slate-500">Lens</p>
                  <p className="font-bold text-[#0F172A]">{featuredAcetate.lensWidthMm}mm</p>
                </div>
                <div>
                  <p className="text-slate-500">Bridge</p>
                  <p className="font-bold text-[#0F172A]">{featuredAcetate.bridgeWidthMm}mm</p>
                </div>
                <div>
                  <p className="text-slate-500">Weight</p>
                  <p className="font-bold text-[#0F172A]">{featuredAcetate.weightGrams}g</p>
                </div>
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100">
              <p className="text-xs font-medium text-slate-500 mb-2">
                Switch Acetate Frame Preview:
              </p>
              <div className="flex items-center gap-2">
                {[1, 2, 3].map((idx) => {
                  const prod = EYEWEAR_PRODUCTS[idx];
                  const active = selectedAcetateIndex === idx;
                  return (
                    <button
                      key={prod.id}
                      type="button"
                      onClick={() => setSelectedAcetateIndex(idx)}
                      className={`flex-1 py-2 px-2.5 rounded-xl text-xs font-semibold transition-colors whitespace-nowrap truncate ${
                        active
                          ? 'bg-[#2563EB] text-white'
                          : 'bg-[#F1F5F9] text-slate-700 hover:bg-slate-200'
                      }`}
                    >
                      {prod.name.split(' ')[0]}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Cell 2: 1x1 Booking card for Dum Dum clinic (Titan Eyeplus 20-step test reference) */}
          <div
            id="clinic-booking-cell"
            className="md:col-span-1 rounded-3xl bg-[#FFFFFF] border border-slate-200 p-6 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>CELL 02 · 20-STEP OPTOMETRY</span>
                <Calendar className="h-4 w-4 text-[#2563EB]" />
              </div>
              <h2 className="mt-2 text-lg font-bold text-[#0F172A]">
                Dum Dum Clinic Eye Test Booking
              </h2>
              <p className="mt-1 text-xs text-slate-500">
                Titan Eyeplus reference 20-step binocular & retinal refraction check.
              </p>

              <form onSubmit={handleBookingSubmit} className="mt-4 space-y-3" noValidate>
                <div>
                  <label htmlFor="bento-name" className="block text-xs font-semibold text-slate-700">
                    Patient Full Name
                  </label>
                  <input
                    id="bento-name"
                    type="text"
                    value={bookingForm.patientName}
                    onChange={(e) =>
                      setBookingForm((prev) => ({ ...prev, patientName: e.target.value }))
                    }
                    placeholder="e.g. Anirban Ghosh"
                    className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-[#0F172A] focus:outline-none focus:border-[#2563EB]"
                  />
                  {formErrors.patientName && (
                    <p className="mt-1 text-[11px] text-red-600 flex items-center gap-1">
                      <AlertCircle className="h-3 w-3 shrink-0" />
                      <span>{formErrors.patientName}</span>
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-2 gap-2.5">
                  <div>
                    <label htmlFor="bento-phone" className="block text-xs font-semibold text-slate-700">
                      10-Digit Mobile
                    </label>
                    <input
                      id="bento-phone"
                      type="tel"
                      value={bookingForm.phone}
                      onChange={(e) =>
                        setBookingForm((prev) => ({ ...prev, phone: e.target.value }))
                      }
                      placeholder="9830012345"
                      className="mt-1 w-full px-3 py-2 rounded-xl border border-slate-200 text-xs text-[#0F172A] tabular-nums focus:outline-none focus:border-[#2563EB]"
                    />
                  </div>
                  <div>
                    <label htmlFor="bento-slot" className="block text-xs font-semibold text-slate-700">
                      Clinic Slot
                    </label>
                    <select
                      id="bento-slot"
                      value={bookingForm.timeSlot}
                      onChange={(e) =>
                        setBookingForm((prev) => ({ ...prev, timeSlot: e.target.value }))
                      }
                      className="mt-1 w-full px-2.5 py-2 rounded-xl border border-slate-200 text-xs text-[#0F172A] bg-white focus:outline-none focus:border-[#2563EB]"
                    >
                      {slots.map((s) => (
                        <option key={s.time} value={s.time}>
                          {s.time} ({s.availableChairs} left)
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
                {formErrors.phone && (
                  <p className="text-[11px] text-red-600 flex items-center gap-1">
                    <AlertCircle className="h-3 w-3 shrink-0" />
                    <span>{formErrors.phone}</span>
                  </p>
                )}

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-[#2563EB] text-white text-xs font-bold hover:bg-blue-700 transition-colors"
                >
                  Confirm 20-Step Eye Exam (₹0 with Frame)
                </button>
              </form>
            </div>

            {confirmedBooking && (
              <div className="mt-3 p-3 rounded-xl bg-blue-50 border border-blue-200 text-xs text-slate-800 flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-[#2563EB] shrink-0 mt-0.5" />
                <div>
                  <p className="font-bold text-[#0F172A]">
                    Booked: {confirmedBooking.code} ({confirmedBooking.timeSlot})
                  </p>
                  <p className="text-[11px] text-slate-600">
                    {confirmedBooking.patientName} · {confirmedBooking.branch}
                  </p>
                </div>
              </div>
            )}
          </div>

          {/* Cell 3: 1x1 Card showing real-time store walk-in availability */}
          <div className="md:col-span-1 rounded-3xl bg-[#FFFFFF] border border-slate-200 p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between text-xs text-slate-500">
                <span>CELL 03 · WALK-IN AVAILABILITY</span>
                <MapPin className="h-4 w-4 text-[#2563EB]" />
              </div>
              <div className="mt-2 flex items-baseline justify-between">
                <h2 className="text-lg font-bold text-[#0F172A]">
                  Real-Time Optometry Chairs
                </h2>
                <span className="text-xs font-bold text-[#2563EB] tabular-nums">
                  {totalOpenChairs} Open Today
                </span>
              </div>

              <div className="mt-3 flex gap-1.5 p-1 rounded-xl bg-[#F1F5F9]">
                {(
                  [
                    'Jessore Road (Nagerbazar)',
                    'Dum Dum Station Road',
                  ] as const
                ).map((branch) => (
                  <button
                    key={branch}
                    type="button"
                    onClick={() => setSelectedBranch(branch)}
                    className={`flex-1 py-1.5 px-2 rounded-lg text-[11px] font-semibold transition-colors truncate ${
                      selectedBranch === branch
                        ? 'bg-white text-[#0F172A] shadow-xs'
                        : 'text-slate-600 hover:text-[#0F172A]'
                    }`}
                  >
                    {branch.split(' ')[0]} {branch.split(' ')[1]}
                  </button>
                ))}
              </div>

              <ul className="mt-4 divide-y divide-slate-100 text-xs tabular-nums">
                {slots.map((slot) => (
                  <li
                    key={slot.time}
                    className="py-2.5 flex items-center justify-between gap-2"
                  >
                    <div>
                      <p className="font-bold text-[#0F172A]">{slot.time}</p>
                      <p className="text-[11px] text-slate-500">{slot.optometrist}</p>
                    </div>
                    <span
                      className={`text-xs font-semibold ${
                        slot.availableChairs > 0 ? 'text-[#2563EB]' : 'text-slate-400'
                      }`}
                    >
                      {slot.availableChairs > 0
                        ? `${slot.availableChairs} chairs free`
                        : 'Full'}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-3 pt-3 border-t border-slate-100 text-[11px] text-slate-500">
              Walk-ins welcome at {selectedBranch}. Average wait time: 6 minutes.
            </p>
          </div>

          {/* Cell 4: 2x1 Horizontal card detailing 1-year warranty */}
          <div
            id="warranty-cell"
            className="md:col-span-2 rounded-3xl bg-[#FFFFFF] border border-slate-200 p-6 md:p-8 flex flex-col justify-between"
          >
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6">
              <div className="max-w-xl">
                <div className="flex items-center gap-2 text-xs text-[#2563EB] font-semibold uppercase tracking-wider">
                  <ShieldCheck className="h-4 w-4" />
                  <span>CELL 04 · 2x1 COMPREHENSIVE PROTECTION</span>
                </div>
                <h2 className="mt-2 text-2xl font-bold text-[#0F172A]">
                  1-Year Unconditional Frame & Lens Coating Warranty
                </h2>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Every pair dispensed at our Dum Dum clinics includes 365-day
                  protection against anti-reflective coating peel, hinge fatigue,
                  and prescription adaptation discomfort—replaced free of charge.
                </p>
              </div>

              <div className="shrink-0 p-4 rounded-2xl bg-[#F1F5F9] text-xs space-y-1.5 tabular-nums min-w-[210px]">
                <p className="font-bold text-[#0F172A]">Included Service Passport</p>
                <p className="text-slate-600">· Free Lifetime Ultrasonic Cleaning</p>
                <p className="text-slate-600">· Free Silicone Nose-Pad Refills</p>
                <p className="text-slate-600">· 30-Day Prescription Adaptation Guarantee</p>
              </div>
            </div>

            <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-2 sm:grid-cols-4 gap-4 text-xs tabular-nums">
              <div>
                <p className="text-slate-500">Warranty Period</p>
                <p className="mt-0.5 text-base font-bold text-[#0F172A]">365 Days</p>
              </div>
              <div>
                <p className="text-slate-500">Screw & Alignment</p>
                <p className="mt-0.5 text-base font-bold text-[#0F172A]">Free Forever</p>
              </div>
              <div>
                <p className="text-slate-500">Accidental Exchange</p>
                <p className="mt-0.5 text-base font-bold text-[#0F172A]">50% Credit</p>
              </div>
              <div>
                <p className="text-slate-500">Claim Resolution</p>
                <p className="mt-0.5 text-base font-bold text-[#2563EB]">Instant In-Store</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="mt-12 border-t border-slate-200 bg-[#FFFFFF] py-8 px-6 md:px-12 text-xs text-slate-500">
        <div className="max-w-[1280px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>Dum Dum Vision Expressions · Nagerbazar & Station Road, Kolkata</p>
          <div className="flex items-center gap-6">
            <Link href="/two" className="hover:text-[#0F172A] underline">
              ← Prev: Glassmorphism
            </Link>
            <Link href="/" className="hover:text-[#0F172A] underline">
              Manifest Index
            </Link>
            <Link href="/four" className="hover:text-[#0F172A] underline">
              Next: Editorial →
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
