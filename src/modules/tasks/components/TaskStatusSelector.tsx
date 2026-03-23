import type { Status } from "../types/tasks";

type StatusStyle = {
  border: string;
  hover: string;
  bg: string;
  text: string;
  icon: string;
};

const statusStyles: Record<Status, StatusStyle> = {
  pendente: {
    border: "border-orange-400",
    hover: "hover:border-orange-300",
    bg: "bg-orange-50",
    text: "text-orange-600",
    icon: "text-orange-500",
  },
  progresso: {
    border: "border-blue-400",
    hover: "hover:border-blue-300",
    bg: "bg-blue-50",
    text: "text-blue-600",
    icon: "text-blue-500",
  },
  concluida: {
    border: "border-green-400",
    hover: "hover:border-blue-300",
    bg: "bg-green-50",
    text: "text-green-600",
    icon: "text-green-500",
  },
};

type StatusButtonProps = {
  current: Status;
  button: Status;
  onClick: () => void;
  label: string;
};

type TaskStatusSelectorProps = {
  currentStatus: Status;
  onChangeStatus: (status: Status) => void;
};

const getStatusClasses = (current: Status, button: Status): string => {
  const isActive = current === button;
  const styles = statusStyles[button];
  const base =
    "border w-1/3 h-30 rounded-xl flex items-center justify-center transition-all duration-200";

  return isActive
    ? `${base} ${styles.border} ${styles.bg} ${styles.text}`
    : `${base} ${styles.hover} border-gray-200`;
};

const StatusButton = ({
  current,
  button,
  onClick,
  label,
}: StatusButtonProps) => (
  <button className={getStatusClasses(current, button)} onClick={onClick}>
    <div
      className={`flex flex-col gap-2 items-center justify-center ${
        current === button ? statusStyles[button].icon : "text-gray-400"
      }`}
    >
      {button === "pendente" && <i className="fa-regular fa-clock text-xl" />}
      {button === "progresso" && (
        <i className="fa-solid fa-bars-progress text-xl" />
      )}
      {button === "concluida" && (
        <i className="fa-regular fa-circle-check text-xl" />
      )}
      <p className="text-sm">{label}</p>
    </div>
  </button>
);

const TaskStatusSelector = ({
  currentStatus,
  onChangeStatus,
}: TaskStatusSelectorProps) => (
  <div className="flex justify-around gap-3">
    <StatusButton
      current={currentStatus}
      button="pendente"
      onClick={() => onChangeStatus("pendente")}
      label="Pendente"
    />
    <StatusButton
      current={currentStatus}
      button="progresso"
      onClick={() => onChangeStatus("progresso")}
      label="Progresso"
    />
    <StatusButton
      current={currentStatus}
      button="concluida"
      onClick={() => onChangeStatus("concluida")}
      label="Concluída"
    />
  </div>
);

export default TaskStatusSelector;
