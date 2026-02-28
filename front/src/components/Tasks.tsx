import { useState, useEffect } from "react";
import { getUserTasks } from "../service/api";

interface Task {
    id: number;
    title: string;
    description: string;
    date: string;
    status: boolean;
}

export default function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    async function loadTasks() {
        try {
            setLoading(true);
            setError(null);

            const response = await getUserTasks();
            setTasks(response);
            console.log(response)

        } catch (err) {
            console.error("Erro ao carregar tarefas:", err);
            setError("Não foi possível carregar as tarefas.");
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        loadTasks();
    }, []);

    const pending = tasks.filter((t) => !t.status);
    const done = tasks.filter((t) => t.status);

    return (
        <div className="w-full max-w-2xl pt-8 pb-16">

        {/* Loading */}
        {loading && (
            <div className="px-4 py-8 text-center">
            <p className="text-sm text-purple-400">Carregando tarefas...</p>
            </div>
        )}

        {/* Erro */}
        {error && !loading && (
            <div className="mb-7 px-4 py-8 rounded-2xl border border-red-900 text-center">
            <p className="text-sm text-red-400">{error}</p>
            </div>
        )}

        {!loading && !error && (
            <>
            <div className="mb-8">
                <h2 className="text-2xl font-bold tracking-tight text-white mb-1">
                Tarefas
                </h2>
                <p className="text-sm text-purple-400">
                {pending.length} pendente{pending.length !== 1 ? "s" : ""} ·{" "}
                {done.length} concluída{done.length !== 1 ? "s" : ""}
                </p>
            </div>

            {/* Pendentes */}
            {pending.length > 0 ? (
                <div className="mb-7">
                <p className="text-[11px] font-semibold uppercase tracking-widest text-purple-500 mb-3">
                    Pendentes
                </p>
                <div className="flex flex-col gap-2">
                    {pending.map((task) => (
                    <div
                        key={task.id}
                        className="flex items-start gap-3 px-4 py-3.5 rounded-2xl border border-purple-900 bg-[#06000f] hover:bg-purple-950/30 hover:border-purple-700 transition-all cursor-pointer group"
                    >
                        <div className="w-4 h-4 mt-0.5 rounded-md border border-purple-600 group-hover:border-purple-400 flex-shrink-0 transition-colors" />
                        <div className="flex-1 min-w-0">
                        <p className="text-sm text-white font-medium">
                            {task.title}
                        </p>
                        {task.description && (
                            <p className="text-xs text-purple-400 mt-0.5 truncate">
                            {task.description}
                            </p>
                        )}
                        </div>
                        <span className="text-xs text-purple-600 whitespace-nowrap">
                        {task.date}
                        </span>
                    </div>
                    ))}
                </div>
                </div>
            ) : (
                <div className="mb-7 px-4 py-8 rounded-2xl border border-dashed border-purple-900 text-center">
                <p className="text-sm text-purple-400">
                    Nenhuma tarefa pendente.
                </p>
                </div>
            )}

            {/* Concluídas */}
            {done.length > 0 && (
                <div>
                <p className="text-[11px] font-semibold uppercase tracking-widest text-purple-500 mb-3">
                    Concluídas
                </p>
                <div className="flex flex-col gap-2">
                    {done.map((task) => (
                    <div
                        key={task.id}
                        className="flex items-start gap-3 px-4 py-3.5 rounded-2xl border border-purple-900 bg-[#06000f] transition-all cursor-pointer opacity-50"
                    >
                        <div className="w-4 h-4 mt-0.5 rounded-md bg-purple-700 border border-purple-700 flex items-center justify-center">
                        <span className="text-[9px] text-white leading-none">
                            ✓
                        </span>
                        </div>
                        <div className="flex-1 min-w-0">
                        <p className="text-sm text-purple-400 font-medium line-through">
                            {task.title}
                        </p>
                        {task.description && (
                            <p className="text-xs text-purple-600 mt-0.5 truncate">
                            {task.description}
                            </p>
                        )}
                        </div>
                        <span className="text-xs text-purple-700 whitespace-nowrap">
                        {task.date}
                        </span>
                    </div>
                    ))}
                </div>
                </div>
            )}
            </>
        )}
        </div>
    );
}