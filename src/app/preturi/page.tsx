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
    { name: 'Consult ortopedie - medic primar', price: '300 RON' },
    { name: 'Consult ortopedie - medic specialist', price: '250 RON' },
    { name: 'Control ortopedie', price: '200 RON' },
    { name: 'Infiltrație intraarticulară acid hialuronic / corticosteroid', price: '300 RON + substanță' },
    { name: 'Infiltrație PRP', price: '800 RON' },
    { name: 'Infiltrație Sanakin', price: '1200 RON' },
    { name: 'Infiltrație șold eco ghidată', price: '500 RON + substanță' },
    { name: 'Infiltrație coloană eco ghidată', price: '500 RON' },
    { name: 'Imobilizare gipsată', price: '300 RON' },
    { name: 'Tratament intravenos', price: '150 RON' },
    { name: 'Suprimare fire sutură', price: '100 RON' },
    { name: 'Schimbare pansament steril', price: '100 RON' },
    { name: 'Îndepărtare atelă gipsată', price: '100 RON' },
    { name: 'Puncție articulară', price: '200 RON' },
    { name: 'Reducere închisă fracturi / luxații și imobilizare', price: '500 RON' },
  ],

//   cardiologie: [
//     { name: 'Consultație cardiologică', price: '200 RON' },
//     { name: 'EKG', price: '80 - 100 RON' },
//     { name: 'Ecocardiografie', price: '250 - 350 RON' },
//     { name: 'Holter ECG 24h', price: '200 - 250 RON' },
//     { name: 'Test de efort', price: '250 - 350 RON' },
//   ],

  radiologie: [
    { name: 'Radiografie membre - 1 incidență', price: '100 RON' },
    { name: 'Radiografie membre - 2 incidențe', price: '150 RON' },
    { name: 'Radiografie membre - 3 incidențe', price: '300 RON' },
    { name: 'Radiografie OrthoLeg / OrthoSpine', price: '450 RON' },
    // { name: 'Radiografie membru inferior', price: '90 - 110 RON' },
    // { name: 'CT segmentar', price: '350 - 450 RON' },
  ],

//   reumatologie: [
//     { name: 'Consultație reumatologică', price: '200 RON' },
//     { name: 'Analize specifice (profil reumatologic)', price: '150 - 300 RON' },
//     { name: 'Ecografie articulații', price: '150 - 200 RON' },
//     { name: 'Infiltrații / terapii biologice', price: '350 - 600 RON' },
//     { name: 'Fizioterapie', price: '80 - 120 RON / ședință' },
//   ],

//   plastica: [
//     { name: 'Consultație chirurgie plastică', price: '200 RON' },
//     { name: 'Botox (zonă)', price: '500 - 800 RON' },
//     { name: 'Augmentare buze (acid hialuronic)', price: '900 - 1.400 RON' },
//     { name: 'Tratamente faciale estetice', price: '300 - 600 RON' },
//     { name: 'Consultație post-operatorie', price: 'Gratuit' },
//   ],

//   dermatologie: [
//     { name: 'Consultație dermatologică', price: '150 - 200 RON' },
//     { name: 'Dermatoscopie digitală', price: '200 - 250 RON' },
//     { name: 'Crioterapie', price: '150 - 300 RON' },
//     { name: 'Peeling chimic', price: '250 - 400 RON' },
//     { name: 'Electrocauterizare leziuni', price: '150 - 350 RON' },
//   ],
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
        {/* <div id="cardiologie" className="mt-16">
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
        </div> */}

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
        {/* <div id="reumatologie" className="mt-16">
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
        </div> */}

        {/* CHIRURGIE PLASTICĂ */}
        {/* <div id="plastica" className="mt-16">
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
        </div> */}

        {/* DERMATOLOGIE */}
        {/* <div id="dermatologie" className="mt-16">
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
        </div> */}

      </div>

    {/* CTA Section */}
      <section className="py-16 px-4">
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

    </section>
  );
}
