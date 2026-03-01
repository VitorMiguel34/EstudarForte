import React, { useState, useRef, useEffect } from 'react';
import { Zap, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Header(): React.JSX.Element {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = menuRef.current;
    if (!el) return;

    if (menuOpen) {
      el.style.height = '0px';
      el.style.opacity = '0';
      requestAnimationFrame(() => {
        el.style.transition = 'height 0.28s ease, opacity 0.28s ease';
        el.style.height = el.scrollHeight + 'px';
        el.style.opacity = '1';
      });
    } else {
      el.style.transition = 'height 0.22s ease, opacity 0.2s ease';
      el.style.height = '0px';
      el.style.opacity = '0';
    }
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 backdrop-blur-xl bg-black">
      <div className="w-full flex h-16 md:h-20 items-center justify-between px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-white">
            <Zap className="h-5 w-5 fill-white" />
          </div>
          <Link to="/" className="text-xl font-bold text-white tracking-tight">
            StrongStudy
          </Link>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            to="/login" 
            className="text-sm font-medium text-white hover:text-violet-400 transition-colors"
          >
            Entrar
          </Link>

          <Link 
            to="/register" 
            className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-violet-500 transition-all"
          >
            Começar grátis
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Alternar menu"
        >
          <span className="transition-transform duration-200 block">
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      <div
        ref={menuRef}
        className="md:hidden overflow-hidden border-t border-white/10 bg-black"
        style={{ height: 0, opacity: 0 }}
      >
        <div className="px-4 sm:px-6 py-4 flex items-center gap-3">
          <Link
            to="/login"
            onClick={() => setMenuOpen(false)}
            className="flex-1 rounded-lg border border-white/20 px-5 py-2.5 text-sm font-bold text-white hover:bg-white/10 transition-all text-center"
          >
            Entrar
          </Link>

          <Link
            to="/register"
            onClick={() => setMenuOpen(false)}
            className="flex-1 rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-violet-500 transition-all text-center"
          >
            Começar grátis
          </Link>
        </div>
      </div>
    </header>
  );
}