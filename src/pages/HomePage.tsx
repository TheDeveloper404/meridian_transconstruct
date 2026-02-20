import React from 'react';
import { Link } from 'react-router-dom';
import { Hero } from '../components/Hero';
import { WhyChooseUs } from '../components/WhyChooseUs';

export function HomePage() {
  return (
    <>
      <Hero />
      <WhyChooseUs />

      <section className="py-16 bg-slate-50">
        <div className="container px-4 mx-auto">
          <div className="p-8 bg-white border rounded-xl border-slate-200 shadow-sm md:p-10">
            <p className="mb-3 text-sm font-semibold tracking-[0.18em] uppercase text-blue-400">Acces rapid</p>
            <h2 className="mb-4 text-3xl font-bold">Explorează rapid ce te interesează</h2>
            <p className="max-w-3xl mb-8 text-slate-600">
              Dacă ai deja un obiectiv clar, poți merge direct către serviciile noastre, proiectele finalizate sau secțiunea de contact pentru ofertă.
            </p>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <Link to="/servicii" className="p-5 transition border rounded-lg border-slate-200 hover:border-blue-400/50 hover:-translate-y-1">
                <h3 className="mb-2 text-xl font-semibold">Servicii</h3>
                <p className="text-slate-600">Vezi exact ce tipuri de lucrări executăm.</p>
              </Link>
              <Link to="/proiecte" className="p-5 transition border rounded-lg border-slate-200 hover:border-blue-400/50 hover:-translate-y-1">
                <h3 className="mb-2 text-xl font-semibold">Proiecte</h3>
                <p className="text-slate-600">Descoperă exemple concrete de lucrări finalizate.</p>
              </Link>
              <Link to="/contact" className="p-5 transition border rounded-lg border-slate-200 hover:border-blue-400/50 hover:-translate-y-1">
                <h3 className="mb-2 text-xl font-semibold">Contact</h3>
                <p className="text-slate-600">Solicită o ofertă și primești răspuns rapid.</p>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
