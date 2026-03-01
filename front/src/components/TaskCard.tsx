import { type Task } from "../service/interfaces";

interface TaskProps {
    task: Task;
}

export default function TaskCard({ task }: TaskProps) {
    return (
        <div
            key={task.id}
            className="flex items-start gap-3 px-4 py-3.5 rounded-2xl border border-purple-900 bg-[#06000f]"
        >
            <div className="flex-1 min-w-0">
                <p className="text-sm text-white font-medium">{task.title}</p>
                {task.description && (
                    <p className="text-xs text-purple-400 mt-0.5 truncate">
                        {task.description}
                    </p>
                )}
            </div>
            <span className="text-xs text-purple-600 whitespace-nowrap">
                Cadastrada: {task.date.replace(/-/gi, "/")}
            </span>
        </div>
    );
}
