import Link from 'next/link';
import { Shield, MapPin, Phone, Mail, Clock, Facebook, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[oklch(0.96_0.02_250)] border-t">
      <div className="container mx-auto px-4 py-8 md:py-12">
        {/* Logo & Info - only on desktop */}
        <div className="hidden lg:block mb-8">
          <Link href="/" className="flex items-center gap-2 mb-4">
            <Shield className="h-8 w-8 text-[oklch(0.45_0.15_250)] fill-[oklch(0.45_0.15_250)]" />
            <div className="flex flex-col leading-none">
              <span className="font-bold text-[oklch(0.45_0.15_250)] tracking-tight">ORTHO X-RAY</span>
              <span className="text-[10px] text-[oklch(0.45_0.15_250)] tracking-widest">CLINIC</span>
            </div>
          </Link>
          <p className="text-sm text-[oklch(0.45_0.05_260)] max-w-xs">
            Îngrijire medicală profesionistă pentru o viață mai sănătoasă.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
          {/* Navigare */}
          <div>
            <h3 className="font-semibold text-[oklch(0.25_0.02_260)] mb-3 text-sm">Navigare</h3>
            <ul className="space-y-1.5">
              {['Acasă', 'Servicii', 'Echipă', 'Programare'].map((item) => (
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

          {/* Specialități */}
          <div>
            <h3 className="font-semibold text-[oklch(0.25_0.02_260)] mb-3 text-sm">Specialități</h3>
            <ul className="space-y-1.5">
              {['Ortopedie', 'Cardiologie', 'Radiologie', 'Reumatologie'].map((item) => (
                <li key={item}>
                  <Link
                    href="/servicii"
                    className="text-xs md:text-sm text-[oklch(0.45_0.05_260)] hover:text-[oklch(0.45_0.15_250)] transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="font-semibold text-[oklch(0.25_0.02_260)] mb-3 text-sm">Contact</h3>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-[oklch(0.45_0.15_250)]" />
                <a href="tel:+40721234567" className="text-xs md:text-sm text-[oklch(0.45_0.05_260)] hover:text-[oklch(0.45_0.15_250)]">
                  +40 721 234 567
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-[oklch(0.45_0.15_250)]" />
                <a href="mailto:contact@orthoxray.ro" className="text-xs md:text-sm text-[oklch(0.45_0.05_260)] hover:text-[oklch(0.45_0.15_250)]">
                  Email
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-[oklch(0.45_0.15_250)]" />
                <span className="text-xs md:text-sm text-[oklch(0.45_0.05_260)]">
                  L-V: 08:00-19:00
                </span>
              </li>
            </ul>
          </div>

          {/* Social - only on desktop */}
          <div className="hidden lg:block">
            <h3 className="font-semibold text-[oklch(0.25_0.02_260)] mb-3 text-sm">Social</h3>
            <div className="flex gap-2">
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
