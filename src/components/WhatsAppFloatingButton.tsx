import React from 'react';

export function WhatsAppFloatingButton() {
  return (
    <div className="fixed z-50 flex items-center gap-3 right-5 bottom-5">
      <span className="px-5 py-3 text-base font-extrabold tracking-wide text-white uppercase bg-green-600 border-2 border-white rounded-xl shadow-xl md:text-lg animate-pulse">
        Haide sa discutam
      </span>
      <a
        href="https://wa.me/40723400646?text=Haide%20sa%20discutam"
        target="_blank"
        rel="noreferrer"
        aria-label="Contact WhatsApp"
        className="inline-flex items-center justify-center w-16 h-16 text-white transition-colors bg-green-500 rounded-full shadow-xl hover:bg-green-600"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="w-9 h-9"
          aria-hidden="true"
        >
          <path d="M20.52 3.48A11.82 11.82 0 0012.02 0C5.4 0 .02 5.37 0 11.98a11.9 11.9 0 001.64 6.02L0 24l6.17-1.62A11.95 11.95 0 0012 24h.02C18.62 24 24 18.63 24 12.02c0-3.2-1.25-6.2-3.48-8.54zm-8.5 18.5h-.02a9.9 9.9 0 01-5.02-1.37l-.36-.2-3.66.96.98-3.57-.23-.37a9.93 9.93 0 01-1.52-5.28C2.2 6.7 6.72 2.2 12.02 2.2c2.64 0 5.12 1.03 6.98 2.9a9.79 9.79 0 012.9 6.97c0 5.3-4.52 9.9-9.88 9.9zm5.43-7.41c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.74-1.64-2.03-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.6-.92-2.2-.24-.58-.5-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.02-1.05 2.48 0 1.45 1.08 2.86 1.23 3.06.15.2 2.11 3.22 5.12 4.52.72.3 1.28.48 1.72.62.72.22 1.37.19 1.88.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.08-.12-.27-.2-.57-.35z" />
        </svg>
      </a>
    </div>
  );
}
