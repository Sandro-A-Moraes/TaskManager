export type Status = 'pendente' | 'progresso' | 'concluida';

export type Priority = 'baixa' | 'media' | 'alta';

export interface Task {
  id: string;
  titulo: string;
  descricao: string;
  status: Status;
  prioridade: Priority;
  dataCriacao: string;
}
