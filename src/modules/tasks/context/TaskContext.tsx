import { createContext, useContext } from "react";
import type { Task, Status } from "../types/tasks";

interface TaskContextType{
  tasksList: Task[]
  loading: boolean
  addTask: (task: Omit<Task, "id" | "dataCriacao">) => Promise<void>
  getTaskById: (id: string) => Task | undefined
  changeStatus: (id: string, newStatus: Status) => Promise<void>

}

export const TaskContext = createContext<TaskContextType | null>(null)

export function useTasksContext(){
  const context = useContext(TaskContext)

  if(!context){
    throw new Error("useTasksContext deve ser usado dentro de TaskProvider");
  }

  return context
}