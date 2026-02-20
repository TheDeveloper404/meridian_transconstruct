import React from 'react';
import { ShieldCheck, TimerReset, BadgeCheck, BarChart3 } from 'lucide-react';

const highlights = [
  {
    icon: ShieldCheck,
    title: 'Execuție sigură',
    description: 'Respectăm standardele de șantier și normele de protecție în fiecare etapă de lucru.'
  },
  {
    icon: TimerReset,
    title: 'Termene respectate',
    description: 'Planificăm realist și comunicăm transparent progresul, ca proiectul să rămână în grafic.'
  },
  {
    icon: BadgeCheck,
    title: 'Echipă certificată',
    description: 'Lucrăm cu specialiști experimentați pentru rezultate curate și durabile.'
  },
  {
    icon: BarChart3,
    title: 'Buget controlat',
    description: 'Optimizăm resursele și costurile fără compromis la calitatea finală.'
  }
];

export function WhyChooseUs() {
  return (
    <section className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="grid items-center grid-cols-1 gap-10 mb-12 lg:grid-cols-2">
          <div>
            <p className="inline-flex px-4 py-2 mb-3 text-sm font-semibold tracking-[0.18em] uppercase text-white rounded-full bg-blue-600">
              De ce Meridian
            </p>
            <h2 className="mb-5 text-3xl font-bold leading-tight md:text-4xl">Partenerul potrivit pentru construcții civile, comerciale și renovări complete</h2>
            <p className="text-slate-600">
              Combinăm planificarea tehnică, execuția atentă și comunicarea constantă, astfel încât fiecare proiect să fie livrat la nivelul așteptărilor.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="p-6 border rounded-xl border-slate-200 bg-slate-50">
              <p className="text-4xl font-extrabold text-blue-400">5+</p>
              <p className="mt-2 text-sm text-slate-600">ani experiență activă</p>
            </div>
            <div className="p-6 border rounded-xl border-slate-200 bg-slate-50">
              <p className="text-4xl font-extrabold text-blue-400">60+</p>
              <p className="mt-2 text-sm text-slate-600">proiecte finalizate</p>
            </div>
            <div className="p-6 border rounded-xl border-slate-200 bg-slate-50">
              <p className="text-4xl font-extrabold text-blue-400">24h</p>
              <p className="mt-2 text-sm text-slate-600">răspuns inițial ofertă</p>
            </div>
            <div className="p-6 border rounded-xl border-slate-200 bg-slate-50">
              <p className="text-4xl font-extrabold text-blue-400">100%</p>
              <p className="mt-2 text-sm text-slate-600">focus pe calitate</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
          {highlights.map((item) => (
            <article key={item.title} className="p-6 border rounded-xl border-slate-200 bg-white shadow-sm">
              <item.icon className="w-10 h-10 mb-4 text-blue-400" />
              <h3 className="mb-2 text-xl font-semibold">{item.title}</h3>
              <p className="text-slate-600">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
