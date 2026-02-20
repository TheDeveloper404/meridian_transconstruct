import React from 'react';
import { Services } from '../components/Services';

export function ServicesPage() {
  return (
    <>
      <section className="py-16 border-b bg-white border-slate-200">
        <div className="container px-4 mx-auto">
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] uppercase text-blue-400">Pagină servicii</p>
          <h1 className="mb-4 text-4xl font-black">Servicii complete pentru construcții și renovări</h1>
          <p className="max-w-3xl text-lg text-slate-600">
            Lucrăm integrat, cu echipă proprie și coordonare tehnică atentă, astfel încât proiectul să fie executat corect de la început până la predare.
          </p>

          <div className="grid grid-cols-1 gap-4 mt-8 md:grid-cols-3">
            <div className="p-4 bg-white border rounded-lg border-slate-200 shadow-sm">
              <h2 className="mb-1 text-lg font-semibold">1. Evaluare</h2>
              <p className="text-slate-600">Analizăm cerințele, spațiul și constrângerile reale ale proiectului.</p>
            </div>
            <div className="p-4 bg-white border rounded-lg border-slate-200 shadow-sm">
              <h2 className="mb-1 text-lg font-semibold">2. Execuție</h2>
              <p className="text-slate-600">Implementăm lucrările conform planului și standardelor tehnice.</p>
            </div>
            <div className="p-4 bg-white border rounded-lg border-slate-200 shadow-sm">
              <h2 className="mb-1 text-lg font-semibold">3. Predare</h2>
              <p className="text-slate-600">Verificăm detaliile finale și predăm proiectul la calitate ridicată.</p>
            </div>
          </div>
        </div>
      </section>

      <Services />
    </>
  );
}
