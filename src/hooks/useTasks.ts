import {useEffect, useState } from "react";
import type { Task } from "../types/tasks";
import { api } from "../services/api";


export const useTasks = ()=>{
    const [tasksList, setTasksList] = useState<Task[]>([])
    const [loading, setLoading] = useState<boolean>(true)

    useEffect(()=>{

          async function  getAllTasks() {
                setLoading(true)
            try {
                const response = await api.get<Task[]>('/tasks')

                setTasksList(response.data)
                
                    
            } catch (error) {
                console.error(error)
            } finally{
                setLoading(false)
            }
            
          }

          getAllTasks()
          
    }, [])


    async function addTask(task: Omit<Task, "id" | "dataCriacao">){
        
        try {
            const response = await api.post<Task>('/tasks', task)
            
            setTasksList(prev => [...prev, response.data])

            console.log(response.status + " " + response.statusText)
        } catch (error) {
            console.error(error)
        }
    }

    function getTaskById(id: string): Task | undefined{
        
        
        return tasksList.find(task => task.id === id)

    }
    
    return {tasksList, addTask, getTaskById, loading}
}