import React from 'react';
import { Projects } from '../components/Projects';

export function ProjectsPage() {
  return (
    <>
      <section className="py-16 border-b bg-slate-50 border-slate-200">
        <div className="container px-4 mx-auto">
          <p className="inline-flex px-4 py-2 mb-3 text-sm font-semibold tracking-[0.18em] uppercase text-white rounded-full bg-blue-600">Pagină proiecte</p>
          <h1 className="mb-4 text-4xl font-black">Portofoliu de proiecte livrate</h1>
          <p className="max-w-3xl text-lg text-slate-600">
            Fiecare proiect reflectă modul nostru de lucru: planificare clară, execuție riguroasă și atenție pentru detaliile de finisaj.
          </p>
        </div>
      </section>

      <Projects />
    </>
  );
}
