import React from "react";
import { Link } from "react-router-dom";

export default function Home(): React.JSX.Element {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">

      <main>

        {/* HERO */}
        <section className="text-center px-6 pt-28 pb-20">
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-6">
            Organize your ideas <br />
            <span className="text-violet-500">with elegance.</span>
          </h1>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            The modern workspace for notes, study plans and progress tracking.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/register"
              className="px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 transition font-semibold"
            >
              Start for free
            </Link>

            <button className="px-6 py-3 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 transition">
              See demo
            </button>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pb-24">

          <div className="bg-[#111118] p-6 rounded-2xl border border-white/10 hover:border-violet-500/30 transition">
            <h3 className="text-violet-400 font-semibold mb-2">📚 Smart Notes</h3>
            <p className="text-gray-400">
              Organize subjects with tags and summaries.
            </p>
          </div>

          <div className="bg-[#111118] p-6 rounded-2xl border border-white/10 hover:border-violet-500/30 transition">
            <h3 className="text-violet-400 font-semibold mb-2">📅 Study Planner</h3>
            <p className="text-gray-400">
              Create automatic study schedules.
            </p>
          </div>

          <div className="bg-[#111118] p-6 rounded-2xl border border-white/10 hover:border-violet-500/30 transition">
            <h3 className="text-violet-400 font-semibold mb-2">📊 Progress Tracking</h3>
            <p className="text-gray-400">
              See your evolution with dashboards.
            </p>
          </div>

          <div className="bg-[#111118] p-6 rounded-2xl border border-white/10 hover:border-violet-500/30 transition">
            <h3 className="text-violet-400 font-semibold mb-2">🤝 Collaboration</h3>
            <p className="text-gray-400">
              Study with friends and share materials.
            </p>
          </div>

        </section>

        {/* CTA FINAL */}
        <section className="text-center border-t border-white/10 py-24 px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Ready to study smarter?
          </h2>

          <Link
            to="/register"
            className="px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 transition font-semibold"
          >
            Create your account
          </Link>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="text-center py-10 border-t border-white/10 text-gray-500">
        © 2026 StrongStudy
      </footer>

    </div>
  );
}