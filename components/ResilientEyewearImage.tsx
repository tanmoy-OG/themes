'use client';

import React, { useState, useCallback } from 'react';
import { Glasses } from 'lucide-react';

interface ResilientEyewearImageProps {
  src: string;
  alt: string;
  className?: string;
  fallbackTone?: 'light' | 'dark' | 'warm' | 'brutal';
  label?: string;
}

const VERIFIED_BACKUP_PHOTO =
  'https://images.unsplash.com/photo-1574258495973-f010dfbb5371?auto=format&fit=crop&w=1200&q=80';

export function ResilientEyewearImage({
  src,
  alt,
  className = '',
  fallbackTone = 'light',
  label,
}: ResilientEyewearImageProps) {
  const [loadedSrc, setLoadedSrc] = useState<string | null>(null);
  const [backupFailed, setBackupFailed] = useState<boolean>(false);

  const isPrimaryLoaded = loadedSrc === src;

  const handleImgRef = useCallback(
    (img: HTMLImageElement | null) => {
      if (img && img.complete && img.naturalWidth > 0 && loadedSrc !== src) {
        setLoadedSrc(src);
      }
    },
    [loadedSrc, src]
  );

  const toneStyles: Record<
    NonNullable<ResilientEyewearImageProps['fallbackTone']>,
    string
  > = {
    light: 'bg-neutral-100 text-neutral-800',
    dark: 'bg-slate-900 text-slate-100',
    warm: 'bg-[#F3EFE6] text-[#2C2C2C]',
    brutal: 'bg-[#FFE082] text-black',
  };

  return (
    <div
      role="img"
      aria-label={alt}
      className={`relative overflow-hidden ${toneStyles[fallbackTone]} ${className}`}
    >
      {/* Base Layer 1: Styled SVG/CSS studio card if all network imagery is offline */}
      <div
        aria-hidden="true"
        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
      >
        <Glasses className="mb-3 h-12 w-12 opacity-70" />
        <p className="text-sm font-medium">{label || alt}</p>
        <p className="mt-1 text-xs opacity-60">Dum Dum Optical Studio Archive</p>
      </div>

      {/* Base Layer 2: Verified studio eyewear photography backup */}
      {!backupFailed && src !== VERIFIED_BACKUP_PHOTO && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={VERIFIED_BACKUP_PHOTO}
          alt=""
          aria-hidden="true"
          referrerPolicy="no-referrer"
          onError={() => setBackupFailed(true)}
          className="absolute inset-0 h-full w-full object-cover"
        />
      )}

      {/* Top Layer 3: Requested target photography (fades in cleanly once naturalWidth > 0) */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        ref={handleImgRef}
        src={src}
        alt=""
        aria-hidden="true"
        referrerPolicy="no-referrer"
        onLoad={() => setLoadedSrc(src)}
        className={`relative z-10 h-full w-full object-cover transition-opacity duration-200 ${
          isPrimaryLoaded ? 'opacity-100' : 'opacity-0'
        }`}
      />
    </div>
  );
}
