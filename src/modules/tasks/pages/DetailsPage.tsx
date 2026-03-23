import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useTasks } from "../hooks/useTasks";
import TaskDetailsHeader from "../components/TaskDetailsHeader";
import TaskPriorityBadge from "../components/TaskPriorityBadge";
import TaskStatusSelector from "../components/TaskStatusSelector";
import DeleteSuccessToast from "../components/DeleteSuccessToast";

const DetailsPage = () => {
  const { id } = useParams<{ id?: string }>();
  const { getTaskById, loading, changeStatus, deleteTask } = useTasks();
  const navigate = useNavigate();
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  if (!id) return <p>Tarefa não encontrada</p>;
  if (loading)
    return <p className="text-purple-600 text-2xl p-6">Carregando...</p>;

  const task = getTaskById(id);
  if (!task) return <p>Tarefa não encontrada</p>;

  const { titulo, prioridade, dataCriacao, descricao, status } = task;

  const handleDelete = async (taskId: string) => {
    await deleteTask(taskId);
    setShowDeleteModal(true);

    setTimeout(() => {
      navigate("/");
    }, 2000);
  };

  return (
    <div className="p-6">
      <button
        className="flex items-center gap-3 text-purple-800 group"
        onClick={() => navigate("/")}
      >
        <i className="fa-solid fa-arrow-left text-xs group-hover:-translate-x-1 duration-100" />
        <p>Voltar para a lista</p>
      </button>

      <div className="flex flex-col mt-6 rounded-2xl shadow-xl">
        <TaskDetailsHeader
          title={titulo}
          createdAt={dataCriacao}
          priority={prioridade}
        />

        <div className="bg-white p-7 flex flex-col gap-6 rounded-b-2xl">
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="bg-gray-100 w-8 h-8 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-align-justify text-purple-600" />
              </div>
              <p className="text-lg">Descrição</p>
            </div>
            <div className="bg-gray-100 w-full h-35 rounded-xl border border-gray-100 p-4">
              <p>{descricao}</p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <i className="fa-solid fa-bars-progress text-purple-600" />
              </div>
              <p className="text-lg">Status</p>
            </div>

            <TaskStatusSelector
              currentStatus={status}
              onChangeStatus={(newStatus) => changeStatus(id, newStatus)}
            />

            <div className="w-full bg-purple-50 border border-purple-100 p-3 rounded-lg">
              <p className="font-light">
                Status Atual:{" "}
                <span className="text-purple-700 font-normal">{status}</span>
              </p>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                <i className="fa-regular fa-flag text-purple-600" />
              </div>
              <p className="text-lg">Prioridade</p>
            </div>
            <TaskPriorityBadge priority={prioridade} />
          </div>

          <button
            className="bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-lg transition-colors duration-200"
            onClick={() => handleDelete(id)}
          >
            Excluir Tarefa
          </button>
        </div>
      </div>

      <DeleteSuccessToast
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
      />
    </div>
  );
};

export default DetailsPage;
