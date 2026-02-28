import React from "react";
import { logOut } from "../service/api";
import { useNavigate } from "react-router-dom";

interface User {
  id: number;
  name: string;
  email: string;
}

interface ProfileProps {
  user: User;
  setIsAuthenticated: Function
}

export default function Profile({ user, setIsAuthenticated }: ProfileProps): React.JSX.Element {
  const navigate = useNavigate();

  function handleLogout() {
    logOut();
    setIsAuthenticated(false)
    navigate("/");
  }

  return (
    <div className="w-full max-w-3xl mx-auto py-12">

      {/* Header */}
      <div className="mb-10">
        <h2 className="text-3xl font-bold text-white mb-2 tracking-tight">
          Meu Perfil
        </h2>
        <p className="text-purple-400 text-sm">
          Visualize suas informações pessoais
        </p>
      </div>

      {/* Card Principal */}
      <div className="bg-[#0b0016] border border-purple-900 rounded-3xl p-8 shadow-2xl">

        {/* Top Section */}
        <div className="flex items-center gap-6 mb-10">

          {/* Avatar */}
          <div
            className="w-20 h-20 rounded-2xl bg-gradient-to-br from-purple-500 to-purple-900 flex items-center justify-center text-2xl font-bold text-white shadow-lg"
            style={{ boxShadow: "0 0 30px rgba(147,51,234,0.4)" }}
          >
            {user.name ? user.name.charAt(0).toUpperCase() : "U"}
          </div>

          {/* Nome + Email */}
          <div>
            <h3 className="text-xl font-semibold text-white">
              {user.name || "Usuário"}
            </h3>
            <p className="text-purple-400 text-sm">
              {user.email || "email@exemplo.com"}
            </p>
          </div>
        </div>

        {/* Informações */}
        <div className="space-y-4">

          <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-[#120022] border border-purple-900">
            <span className="text-xs uppercase tracking-widest text-purple-500 font-semibold">
              ID
            </span>
            <span className="text-sm font-mono text-purple-300">
              #{user.id}
            </span>
          </div>

          <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-[#120022] border border-purple-900">
            <span className="text-xs uppercase tracking-widest text-purple-500 font-semibold">
              Nome
            </span>
            <span className="text-white text-sm">
              {user.name}
            </span>
          </div>

          <div className="flex justify-between items-center px-6 py-4 rounded-2xl bg-[#120022] border border-purple-900">
            <span className="text-xs uppercase tracking-widest text-purple-500 font-semibold">
              Email
            </span>
            <span className="text-white text-sm">
              {user.email}
            </span>
          </div>

        </div>

        {/* Logout */}
        <div className="mt-10">
          <button
            onClick={handleLogout}
            className="w-full py-3 rounded-xl bg-purple-900/40 border border-purple-700 text-purple-300 hover:bg-purple-800 hover:text-white transition-all font-medium"
          >
            Sair da Conta
          </button>
        </div>

      </div>
    </div>
  );
}