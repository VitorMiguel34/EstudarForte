import React from 'react';
import { Zap } from 'lucide-react';
import { Link } from 'react-router-dom'

export default function Header(): React.JSX.Element{
  return (
    <header data-aos="fade-down" className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/50 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
        
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-violet-600 text-white">
            <Zap className="h-5 w-5 fill-white" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight">StrongStudy</span>
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-white hover:text-violet-400 transition-colors">
            Log in
          </Link>
          <Link to="/register" className="rounded-lg bg-violet-600 px-5 py-2.5 text-sm font-bold text-white hover:bg-violet-500 transition-all">
            Start for free
          </Link>
        </div>
      </div>
    </header>
  );
};