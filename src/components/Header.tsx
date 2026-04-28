'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { Menu, X, Shield, Phone } from 'lucide-react';

const navItems = [
  { href: '/', label: 'Acasă' },
  { href: '/servicii', label: 'Servicii' },
  { href: '/#echipa', label: 'Echipă' },
  { href: '/#programare', label: 'Programare' },
  { href: '/preturi', label: 'Prețuri' },
];

export default function Header() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-border/50 shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-10 w-10">
              <Shield className="h-10 w-10 text-[oklch(0.45_0.15_250)] fill-[oklch(0.45_0.15_250)]" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-3 h-3 bg-white rounded-sm" />
              </div>
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-bold text-[oklch(0.45_0.15_250)] tracking-tight text-lg">ORTHO X-RAY</span>
              <span className="text-xs text-[oklch(0.45_0.15_250)] tracking-widest">CLINIC</span>
            </div>
          </Link>

          {/* Desktop Navigation - aligned to right */}
          <nav className="hidden lg:flex items-center justify-end gap-8 xl:gap-10 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[oklch(0.45_0.15_250)] ${
                  pathname === item.href
                    ? 'text-[oklch(0.45_0.15_250)]'
                    : 'text-[oklch(0.35_0.05_260)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Tablet Navigation (md only) - Only nav links, aligned to right */}
          <nav className="hidden md:flex lg:hidden items-center justify-end gap-4 flex-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-[oklch(0.45_0.15_250)] ${
                  pathname === item.href
                    ? 'text-[oklch(0.45_0.15_250)]'
                    : 'text-[oklch(0.35_0.05_260)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-[oklch(0.45_0.15_250)]" />
            ) : (
              <Menu className="h-6 w-6 text-[oklch(0.45_0.15_250)]" />
            )}
          </button>
        </div>

        {/* Mobile Navigation - Only nav links, no phone or button */}
        {isMenuOpen && (
          <div className="md:hidden border-t py-4 space-y-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={`block py-2 text-base font-medium transition-colors ${
                  pathname === item.href
                    ? 'text-[oklch(0.45_0.15_250)]'
                    : 'text-[oklch(0.35_0.05_260)]'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>
        )}
      </div>
    </header>
  );
}
