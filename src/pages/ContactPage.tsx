import React from 'react';
import { Contact } from '../components/Contact';

export function ContactPage() {
  return (
    <>
      <section className="py-16 border-b bg-slate-900 border-slate-800">
        <div className="container px-4 mx-auto">
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] uppercase text-blue-400">Pagină contact</p>
          <h1 className="mb-4 text-4xl font-black">Contact direct pentru ofertă</h1>
          <p className="max-w-3xl text-lg text-slate-300">
            Trimite-ne detalii despre proiect și revenim rapid cu pașii recomandați, estimare inițială și intervalul de execuție.
          </p>
        </div>
      </section>

      <Contact />
    </>
  );
}
