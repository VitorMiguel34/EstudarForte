import { useState, useEffect } from "react";
import { getUserTasks, postTask } from "../service/api";
import TaskList from "../components/TaskList";
import { type Task } from "../service/interfaces";

export default function Tasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const [showForm, setShowForm] = useState(false);
    const [newTask, setNewTask] = useState<Task>({
        title: "",
        description: "",
        date: "",
    });

    async function loadTasks() {
        try {
            setLoading(true);
            setError(null);
            const response = await getUserTasks();
            setTasks(response);
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

    async function handleCreateTask() {
        try {
            if (!newTask.title.trim()) return;

            const createdTask = await postTask({
                ...newTask,
                status: false,
            });

            setTasks((prev) => [createdTask, ...prev]);
            setNewTask({ title: "", description: "", date: "" });
            setShowForm(false);
        } catch (error) {
            console.error(error);
            setError("Não foi possível criar uma nova tarefa");
        }
    }

    const pending = tasks.filter((t) => !t.status);
    const done = tasks.filter((t) => t.status);

    return (
        <div className="w-full max-w-2xl pt-8 pb-16">
            {/* Loading */}
            {loading && (
                <div className="px-4 py-8 text-center">
                    <p className="text-sm text-purple-400">
                        Carregando tarefas...
                    </p>
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
                    {/* Header */}
                    <div className="mb-6 flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-white">
                                Tarefas
                            </h2>
                            <p className="text-sm text-purple-400">
                                {pending.length} pendente
                                {pending.length !== 1 ? "s" : ""} ·{" "}
                                {done.length} concluída
                                {done.length !== 1 ? "s" : ""}
                            </p>
                        </div>

                        <button
                            onClick={() => setShowForm(!showForm)}
                            className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 transition text-sm font-semibold"
                        >
                            {showForm ? "Cancelar" : "+ Criar tarefa"}
                        </button>
                    </div>

                    {/* Formulário */}
                    {showForm && (
                        <div className="mb-8 p-5 rounded-2xl bg-[#0b0015] border border-purple-900 space-y-4">
                            <input
                                type="text"
                                placeholder="Título da tarefa"
                                value={newTask.title}
                                onChange={(e) =>
                                    setNewTask({
                                        ...newTask,
                                        title: e.target.value,
                                    })
                                }
                                className="w-full p-3 rounded-xl bg-[#1a0028] text-white border border-purple-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-600 outline-none"
                            />

                            <input
                                type="text"
                                placeholder="Descrição (opcional)"
                                value={newTask.description}
                                onChange={(e) =>
                                    setNewTask({
                                        ...newTask,
                                        description: e.target.value,
                                    })
                                }
                                className="w-full p-3 rounded-xl bg-[#1a0028] text-white border border-purple-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-600 outline-none"
                            />

                            <input
                                type="date"
                                value={newTask.date}
                                onChange={(e) =>
                                    setNewTask({
                                        ...newTask,
                                        date: e.target.value,
                                    })
                                }
                                className="w-full p-3 rounded-xl bg-[#1a0028] text-white border border-purple-800 focus:border-purple-500 focus:ring-2 focus:ring-purple-600 outline-none"
                            />

                            <button
                                onClick={handleCreateTask}
                                className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 font-semibold hover:opacity-90 transition"
                            >
                                Salvar tarefa
                            </button>
                        </div>
                    )}
                    <p className="text-sm text-purple-400 mb-2">Pendentes:</p>
                    <TaskList tasks={pending} />
                    <p className="text-sm text-purple-400 mb-2">Concluídas:</p>
                    <TaskList tasks={done} />
                </>
            )}
        </div>
    );
}
