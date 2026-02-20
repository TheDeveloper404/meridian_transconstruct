import React from 'react';
import { HardHat, Phone, Mail, Clock } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function Header() {
  const navItemClass = ({ isActive }: { isActive: boolean }) =>
    `transition-colors hover:text-blue-600 ${isActive ? 'text-blue-600' : 'text-slate-700'}`;

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-md">
      <div className="container px-4 mx-auto">
        <div className="hidden py-2 text-sm border-b md:block border-slate-200 text-slate-600">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-6">
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-400" />
                <span>+40 723 400 646</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone size={16} className="text-blue-400" />
                <span>+40 726 379 408</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail size={16} className="text-blue-400" />
                <span>marta70fil@yahoo.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <Clock size={16} className="text-blue-400" />
                <span>L - V: 07:00 - 17:00</span>
              </div>
            </div>
          </div>
        </div>

        <nav className="py-4">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <NavLink to="/" className="inline-flex items-center space-x-2">
              <HardHat size={32} className="text-blue-400" />
              <span className="text-xl font-black tracking-wide md:text-2xl">MERIDIAN TRANSCONSTRUCT</span>
            </NavLink>
            <div className="flex flex-wrap items-center gap-5 text-base font-semibold md:gap-9 md:text-lg">
              <NavLink to="/" className={navItemClass}>Acasă</NavLink>
              <NavLink to="/servicii" className={navItemClass}>Servicii</NavLink>
              <NavLink to="/proiecte" className={navItemClass}>Proiecte</NavLink>
              <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
              <NavLink
                to="/contact"
                className="px-4 py-2 text-white transition-colors bg-blue-600 rounded-md hover:bg-blue-500"
              >
                Cere ofertă
              </NavLink>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}