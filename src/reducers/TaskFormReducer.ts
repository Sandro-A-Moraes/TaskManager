import type { Priority, Status } from "../types/tasks";

interface TaskFormProps{
    title: string,
    descricao: string,
    status: Status,
    prioridade: Priority
}

interface ActionProps <K extends keyof TaskFormProps>{
    field: K
    value: TaskFormProps[K]
}

export const initialState: TaskFormProps = {
    title: '',
    descricao: '',
    status: 'pendente',
    prioridade: 'baixa'
}

export function formReducer<K extends keyof TaskFormProps>(state: TaskFormProps, action: ActionProps<K>): TaskFormProps{
    return {
        ...state,
        [action.field]: action.value
    }
}

