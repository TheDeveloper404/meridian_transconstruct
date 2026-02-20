import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { WhatsAppFloatingButton } from './WhatsAppFloatingButton';

export function MainLayout() {
  const location = useLocation();

  return (
    <div className="min-h-screen text-slate-900 bg-white">
      <ScrollToTop />
      <Header />
      <main key={location.pathname} className="page-transition">
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
