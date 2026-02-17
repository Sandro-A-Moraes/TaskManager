import { useReducer, type ChangeEvent, type SubmitEvent} from 'react'
import type { Status, Priority } from '../types/tasks'
import {  useNavigate } from 'react-router-dom'
import { useTasksContext } from '../contexts/TaskContext'
import { formReducer, initialState } from '../reducers/TaskFormReducer'

const TaskForm = () => {
    const {addTask} = useTasksContext()
    const navigate = useNavigate()

    const [state, dispatch] = useReducer(formReducer, initialState)
    const { title, descricao, status, prioridade } = state

    const handleStatusChange = (value: Status) => dispatch({ field: 'status', value })

    const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => dispatch({ field: 'title', value: e.target.value })
    
    const handleDescricaoChange = (e: ChangeEvent<HTMLTextAreaElement>) => dispatch({ field: 'descricao', value: e.target.value })

    const handlePrioridadeChange = (value: Priority) => dispatch({ field: 'prioridade', value })

    const handleSubmit = (e: SubmitEvent) => {
        e.preventDefault()
        
        if (!title.trim() || !descricao.trim()) {
            alert('Título e descrição são obrigatórios')
            return
        }


        addTask({ 
            titulo: title,
            descricao,
            status,
            prioridade
         })

        console.log('Task added:', { title, descricao, status, prioridade })

        dispatch({ field: 'title', value: '' })
        dispatch({ field: 'descricao', value: '' })
        dispatch({ field: 'status', value: 'pendente' })
        dispatch({ field: 'prioridade', value: 'baixa' })

        navigate('/')
    }

  return (
    <>
        <div className='border border-gray-200 rounded-xl shadow'>

            <div className='w-full bg-bg-purple-primary text-white rounded-t-xl p-5 flex items-center gap-3'>
                <div className='p-1 bg-purple-500 w-9 h-9 flex items-center justify-center rounded-xl'>
                    <i className="fa-regular fa-file-lines text-xl"></i>
                </div>

                <div>
                    <h2>Nova Tarefa</h2>
                    <p>Adicione os detalhes da sua tarefa</p>
                </div>
            </div>

            <form className='p-6 flex flex-col gap-4' onSubmit={handleSubmit}>
                <div>
                    <div className='flex items-center gap-2'>
                        <i className="fa-regular fa-file-lines text-bg-purple-primary"></i>
                        <p>Título *</p>
                    </div>
                    <input type="text" className='w-full border my-3 border-gray-200 p-3 rounded-xl' placeholder='Ex: Revisar documentação do projeto' value={title} onChange={handleTitleChange}/>
                </div>

                <div >
                    <div className='flex items-center gap-2'>
                        <i className="fa-solid fa-align-left text-bg-purple-primary"></i>
                        <p>Descrição *</p>
                    </div>
                    <textarea className='w-full border my-3 min-h-30 resize-none border-gray-200 p-3 rounded-xl' placeholder='Ex: Revisar documentação do projeto' value={descricao} onChange={handleDescricaoChange}/>
                </div>

                <div >
                    <div className='flex items-center gap-2'>
                        <i className="fa-solid fa-wave-square text-bg-purple-primary"></i>
                        <p>Status</p>
                    </div>
                    <select className='w-full border cursor-pointer my-3 appearance-none resize-none border-gray-200 p-3 rounded-xl' value={status} onChange={(e)=> handleStatusChange(e.target.value as Status)}>
                        <option value="pendente">⏳ Pendente</option>
                        <option value="progresso">⚡ Progresso</option>
                        <option value="concluida">✅ Concluída</option>
                    </select>
                </div>

                <div >
                    <div className='flex items-center gap-2'>
                        <i className="fa-solid fa-wave-square text-bg-purple-primary"></i>
                        <p>Prioridade</p>
                    </div>
                    <select className='w-full border cursor-pointer my-3 appearance-none resize-none border-gray-200 p-3 rounded-xl' value={prioridade} onChange={(e)=> handlePrioridadeChange(e.target.value as Priority)}>
                        <option value="baixa">🟢 Baixa</option>
                        <option value="media">🟡 Média</option>
                        <option value="alta">🔴 Alta</option>
                    </select>
                </div>

                <div className='border border-gray-100'></div>

                <div className='flex justify-between gap-3'>
                    <button className='flex items-center gap-2 bg-bg-purple-primary active:bg-purple-900 w-full rounded-lg p-4 text-white ' type='submit'>
                        <i className='fa-solid fa-floppy-disk '/>
                        <p>Salvar Tarefa</p>
                    </button>

                    <button type='button' onClick={()=> navigate('/')} className='flex items-center gap-2 w-full bg-gray-100 p-4 rounded-lg'>
                        <i className='fa-solid fa-close'/>
                        <p>Cancelar</p>
                    </button>
                </div>


            </form>

        </div>

        <div className='bg-purple-50 p-4 my-6 flex gap-4 rounded-xl'>
            <p className='text-xl'>💡</p>
            <div className='font-light text-purple-950'>
                <p>Dica</p>
                <p className='text-purple-800 font-normal'>Seja específico no título e detalhado na descrição para facilitar o acompanhamento da tarefa.</p>
            </div>
        </div>
    </>
  )
}

export default TaskForm