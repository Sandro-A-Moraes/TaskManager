import StatCard from "../ui/StatCard";
import TaskList from "../components/TaskList";
import { useTasksContext } from "../context/TaskContext";
import { useTasks } from "../hooks/useTasks";
import { useState } from "react";

const ListingPage = () => {
  const { tasksList } = useTasksContext();
  const { refreshTasks, loading } = useTasks();
  const [isRefreshing, setIsRefreshing] = useState(false);

  const handleRefresh = async () => {
    setIsRefreshing(true);
    await refreshTasks();
    setIsRefreshing(false);
  };

  const total = tasksList.length;
  const pendentes = tasksList.filter(
    (task) => task.status === "pendente",
  ).length;
  const progresso = tasksList.filter(
    (task) => task.status === "progresso",
  ).length;
  const concluida = tasksList.filter(
    (task) => task.status === "concluida",
  ).length;

  return (
    <div className="p-6">
      <div className="my-3 flex flex-col gap-2 justify-between">
        <div className="flex items-center justify-between">
          <div className="w-3/4">
            <h1>Suas Tarefas</h1>
            <p className="font-extralight">
              Organize e acompanhe o progresso de suas atividades
            </p>
          </div>
          <button
            onClick={handleRefresh}
            disabled={isRefreshing || loading}
            className="group p-3 rounded-lg  bg-purple-100 hover:bg-purple-200 transition-colors disabled:opacity-50"
            title="Recarregar lista"
          >
            <i
              className={`fa-solid fa-arrows-rotate text-purple-600 ${
                isRefreshing ? "animate-spin" : "group-hover:rotate-180"
              } transition-transform duration-300`}
            />
          </button>
        </div>
      </div>

      <div className="flex flex-col my-8 gap-4">
        <StatCard
          title="Total"
          number={total}
          icon={
            <i className="fa-solid fa-circle text-xs text-bg-purple-primary"></i>
          }
          colorBgIcon="bg-purple-200"
          colorNumber="text-bg-purple-primary"
        />

        <StatCard
          title="Pendentes"
          number={pendentes}
          icon={<i className="fa-regular fa-clock text-xl text-orange-500"></i>}
          colorBgIcon="bg-yellow-50"
          colorNumber="text-orange-500"
        />

        <StatCard
          title="Em Progresso"
          number={progresso}
          icon={
            <i className="fa-solid fa-spinner text-xl animate-spin text-blue-600"></i>
          }
          colorBgIcon="bg-blue-100"
          colorNumber="text-blue-600"
        />

        <StatCard
          title="Concluídas"
          number={concluida}
          icon={<i className="fa-solid fa-check text-xl text-green-700"></i>}
          colorBgIcon="bg-green-50"
          colorNumber="text-green-700"
        />
      </div>

      <TaskList />
    </div>
  );
};

export default ListingPage;
