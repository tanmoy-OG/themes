'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';

interface DialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  title: string;
  description?: string;
  children: React.ReactNode;
  variant?: 'default' | 'glass' | 'brutal';
}

export function Dialog({
  open,
  onOpenChange,
  title,
  description,
  children,
  variant = 'default',
}: DialogProps) {
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onOpenChange(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [open, onOpenChange]);

  if (!open) return null;

  const panelClasses =
    variant === 'glass'
      ? 'bg-slate-950/85 backdrop-blur-xl border border-white/25 text-white rounded-2xl shadow-2xl'
      : variant === 'brutal'
      ? 'bg-white border-4 border-black text-black shadow-[8px_8px_0px_0px_#000000]'
      : 'bg-white border border-neutral-200 text-neutral-900 rounded-xl shadow-xl';

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/65 p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dialog-title"
    >
      <div className={`relative w-full max-w-2xl p-6 md:p-8 ${panelClasses}`}>
        <div className="flex items-start justify-between gap-4 border-b border-current/10 pb-4">
          <div>
            <h2 id="dialog-title" className="text-xl font-bold tracking-tight">
              {title}
            </h2>
            {description && (
              <p className="mt-1 text-sm opacity-75">{description}</p>
            )}
          </div>
          <button
            type="button"
            onClick={() => onOpenChange(false)}
            aria-label="Close dialog"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-current/20 opacity-80 transition-opacity hover:opacity-100"
          >
            <X className="h-4 w-4" />
          </button>
        </div>
        <div className="mt-5">{children}</div>
      </div>
    </div>
  );
}
