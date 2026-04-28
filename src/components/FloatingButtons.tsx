'use client';

import Link from 'next/link';
import { Phone, Calendar } from 'lucide-react';

export default function FloatingButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* Phone Button */}
      <a
        href="tel:+40746808721"
        className="h-14 w-14 rounded-full bg-[oklch(0.45_0.15_250)] text-white flex items-center justify-center shadow-lg hover:bg-[oklch(0.40_0.15_250)] transition-colors"
        aria-label="Sună acum"
      >
        <Phone className="h-6 w-6" />
      </a>
      {/* Programare Button */}
      <Link
        href="/#programare"
        className="h-14 w-14 rounded-full bg-[oklch(0.55_0.08_250)] text-white flex items-center justify-center shadow-lg hover:bg-[oklch(0.50_0.10_250)] transition-colors"
        aria-label="Programează"
      >
        <Calendar className="h-6 w-6" />
      </Link>
    </div>
  );
}
