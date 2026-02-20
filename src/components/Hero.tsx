import React from 'react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[78vh] bg-cover bg-center"
      style={{
      backgroundImage: 'url("https://res.cloudinary.com/dwmdxgd2z/image/upload/v1733318417/img_3_eghiaq.png")'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/70 to-slate-900/50" />
      <div className="container relative flex items-center px-4 py-24 mx-auto min-h-[78vh]">
        <div className="max-w-3xl">
          <p className="inline-flex px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full bg-amber-400/20 text-amber-300 ring-1 ring-amber-300/30">
            Construcții civile și comerciale
          </p>
          <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
            Construim spații solide, moderne și gata de utilizare.
          </h1>
          <p className="max-w-2xl mb-10 text-lg text-slate-200 md:text-xl">
            De la fundație la finisaj, livrăm proiecte complete cu atenție la detaliu, respect pentru buget și termene clare.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="px-8 py-3 font-semibold transition-colors rounded-md bg-amber-400 text-slate-950 hover:bg-amber-300">
              Haide să discutăm!
            </a>
            <a href="#services" className="px-8 py-3 font-semibold transition-colors border rounded-md border-slate-200 hover:bg-slate-100 hover:text-slate-950">
              Serviciile noastre
            </a>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-3">
            <div className="p-4 border rounded-lg border-slate-700 bg-slate-900/60">
              <p className="text-3xl font-extrabold text-amber-400">120+</p>
              <p className="text-sm text-slate-300">proiecte livrate</p>
            </div>
            <div className="p-4 border rounded-lg border-slate-700 bg-slate-900/60">
              <p className="text-3xl font-extrabold text-amber-400">5+</p>
              <p className="text-sm text-slate-300">ani experiență</p>
            </div>
            <div className="p-4 border rounded-lg border-slate-700 bg-slate-900/60">
              <p className="text-3xl font-extrabold text-amber-400">24h</p>
              <p className="text-sm text-slate-300">răspuns ofertă</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}