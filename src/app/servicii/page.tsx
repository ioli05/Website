import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Microscope, Heart, Bone, Pill, ClipboardCheck } from 'lucide-react';

export default function ServiciiPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-10 md:py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[oklch(0.45_0.15_250)] mb-4">
            Servicii profesionale adaptate nevoilor tale
          </h1>
          <p className="text-sm md:text-base text-[oklch(0.45_0.05_260)] mx-auto text-center whitespace-normal block max-w-[90%] leading-normal">
            Oferim o gamă completă de servicii medicale pentru a răspunde tuturor nevoilor tale de sănătate.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-10 bg-[oklch(0.96_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Step 1 */}
              <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[oklch(0.92_0.02_250)] p-6 md:p-8 min-h-56">
                <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h2 className="font-semibold text-xl md:text-2xl text-[oklch(0.45_0.15_250)] mb-2">
                    Consultația de Specialitate
                  </h2>
                  <p className="text-base text-[oklch(0.45_0.05_260)]">
                    O discuție deschisă și atentă, în care medicul îți ascultă simptomele, îți înțelege istoricul și îți răspunde la întrebări. Consultația este momentul în care primești claritate, direcție și un plan adaptat nevoilor tale reale, nu o soluție standard.
                  </p>
                  <div className="mt-4">
                    <a 
                      href="/preturi" 
                      className="inline-flex items-center gap-2 text-[oklch(0.45_0.15_250)] font-medium hover:opacity-80 transition"
                    >
                      Vezi prețurile
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.8} 
                        stroke="currentColor" 
                        className="w-5 h-5"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" 
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/consultatie.avif?w=300&h=200&fit=crop"
                    alt="Consultație medicală"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
              <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[oklch(0.92_0.02_250)] p-6 md:p-8 min-h-56">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h2 className="font-semibold text-xl md:text-2xl text-[oklch(0.45_0.15_250)] mb-2">
                    Radiografii digitale
                  </h2>
                  <p className="text-base text-[oklch(0.45_0.05_260)]">
                    Investigații rapide și precise, gândite să ofere răspunsuri clare atunci când ai dureri, disconfort sau suspiciuni de leziuni. Radiografiile ne ajută să vedem exact ce se întâmplă în interior, astfel încât tratamentul să fie corect încă de la început.                  </p>
                  <div className="mt-4">
                    <a 
                      href="/preturi" 
                      className="inline-flex items-center gap-2 text-[oklch(0.45_0.15_250)] font-medium hover:opacity-80 transition"
                    >
                      Vezi prețurile
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.8} 
                        stroke="currentColor" 
                        className="w-5 h-5"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" 
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/radiografie.jpeg?w=300&h=200&fit=crop"
                    alt="Diagnostic de precizie"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
              <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[oklch(0.92_0.02_250)] p-6 md:p-8 min-h-56">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h2 className="font-semibold text-xl md:text-2xl text-[oklch(0.45_0.15_250)] mb-2">
                    Tratamente regenerative
                  </h2>
                  <p className="text-base text-[oklch(0.45_0.05_260)]">
                    O abordare modernă, orientată spre prevenție și vindecare naturală. Aceste tratamente susțin organismul să repare țesuturile afectate, reduc inflamația și încetinesc evoluția problemelor articulare. Sunt ideale pentru pacienții care își doresc soluții sigure, minim invazive și cu efect pe termen lung.                  </p>
                <div className="mt-4">
                    <a 
                      href="/preturi" 
                      className="inline-flex items-center gap-2 text-[oklch(0.45_0.15_250)] font-medium hover:opacity-80 transition"
                    >
                      Vezi prețurile
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.8} 
                        stroke="currentColor" 
                        className="w-5 h-5"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" 
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/regenerative.avif?w=300&h=200&fit=crop"
                    alt="Plan de tratament"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[oklch(0.92_0.02_250)] p-6 md:p-8 min-h-56">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h2 className="font-semibold text-xl md:text-2xl text-[oklch(0.45_0.15_250)] mb-2">
                    Îngrijire dermatologică
                  </h2>
                  <p className="text-base text-[oklch(0.45_0.05_260)]">
                    Evaluări blânde și tratamente personalizate pentru pielea ta, fie că este vorba despre probleme medicale sau despre dorința de a-ți îmbunătăți aspectul. Scopul este să te simți bine în pielea ta, cu soluții adaptate sensibilității și nevoilor tale.                
                  </p>  
                  <div className="mt-4">
                    <a 
                      href="/preturi" 
                      className="inline-flex items-center gap-2 text-[oklch(0.45_0.15_250)] font-medium hover:opacity-80 transition"
                    >
                      Vezi prețurile
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.8} 
                        stroke="currentColor" 
                        className="w-5 h-5"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" 
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/dermatologice.png?w=300&h=200&fit=crop"
                    alt="Plan de tratament"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[oklch(0.92_0.02_250)] p-6 md:p-8 min-h-56">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h2 className="font-semibold text-xl md:text-2xl text-[oklch(0.45_0.15_250)] mb-2">
                    Evaluare cardiologică
                  </h2>
                  <p className="text-base text-[oklch(0.45_0.05_260)]">
                    Un moment important pentru sănătatea ta generală. Verificăm funcția inimii, ritmul și eventualele riscuri, astfel încât să poți preveni problemele înainte să apară. Este o investiție în liniștea ta pe termen lung.                  </p>  
                  <div className="mt-4">
                    <a 
                      href="/preturi" 
                      className="inline-flex items-center gap-2 text-[oklch(0.45_0.15_250)] font-medium hover:opacity-80 transition"
                    >
                      Vezi prețurile
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.8} 
                        stroke="currentColor" 
                        className="w-5 h-5"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" 
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/cardiolog.avif?w=300&h=200&fit=crop"
                    alt="Plan de tratament"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[oklch(0.92_0.02_250)] p-6 md:p-8 min-h-56">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h2 className="font-semibold text-xl md:text-2xl text-[oklch(0.45_0.15_250)] mb-2">
                    Proceduri estetice minim invazive
                  </h2>
                  <p className="text-base text-[oklch(0.45_0.05_260)]">
                    Intervenții delicate, cu rezultate naturale, pentru pacienții care își doresc o îmbunătățire discretă a aspectului. Scopul nu este schimbarea, ci armonizarea trăsăturilor și redarea încrederii în propria imagine.
                  </p>
                  <div className="mt-4">
                    <a 
                      href="/preturi" 
                      className="inline-flex items-center gap-2 text-[oklch(0.45_0.15_250)] font-medium hover:opacity-80 transition"
                    >
                      Vezi prețurile
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        fill="none" 
                        viewBox="0 0 24 24" 
                        strokeWidth={1.8} 
                        stroke="currentColor" 
                        className="w-5 h-5"
                      >
                        <path 
                          strokeLinecap="round" 
                          strokeLinejoin="round" 
                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3" 
                        />
                      </svg>
                    </a>
                  </div>
                </div>
                <div className="relative w-full md:w-48 h-40 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="/images/plastic.avif?w=300&h=200&fit=crop"
                    alt="Plan de tratament"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* CTA Section */}
      <section className="bg-white py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-t border-b border-[oklch(0.92_0.02_250)] p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.45_0.15_250)] mb-4">
              Programează o consultație
            </h2>
            <p className="text-[oklch(0.45_0.05_260)] max-w-xl mx-auto mb-8">
              Programează o consultație și echipa noastră te va contacta pentru
              confirmare.
            </p>
            <Link
              href="/#programare"
              className="inline-flex h-12 items-center justify-center rounded-lg bg-[oklch(0.45_0.15_250)] px-8 text-base font-medium text-white shadow-md hover:bg-[oklch(0.40_0.15_250)] transition-colors"
            >
              Solicită o programare
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
