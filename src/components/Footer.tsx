import React from 'react';
import { HardHat,} from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="text-white border-t border-slate-800 bg-slate-950">
      <div className="container px-4 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center mb-4 space-x-2">
              <HardHat size={32} className="text-blue-400" />
              <span className="text-2xl font-bold">Meridian Transconstruct</span>
            </div>
            <p className="text-slate-300">
              Construim excelență, oferim încredere.
            </p>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Navigare</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="transition-colors text-slate-300 hover:text-blue-400">Acasă</Link></li>
              <li><Link to="/servicii" className="transition-colors text-slate-300 hover:text-blue-400">Servicii</Link></li>
              <li><Link to="/proiecte" className="transition-colors text-slate-300 hover:text-blue-400">Proiecte</Link></li>
              <li><Link to="/contact" className="transition-colors text-slate-300 hover:text-blue-400">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Servicii</h3>
            <ul className="space-y-2">
              <li className="text-slate-300">Construcții comerciale</li>
              <li className="text-slate-300">Construcții rezidențiale</li>
              <li className="text-slate-300">Finisaje interioare</li>
              <li className="text-slate-300">Renovări</li>
              <li className="text-slate-300">Planificare proiect</li>
            </ul>
          </div>
          
          {/* <div>
            <h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Linkedin size={24} />
              </a>
            </div>
          </div> */}
        </div>
        
        <div className="pt-8 mt-12 text-center border-t text-slate-400 border-slate-800">
          <p>&copy; {new Date().getFullYear()} Meridian Transconstruct. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}