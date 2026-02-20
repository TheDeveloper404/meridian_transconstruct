import React from 'react';
import { Building2, HomeIcon, Wrench, PaintBucket, Ruler } from 'lucide-react';

const services = [
  {
    icon: Building2,
    title: 'Construcții comerciale',
    description: 'Ridicăm și modernizăm clădiri comerciale funcționale, de la structură la predare.'
  },
  {
    icon: HomeIcon,
    title: 'Construcții rezidențiale',
    description: 'Executăm case și ansambluri rezidențiale cu accent pe durabilitate și confort.'
  },
  {
    icon: Wrench,
    title: 'Renovări',
    description: 'Transformăm spații existente prin renovări complete, rapide și curate.'
  },
  {
    icon: PaintBucket,
    title: 'Finisaje interioare',
    description: 'Executăm finisaje premium, de la pregătirea suportului la ultimul strat decorativ.'
  },
  {
    icon: Ruler,
    title: 'Planificare proiect',
    description: 'Pregătim etapele tehnice și logistice pentru o execuție eficientă și predictibilă.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] uppercase text-blue-400">Servicii</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Tot ce ai nevoie pentru un proiect complet</h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            Acoperim întregul flux de lucru, de la planificare și execuție, până la finisaje și predarea lucrării.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="p-6 transition bg-white border rounded-xl border-slate-200 shadow-sm hover:-translate-y-1 hover:border-blue-400/50"
            >
              <div className="flex items-start justify-between">
                <service.icon className="w-12 h-12 mb-4 text-blue-400" />
                <span className="text-sm font-semibold text-slate-500">0{index + 1}</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
              <p className="text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}