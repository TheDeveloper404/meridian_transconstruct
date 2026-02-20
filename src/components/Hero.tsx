import React from 'react';
import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[78vh] bg-cover bg-center"
      style={{
      backgroundImage: 'url("https://res.cloudinary.com/dwmdxgd2z/image/upload/v1733318417/img_3_eghiaq.png")'
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-slate-900/85 via-slate-800/60 to-blue-900/35" />
      <div className="container relative flex items-center px-4 py-24 mx-auto min-h-[78vh]">
        <div className="max-w-3xl">
          <p className="inline-flex px-4 py-2 mb-6 text-sm font-semibold tracking-wider uppercase rounded-full bg-blue-500/20 text-blue-200 ring-1 ring-blue-300/30">
            Construcții civile și comerciale
          </p>
          <h1 className="mb-6 text-4xl font-black leading-tight md:text-6xl">
            Construim excelență, oferim încredere.
          </h1>
          <p className="max-w-2xl mb-10 text-lg text-slate-200 md:text-xl">
            De la fundație la finisaj, livrăm proiecte complete cu atenție la detaliu, respect pentru buget și termene clare.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="px-8 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-500">
              Haide să discutăm!
            </Link>
            <Link to="/servicii" className="px-8 py-3 font-semibold text-white transition-colors border border-white rounded-md hover:bg-white hover:text-slate-900">
              Serviciile noastre
            </Link>
          </div>

          <div className="grid grid-cols-1 gap-4 mt-12 sm:grid-cols-3">
            <div className="p-4 border rounded-lg border-white/40 bg-white/20 backdrop-blur-sm">
              <p className="text-3xl font-extrabold text-blue-400">120+</p>
              <p className="text-sm text-white">proiecte livrate</p>
            </div>
            <div className="p-4 border rounded-lg border-white/40 bg-white/20 backdrop-blur-sm">
              <p className="text-3xl font-extrabold text-blue-400">5+</p>
              <p className="text-sm text-white">ani experiență</p>
            </div>
            <div className="p-4 border rounded-lg border-white/40 bg-white/20 backdrop-blur-sm">
              <p className="text-3xl font-extrabold text-blue-400">24h</p>
              <p className="text-sm text-white">răspuns ofertă</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}