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

export default function PreturiPage() {
  return (
    <section id="preturi" className="pt-10 pb-16 md:pt-12 md:pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-3xl md:text-2xl font-bold text-[oklch(0.45_0.15_250)] mb-4 text-center">
            Am pregătit pentru tine o listă de prețuri pentru cele mai solicitate tratamente, grupate pe specialități.
        </h2>
        <p className="text-sm md:text-base text-[oklch(0.45_0.05_260)] mb-6 mx-auto text-center whitespace-normal block max-w-[90%] leading-normal">
          Tarifele sunt orientative și pot varia în funcție de evaluarea medicală și de nevoile fiecărui pacient.
        </p>

        {/* Buttons */}
        <div
          className="
            grid 
            grid-cols-[repeat(auto-fit,minmax(140px,1fr))] 
            gap-4
            mb-12
          "
        >
          {categories.map((cat) => (
            <a
              key={cat.id}
              href={`#${cat.id}`}
              className="
                w-full
                px-5 py-2 
                rounded-full 
                text-sm font-medium 
                bg-[oklch(0.96_0.02_250)] 
                text-[oklch(0.35_0.05_260)] 
                hover:bg-[oklch(0.92_0.03_250)] 
                transition-colors 
                border border-[oklch(0.92_0.02_250)]
                text-center
                block
              "
            >
              {cat.name}
            </a>
          ))}
        </div>

        {/* ORTOPEDIE */}
        <div id="ortopedie" className="mt-16">
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

        {/* CARDIOLOGIE */}
        <div id="cardiologie" className="mt-16">
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

        {/* RADIOLOGIE */}
        <div id="radiologie" className="mt-16">
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

        {/* REUMATOLOGIE */}
        <div id="reumatologie" className="mt-16">
          <h3 className="text-xl font-bold text-[oklch(0.45_0.15_250)] mb-6 pb-2 border-b">
            Reumatologie
          </h3>
          <div className="space-y-3">
            {prices.reumatologie.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-[oklch(0.92_0.02_250)] last:border-0">
                <span className="text-[oklch(0.35_0.05_260)]">{item.name}</span>
                <span className="font-semibold text-[oklch(0.25_0.02_260)]">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* CHIRURGIE PLASTICĂ */}
        <div id="plastica" className="mt-16">
          <h3 className="text-xl font-bold text-[oklch(0.45_0.15_250)] mb-6 pb-2 border-b">
            Chirurgie plastică
          </h3>
          <div className="space-y-3">
            {prices.plastica.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-[oklch(0.92_0.02_250)] last:border-0">
                <span className="text-[oklch(0.35_0.05_260)]">{item.name}</span>
                <span className="font-semibold text-[oklch(0.25_0.02_260)]">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

        {/* DERMATOLOGIE */}
        <div id="dermatologie" className="mt-16">
          <h3 className="text-xl font-bold text-[oklch(0.45_0.15_250)] mb-6 pb-2 border-b">
            Dermatologie
          </h3>
          <div className="space-y-3">
            {prices.dermatologie.map((item, i) => (
              <div key={i} className="flex justify-between items-center py-3 border-b border-[oklch(0.92_0.02_250)] last:border-0">
                <span className="text-[oklch(0.35_0.05_260)]">{item.name}</span>
                <span className="font-semibold text-[oklch(0.25_0.02_260)]">{item.price}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

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

    </section>
  );
}
