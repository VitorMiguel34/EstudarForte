import { type Task } from "../service/interfaces";
import TaskCard from "./TaskCard.tsx";

interface TaskListProps {
    tasks: Task[];
}

const noTasks = (
    <div className="mb-7 px-4 py-8 rounded-2xl border border-dashed border-purple-900 text-center">
        <p className="text-sm text-purple-400">Nenhuma tarefa pendente.</p>
    </div>
);

export default function TaskList({ tasks }: TaskListProps) {
    if (tasks.length == 0) return noTasks;
    return (
        <div className="flex flex-col gap-2 mb-2">
            {tasks.map((task) => {
                return <TaskCard task={task} />;
            })}
        </div>
    );
}
