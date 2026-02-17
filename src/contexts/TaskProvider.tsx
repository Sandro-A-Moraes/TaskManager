import type { ReactNode } from "react";
import { useTasks } from "../hooks/useTasks";
import { TaskContext } from "./TaskContext";

interface TaskProviderProps {
    children: ReactNode
}

export function TaskProvider({children}: TaskProviderProps){
    const {tasksList, getTaskById, addTask, loading, changeStatus} = useTasks()

    return (
        <TaskContext.Provider value={{tasksList, getTaskById, addTask, loading, changeStatus}}>
            {children}
        </TaskContext.Provider>
    )
}