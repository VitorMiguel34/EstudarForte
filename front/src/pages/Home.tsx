import { UserRoundKey } from "lucide-react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

interface User {
  name: string;
}

interface HomeProps {
  isAuthenticated: boolean;
  user: User;
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans">
      <main>

        {/* HERO */}
        <section className="text-center px-6 pt-28 pb-20">
          <h1 className="text-5xl sm:text-7xl font-extrabold leading-tight mb-6">
            Organize suas ideias <br />
            <span className="text-violet-500">com elegância.</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-8">
            O espaço de trabalho moderno para anotações, planos de estudo e acompanhamento de progresso.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              to="/register"
              className="px-6 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 transition font-semibold"
            >
              Começar gratuitamente
            </Link>
            <button className="px-6 py-3 rounded-lg border border-violet-500 text-violet-400 hover:bg-violet-500/10 transition">
              Ver demonstração
            </button>
          </div>
        </section>

        {/* FEATURES */}
        <section className="mx-auto max-w-7xl px-6 lg:px-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 pb-24">
          {[
            { icon: "📚", title: "Notas Inteligentes", desc: "Organize matérias com tags e resumos." },
            { icon: "📅", title: "Planejador de Estudos", desc: "Crie cronogramas de estudo automáticos." },
            { icon: "📊", title: "Acompanhamento de Progresso", desc: "Visualize sua evolução com dashboards." },
            { icon: "🤝", title: "Colaboração", desc: "Estude com amigos e compartilhe materiais." },
          ].map(({ icon, title, desc }) => (
            <div
              key={title}
              className="bg-[#111118] p-6 rounded-2xl border border-white/10 hover:border-violet-500/30 transition"
            >
              <h3 className="text-violet-400 font-semibold mb-2">
                {icon} {title}
              </h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          ))}
        </section>

        {/* CTA FINAL */}
        <section className="text-center border-t border-white/10 py-24 px-6">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">
            Pronto para estudar de forma mais inteligente?
          </h2>
          <Link
            to="/register"
            className="px-8 py-3 rounded-lg bg-violet-600 hover:bg-violet-500 transition font-semibold"
          >
            Crie sua conta
          </Link>
        </section>

      </main>

      <footer className="text-center py-10 border-t border-white/10 text-gray-500">
        © 2026 StrongStudy
      </footer>
    </div>
  );
}

export default function Home({ isAuthenticated, user }: HomeProps): React.JSX.Element {
  const navigate = useNavigate();

  if (!isAuthenticated) return <LandingPage />;

  return (
    <div className="mr-10 w-full max-w-6xl mx-auto py-12 text-white">

      <div className="mb-14">
        <h1 className="text-4xl font-bold tracking-tight mb-3">
          Bem-vindo de volta, {user.name.split(" ")[0].toUpperCase()} 👋
        </h1>
        <p className="text-violet-400 text-lg">
          Continue organizando seus estudos e evoluindo todos os dias.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* PERFIL */}
        <div
          onClick={() => navigate("/user")}
          className="group cursor-pointer p-8 rounded-3xl border border-violet-900 bg-[#0b0016] hover:bg-[#140028] transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-900 flex items-center justify-center shadow-lg text-xl">
              👤
            </div>
            <span className="text-violet-500 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>

          <h3 className="text-2xl font-semibold mb-2">
            Seu Perfil
          </h3>
          <p className="text-violet-400">
            Visualize e gerencie suas informações pessoais.
          </p>
        </div>

        {/* TAREFAS */}
        <div
          onClick={() => navigate("/tasks")}
          className="group cursor-pointer p-8 rounded-3xl border border-violet-900 bg-[#0b0016] hover:bg-[#140028] transition-all duration-300 hover:scale-[1.02]"
        >
          <div className="flex items-center justify-between mb-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-violet-500 to-violet-900 flex items-center justify-center shadow-lg text-xl">
              📋
            </div>
            <span className="text-violet-500 group-hover:translate-x-1 transition-transform">
              →
            </span>
          </div>

          <h3 className="text-2xl font-semibold mb-2">
            Suas Tarefas
          </h3>
          <p className="text-violet-400">
            Organize e acompanhe seu progresso diário.
          </p>
        </div>

      </div>

      {/* SEÇÃO MOTIVACIONAL */}
      <div className="mt-16 p-10 rounded-3xl border border-violet-900 bg-gradient-to-br from-[#0b0016] to-[#140028]">
        <h2 className="text-2xl font-bold mb-3">
          Continue evoluindo 🚀
        </h2>
        <p className="text-violet-400">
          Consistência diária transforma esforço em resultado.
        </p>
      </div>

    </div>
  );
}