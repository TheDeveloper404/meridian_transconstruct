import React from 'react';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80",
    title: "Complex de birouri modern",
    category: "Comercial"
  },
  {
    image: "https://images.unsplash.com/photo-1613545325278-f24b0cae1224?auto=format&fit=crop&q=80",
    title: "Locuință premium",
    category: "Rezidențial"
  },
  {
    image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80",
    title: "Hală industrială",
    category: "Industrial"
  },
  {
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80",
    title: "Reabilitare clădire administrativă",
    category: "Renovare"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-900">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] uppercase text-amber-400">Portofoliu</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Proiecte finalizate. Clienți mulțumiți.
          </h2>
          <p className="max-w-2xl mx-auto text-slate-300">
            Aruncă o privire la câteva dintre proiectele noastre recente de construcție, modernizare și renovare.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article key={project.title} className="relative overflow-hidden border rounded-xl group border-slate-800">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-slate-950/90 to-transparent">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="font-medium text-amber-400">{project.category}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}