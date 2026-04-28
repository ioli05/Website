import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Microscope, Heart, Bone, Pill, ClipboardCheck } from 'lucide-react';

const categories = [
  { id: 'ortopedie', name: 'Ortopedie' },
  { id: 'cardiologie', name: 'Cardiologie' },
  { id: 'radiologie', name: 'Radiologie' },
  { id: 'reumatologie', name: 'Reumatologie' },
  { id: 'plastica', name: 'Chirurgie Plastică' },
  { id: 'dermatologie', name: 'Dermatologie' },
];

const prices = {
  ortopedie: [
    { name: 'Consultație ortopedică', price: '100 RON' },
    { name: 'Ecografie articulară', price: '150 RON' },
    { name: 'Infiltratie intraarticulara', price: '200 RON' },
    { name: 'Radiografie segment osos', price: '80 RON' },
    { name: 'Tratament fracturi', price: '250 RON' },
  ],
  cardiologie: [
    { name: 'Consultație cardiologică', price: '120 RON' },
    { name: 'EKG', price: '80 RON' },
    { name: 'Ecocardiografie', price: '200 RON' },
    { name: 'Holter ECG 24h', price: '180 RON' },
    { name: 'Test efort', price: '250 RON' },
  ],
  radiologie: [
    { name: 'Radiografie torace', price: '75 RON' },
    { name: 'Radiografie coloana vertebrala', price: '90 RON' },
    { name: 'Radiografie membru superior', price: '70 RON' },
    { name: 'Radiografie membru inferior', price: '70 RON' },
    { name: 'Scanare CT', price: '350 RON' },
  ],
  reumatologie: [
    { name: 'Consultație reumatologică', price: '110 RON' },
    { name: 'Analize de sange specifice', price: '150 RON' },
    { name: 'Ecografie articulatii', price: '130 RON' },
    { name: 'Tratament cu bioterapie', price: '400 RON' },
    { name: 'Fizioterapie', price: '80 RON/sedinta' },
  ],
  plastica: [
    { name: 'Consultație chirurgie plastică', price: '100 RON' },
    { name: 'Proceduri estetice', price: 'De la 500 RON' },
    { name: 'Tratamente faciale', price: 'De la 300 RON' },
    { name: 'Injectari estetice', price: 'De la 250 RON' },
    { name: 'Consultatie post-operatorie', price: 'Gratuit' },
  ],
  dermatologie: [
    { name: 'Consultație dermatologică', price: '150 RON' },
    { name: 'Dermatoscopie digitală (analiza alunițelor)', price: '200 RON' },
    { name: 'Crioterapie', price: '300 RON' },
    { name: 'Peeling', price: '250 RON' },
    { name: 'Electrocauterizare leziuni cutanate', price: '150 - 300 RON' },
  ],
};

export default function ServiciiPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl md:text-4xl font-bold text-[oklch(0.45_0.15_250)] mb-4">
            Servicii profesionale adaptate nevoilor tale
          </h1>
          <p className="text-lg text-[oklch(0.45_0.05_260)] max-w-none mx-auto text-center whitespace-nowrap">
            Oferim o gamă completă de servicii medicale pentru a răspunde tuturor nevoilor tale de sănătate.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[oklch(0.96_0.02_250)]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto space-y-6">
            {/* Step 1 */}
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[oklch(0.92_0.02_250)] p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-xl md:text-2xl text-[oklch(0.25_0.02_260)] mb-2">
                    Consultația de Specialitate
                  </h3>
                  <p className="text-sm text-[oklch(0.45_0.05_260)]">
                    O discuție deschisă și atentă, în care medicul îți ascultă simptomele, îți înțelege istoricul și îți răspunde la întrebări. Consultația este momentul în care primești claritate, direcție și un plan adaptat nevoilor tale reale, nu o soluție standard.
                  </p>
                </div>
                <div className="relative w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=300&h=200&fit=crop"
                    alt="Consultație medicală"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[oklch(0.92_0.02_250)] p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-xl md:text-2xl text-[oklch(0.25_0.02_260)] mb-2">
                    Radiografii digitale
                  </h3>
                  <p className="text-sm text-[oklch(0.45_0.05_260)]">
                    Investigații rapide și precise, gândite să ofere răspunsuri clare atunci când ai dureri, disconfort sau suspiciuni de leziuni. Radiografiile ne ajută să vedem exact ce se întâmplă în interior, astfel încât tratamentul să fie corect încă de la început.                  </p>
                </div>
                <div className="relative w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=300&h=200&fit=crop"
                    alt="Diagnostic de precizie"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[oklch(0.92_0.02_250)] p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-xl md:text-2xl text-[oklch(0.25_0.02_260)] mb-2">
                    Tratamente regenerative
                  </h3>
                  <p className="text-sm text-[oklch(0.45_0.05_260)]">
                    O abordare modernă, orientată spre prevenție și vindecare naturală. Aceste tratamente susțin organismul să repare țesuturile afectate, reduc inflamația și încetinesc evoluția problemelor articulare. Sunt ideale pentru pacienții care își doresc soluții sigure, minim invazive și cu efect pe termen lung.                  </p>
                </div>
                <div className="relative w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=200&fit=crop"
                    alt="Plan de tratament"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[oklch(0.92_0.02_250)] p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-xl md:text-2xl text-[oklch(0.25_0.02_260)] mb-2">
                    Îngrijire dermatologică
                  </h3>
                  <p className="text-sm text-[oklch(0.45_0.05_260)]">
                    Evaluări blânde și tratamente personalizate pentru pielea ta, fie că este vorba despre probleme medicale sau despre dorința de a-ți îmbunătăți aspectul. Scopul este să te simți bine în pielea ta, cu soluții adaptate sensibilității și nevoilor tale.                
                  </p>  
                </div>
                <div className="relative w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=200&fit=crop"
                    alt="Plan de tratament"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[oklch(0.92_0.02_250)] p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-xl md:text-2xl text-[oklch(0.25_0.02_260)] mb-2">
                    Evaluare cardiologică
                  </h3>
                  <p className="text-sm text-[oklch(0.45_0.05_260)]">
                    Un moment important pentru sănătatea ta generală. Verificăm funcția inimii, ritmul și eventualele riscuri, astfel încât să poți preveni problemele înainte să apară. Este o investiție în liniștea ta pe termen lung.                  </p>  
                </div>
                <div className="relative w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=200&fit=crop"
                    alt="Plan de tratament"
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 192px"
                  />
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-[oklch(0.92_0.02_250)] p-6 md:p-8">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="flex-1">
                  <h3 className="font-semibold text-xl md:text-2xl text-[oklch(0.25_0.02_260)] mb-2">
                    Proceduri estetice minim invazive
                  </h3>
                  <p className="text-sm text-[oklch(0.45_0.05_260)]">
                    Intervenții delicate, cu rezultate naturale, pentru pacienții care își doresc o îmbunătățire discretă a aspectului. Scopul nu este schimbarea, ci armonizarea trăsăturilor și redarea încrederii în propria imagine.
                  </p>
                </div>
                <div className="relative w-full md:w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
                  <Image
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=300&h=200&fit=crop"
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
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border-t border-b border-[oklch(0.92_0.02_250)] p-8 md:p-12 text-center">
            <h2 className="text-2xl md:text-3xl font-bold text-[oklch(0.25_0.02_260)] mb-4">
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
