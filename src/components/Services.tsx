import React from 'react';
import { Building2, HomeIcon, Wrench, PaintBucket, Ruler } from 'lucide-react';

const services = [
  {
    icon: Building2,
    tag: 'Comercial',
    title: 'Construcții comerciale',
    description: 'Ridicăm și modernizăm clădiri comerciale funcționale, de la structură la predare.'
  },
  {
    icon: HomeIcon,
    tag: 'Rezidențial',
    title: 'Construcții rezidențiale',
    description: 'Executăm case și ansambluri rezidențiale cu accent pe durabilitate și confort.'
  },
  {
    icon: Wrench,
    tag: 'Intervenții',
    title: 'Renovări',
    description: 'Transformăm spații existente prin renovări complete, rapide și curate.'
  },
  {
    icon: PaintBucket,
    tag: 'Interior',
    title: 'Finisaje interioare',
    description: 'Executăm finisaje premium, de la pregătirea suportului la ultimul strat decorativ.'
  },
  {
    icon: Ruler,
    tag: 'Management',
    title: 'Planificare proiect',
    description: 'Pregătim etapele tehnice și logistice pentru o execuție eficientă și predictibilă.'
  }
];

export function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <p className="inline-flex px-4 py-2 mb-4 text-sm font-semibold tracking-[0.18em] uppercase text-white rounded-full bg-blue-600">
            Servicii
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Tot ce ai nevoie pentru un proiect complet</h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            Acoperim întregul flux de lucru, de la planificare și execuție, până la finisaje și predarea lucrării.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <article
              key={service.title}
              className="p-6 transition bg-gradient-to-br from-blue-50 to-white border shadow-sm rounded-xl border-blue-100 hover:-translate-y-1 hover:border-blue-300"
            >
              <div className="flex items-start justify-between">
                <div>
                  <p className="inline-flex px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-700 uppercase rounded-full bg-blue-100">
                    {service.tag}
                  </p>
                  <service.icon className="w-12 h-12 mb-3 text-blue-500" />
                </div>
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