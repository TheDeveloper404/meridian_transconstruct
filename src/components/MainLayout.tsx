import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';
import { ScrollToTop } from './ScrollToTop';
import { WhatsAppFloatingButton } from './WhatsAppFloatingButton';

export function MainLayout() {
  return (
    <div className="min-h-screen text-slate-900 bg-white">
      <ScrollToTop />
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </div>
  );
}
