import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-slate-950">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] uppercase text-amber-400">Contact</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Hai să discutăm proiectul tău</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-300">
            Suntem pregătiți să îți oferim o evaluare rapidă, estimare de cost și pașii următori pentru execuție.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="p-8 border rounded-xl border-slate-800 bg-slate-900">
            <h3 className="mb-6 text-2xl font-semibold">Date de contact</h3>

            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1 text-amber-400" />
                <div>
                  <h4 className="text-lg font-semibold">Locația noastră</h4>
                  <p className="text-slate-300">Str. Horia, bl.3, Petroșani, Hunedoara</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 mt-1 text-amber-400" />
                <div>
                  <h4 className="text-lg font-semibold">Telefon</h4>
                  <p className="text-slate-300">+40 723 400 646</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 mt-1 text-amber-400" />
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-slate-300">marta70fil@yahoo.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 mt-1 text-amber-400" />
                <div>
                  <h4 className="text-lg font-semibold">Program</h4>
                  <p className="text-slate-300">Luni - Vineri: 07:00 - 17:00</p>
                  <p className="text-slate-300">Sâmbătă: Cu programare</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 border rounded-xl border-slate-800 bg-slate-900">
            <h3 className="mb-6 text-2xl font-semibold">Solicită o ofertă</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nume"
                className="w-full px-4 py-3 border rounded-md outline-none bg-slate-950 border-slate-700 focus:border-amber-400"
              />
              <input
                type="tel"
                placeholder="Telefon"
                className="w-full px-4 py-3 border rounded-md outline-none bg-slate-950 border-slate-700 focus:border-amber-400"
              />
              <textarea
                rows={5}
                placeholder="Spune-ne câteva detalii despre proiect"
                className="w-full px-4 py-3 border rounded-md outline-none resize-none bg-slate-950 border-slate-700 focus:border-amber-400"
              />
              <button
                type="button"
                className="w-full px-6 py-3 font-semibold transition-colors rounded-md bg-amber-400 text-slate-950 hover:bg-amber-300"
              >
                Trimite solicitarea
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}