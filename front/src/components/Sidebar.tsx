import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Home, User, ClipboardList, ChevronLeft, ChevronRight } from "lucide-react";

const NAV_ITEMS = [
  { icon: Home,          label: "Home",    path: "/"      },
  { icon: User,          label: "Perfil",  path: "/user"  },
  { icon: ClipboardList, label: "Tarefas", path: "/tasks" },
];

export default function Sidebar(): React.JSX.Element {
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(true);

  return (
    <aside
      className={`mr-10 ${open ? "w-60" : "w-[72px]"} flex-shrink-0 flex flex-col min-h-screen py-6 border-r border-purple-900/60 bg-[#040008] transition-all duration-300 ease-in-out`}
    >
      {/* Logo */}
      <div className={`flex items-center mb-8 px-4 ${open ? "justify-between" : "justify-center"}`}>
        <div className="flex items-center gap-2.5 min-w-0">
          <div
            className="w-8 h-8 flex-shrink-0 rounded-[9px] bg-gradient-to-br from-purple-500 to-purple-900 flex items-center justify-center text-sm font-black text-white"
            style={{ boxShadow: "0 0 18px rgba(147,51,234,0.45)" }}
          >
            E
          </div>
          {open && (
            <span className="font-bold text-[15px] text-white tracking-tight truncate">
              EstudaForte
            </span>
          )}
        </div>

        {open && (
          <button
            onClick={() => setOpen(false)}
            className="text-purple-700 hover:text-purple-400 transition-colors p-1 rounded-lg hover:bg-purple-950/50"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* Expand button when closed */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="mx-auto mb-6 text-purple-700 hover:text-purple-400 transition-colors p-1.5 rounded-lg hover:bg-purple-950/50"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      )}

      {/* Divider */}
      <div className="mx-4 mb-4 border-t border-purple-900/40" />

      {/* Nav */}
      <nav className="flex flex-col gap-1 px-2.5">
        {NAV_ITEMS.map(({ icon: Icon, label, path }) => {
          const active = location.pathname === path;
          return (
            <button
              key={path}
              onClick={() => navigate(path)}
              className={`w-full flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 group relative
                ${active
                  ? "bg-purple-900/80 text-white shadow-[inset_0_0_0_1px_rgba(147,51,234,0.3)]"
                  : "text-purple-400 hover:bg-purple-950/60 hover:text-purple-300"
                }
                ${!open ? "justify-center" : ""}
              `}
            >
              {/* Active bar */}
              {active && (
                <span className="absolute left-0 top-1/2 -translate-y-1/2 w-0.5 h-5 bg-purple-500 rounded-full" />
              )}

              <Icon className={`flex-shrink-0 w-4 h-4 transition-colors ${active ? "text-purple-300" : "text-purple-500 group-hover:text-purple-300"}`} />

              {open && <span className="truncate">{label}</span>}

              {/* Tooltip when collapsed */}
              {!open && (
                <span className="absolute left-full ml-3 px-2.5 py-1.5 bg-[#0d0020] border border-purple-900/60 text-purple-300 text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap shadow-lg z-50">
                  {label}
                </span>
              )}
            </button>
          );
        })}
      </nav>
    </aside>
  );
}