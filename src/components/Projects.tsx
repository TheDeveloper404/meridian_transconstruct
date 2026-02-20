import React from 'react';

const projects = [
  {
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80",
    title: "Complex de birouri modern",
    category: "Comercial"
  },
  {
    image: "https://images.unsplash.com/photo-1503389152951-9f343605f61c?auto=format&fit=crop&q=80",
    title: "Locuință premium",
    category: "Rezidențial"
  },
  {
    image: "https://images.unsplash.com/photo-1590496793929-36417d3117de?auto=format&fit=crop&q=80",
    title: "Hală industrială",
    category: "Industrial"
  },
  {
    image: "https://images.unsplash.com/photo-1508450859948-4e04fabaa4ea?auto=format&fit=crop&q=80",
    title: "Reabilitare clădire administrativă",
    category: "Renovare"
  }
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-slate-50">
      <div className="container px-4 mx-auto">
        <div className="mb-16 text-center">
          <p className="inline-flex px-4 py-2 mb-4 text-sm font-semibold tracking-[0.18em] uppercase text-white rounded-full bg-blue-600">
            Portofoliu
          </p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Proiecte finalizate. Clienți mulțumiți.
          </h2>
          <p className="max-w-2xl mx-auto text-slate-600">
            Aruncă o privire la câteva dintre proiectele noastre recente de construcție, modernizare și renovare.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
          {projects.map((project) => (
            <article key={project.title} className="relative overflow-hidden border rounded-xl group border-blue-100 shadow-sm bg-gradient-to-br from-blue-50 to-white">
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-[300px] object-cover transform group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-slate-950/90 to-transparent">
                <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                <p className="inline-flex w-fit px-3 py-1 mt-2 text-xs font-semibold tracking-wider text-blue-700 uppercase rounded-full bg-blue-100">
                  {project.category}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}