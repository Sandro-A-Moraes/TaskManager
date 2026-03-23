import { useEffect } from "react";
import Modal from "react-modal";

type DeleteSuccessToastProps = {
  isOpen: boolean;
  onClose: () => void;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#10b981",
    border: "none",
    borderRadius: "0.5rem",
    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
    padding: "1.5rem",
    maxWidth: "24rem",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

const DeleteSuccessToast = ({ isOpen, onClose }: DeleteSuccessToastProps) => {
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(onClose, 2000);
      return () => clearTimeout(timer);
    }
  }, [isOpen, onClose]);

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onClose}
      style={customStyles}
      contentLabel="Tarefa Excluída"
    >
      <div className="flex items-center gap-3 text-white">
        <i className="fa-solid fa-check-circle text-lg" />
        <p className="font-medium">Tarefa excluída com sucesso</p>
      </div>
    </Modal>
  );
};

export default DeleteSuccessToast;
