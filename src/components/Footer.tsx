import React from 'react';
import { HardHat,} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 text-slate-900">
      <div className="container px-4 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-3 lg:items-start">
          <div className="lg:justify-self-end lg:text-left">
            <div className="flex items-center mb-3 space-x-2">
              <HardHat size={30} className="text-blue-500" />
              <span className="text-lg font-bold leading-none whitespace-nowrap sm:text-2xl">Meridian Transconstruct</span>
            </div>
            <p className="max-w-sm leading-relaxed text-slate-600">
              Construim excelență, oferim încredere.
            </p>
          </div>

          <div className="lg:justify-self-center">
            <h3 className="mb-4 text-lg font-semibold">Navigare</h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-slate-600">
              <li><Link to="/" className="transition-colors hover:text-blue-600">Acasă</Link></li>
              <li><Link to="/servicii" className="transition-colors hover:text-blue-600">Servicii</Link></li>
              <li><Link to="/proiecte" className="transition-colors hover:text-blue-600">Proiecte</Link></li>
              <li><Link to="/contact" className="transition-colors hover:text-blue-600">Contact</Link></li>
            </ul>
          </div>

          <div className="lg:justify-self-start lg:border-l lg:border-slate-200 lg:pl-8">
            <h3 className="mb-4 text-lg font-semibold">Date firmă</h3>
            <ul className="space-y-2 leading-relaxed text-slate-600">
              <li>Telefon: +40 723 400 646 / +40 726 379 408</li>
              <li>Email: marta70fil@yahoo.com</li>
              <li>Adresa: Str. Horea Bl. 3 Sc. 1 Ap. 1 Cod 332014, Loc. Petrosani, Hunedoara</li>
              <li>CUI: 41449237</li>
              <li>Nr. Reg. Com.: J2019001203204</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-6 mt-10 text-center border-t text-slate-500 border-slate-200">
          <p>&copy; {new Date().getFullYear()} Meridian Transconstruct. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}