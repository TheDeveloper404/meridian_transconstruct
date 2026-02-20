import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container px-4 mx-auto">
        <div className="mb-10 text-center">
          <p className="mb-3 text-sm font-semibold tracking-[0.18em] uppercase text-blue-400">Contact</p>
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Hai să discutăm proiectul tău</h2>
          <p className="max-w-2xl mx-auto text-lg text-slate-600">
            Suntem pregătiți să îți oferim o evaluare rapidă, estimare de cost și pașii următori pentru execuție.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <div className="p-8 bg-white border rounded-xl border-slate-200 shadow-sm">
            <h3 className="mb-6 text-2xl font-semibold">Date de contact</h3>

            <div className="space-y-5">
              <div className="flex items-start space-x-4">
                <MapPin className="w-6 h-6 mt-1 text-blue-400" />
                <div>
                  <h4 className="text-lg font-semibold">Locația noastră</h4>
                  <p className="text-slate-600">Str. Horia, bl.3, Petroșani, Hunedoara</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Phone className="w-6 h-6 mt-1 text-blue-400" />
                <div>
                  <h4 className="text-lg font-semibold">Telefon</h4>
                  <p className="text-slate-600">+40 723 400 646</p>
                  <p className="text-slate-600">+40 726 379 408</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Mail className="w-6 h-6 mt-1 text-blue-400" />
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <p className="text-slate-600">marta70fil@yahoo.com</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="w-6 h-6 mt-1 text-blue-400" />
                <div>
                  <h4 className="text-lg font-semibold">Program</h4>
                  <p className="text-slate-600">Luni - Vineri: 07:00 - 17:00</p>
                  <p className="text-slate-600">Sâmbătă: Cu programare</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-8 bg-white border rounded-xl border-slate-200 shadow-sm">
            <h3 className="mb-6 text-2xl font-semibold">Solicită o ofertă</h3>
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Nume"
                className="w-full px-4 py-3 bg-white border rounded-md outline-none border-slate-300 focus:border-blue-400"
              />
              <input
                type="tel"
                placeholder="Telefon"
                className="w-full px-4 py-3 bg-white border rounded-md outline-none border-slate-300 focus:border-blue-400"
              />
              <textarea
                rows={5}
                placeholder="Spune-ne câteva detalii despre proiect"
                className="w-full px-4 py-3 bg-white border rounded-md outline-none resize-none border-slate-300 focus:border-blue-400"
              />
              <button
                type="button"
                className="w-full px-6 py-3 font-semibold text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-500"
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