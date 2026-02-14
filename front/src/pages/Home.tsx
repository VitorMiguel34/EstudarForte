import React from 'react';
import Header from '../components/Header'; 
import { Link } from 'react-router-dom';

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#050505] font-sans selection:bg-violet-500/30 selection:text-violet-400">
      <Header />

      <main className="pt-32 pb-16 overflow-hidden">
        
        <section data-aos="fade-down" className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center flex flex-col items-center">

          <h1 className="max-w-4xl text-5xl font-extrabold tracking-tight text-white sm:text-7xl mb-6 leading-[1.1]">
            Your ideas, <br />
            <span className="text-violet-500">organized with elegance.</span>
          </h1>

          <p className="mt-4 max-w-2xl text-lg leading-8 text-gray-400">
            The modern workspace for notes, docs, and team collaboration. Write, plan, and build together with your team.
          </p>
        </section>
        
        <section data-aos="fade-right" className="mx-auto mt-20 max-w-5xl px-6 pb-20">
          <div className="relative overflow-hidden rounded-3xl bg-[#0F0F0F] border border-white/10 px-6 py-16 text-center shadow-2xl shadow-violet-900/10 sm:px-16">
             
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-violet-600/10 blur-[80px] rounded-full pointer-events-none"></div>

             <div className="relative z-10">
                
                <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
                  Ready to organize <br/>
                  <span className="text-violet-500">your ideas?</span>
                </h2>
                
                <p className="mx-auto mt-4 max-w-xl text-lg text-gray-400">
                  Join thousands of teams that have transformed how they work. No credit card required, no strings attached.
                </p>

                <div className="mt-8 flex items-center justify-center gap-x-6">
                  <Link to="/login" className="rounded-lg bg-violet-600 px-6 py-3 text-sm font-bold text-white hover:bg-violet-500 transition-all shadow-md shadow-violet-900/20">
                    Log in
                  </Link>
                  <Link to="/register" className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-sm font-semibold text-white hover:bg-white/10 transition-colors">
                    Create account
                  </Link>
                </div>
             </div>
          </div>
        </section>
      </main>
    </div>
  );
};