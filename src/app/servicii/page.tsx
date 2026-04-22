import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Users, Microscope, Heart, Bone, Pill, ClipboardCheck } from 'lucide-react';

const categories = [
  { id: 'ortopedie', name: 'Ortopedie' },
  { id: 'cardiologie', name: 'Cardiologie' },
  { id: 'radiologie', name: 'Radiologie' },
  { id: 'reumatologie', name: 'Reumatologie' },
  { id: 'plastica', name: 'Chirurgie Plastică' },
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
    { name: 'Consultație chirurgie plastica', price: '100 RON' },
    { name: 'Proceduri estetice', price: 'De la 500 RON' },
    { name: 'Tratamente faciale', price: 'De la 300 RON' },
    { name: 'Injectari estetice', price: 'De la 250 RON' },
    { name: 'Consultatie post-operatorie', price: 'Gratuit' },
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
          <p className="text-[oklch(0.45_0.05_260)] max-w-2xl mx-auto">
            Oferim o gamă completă de servicii medicale pentru a răspunde tuturor nevoilor tale de sănătate.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16 bg-[oklch(0.96_0.02_250)]">
        <div className="container mx-auto px-4">
          <h2 className="text-xl md:text-2xl font-bold text-[oklch(0.25_0.02_260)] mb-10 text-center">
            Cum functionează procesul nostru
          </h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="h-20 w-20 rounded-full bg-[oklch(0.45_0.15_250)]/10 flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-[oklch(0.45_0.15_250)]" />
              </div>
              <h3 className="font-semibold text-[oklch(0.25_0.02_260)] mb-2">
                Pasul 1: Consultația de Specialitate
              </h3>
              <p className="text-sm text-[oklch(0.45_0.05_260)]">
                Orice tratament corect începe cu o discuție detaliată. Specialistul
                analizează istoricul tău medical și simptomele actuale.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="h-20 w-20 rounded-full bg-[oklch(0.45_0.15_250)]/10 flex items-center justify-center mx-auto mb-4">
                <Microscope className="h-10 w-10 text-[oklch(0.45_0.15_250)]" />
              </div>
              <h3 className="font-semibold text-[oklch(0.25_0.02_260)] mb-2">
                Pasul 2: Diagnostic de Precizie
              </h3>
              <p className="text-sm text-[oklch(0.45_0.05_260)]">
                Folosim tehnologie de ultimă oră pentru imagistică exactă, de la
                ecografii la radiografii osoase. Acuratețea este prioritatea noastră{' '}
                <strong>pentru tine</strong>.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="h-20 w-20 rounded-full bg-[oklch(0.45_0.15_250)]/10 flex items-center justify-center mx-auto mb-4">
                <ClipboardCheck className="h-10 w-10 text-[oklch(0.45_0.15_250)]" />
              </div>
              <h3 className="font-semibold text-[oklch(0.25_0.02_260)] mb-2">
                Pasul 3: Planul de Tratament
              </h3>
              <p className="text-sm text-[oklch(0.45_0.05_260)]">
                Aplicăm protocoale individualizate, de la infiltrații specifice
                reumatologiei până la tehnici estetice moderne, pentru rezultate
                optime și sigure.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((cat) => (
              <button
                key={cat.id}
                className="px-5 py-2 rounded-full text-sm font-medium bg-[oklch(0.96_0.02_250)] text-[oklch(0.35_0.05_260)] hover:bg-[oklch(0.92_0.03_250)] transition-colors border border-[oklch(0.92_0.02_250)]"
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Prices Section */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <p className="text-lg font-medium text-[oklch(0.45_0.15_250)] mb-8 text-center max-w-2xl mx-auto">
            Am pregătit pentru tine o listă de prețuri pentru cele mai solicitate
            tratamente, grupate pe specialități pentru a-ți fi ușor să găsești ce ai nevoie.
          </p>

          {/* Ortopedie */}
          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-xl font-bold text-[oklch(0.45_0.15_250)] mb-6 pb-2 border-b">
              Ortopedie
            </h3>
            <div className="space-y-3">
              {prices.ortopedie.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-[oklch(0.92_0.02_250)] last:border-0">
                  <span className="text-[oklch(0.35_0.05_260)]">{item.name}</span>
                  <span className="font-semibold text-[oklch(0.25_0.02_260)]">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Cardiologie */}
          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-xl font-bold text-[oklch(0.45_0.15_250)] mb-6 pb-2 border-b">
              Cardiologie
            </h3>
            <div className="space-y-3">
              {prices.cardiologie.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-[oklch(0.92_0.02_250)] last:border-0">
                  <span className="text-[oklch(0.35_0.05_260)]">{item.name}</span>
                  <span className="font-semibold text-[oklch(0.25_0.02_260)]">{item.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Radiologie */}
          <div className="max-w-3xl mx-auto mb-12">
            <h3 className="text-xl font-bold text-[oklch(0.45_0.15_250)] mb-6 pb-2 border-b">
              Radiologie
            </h3>
            <div className="space-y-3">
              {prices.radiologie.map((item, i) => (
                <div key={i} className="flex justify-between items-center py-3 border-b border-[oklch(0.92_0.02_250)] last:border-0">
                  <span className="text-[oklch(0.35_0.05_260)]">{item.name}</span>
                  <span className="font-semibold text-[oklch(0.25_0.02_260)]">{item.price}</span>
                </div>
              ))}
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
