import Link from 'next/link';
import { Shield, MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';
import Image from "next/image";

export default function Footer() {
  return (
<footer className="bg-[oklch(0.96_0.02_250)] border-t">
  <div className="container mx-auto px-4 py-10">

    {/* GRID: 4 coloane pe desktop, 2 pe mobil */}
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">

      {/* Logo + Info */}
      <div className="space-y-3 items-start flex flex-col">
        <Link href="/" className="flex items-center">
            <div className="relative h-10 w-28">
              <Image
                src="/images/logo.png"
                alt="Logo Ortho X-Ray"
                fill
                className="object-contain"
              />
            </div>
          </Link>

        <p className="text-xs md:text-sm text-[oklch(0.45_0.05_260)] max-w-[180px]">
          Îngrijire medicală profesionistă pentru o viață mai sănătoasă.
        </p>
      </div>

      {/* Navigare */}
      <div className="space-y-3">
        <h3 className="font-semibold text-[oklch(0.25_0.02_260)] text-sm">
          Navigare
        </h3>
        <ul className="space-y-2">
          {['Acasă', 'Servicii', 'Echipă', 'Programare', 'Preturi'].map((item) => (
            <li key={item}>
              <Link
                href={item === 'Acasă' ? '/' : `/${item.toLowerCase()}`}
                className="text-xs md:text-sm text-[oklch(0.45_0.05_260)] hover:text-[oklch(0.45_0.15_250)] transition-colors"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Contact */}
      <div className="space-y-3">
        <h3 className="font-semibold text-[oklch(0.25_0.02_260)] text-sm">
          Contact
        </h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-[oklch(0.45_0.15_250)]" />
            <a href="tel:+40756161205" className="text-xs md:text-sm text-[oklch(0.45_0.05_260)] hover:text-[oklch(0.45_0.15_250)]">
              +40 756 161 205
            </a>
          </li>

          <li className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-[oklch(0.45_0.15_250)]" />
            <a href="mailto:contact@orthoxray.ro" className="text-xs md:text-sm text-[oklch(0.45_0.05_260)] hover:text-[oklch(0.45_0.15_250)]">
              contact@orthoxray.ro
            </a>
          </li>

          <li className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-[oklch(0.45_0.15_250)]" />
            <a
              href="https://maps.google.com/?q=Ortho+X-Ray+Clinic"
              target="_blank"
              className="text-xs md:text-sm text-[oklch(0.45_0.05_260)] hover:text-[oklch(0.45_0.15_250)]"
            >
              Bd Gheorghe Șincai 16, București
            </a>
          </li>

          <li className="flex items-center gap-2">
            <Clock className="h-4 w-4 text-[oklch(0.45_0.15_250)]" />
            <span className="text-xs md:text-sm text-[oklch(0.45_0.05_260)]">
              L-V: 08:00–19:00
            </span>
          </li>
        </ul>
      </div>

      {/* Social */}
      <div className="space-y-3">
        <h3 className="font-semibold text-[oklch(0.25_0.02_260)] text-sm">
          Social
        </h3>
        <div className="flex gap-3">
          <a href="#" className="h-8 w-8 rounded-full bg-[oklch(0.45_0.15_250)] flex items-center justify-center text-white hover:bg-[oklch(0.40_0.15_250)] transition-colors">
            <Facebook className="h-3.5 w-3.5" />
          </a>
          <a href="#" className="h-8 w-8 rounded-full bg-[oklch(0.45_0.15_250)] flex items-center justify-center text-white hover:bg-[oklch(0.40_0.15_250)] transition-colors">
            <Instagram className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>

    </div>

    {/* Bottom Bar */}
    <div className="mt-10 pt-6 border-t border-[oklch(0.92_0.02_250)]">
      <div className="flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-[oklch(0.45_0.05_260)]">
          © {new Date().getFullYear()} Ortho X-Ray Clinic. Toate drepturile rezervate.
        </p>
        <div className="flex gap-6">
          <Link href="#" className="text-xs text-[oklch(0.45_0.05_260)] hover:text-[oklch(0.45_0.15_250)] transition-colors">
            Termeni și Condiții
          </Link>
          <Link href="#" className="text-xs text-[oklch(0.45_0.05_260)] hover:text-[oklch(0.45_0.15_250)] transition-colors">
            Politica de Confidențialitate
          </Link>
        </div>
      </div>
    </div>

  </div>
</footer>
  );
}
